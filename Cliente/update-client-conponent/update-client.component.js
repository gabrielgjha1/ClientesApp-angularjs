'use strict';

// Register `accountsList` component, along with its associated controller and template
angular.
module('updateClient').
component('updateClient', {
  templateUrl: 'Cliente/update-client-conponent/update-client.template.html',
  controller: ['$http','$routeParams','$location', function updateClientController($http,$routeParams,$location) {
    var self = this;
    self.formData = {}; 
    console.log($routeParams.id);

    
    self.$onInit = function() {

      
      self.GetData();

      
    };


    this.save_data = function (form) {

      if (form.$valid){
        
        
        console.log(self.formData);
        $http({
          method: 'PUT',
          url: 'http://127.0.0.1:8081/api/clientes/'+$routeParams.id,
          data:self.formData
        }).then(function successCallback(response) {
  
          Swal.fire(
            'Buen Trabajo!',
            'Los datos han sido enviados!',
            'success'
          )

          $location.path('showClient');
            
          }, function errorCallback(response) {
  
            console.log(response);
  
          });


      }else{

        form.nombre.$touched = true;
        form.email.$touched = true;
        form.apellido.$touched = true;

      }
      
    }

    self.GetData = function() {

      $http({
        method: 'GET',
        url: 'http://127.0.0.1:8081/api/clientes/'+$routeParams.id
      }).then(function successCallback({data}) {

          self.formData = data;

        }, function errorCallback(response) {

          console.log(response);

        });
      
    };



}]
});
