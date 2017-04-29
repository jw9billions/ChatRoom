(function(){
	function config($stateProvider, $locationProvider){
		$locationProvider
         .html5Mode({
             enabled: true,
             requireBase: false
         });
		
		$stateProvider
			// .state('mainView', {
			// 	url: '/',	   
			// 	controller: ''  ,
			// 	// templateUrl: '/'
			// })
			.state('chatRooms', {
				url: '/chatRooms',
				controller: 'RoomCtrl as chatRooms',
				// templateUrl: '/'
			})
	}
	
	angular
		.module('blocChat', ['ui.router', 'firebase'])
		.config(config);
})();



