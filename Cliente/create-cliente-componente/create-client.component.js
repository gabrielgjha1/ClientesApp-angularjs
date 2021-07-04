'use strict';

// Register `accountsList` component, along with its associated controller and template
angular.
module('createClient').
component('createClient', {
  templateUrl: 'Cliente/create-cliente-componente/create-client.template.html',
  controller: ['$http', function createClientController($http,$scope) {
    var self = this;

    self.formData = {}; 
 

    this.save_data = function (form) {

      if (form.$valid){
        
        
        console.log(self.formData);
        $http({
          method: 'POST',
          url: 'http://127.0.0.1:8081/api/clientes',
          data:self.formData
        }).then(function successCallback(response) {
  
          Swal.fire(
            'Buen Trabajo!',
            'Los datos han sido enviados!',
            'success'
          )
  
          }, function errorCallback(response) {
  
            console.log(response);
  
          });


      }else{

        form.nombre.$touched = true;
        form.email.$touched = true;
        form.apellido.$touched = true;

      }
      
    }

    self.validarformulario = function (nombre) {

      console.log('sd');
      var  tex= `{'is-invalid':!formulario.email.$valid && formulario.email.$touched,'is-valid':formulario.email.$valid && !formulario.email.$touched}`
      return tex;

    }

}]

});
