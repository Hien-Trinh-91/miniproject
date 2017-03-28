(function() {
'use strict';

    angular
        .module('app.racquet')
        .controller('RacquetDetailController', RacquetDetailController);

    RacquetDetailController.inject = ['$state','RacquetService'];
    function RacquetDetailController($state,RacquetService) {
        var vm = this;
        // vm.racquetDetail={};
        vm.id = $state.params.id;
        activate();  
        getRacquetDetail(vm.id);
        function getRacquetDetail(id){
            RacquetService.getRacquet(id)
            .then(function(res){
                vm.racquetDetail = (res.data[0]);
                console.log(res.data[0]);
            });

        }
        

        function activate() {

         }
    }
})();