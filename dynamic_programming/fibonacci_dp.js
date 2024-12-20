// Nota: fibonacci con recursión: // O(2^n)

let calculations=0;
function fibonacciMaster() {
    // O(n)
    let cache = {};
    return function fibonacci(n)
    {
        calculations++;
        if (n in cache) {
            return cache[n];
        } else {
            if (n < 2) {
                return n;
            } else {
                cache[n] = fibonacci(n - 1) + fibonacci(n - 2);
                return cache[n];
            }
        }
    }
}

const memoizeFibonacci = fibonacciMaster();
console.log("1", memoizeFibonacci(10), calculations);
console.log("1", memoizeFibonacci(40), calculations);
console.log("1", memoizeFibonacci(70), calculations);