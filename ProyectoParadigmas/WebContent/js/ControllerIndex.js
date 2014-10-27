'use strict';

var app = angular.module('index', []);
phonecatApp.controller('PhoneListCtrl', function($scope) {
	$scope.phones = [
	                 {'name': 'Nexus S',
	                  'snippet': 'Fast just got faster with Nexus S.'},
	                 {'name': 'Motorola XOOM™ with Wi-Fi',
	                  'snippet': 'The Next, Next Generation tablet.'},
	                 {'name': 'MOTOROLA XOOM™',
	                  'snippet': 'The Next, Next Generation tablet.'}
	               ];
	             });

/*(function(){
	var app=angular.module('index',[ ]);
	app.controller('IndexController',function(){
		this.product=list;
	});
	var gem={
			name:'Canguro',
			price: 2.5,
			description:'...'
	};
})();
*/
