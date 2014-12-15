angular.module("myApp.controllers", ['leaflet-directive', 'ngRoute'])

.controller("metroCtrl", function($scope, $http, $route, $routeParams, $location, routingService) {

            $scope.$route = $route;
            $scope.$location = $location;
            $scope.$routeParams = $routeParams;
            $scope.show_sharing = false;
            $scope.code_show = false;

            $scope.$on('$routeChangeSuccess', function(){
                $scope.searchData = $route.current.params.searchData;
                $scope.destination = $scope.searchData;
                $scope.searchRoute($scope.searchData);
            });


    $scope.fbshare = function(){
                var url = 'https://facebook.com/sharer/sharer.php?u='+$location.absUrl();
                url = url.replace('#/','#');
                window.open(
                    url,
                    '_blank'
                );
        }
    $scope.vkshare = function(){
                var url = 'https://vk.com/share.php?url='+$location.absUrl();
                url = url.replace('#/','#');
                window.open(
                    url,
                    '_blank'
                );
        }
    $scope.send_mail = function(){
                var url = 'mailto:?body='+$location.absUrl()+'&subject=Ваш выход';
                url = url.replace('#/','#');
                window.open(
                    url
                );
        }

    $scope.destination = "";
    $scope.stations = [];

    $scope.bounds = {};
    $scope.center = {
        lat: 55.75,
        lng: 37.62,
        zoom: 10
    };

    $scope.controls = {
        custom: [
            new L.Control.Zoom({position: 'topright'})
        ]
    };

    $scope.defaults = {
        zoomControl:false
    };

    $scope.paths = {
        path: {
            opacity: 0.8,
            weight: 4,
            latlngs: []
        }
    };

    $scope.markers = {
        start: {
            lat: 0,
            lng: 0,
            message: "Выход из метро",
            icon: {
                iconUrl: "assets/marker-from.png",
                iconSize: [42, 25],
                iconAnchor: [42, 25],
                popupAnchor: [-42, -13],
                shadowSize: [0, 0]
            }
        },
        end: {
            lat: 0,
            lng: 0,
            message: "Конечная точка",
            icon: {
                iconUrl: "assets/marker-to.png",
                iconSize: [42, 25],
                iconAnchor: [42, 25],
                popupAnchor: [0, 0],
                shadowSize: [0, 0]
            },
            draggable: true
        }
    };

    $scope.$on('leafletDirectiveMarker.dragend', function(event, args) {
        var lat = $scope.markers[args.markerName].lat,
            lon = $scope.markers[args.markerName].lng;
        //$scope.markers = [];
        $scope.searchRoute(null, lon, lat);
    });

    // From GraphHopper source code
    $scope.decodePath = function(encoded) {
        var len = encoded.length;
        var index = 0;
        var array = [];
        var lat = 0;
        var lng = 0;
        var ele = 0;

        while (index < len) {
            var b;
            var shift = 0;
            var result = 0;
            do {
                b = encoded.charCodeAt(index++) - 63;
                result |= (b & 0x1f) << shift;
                shift += 5;
            } while (b >= 0x20);
            var deltaLat = ((result & 1) ? ~(result >> 1) : (result >> 1));
            lat += deltaLat;

            shift = 0;
            result = 0;
            do {
                b = encoded.charCodeAt(index++) - 63;
                result |= (b & 0x1f) << shift;
                shift += 5;
            } while (b >= 0x20);
            var deltaLon = ((result & 1) ? ~(result >> 1) : (result >> 1));
            lng += deltaLon;
            array.push([lng * 1e-5, lat * 1e-5]);
        }
        return array;
    }

    $scope.isEmpty = function(/** String */ str) {
        return _.isBlank(str);
    };

    $scope.notify = function(/** String */ id) {
        $scope.indoorSides = [];
        $scope.indoorInstructions = [];
        $scope.outdoorInstructions = [];

        var route = _.find($scope.stations, function(item){ return item.exit.id == id; });

        if (route.indoor) {
            $scope.indoorSides = [route.indoor.side, route.indoor.side2, route.indoor.comments];
            _.each(route.indoor.instructions, function(item) { $scope.indoorInstructions.push(item); });
        }
        _.each(route.instructions.descriptions, function(item, idx) {
            $scope.outdoorInstructions.push({
                text: item,
                distance: route.instructions.distances[idx]
            });
        });

        // Update map

        var tmpArray = $scope.decodePath(route.coordinates);

        // Update bounds
        $scope.bounds = {
            northEast: {
                lat: route.bbox[1],
                lng: route.bbox[0]
            },
            southWest: {
                lat: route.bbox[3],
                lng: route.bbox[2]
            }
        };

        // marker drag
        $scope.paths.path.latlngs = _.map(tmpArray, function(p){ return {lat: p[1], lng: p[0]}; });
        $scope.markers.start.lat = route.from[1];
        $scope.markers.start.lng = route.from[0];
        $scope.markers.end.lat = route.to[1];
        $scope.markers.end.lng = route.to[0];

        // sharing
        $scope.exit_id = id;
        $scope.lat = route.to[1];
        $scope.lon = route.to[0];
            
    };

    $scope.searchRoute = function(/** String */ query, lon, lat) {
        routingService.get({
            q: query,
            lon: lon,
            lat: lat
        }).then(function(response){
                $scope.stations = [];
                $scope.indoorSides = [];
                $scope.indoorInstructions = [];
                $scope.outdoorInstructions = [];
                if (response.data !== "null") {
                    $scope.stations = response.data.result;
                    $scope.notify($scope.stations[0].exit.id);
                }

            }
        );
    };

    $scope.getLocation = function(val) {
        return $http.get('http://openstreetmap.ru/api/autocomplete', {
            params: {
                q: "г. Москва" + " " + val
            }
        }).then(function(res){
            var addresses = [];
            angular.forEach(res.data.matches, function(item){
                addresses.push(item.display_name);
            });
            return addresses;
        });
    };
})
.controller("sharingCtrl", function($scope, $http, sharingService) {


    $scope.destination = "";
    $scope.stations = [];

    $scope.bounds = {};
    $scope.center = {
        lat: 55.75,
        lng: 37.62,
        zoom: 10
    };

    $scope.controls = {
        custom: [
            new L.Control.Zoom({position: 'topright'})
        ]
    };

    $scope.defaults = {
        zoomControl:false
    };

    $scope.paths = {
        path: {
            opacity: 0.8,
            weight: 4,
            latlngs: []
        }
    };

    $scope.markers = {
        start: {
            lat: 0,
            lng: 0,
            message: "Выход из метро",
            icon: {
                iconUrl: "assets/marker-from.png",
                iconSize: [25, 25],
                iconAnchor: [25, 25],
                popupAnchor: [-8, -8],
                shadowSize: [0, 0]
            }
        },
        end: {
            lat: 0,
            lng: 0,
            message: "Конечная точка",
            icon: {
                iconUrl: "assets/marker-to.png",
                iconSize: [25, 25],
                iconAnchor: [25, 25],
                popupAnchor: [-8, -8],
                shadowSize: [0, 0]
            }
        }
    };

    // From GraphHopper source code
    $scope.decodePath = function(encoded) {
        var len = encoded.length;
        var index = 0;
        var array = [];
        var lat = 0;
        var lng = 0;
        var ele = 0;

        while (index < len) {
            var b;
            var shift = 0;
            var result = 0;
            do {
                b = encoded.charCodeAt(index++) - 63;
                result |= (b & 0x1f) << shift;
                shift += 5;
            } while (b >= 0x20);
            var deltaLat = ((result & 1) ? ~(result >> 1) : (result >> 1));
            lat += deltaLat;

            shift = 0;
            result = 0;
            do {
                b = encoded.charCodeAt(index++) - 63;
                result |= (b & 0x1f) << shift;
                shift += 5;
            } while (b >= 0x20);
            var deltaLon = ((result & 1) ? ~(result >> 1) : (result >> 1));
            lng += deltaLon;
            array.push([lng * 1e-5, lat * 1e-5]);
        }
        return array;
    };

    $scope.notify = function(route) {
        $scope.indoorSides = [];
        $scope.indoorInstructions = [];
        $scope.outdoorInstructions = [];

        if (route.indoor) {
            $scope.indoorSides = [route.indoor.side, route.indoor.side2, route.indoor.comments];
            _.each(route.indoor.instructions, function(item) { $scope.indoorInstructions.push(item); });
        }
        _.each(route.outdoor.instructions.descriptions, function(item, idx) {
            $scope.outdoorInstructions.push({
                text: item,
                distance: route.outdoor.instructions.distances[idx]
            });
        });

        // Update map
        var tmpArray = $scope.decodePath(route.outdoor.coordinates);
        $scope.paths.path.latlngs = _.map(tmpArray, function(p){ return {lat: p[1], lng: p[0]}; });
        $scope.markers.start.lat = route.outdoor.from[1];
        $scope.markers.start.lng = route.outdoor.from[0];
        $scope.markers.end.lat = route.outdoor.to[1];
        $scope.markers.end.lng = route.outdoor.to[0];

        // Update bounds
        $scope.bounds = {
            northEast: {
                lat: route.outdoor.bbox[1],
                lng: route.outdoor.bbox[0]
            },
            southWest: {
                lat: route.outdoor.bbox[3],
                lng: route.outdoor.bbox[2]
            }
        };

    };

    $scope.init = function() {
        var params = _.object(_.compact(_.map(location.search.slice(1).split('&'), function(item) {  if (item) return item.split('='); })));

        sharingService.get({
            lat: params.lat,
            lon: params.lon,
            exit_id: params.exit_id
        }).then(function(response){
            $scope.notify(response.data);
        })

    };

    $scope.init();

}).config(function($routeProvider, $locationProvider){
        $routeProvider.when('/:searchData', {
            template: ' ',
            controller: 'metroCtrl'
        });
    });


var metro_lines_colors = [{class:"sok", name: "Сокольническая", color:"#ed1b35"},
{class:"zam", name: "Замоскворецкая", color:"#44b85c"},
{class:"arb", name: "Арбатско-Покровская", color:"#0078bf"},
{class:"fil", name: "Филёвская", color:"#19c1f3"},
{class:"kol", name: "Кольцевая", color:"#894e35"},
{class:"kri", name: "Калужско-Рижская", color:"#f58631"},
{class:"tag", name: "Таганско-Краснопресненская", color:"#8e479c"},
{class:"kal", name: "Калининско-Солнцевская", color:"#ffcb31"},
{class:"ser", name: "Серпуховско-Тимирязевская", color:"#a1a2a3"},
{class:"lub", name: "Люблинско-Дмитровская", color:"#b3d445"},
{class:"kah", name: "Каховская", color:"#79cdcd"},
{class:"but", name: "Бутовская", color:"#acbfe1"}];