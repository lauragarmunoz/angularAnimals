(function(angular) {

  angular.module('app').component('animalsCard', {
    templateUrl:  'app/components/main/animalscard/animals-card.html',
    controller: animalsCard,
    controllerAs: 'animalsCard',
    bindings: {
      itemAnimal: '<'
    }
  });

  function animalsCard() {
    var vm = this;
  }

})(angular);
