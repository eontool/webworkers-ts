(function () {
    var old = console.log;
    var logger = document.getElementById('debug');
    console.log = function (message) {
        if (typeof message == 'object') {
            logger.innerHTML += (JSON && JSON.stringify ? JSON.stringify(message) : message) + '<br />';
        } else {
            logger.innerHTML += message + '<br />';
        }
    }
})();

interface Window { Worker: any; }
window.Worker = window.Worker || {};

let button = document.getElementById('button');
button.addEventListener("click", test);

function test(): void {
    let time = document.getElementById('time');
    if (window.Worker) {
        console.log("Web workers supported.");
        let t0 = performance.now();
        let workerA: any = new Worker("js/worker.js");
        console.log("WorkerA started.");
        workerA.postMessage({ max: 9, size: 25000000 });
        workerA.onmessage = function (e): void {
            console.log("WorkerA " + e.data);
            let t1 = performance.now() - t0;
            time.value = t1;
        };

        let workerB: any = new Worker("js/worker.js");
        console.log("WorkerB started.");
        workerB.postMessage({ max: 9, size: 10000000 });
        workerB.onmessage = function (e): void {
            console.log("WorkerB " + e.data);
        };

        let workerC: any = new Worker("js/worker.js");
        console.log("WorkerC started.");
        workerC.postMessage({ max: 9, size: 1000000 });
        workerC.onmessage = function (e): void {
            console.log("WorkerC " + e.data);
        };

    }
    else {
        console.log("Web workers not supported!");
    }

}