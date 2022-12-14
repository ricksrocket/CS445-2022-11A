/*eslint-disable*/

const isPrime = num => new Promise((resolve, reject) => {
    setTimeout(function() {
        for (let i = 2, s = Math.sqrt(num); i <= s; i++)
            if (num % i === 0) reject({ prime: false });
        resolve({ prime: num > 1 });
    }, 500);
});

console.log('start');
isPrime(9)
    .then(resolve => console.log(resolve))
    .catch(error => console.error(error));
console.log('end');