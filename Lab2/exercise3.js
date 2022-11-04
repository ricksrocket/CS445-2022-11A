var Car = /** @class */ (function () {
    function Car(name) {
        this.name = name;
        this.acceleration = 0;
    }
    Car.prototype.honk = function () {
        console.log(" ".concat(this.name, " is saying: Toooooooooot!"));
    };
    Car.prototype.accelerate = function (speed) {
        return this.acceleration = this.acceleration + speed;
    };
    ;
    return Car;
}());
var car = new Car("BMW");
car.honk(); // BMW is saying: Toooooooooot!
console.log(car.acceleration); // 0
car.accelerate(60);
console.log(car.acceleration); // 60
// class Car {
//     constructor(name) {
//         this.name = name;
//         this.acceleration = 0;
//     }
//     honk() {
//         console.log(` ${this.name} is saying: Toooooooooot!`);
//     }
//     accelerate(speed) {
//         this.acceleration = this.acceleration + speed;
//     }
// }
// let car = new Car("BMW");
// car.honk(); // BMW is saying: Toooooooooot!
// console.log(car.acceleration); // 0
// car.accelerate(60);
// console.log(car.acceleration); // 60
