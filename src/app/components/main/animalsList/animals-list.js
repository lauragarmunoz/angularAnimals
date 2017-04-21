(function(angular) {
    angular.module('app').component('animalsList', {
        templateUrl:  'app/components/main/animalslist/animals-list.html',
        controller: ['$state', 'animalsFactory', animalsList],
        controllerAs: 'animalsList'
  });

  /* Inyectamos aquí y arriba $state */
  function animalsList($state, animalsFactory) {
    var vm = this;

    vm.$onInit = function() {
      vm.allAnimals = animalsFactory.getAllAnimals();
      vm.currentPosition= 'up';
      
    };

    /* Al clicar sobre un elemento de la lista,
    nos vamos al detalle con el método go de $state */
    vm.goToDetail = function(_idAnimal_) {
      $state.go('detail', {idAnimal: _idAnimal_});
      // $state recibe un método go, porque queremos IR al estado detail
    };

    vm.sortList = function(_position_) {
      if (_position_ !== vm.currentPosition ) {
        vm.allAnimals.reverse();
        vm.currentPosition = _position_;
      }
      // $state recibe un método go, porque queremos IR al estado detail
    };
   // vm.rightOrder = function (_position_)

  }

})(angular);