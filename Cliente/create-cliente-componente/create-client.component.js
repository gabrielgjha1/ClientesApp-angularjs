'use strict';

// Register `accountsList` component, along with its associated controller and template
angular.
module('createClient').
component('createClient', {
  templateUrl: 'Cliente/create-cliente-componente/create-client.template.html',
  controller: ['$http', function createClientController($http) {
    var self = this;
    console.log('hhola');
}]
});
