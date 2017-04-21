(function(angular) {

  angular.module('app').component('viewDetail', {
    templateUrl:  'app/components/detail/detail.html',
    controller: ['$stateParams', viewDetail],
    controllerAs: 'viewDetail'
  });

  function viewDetail($stateParams) {
    var vm = this;
    vm.$onInit = function () {
        var idAnimal =$stateParams.idAnimal;
        console.log('El id es: ', idAnimal);

    };

  }

})(angular);