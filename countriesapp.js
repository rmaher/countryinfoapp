angular.module('CountriesApp', ['ngRoute'])
    .value('countriesRte',['countryid'])
    .config(function($routeProvider) {
    	$routeProvider.when('/', {
    		templateUrl : 'home.html',
    	})
    	.when('/countrylist', {
    		templateUrl: 'countrylist.html',
    		controller: 'ListCtrl'
    	})
        .when('/country/:countryid', {
            templateUrl: 'countrydetail.html',
            controller: 'CountryCtrl',
            resolve : {
                countryid: function($route, $location) {
                    var countryid = $route.current.params.countryid;
                    if(countriesRte.indexOf(countryid) == -1 ) {
                        $location.path('/error');
                        return;
                    }
                    return countryid;
                }
            }
        })
    	.when('/error', {
    		template: '<p>Error - Page Not Found</p>'
    	})
    	.otherwise({redirectTo: '/'})
    }) 

    .controller('MainCtrl', function($scope, $routeParams) {

    })

    .controller('ListCtrl', function($scope, $http) {
    	var url = "http://api.geonames.org/countryInfoJSON?username=rachelelizabethmaher";
    	$http.get(url).
    		success(function(data) {
      			$scope.countries = data.geonames;
				console.log("success");
    		}).
    		error(function() {
      			console.log("ERROR ERROR")
    		});
    		
    })

    .controller('CountryCtrl', function($scope, $http) {
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

