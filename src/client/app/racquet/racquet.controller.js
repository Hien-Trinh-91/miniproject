(function() {
  'use strict';

  angular
    .module('app.racquet')
    .controller('RacquetController', RacquetController);

  RacquetController.$inject = ['logger','RacquetService'];
  /* @ngInject */
  function RacquetController(logger,RacquetService) {
    var vm = this;
    vm.title = 'Admin';
    vm.racquets = [];

    getData('racquet');
    activate();
    function activate() {
      logger.info('Activated Racquet');
    }
    function getData(info){
      RacquetService.getData(info)
      .then(function(res){        
        vm.racquets = res.data;
      });
    }
  }
})();
