console.log("workerA started...");
this.onmessage = function (e) {
    console.log("Calculating primes...");
    if (e.data.nPrimes !== undefined) {
        let primes = Primes.getList(e.data.nPrimes);
        this.postMessage(primes);
    }
    console.log("...primes calculated!");
};
var Primes;
(function (Primes) {
    function getPrime(n) {
        var i = 0, root = 1;
        if (n > 2) {
            while (i <= root) {
                i = 3;
                n += 2;
                root = Math.floor(Math.sqrt(n));
                while (i <= root && n % i) {
                    i += 2;
                }
            }
            return n;
        }
        return n === 2 ? 3 : 2;
    }
    Primes.getPrime = getPrime;
    function getList(n) {
        var m, result = [];
        for (let i = 0; i < n; i++) {
            result.push(m = getPrime(m));
        }
        return result;
    }
    Primes.getList = getList;
})(Primes || (Primes = {}));
