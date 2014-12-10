angular.module('myApp.services', [])
    .factory('routingService', function($http) {
        return {
            get: function(params){
                //var url = "http://gis-lab.info:6556";
                //return $http.get(url, {
                //    params: params
                //});
                alert(params.q);
                return $http.get('test-data.json', {});
            }
        }
    })
    .factory('sharingService', function($http) {
        return {
            get: function(params){
                var url = "http://gis-lab.info:6556/sharing";
                return $http.get(url, {
                    params: params
                });
            }
        }
    });
