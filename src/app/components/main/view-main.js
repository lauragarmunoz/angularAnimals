(function(angular) {

  angular.module('app').component('viewMain', {
    templateUrl:  'app/components/main/view-main.html',
    controller: viewMain,
    controllerAs: 'viewMain'
  });

  function viewMain() {
    var vm = this;
  }

})(angular);