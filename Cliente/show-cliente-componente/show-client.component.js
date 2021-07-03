'use strict';

// Register `accountsList` component, along with its associated controller and template
angular.
module('showClient').
component('showClient', {
  templateUrl: 'Cliente/show-cliente-componente/show-cliente.template.html',
  controller: ['$http', function showClientController($http) {
    var self = this;
    console.log('hhola2');
}]
});
