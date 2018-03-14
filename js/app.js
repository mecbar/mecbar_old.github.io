(function() {
  'use strict';
 angular.module('mecbar', [])
 .controller('NationListCtrl', function ($scope,$http) {
    $http({
        method: 'GET',
        url : 'data/nations.json'
    }).then(function (data) {
          $scope.nations = data ;
       } , function (data) {
         console.log('Error file nations non caricato');
       } ); 
    } );
}) ();
