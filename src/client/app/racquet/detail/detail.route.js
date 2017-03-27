(function () {
  'use strict';

  angular
    .module('app.racquet')
    .run(appRun);

  appRun.$inject = ['routerHelper'];
  /* @ngInject */
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [{
      state: 'racquet/detail',
      config: {
        url: '/racquetDetail/:id',
        templateUrl: 'app/racquet/detail/detail.html',
        controller: 'RacquetDetailController',
        controllerAs: 'vm',
        title: 'Yonex Racquet',
      }
    }];
  }
})();
