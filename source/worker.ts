console.log("worker created.");
this.onmessage = function (e) {
    let t0 = performance.now();
    console.log("Generating...");
    if (e.data !== undefined) {
        let arr: number[] = [];
        for (let i: number = 0; i < e.data.size; i++) {
            arr.push(Math.round(Math.random() * e.data.max))
        }
        this.postMessage("finished generating " + e.data.size + " random numbers." + " / time: " + (performance.now() - t0) + " ms");
    }
    console.log("worker ended.");
};