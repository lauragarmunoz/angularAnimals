'use strict';

(function(angular) {
  /* Declaramos el módulo */
  angular.module('app', ['ui.router']);
//[] es un array vacío por el momento
// ahí es donde inyecto algunas dependencias (ui router) ahí directamente
// o como un var array = dependencias [] ...


  angular.module('app').config(['$stateProvider', '$urlRouterProvider', appConfig]);
// lo hacemos aquí pero lo normal es sacar fuera la configuración
// provider para definir estados, router para definir la url

function appConfig($stateProvider, $urlRouterProvider) {
  var main = {
    name: 'main',  //nombre del estado, cada "pantalla"" es un estado en angular
    url: '/main', //la url que yo quiera
    template: '<view-main></view-main>'//pongo una que existe pero podría poner algo con html
  };

  var detail = {
    name: 'detail', 
    url: '/detail',
    template: '<view-detail></view-detail>'
  };

  var about = {
    name: 'aboutUs', 
    url: '/aboutUs',
    template: '<h3>About us: work in progress</h3>'
  };

};

  $stateProvider.state(main);
  $stateProvider.state(detail);
  $stateProvider.state(about); 
  // importante, sin esto no carga, es aquí donde verdaderamente defino
  $urlRouterProvider.otherwise('/main'); 


})(angular);

