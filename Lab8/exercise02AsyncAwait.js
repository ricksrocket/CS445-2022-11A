/*eslint-disable*/


Array.prototype.removeDuplicatesAsync = async function () {
    console.log(await (this.filter((element, index) => {
        return this.indexOf(element) === index;
    })))
}

console.log(`start`);
[4, 1, 5, 7, 2, 3, 1, 4, 6, 5, 2].removeDuplicatesAsync();
console.log(`end`);

