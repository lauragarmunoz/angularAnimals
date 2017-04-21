(function(angular) {
    angular.module('app').component('footerAnimals', {
        templateUrl:  'app/components/commons/footer/footer.html',
        controller: ['$state', footerAnimals],
        controllerAs: 'footerAnimals',

  });

    

  function footerAnimals($state) {
    /* Cacheamos this para evitar rarismos */
    var vm = this;
    
    /* Este método equivale al $( document ).ready() de jQuery.
    En el $onInit seteamos las propiedades de este objeto-controlador (vm, que es this, que es este componente), que le vamos a pasar a la template */
    vm.goToAbout = function() {
      $state.go('about');
    };



  };

  })(angular);