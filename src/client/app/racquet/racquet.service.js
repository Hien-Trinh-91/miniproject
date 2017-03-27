(function() {
'use strict';

    angular
        .module('app.racquet')
        .service('RacquetService', RacquetService);

    RacquetService.inject = ['$http'];
    function RacquetService($http) {
        this.getData = getDataFn;
        this.getRacquet = getRacquetFn;
        
        function getDataFn(info) {
            return $http.get('/api/'+info);
         }

        function getRacquetFn(id){
            return $http.get('/api/racquet/'+id);
        }
        }
    
})();