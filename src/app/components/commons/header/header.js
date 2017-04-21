(function(angular) {
    angular.module('app').component('headerAnimals', {

        templateUrl:  'app/components/commons/header/header.html',
        controller: ['$state', headerAnimals],
        controllerAs: 'headerAnimals'
  });


  function headerAnimals($state) {
    /* Cacheamos this para evitar rarismos */
    var vm = this;
    
    vm.goToMain = function() {
      console.log('zdssdsd')
      $state.go('main');
      // $state recibe un método go, porque queremos IR al estado detail
    };
  };

  })(angular);