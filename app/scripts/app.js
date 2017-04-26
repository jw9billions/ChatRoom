
(function(){
	function config('stateProvider', 'locationProvider'){
		$locationProvider
         .html5Mode({
             enabled: true,
             requireBase: false
         });
		
		$stateProvider
			.state('mainView', {
				url: '/',	   
				controller: ''  ,
				templateUrl: '/'
			})
			.state('rooms', {
				url: '/rooms',
				controller: 'RoomCtrl as rooms',
				templateUrl: '/'
			})
	}
	
	angular
		.module('blocChat', [ui.router, firebase])
		.config(config);
	
})();



