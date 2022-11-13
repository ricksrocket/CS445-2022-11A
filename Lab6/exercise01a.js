/*eslint-disable*/

// let isPrime = new Promise((resolve, reject) => {
//     setTimeout(() => resolve(1), 500);

// })

const isPrime = (num) => {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
        }, 500)

        for (let i = 2, s = Math.sqrt(num); i <= s; i++){

            
        }
            if (num % i === 0) {
                reject({
                    prime: "false"
                });
            } else resolve({
                prime: num > 1
            });
    })
}
console.log('start');
isPrime(9)
    .then(resolve => console.log(resolve))
    .catch(error => console.error(error));
console.log('end');

/*
let userLeft = false
let userWatchingCatMeme = false

function watchTutorialCallback(callbackFn, errorCallbackFn) {

    if (userLeft) {
        errorCallbackFn({
            name: 'User Left',
            message: ':('
        })
    } else if (userWatchingCatMeme) {
        errorCallbackFn({
            name: 'User Watching Cat Meme',
            message: 'WebDevSimplified < Cat'
        })
    } else {
        callbackFn('Thumbs up and Subscribe')
    }
}

//function call
watchTutorialCallback(
    message => {
        console.log(message)
    },
    error => {
        console.log(error.name + ' ' + error.message)
    })

//

function watchTutorialPromise() {
    return new Promise((resolve, reject) => {
        if (userLeft) {
            reject({
                name: 'User Left',
                message: ':('
            })
        } else if (userWatchingCatMeme) {
            reject({
                name: 'User Watching Cat Meme',
                message: 'WebDevSimplified < Cat'
            })
        } else {
            resolve('Thumbs up and Subscribe')
        }
    })
}

watchTutorialPromise().then((message) => {
    console.log("Success: " + message)
}).catch((error) => {
    console.log(error.name + ' ' + error.message)
})
*/