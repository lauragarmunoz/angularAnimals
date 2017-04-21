'use strict';

(function(angular) {
  /* Declaramos el módulo e inyectamos el router */
  // https://github.com/angular-ui/ui-router
  // npm install --save angular-ui-router
  angular.module('app', ['ui.router']);

  /* Definimos la configuración del proyecto durante la fase config */
  /* Necesitamos inyectar algunos "providers" del router */
   angular.module('app').config(['$stateProvider', '$urlRouterProvider',  appConfig]);

  function appConfig($stateProvider, $urlRouterProvider) {
    var main = {
      name: 'main',
      url: '/main',
      template: '<view-main></view-main>'
    };

    var detail = {
      name: 'detail',
      url: '/detail/:idAnimal',
      params: { 
        idAnimal: {squash: true, value:null}
      },
      template: '<view-detail></view-detail>'
    };


    var about = {
      name: 'about',
      url: '/about',
      template: '<view-about></view-about>'
    };

    $stateProvider.state(main);
    $stateProvider.state(detail);
    $stateProvider.state(about);

  
    /* Definimos una ruta por defecto: */
    $urlRouterProvider.otherwise('/main');
  }

})(angular);