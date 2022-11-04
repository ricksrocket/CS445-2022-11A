/*eslint-disable*/

var bankAccount3 = {
    money: 2000,
    deposit: function (value) {
        return this.money += value;
    }
};
var person = {
    name: "John",
    bankAccount3: bankAccount3,
    hobbies: ["Violin", "Cooking"]
};
person.bankAccount3.deposit(3000);
console.log(person);
console.log(typeof (bankAccount3));
