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