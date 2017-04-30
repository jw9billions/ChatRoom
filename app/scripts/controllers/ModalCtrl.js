(function(){
	function ModalCtrl ($uibModal){
		this.modal = $uibModal.open();
		this.modal = $uibModal.close();
		this.modal = $uibModal.submit();
	}
	
	angular
		.module('blocChat', ['ui.bootstrap'])
		.controller('ModalCtrl', ['$uibModal', ModalCtrl]);
})();


