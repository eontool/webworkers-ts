/// <reference path="../definitions/angular.d.ts" />
var mainApp;
(function (mainApp) {
    'use strict';
    var app = angular.module('mainApp', []);
    ;
    class mainCtrl {
        constructor($scope) {
            this.$scope = $scope;
            $scope.support = true;
            this.main();
            let support = false;
            // interface Window { Worker: any; }
            // window.Worker = window.Worker || {};
            // if (window.Worker) {
            //     console.log("Web workers supported.");
            //     let workerA: any = new Worker("workers/workerA.js");
            //     let workerB: any = new Worker("workers/workerA.js");
            //     let message: {} = { nPrimes: 10 };
            //     workerA.postMessage(message);
            //     workerB.postMessage(message);
            //     workerA.onmessage = function (e): void {
            //         console.log(e.data);
            //     };
            //     workerB.onmessage = function (e): void {
            //         console.log(e.data);
            //     };
            // }
            // else {
            // }
        }
        main() {
            console.log("mainCtrl");
        }
    }
    mainCtrl.$inject = [
        '$scope'
    ];
    mainApp.mainCtrl = mainCtrl;
    app.controller('mainCtrl', [mainCtrl]);
})(mainApp || (mainApp = {}));
