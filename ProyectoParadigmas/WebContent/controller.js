
'use strict';

/* Controllers */

var phonecatApp = angular.module('phonecatApp', []);

phonecatApp.controller('ProductListCtrl', function($scope, $http) {
  $http.get('JsonFiles/productos.json').success(function(data) {
    $scope.products = data;
  });

  $scope.orderProp = 'price';
  //alert($scope.products.length);
  //suffleArray($scope.products);
  //var shuffled=shuffle($scope.products);
  //$scope.shuf=shuffled;
});

phonecatApp.filter('makeUppercase', function () {
	  return function (item) {
	      return item.toUpperCase();
	  };
	});

phonecatApp.filter('giveMe4', function () {
    return function (items) {
    	for (var i = items.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = items[i];
            items[i] = items[j];
            items[j] = temp;
        }
        var filtered = [];
        for (var i = 0; i < 4; i++) {
            var item = items[i];
            filtered.push(item);
        }
        return filtered;
    };
});

phonecatApp.filter('giveMe1', function () {
    return function (items) {
    	for (var i = items.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = items[i];
            items[i] = items[j];
            items[j] = temp;
        }
        var filtered = [];
        for (var i = 0; i < 1; i++) {
            var item = items[i];
            filtered.push(item);
        }
        return filtered;
    };
});

phonecatApp.filter('giveMe2', function () {
    return function (items) {
    	for (var i = items.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = items[i];
            items[i] = items[j];
            items[j] = temp;
        }
        var filtered = [];
        for (var i = 0; i < 2; i++) {
            var item = items[i];
            filtered.push(item);
        }
        return filtered;
    };
});