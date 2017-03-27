(function() {
  'use strict';

  angular
    .module('app.dashboard')
    .run(appRun);

  appRun.$inject = ['routerHelper'];
  /* @ngInject */
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: 'racquet',
        config: {
          url: '/racquet',
          templateUrl: 'app/racquet/racquet.html',
          controller: 'RacquetController',
          controllerAs: 'vm',
          title: 'Yonex Racquet',
        }
      }
    ];
  }
})();
