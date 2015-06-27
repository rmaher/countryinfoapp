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
        .when('/country/:countryCode', {
            templateUrl: 'countrydetail.html',
            controller: 'CountryCtrl',
            resolve : {
                country: function($route, $location, $http, $q) {
                    var countryCode = $route.current.params.countryCode;

                    var countryUrl = "http://api.geonames.org/countryInfoJSON?username=rachelelizabethmaher&country=" + countryCode;
                    var deferred = $q.defer();

                    $http.get(countryUrl).then( function(response) {
                            deferred.resolve(response.data.geonames);
                        }, function(error) {
                            deferred.reject('error!');
                        });
 
                        return deferred.promise;
                }
                //capitals: function($http, $q) {
                    //var capitalUrl = "http://api.geonames.org/searchJSON?username=rachelelizabethmaher&country=" + countryCode + "&q=" + capital;
                    //var deferred = $q.defer();

                    //$http.get(capitalUrl).then( function(response) {
                            //deferred.resolve(response.data.geonames);
                        //}, function(error) {
                            //deferred.reject('error!');
                        //});
 
                        //return deferred.promise;

                //}

                //neighbours: function($http, $q) {
                    //var neighborUrl = "http://api.geonames.org/neighbours?geonameId=" + geonameId + "&username=rachelelizabethmaher";
                    //var deferred = $q.defer();

                    //$http.get(neighborUrl).then( function(response) {
                            //deferred.resolve(response.data.geonames);
                        //}, function(error) {
                            //deferred.reject('error!');
                        //});
 
                        //return deferred.promise;
                
                //}


        }})
    	.when('/error', {
    		template: '<p>Error - Page Not Found</p>'
    	})
    	.otherwise({redirectTo: '/'});
    }) 

    .controller('MainCtrl', function($scope) {

    })

    .controller('ListCtrl', function($scope, countries) {
      $scope.countries = countries.data.geonames;
    		
    })

    .controller('CountryCtrl', function($scope, country) {
      
      $scope.country = country[0];   


      //$scope.neighbours = neighbours[0]
      //console.log(neighbours);
    });

