angular.
  module('AccountsApp').
  config(['$routeProvider',
    function config($routeProvider) {
      $routeProvider.
        when('/showClient', {
          template: '<show-client></show-client>'
        }).
        when('/createClient', {
          template: '<create-client></create-client>'
        
        }).
        when('/updateClient/:id', {
          template: '<update-client></update-client>'
        }).
        otherwise('/showClient');
    }
  ]);