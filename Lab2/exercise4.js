/*eslint-disable*/

var Rectangle = /** @class */ (function () {
    function Rectangle(width, length) {
        this.width = 0;
        this.length = 0;
        this.width = width;
        this.length = length;
    }
    Rectangle.prototype.calcSize = function () {
        return this.width * this.length;
    };
    return Rectangle;
}());
var rectangle = new Rectangle(5, 2);
console.log(rectangle.calcSize());
