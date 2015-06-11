angular.module('CountriesApp', ['ngRoute'])
    .config(function($routeProvider) {
    	$routeProvider.when('/', {
    		templateUrl : 'home.html',
    	})
    	.when('/countrylist', {
    		templateUrl: 'countrylist.html',
    		controller: 'ListCtrl'
    	})
    	.when('/error', {
    		template: '<p>Error - Page Not Found</p>'
    	})
    	.otherwise({redirectTo: '/'});
    }) 

    .controller('MainCtrl', function($scope, $routeParams) {

    })

    .controller('ListCtrl', function($scope) {
    	
    })

	.controller('HttpController', function($scope, $http, $sce) {
		$scope.pullCountryInfo = function() {
	      	var url = "http://api.geonames.org/countryInfo?rachelelizabethmaher";

			$http({
				method: 'JSONP',
				url: url,
				params: {
				   username: 'rachelelizabethmaher'
				}
			})
			.success(function(geonames) {
				$scope.results = geonames.data;
			})
			.error(function() {
				alert('error');
			});
		};
		console.log("response");
});