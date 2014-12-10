angular.module('testR', ['ngRoute'])
.controller('MainController', function($scope, $route, $routeParams, $location){
        $scope.$route = $route;
        $scope.$location = $location;
        $scope.$routeParams = $routeParams;
        $scope.$on('$routeChangeSuccess', function(){
            alert($route.current.params.searchData);
        });
    })

.config(function($routeProvider, $locationProvider){
        $routeProvider.when('/:searchData', {
            template: ' ',
            controller: 'MainController'
        });
    });
