// let baseObject = {
//     width: 0,
//     length: 0
// };
// let rectangle = Object.create(baseObject);

// rectangle.width = 5;
// rectangle.length = 2;

// rectangle.calcSize = function () {
//     return this.width * this.length;
// };

// console.log(rectangle.calcSize()); // 10

interface IbaseObject {
    width: number;
    length: number;
}

class Rectangle implements IbaseObject {
    width: number = 0;
    length: number = 0;

    constructor(width: number, length: number) {
        this.width = width;
        this.length = length;
    }

    calcSize(): number {
        return this.width*this.length;
    }
}

let rectangle= new Rectangle(5,2);
console.log(rectangle.calcSize());