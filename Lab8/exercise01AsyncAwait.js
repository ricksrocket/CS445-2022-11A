/*eslint-disable*/
// it can be shown that once you pass num/2 the remainder will always 
//be one less than i and descends to 1 when you reach num. So there is no 
//point checking beyond num/2. I have not seen the sqrt used but that looks to work also



const isPrime = (num) => {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            for (let i = 2; i < num / 1.9995; i++) {
                // console.log(i)
                if (num % i === 0) {
                    reject({
                        prime: "false"
                    });
                }
            }
            resolve({ prime: num > 1 });
        });
    }, 500);
}

console.log('start');
isPrimeAsync(7);
console.log('end');

async function isPrimeAsync(num) {

    try {
        let result = await isPrime(num);
        console.log(result);

    }
    catch (error) {
        console.log(error);
    }
}