

/// <reference path="../definitions/angular.d.ts" />

module mainApp {
    'use strict';
    var app = angular.module('mainApp', []);

    export interface mainScope extends ng.IScope {
        support: boolean;
    };

    export class mainCtrl {
        static $inject = [
            '$scope'
        ];

        constructor(private $scope: mainScope) {

            $scope.support = true;

            this.main();

            let support: boolean = false;

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


    app.controller('mainCtrl', [mainCtrl]);

}



