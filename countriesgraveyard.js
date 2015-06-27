    <script type="text/javascript" src="bower_components/angular/angular.js"></script>
    <script type="text/javascript" src="bower_components/angular-route/angular-route.js"></script>

        $scope.viewList = function(countrylist) {
    		$location.path(countrylist;)
    	}

    	.controller('HttpController', function($scope, $http, $sce) {
		$scope.pullCountryInfo = function() {
	      	var url = "http://api.geonames.org/countryInfoJSON?username=rachelelizabethmaher";

			$http({
				method: 'GET',
				url: url
			})
			.success(function(geonames) {
				$scope.results = geonames.data;
				console.log(geonames.data);
			})
			.error(function() {
				alert('error');
			});
		};
		console.log(geonames);

		        var countryurl = "http://api.geonames.org/countryInfoJSON?username=rachelelizabethmaher";
        $http.get(countryurl).
            success(function(data) {
                $scope.countries = data.geonames;
                console.log("country success");
            }).
            error(function() {
                console.log("ERROR ERROR")
            });
        var searchurl = "http://api.geonames.org/search?username=rachelelizabethmaher";
        $http.get(searchurl).
            success(function(data) {
                $scope.search = data.geonames;
                console.log("search success");
            }).
            error(function() {
                console.log("ERROR ERROR")
            });
        var neighborurl = "http://api.geonames.org/neighbours?geonameId=" + geonameId + "&username=rachelelizabethmaher";
        $http.get(neighborurl).
            success(function(data) {
                $scope.neighbors = data.geonames;
                console.log("neighbor success");
            }).
            error(function() {
                console.log("ERROR ERROR")
            });
    })


    ////////

    angular.module('CountriesApp', ['ngRoute'])
    .config(function($routeProvider) {
        $routeProvider.when('/', {
            templateUrl : 'home.html',
        })
        .when('/countrylist', {
            templateUrl: 'countrylist.html',
            controller: 'ListCtrl',
          resolve: {
             countries: function($http) {
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

                    var countryUrl = "http://api.geonames.org/countryInfoJSON?username=rachelelizabethmaher&country=" + countryName;
                    var deferred = $q.defer();

                    $http.get(countryUrl).then( function(response) {
                            deferred.resolve(response);
                        }, function(error) {
                            deferred.reject('error!');
                        });

                    return deferred.promise;

                }
        }})
        .when('/error', {
            template: '<p>Error - Page Not Found</p>'
        })
        .otherwise({redirectTo: '/'});
    })

    .controller('MainCtrl', function($scope, $routeParams) {

    })

    .controller('ListCtrl', function($scope, $routeParams, countries) {
      $scope.countries = countries.data.geonames;
    })

    .controller('CountryCtrl', function($scope, $http, country) {
      console.log(country);
      $scope.country = country;
    });