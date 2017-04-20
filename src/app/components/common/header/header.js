(function(angular) {
    angular.module('app').component('header', {

        templateUrl:  'app/components/common/header.html',
        controller: controladorHeader,
        controllerAs: 'compoHeader'
  });


  function controladorHeader() {
    /* Cacheamos this para evitar rarismos */
    var vm = this;
    
    /* Este método equivale al $( document ).ready() de jQuery.
    En el $onInit seteamos las propiedades de este objeto-controlador (vm, que es this, que es este componente), que le vamos a pasar a la template */
    vm.$onInit = function() {
        
    };
  };

  })(angular);