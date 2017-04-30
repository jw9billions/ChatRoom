function(
	function HomeCtrl($scope, Room){
		$scope.rooms = Room.all;
	}

	angular
		.module('blocChat', ['$scope', 'Room', HomeCtrl])
		.controller();
)();