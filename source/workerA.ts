console.log("workerA started...");

this.onmessage = function (e) {
    console.log("Calculating primes...");
    if (e.data.nPrimes !== undefined) {
        let primes:number[] = Primes.getList(e.data.nPrimes);
        this.postMessage(primes);
    }
    console.log("...primes calculated!");
};

namespace Primes {
    export function getPrime(n: number): number {
        var i: number = 0, root: number = 1;
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
    export function getList(n: number): number[] {
        var m: number, result: number[] = [];
        for (let i: number = 0; i < n; i++) {
            result.push(m = getPrime(m));
        }
        return result;
    }
}
