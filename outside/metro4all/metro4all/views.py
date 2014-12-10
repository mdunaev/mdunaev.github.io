# -*- coding: UTF-8 -*-
import json
import urllib
import urllib2
import threading
import Queue

from pyproj import transform
from pyramid.view import view_config
from initialize import lonlat, merc, exits, geocoder, routes_indoor
from helpers import in_circle

@view_config(route_name='sharing', renderer='json')
def share(request):
    settings = request.registry.settings

    result = {}
    dst_lat = request.GET.get("lat")
    dst_lon = request.GET.get("lon")
    exit_id = request.GET.get("exit_id")
    exit = filter(lambda obj: obj['id'] == exit_id, exits)[0]

    # graphhopper params
    params = (
        ("point", "%s,%s" % (exit["lat"], exit["lon"])),
        ("point", "%s,%s" % (dst_lat, dst_lon)),
        ("vehicle", "foot"),
        ("locale", "ru-RU"),
    )

    # outdoor route
    url = "%s?%s" % (settings["graph_hopper_url"], urllib.urlencode(params))
    data = urllib2.urlopen(url)
    response = json.loads(data.read())
    route = response.get("route")
    info = response.get("info")
    if (route is not None) and (info.get("routeFound")):
        result["outdoor"] = route

    # indoor route
    result["indoor"] = routes_indoor.get(exit_id)

    return result


@view_config(route_name='home', renderer='json')
def run(request):
    settings = request.registry.settings

    query = request.GET.get("q") or ""
    lat = request.GET.get("lat", None)
    lon = request.GET.get("lon", None)

    # Get destination coordinates
    city = u"Москва"
    if ((lon is not None) and (lat is not None)):
        destination = {}
        destination["lon"] = lon
        destination["lat"] = lat
        destination["addr_type"] = "poi"
    else:
        destination = geocoder.geocode("%s, %s" % (city, query)).first

    if (destination is not None) and (destination["addr_type"] in ["street", "housenumber", "poi"]):
        dst_lon = float(destination["lon"])
        dst_lat = float(destination["lat"])

        dst_lonm, dst_latm = transform(lonlat, merc, dst_lon, dst_lat)
        radius = float(settings["search_radius"])
        closest_exits = filter(lambda exit: in_circle(dst_lonm, dst_latm, radius, exit["lonm"], exit["latm"]), exits)
        
        def get_routes(queue, routes):
            while True:
                url, exit = queue.get()
                data = urllib2.urlopen(url)
                response = json.loads(data.read())

                route = response.get("route")
                info = response.get("info")
                if (route is not None) and (info.get("routeFound")):
                    route["exit"] = exit
                    routes.append(route)
                queue.task_done()

        routes_outdoor = []
        queue = Queue.Queue()
        for i in range(int(settings["num_threads"])):
            t = threading.Thread(target=get_routes, args=(queue, routes_outdoor))
            t.daemon = True
            t.start()

        # Get routes from each exit to destination point
        for exit in closest_exits:
            params = (
                ("point", "%s,%s" % (exit["lat"], exit["lon"])),
                ("point", "%s,%s" % (dst_lat, dst_lon)),
                ("vehicle", "foot"),
                ("locale", "ru-RU"),
            )
            url = "%s?%s" % (settings["graph_hopper_url"], urllib.urlencode(params))
            queue.put((url, exit))

        queue.join()

        # Get exits with shortes distance from each station
        if len(routes_outdoor) != 0:
            stations_unique = []
            routes_outdoor_unique = []
            routes_outdoor = sorted(routes_outdoor, key=lambda route: route["time"])
            for route in routes_outdoor:
                if route["exit"]["station"]["id"] not in stations_unique:
                    routes_outdoor_unique.append(route)
                    stations_unique.append(route["exit"]["station"]["id"])

            # Extract indoor route for each exit
            for route in routes_outdoor_unique:
                exit_id = route["exit"]["id"]
                route_indoor = routes_indoor.get(exit_id)
                if route_indoor is not None:
                    route["indoor"] = route_indoor

            return dict(
                result=routes_outdoor_unique
            )
