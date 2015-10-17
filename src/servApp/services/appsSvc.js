var AppsSvc = (function () {
    function AppsSvc() {

        var apps = [
            {name: 'Hadoop', abbr:'Ha', color: '#f707a5'},
            {name: 'Rails', abbr:'Ra', color: '#3c2dee'},
            {name: 'Chronos', abbr:'Ch', color: '#01aafd'},
            {name: 'Storm', abbr:'St', color: '#2ce19c'},
            {name: 'Spark', abbr:'Sp', color: '#69fa1a'}
        ];

        AppsSvc.prototype.getApps = function () {
            return apps;
        }
    }
    return AppsSvc;
})();

angular.module("servApp").service("appsSvc", AppsSvc());


