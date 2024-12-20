function memoizedAddTo80() {
    let cache = {};

    return function (n) {
        if (n in cache) {
            return cache[n];
        } else {
            console.log("long time");
            cache[n] = n + 80;
            return cache[n];
        }
    }
}

const memoize = memoizedAddTo80()

console.log("1", memoize(5));
console.log("2", memoize(5));
console.log("3", memoize(6));
console.log("4", memoize(5));