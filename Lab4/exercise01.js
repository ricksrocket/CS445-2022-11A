/*eslint-disable*/


class Regular {
    constructor() {
        this.type = "regular";
        this.range = [50,100];
        this.age = 1;
    }
}
class Energy {
    constructor(color) {
        this.type = "energy";
        this.range = [5,40];
        this.age = 10;
        this.color = color;
    }
}


class Factory {
    createBulb(type, color) {
        let bulb;
        if (color) {
            bulb = new Energy(color);
        }
        else if (type === "regular") {
            bulb = new Regular();
        }
        return bulb;
    }
}



const bulbs = [];
const factory = new Factory();

bulbs.push(factory.createBulb("regular"));
bulbs.push(factory.createBulb("energy", "red"));
bulbs.push(factory.createBulb("energy", "orange"));
bulbs.push(factory.createBulb("energy", "blue"));
bulbs.push(factory.createBulb("energy", "green"));


for (let i = 0, len = bulbs.length; i < len; i++) {
    console.log("bulbs", bulbs[i]);
}


