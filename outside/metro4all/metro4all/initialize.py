import csv
import os

from pyproj import Proj, transform
from geocoder import Geocoder

# WGS 84
lonlat = Proj(init="epsg:4326")

# WGS 84 / UTM zone 37N
merc = Proj(init="epsg:32637")

def load_lines(city):
    lines = csv.DictReader(open(os.path.join(os.path.dirname(__file__), './data/%s/lines.csv' % city), 'rb'),
                           delimiter=';')

    lines_dict = {}

    for line in lines:

        l = {
            "name": line["name"],
            "name_en": line["name_en"]
        }

        line_id = line["id_line"]
        lines_dict[line_id] = l

    return lines_dict

def load_stations(city):
    stations = csv.DictReader(open(os.path.join(os.path.dirname(__file__), './data/%s/stations.csv' % city), 'rb'),
                           delimiter=';')

    station_dict = {}

    lines = load_lines(city)

    for station in stations:

        s = {
            "id": station["id_station"],
            "name": station["name"],
            "name_en": station["name_en"],
            "line": lines[station["id_line"]]
        }

        station_id = station["id_station"]
        station_dict[station_id] = s

    return station_dict

def load_exits(city):
    exits = csv.DictReader(open(os.path.join(os.path.dirname(__file__), './data/%s/portals.csv' % city), 'rb'),
                           delimiter=';')

    exit_list = []

    stations = load_stations(city)

    for exit in exits:

        if ((exit["lon"] != '') and (exit["lon"] != '')):

            # Projected coordinates
            exit_coordinates = transform(lonlat, merc, float(exit["lon"]), float(exit["lat"]))

            e = {
                "id": exit["id_entrance"],
                "name": exit["name"],
                "direction": exit["direction"],
                "lon": float(exit["lon"]),
                "lat": float(exit["lat"]),
                "lonm": float(exit_coordinates[0]),
                "latm": float(exit_coordinates[1]),
                "station": stations[exit["id_station"]]
            }

            exit_list.append(e)
        

    # Exclude "in"-direction exits
    exit_list = filter(lambda exit: exit["direction"] != "in", exit_list)
    
    return exit_list

def load_legend():
    legend = csv.DictReader(open(os.path.join(os.path.dirname(__file__), './data/legend.csv'), 'rb'),
        delimiter=';')

    legend_dict = {item["key"]: item["value"] for item in legend}
    return legend_dict

def load_routes_indoor(city):
    routes_indoor = csv.DictReader(open(os.path.join(os.path.dirname(__file__), './data/%s/indoor.csv' % city), 'rb'),
        delimiter=';')

    routes_indoor_dict = {}
    legend = load_legend()

    for route in routes_indoor:
        exit_id = route["id_entrance"]
        routes_indoor_dict[exit_id] = {
            "side": route["side"],
            "side2": route["side2"],
            "instructions": [route.get("step%s" % i) for i in range(1, 20) if route.get("step%s" % i)],
            "comments": route["comments"]
        }

        for idx in range(len(routes_indoor_dict[exit_id]["instructions"])):
            instruction = routes_indoor_dict[exit_id]["instructions"][idx]
            routes_indoor_dict[exit_id]["instructions"][idx] = legend[instruction]

        side_parts = routes_indoor_dict[exit_id]["side"].split(" ")
        side_prefix = side_parts[0]
        if side_prefix in ["*", "#", "A", "Z", "M"]:
            routes_indoor_dict[exit_id]["side"] = routes_indoor_dict[exit_id]["side"].\
                replace(side_prefix, legend[side_prefix])

        side2_parts = routes_indoor_dict[exit_id]["side2"].split(" ")
        side2_prefix = side2_parts[0]
        if side2_prefix in ["*", "#", "A", "Z", "M"]:
            routes_indoor_dict[exit_id]["side2"] = routes_indoor_dict[exit_id]["side2"].\
                replace(side2_prefix, legend[side2_prefix])

    return routes_indoor_dict


# Load exits from file
exits = load_exits("msk")

# Load indoor routes from file
routes_indoor = load_routes_indoor("msk")

# Create geocoder instance
geocoder = Geocoder()