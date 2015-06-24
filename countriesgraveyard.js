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