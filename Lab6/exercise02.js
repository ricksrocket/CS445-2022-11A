/*eslint-disable*/


Array.prototype.removeDuplicatesAsync = function () {
    let arr = this;
    new Promise(function (resolve, reject) {
        resolve(arr.filter((element, index) => {
            return arr.indexOf(element) === index;
        }));
    }).then(console.log);
}

console.log(`start`);
[4, 1, 5, 7, 2, 3, 1, 4, 6, 5, 2].removeDuplicatesAsync();
console.log(`end`);

