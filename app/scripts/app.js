
(function(){
	function config($stateProvider, $locationProvider){
		$locationProvider
         .html5Mode({
             enabled: true,
             requireBase: false
         });
		
		$stateProvider
			.state('mainView', {
				url: '/mainView',	   
				controller: ''  ,
				templateUrl: '/'
			})
			.state('home', {
				url:'/home',
				controller: 'HomeCtrl as home',
				templateUrl: '/template/home.html'
			
			})
			.state('chatRooms', {
				url: '/chatRooms',
				controller: 'RoomCtrl as chatRooms',
				templateUrl: '/'
			})
	}
	
	angular
		.module('blocChat', ['ui.router', 'firebase', 'ui.bootstrap'])
		.config(config);
})();



