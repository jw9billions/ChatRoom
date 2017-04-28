(function(){
	function ModalCtrl (){
		this.modal = $uibModal.open();
	}
	
	angular
		.module('blocChat', ['ui.bootstrap'])
		.controller('ModalCtrl', ['$scope', '$uibModal', ModalCtrl]);
})();


