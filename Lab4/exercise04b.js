/*eslint-disable*/

/*
Create a memoized version of the following fibonacci() recursive method to improve 
its performance. Additional Requirements: No variables leaking to global scope and 
use Object instead Map as cache data structure.
*/



const fibonacciPvt = function (n) {
    let cache = {};
    let result;
    const fibo = (n) => {
        if (n in cache) {
            return cache[n];
        }
        else {
            if (n < 2) {
                return 1;
            }
            result = fibo(n - 2) + fibo(n - 1)
            cache[n] = result;
            return result;
        }
    }
    fibo(n);
    return result;
}

function fib(n) {
    if (n <= 1) {
        return 1;
    } else {
        return fib(n - 2) + fib(n - 1)
    }
}
console.time("fibFast");
console.log("n=20", fibonacciPvt(45));
console.timeEnd("fibFast");

console.time("fibSlow");
console.log("n=20", fib(45));
console.timeEnd("fibSlow");

/*
rickrudloff@MacBook-Pro Lab4 % node exercise04a.js
n=50 20365011074
fibFast: 3.612ms
n=50 20365011074
fibSlow: 2:20.030 (m:ss.mmm)

Nice!
*/