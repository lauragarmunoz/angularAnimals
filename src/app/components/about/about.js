(function(angular) {

  angular.module('app').component('viewAbout', {
    templateUrl:  'app/components/about/about.html',
    controller: viewAbout,
    controllerAs: 'viewAbout'
  });

  function viewAbout() {
    var vm = this;
  }

})(angular);