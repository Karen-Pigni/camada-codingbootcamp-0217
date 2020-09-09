//! La idea es escribir el código de la función memoize, la idea es usar esta función cuando realizamos operaciones que son costosas en proceso de computo.
//! La función debería poder recodar (cache) los cálculos previos.

function memoize(func) {
    let cache = {}; //
    return (...args) => {
        const key = [...args].toString();
        return key in cache ? cache[key] : (cache[key] = func(key));
    };
}

const fibonacci = (n) => {
    return n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2);
};

const factorial = (n) => {
    return n <= 1 ? 1 : n * factorial(n - 1);
};

const memoizeFibonacci = memoize(fibonacci);
const memoizeFactorial = memoize(factorial);
debugger;
memoizeFactorial(30);
memoizeFactorial(30);