(function(angular) {
    angular.module('app').component('footer', {

        templateUrl:  'app/components/common/footer.html',
        controller: controladorFooter,
        controllerAs: 'compoFooter'
  });


  function controladorFooter() {
    /* Cacheamos this para evitar rarismos */
    var vm = this;
    
    /* Este método equivale al $( document ).ready() de jQuery.
    En el $onInit seteamos las propiedades de este objeto-controlador (vm, que es this, que es este componente), que le vamos a pasar a la template */
    vm.$onInit = function() {
      
    };
  };

  })(angular);