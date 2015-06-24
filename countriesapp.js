angular.module('CountriesApp', ['ngRoute'])
    .config(function($routeProvider) {
    	$routeProvider.when('/', {
    		templateUrl : 'home.html',
    	})
    	.when('/countrylist', {
    		templateUrl: 'countrylist.html',
    		controller: 'ListCtrl',
            resolve: {
             countries: function($route, $location, $http) {
               var countryUrl = "http://api.geonames.org/countryInfoJSON?username=rachelelizabethmaher";
               return $http.get(countryUrl);
             }
            }
    	})
        .when('/country/:countryName', {
            templateUrl: 'countrydetail.html',
            controller: 'CountryCtrl',
            resolve : {
                country: function($route, $location, $http, $q) {
                    var countryName = $route.current.params.countryName;

                    var countryUrl = "http://api.geonames.org/countryInfoJSON?username=rachelelizabethmaher&country=" + $countryName;
                    var deferred = $q.defer();

                    $http.get(countryUrl).then( function(response) {
                            deferred = $q.defer();
                        }, function(error) {
                            deferred.reject('error!')
                        })
 
                        return deferred.promise;
                    
                    },
                }
        })
    	.when('/error', {
    		template: '<p>Error - Page Not Found</p>'
    	})
    	.otherwise({redirectTo: '/'})
    }) 

    .controller('MainCtrl', function($scope, $routeParams) {

    })

    .controller('ListCtrl', function($scope, $routeParams) {
  
    		
    })

    .controller('CountryCtrl', function($scope, $http) {


