(function () {
  'use strict';

  angular
    .module('app.racquet')
    .directive('racquetList', racquetList);

  racquetList.inject = [];

  function racquetList() {
    var directive = {
      scope: scope(),
      restrict: 'E',
      templateUrl: templateUrl
    };
    return directive;

    function scope() {
      return {
        info: '='
      };
    }

    function templateUrl(){
      return 'app/racquet/racquet.list/racquet.list.html';
    }

  }
})();
