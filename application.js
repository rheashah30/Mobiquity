var app = angular.module('calApp',['ngSanitize', 'ui.bootstrap', 'ui.utils']);

app.controller('calCtrl', ['$scope', function($scope){
	$scope.name = "gaurang"	;
	$scope.startTime = new Date();
	$scope.endTime = new Date();
	$scope.hstep = 1;
	$scope.mstep = 15;
	$scope.options = {
		hstep: [1, 2, 3],
		mstep: [1, 5, 10, 15, 25, 30]
	};
	$scope.events = [];

	$scope.createEvent = function(){
		$scope.events.push({date: $scope.dt, name:$scope.eventName, startTime:moment($scope.startTime).format("HH:mm"), endTime:moment($scope.endTime).format("HH:mm")});
	}

	$scope.currentDate = function(obj){
		if(!$scope.dt){
			return false;
		}
		return obj.date.toString() === $scope.dt.toString();
	}

	$scope.removeEvent = function(ind){
		$scope.events.splice(ind,1);
	}
}]);