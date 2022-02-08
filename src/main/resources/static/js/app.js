angular
  .module('routingApp', ['ngRoute'])
  .config([
    '$routeProvider',
    function ($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'login.html',
        })
        .when('/login', {
          templateUrl: 'login.html',
          controller: 'LoginCtrl',
          controllerAs: 'ctrlLogin',
        })
        .when('/solicitud/create', {
          templateUrl: '/view/solicitud/solicitudCreate.html',
          controller: 'SolicitudCtrl',
          controllerAs: 'ctrlSolicitud',
        })
        .otherwise({
          redirectTo: '/login',
        })
    },
  ])
  .constant('APP_URL', {
    url: 'http://localhost:8080',
  })
