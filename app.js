//Insert your app where YOURAPPNAMEHERE appears
var app = angular.module('YOURAPPNAMEHERE', [
    'ngRoute', 
    'ngMaterial'
]);

//Controls initial landing page
app.controller('mainController', function(cartService, $scope, $http, $location, $element, $document) {
    //Changes the view/page
    $scope.changeview = function(path) {
        $location.path(path).replace();
    }
});


//Switches between pages/views
app.config(function($routeProvider, $locationProvider, $httpProvider) {
    $routeProvider.
    when('/', {
        templateUrl: 'main.html',
        controller:'landingController'
    }).
    when('/Customize', {
        reloadOnSearch: false,
        templateUrl: 'customize.html',
        controller: 'customizeController'
    }).
    when('/FAQ', {
        templateUrl: 'frequentquestions.html',
        controller: 'FAQController'
    }).
    when('/AboutUs', {
        templateUrl: 'aboutUs.html',
        controller: 'AboutController'
    }).
    when('/Cart', {
        templateUrl: 'cart.html',
        controller: 'CartController',
        stripe: StripeCheckoutProvider.load
    }).
    otherwise({
        redirectTo: '/'
    });

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: true
    });
});

exports = app;
