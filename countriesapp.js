'use strict';

angular.module('CountriesApp')

    .config(function($routeProvider) {
        $routeProvider.when('/', {
            templateUrl : 'home.html',
        })
        .when('/countries', {
            templateUrl: 'countries.html',
            controller: 'ListCtrl',
        })
        .when('/country/:countryCode', {
            templateUrl: 'country.html',
            controller: 'CountryCtrl'
        })
        .when('/error', {
            template: '<p>Error - Page Not Found</p>'
        })
        .otherwise({redirectTo: '/'});
    })
        
    .factory('Country', function($http, $q) {
        return {
          getCountries: function() {
              var countryUrl = "http://api.geonames.org/countryInfoJSON?username=rachelelizabethmaher&country=" + countryCode;
              var deferred = $q.defer();

                  http.get(countryUrl).then( function(response) {
                    deferred.resolve(response.data.geonames);
                  }, function(error) {
                    deferred.reject('countries error!');
                  });

                  return deferred.promise;
          },
                
          getNeighbors: function() {
              var neighborUrl = "http://api.geonames.org/neighboursJSON?geonameId=" + geonameId + "&username=rachelelizabethmaher";
              var deferred = $q.defer();

                  http.get(neighborUrl).then( function(response) {
                    deferred.resolve(response.data.geonames);
                  }, function(error) {
                    deferred.reject('neighbor error!');
                  });

                  return deferred.promise;

          },
                
          getCapital: function() {
              var capitalUrl = "";
              var deffered = $q.defer();

              http.get(capitalUrl).then( function(response) {
                deferred.resolve(response.data.geonames);
              }, function(error) {
                deferred.reject('capital error!');
              });
              
              return deferred.promise;

          }
        }
    })
  

    .controller('MainCtrl', function($scope) {

    })

    .controller('ListCtrl', function($scope, getCountries) {
      $scope.countries = countries;
    	
    })

    .controller('CountryCtrl', function($scope, getCountries, getNeighbors, getCapital) {
      $scope.country = country;   
      
    });

