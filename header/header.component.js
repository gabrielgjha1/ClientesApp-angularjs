'use strict';

// Register `accountsList` component, along with its associated controller and template
angular.
module('headerComponent').
component('headerComponent', {
  templateUrl: 'header/header.template.html',
  controller: ['$http', function headerComponentController($http) {
    var self = this;
    console.log('header');
}]
});
