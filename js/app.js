(function(){
	var app = angular.module('gemStore', []);
	var gem = { name: 'Azurite', price: 2.95 };

	app.controller('StoreController', function(){
		this.product = gem;
	});

	app.controller('Practice', function(){
		this.tab = 1;

		this.setTab = function(value){
			this.tab = value;
		};

		this.isSet = function(check){
			return this.tab === check;
		};
	});


})();