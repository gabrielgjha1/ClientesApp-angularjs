'use strict';

// Register `accountsList` component, along with its associated controller and template
angular.
module('showClient').
component('showClient', {
  templateUrl: 'Cliente/show-cliente-componente/show-cliente.template.html',
  controller: ['$http', function showClientController($http) {
    var self = this;

    var cliente  = [ {

      nombre:"",
      apellido:"",
      email:"",

    } ];

    self.$onInit = function() {

      self.GetData();
      
    };

    self.eliminar = function(id) {


      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          console.log('xd');
          $http({
            method: 'DELETE',
            url: `http://127.0.0.1:8081/api/clientes/${id}`
          }).then(function successCallback(response) {
              
              console.log(response);
    
              self.GetData();

              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
    
            }, function errorCallback(response) {
    
              console.log(response);
    
            });

        
        }
      })

     

    }

    self.GetData = function() {

      $http({
        method: 'GET',
        url: 'http://127.0.0.1:8081/api/clientes'
      }).then(function successCallback({data}) {

          self.cliente = data;

        }, function errorCallback(response) {

          console.log(response);

        });
      
    };



}]
});
