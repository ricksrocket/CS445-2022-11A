interface IAccount {
    money: number;
    deposit(value: number): void;
}

interface Iperson {
    name: string;
    bankAccount3: typeof bankAccount3;
    //tried but does not work:  bankAccount3: object; why not?
    hobbies: string[];
}


let bankAccount3: IAccount = {
    money: 2000,
    deposit(value) {
        return this.money += value;
    }
}

let person: Iperson = {
    name: "John",
    bankAccount3: bankAccount3,
    hobbies: ["Violin", "Cooking"]
}



person.bankAccount3.deposit(3000);
console.log(person);
console.log(typeof(bankAccount3))