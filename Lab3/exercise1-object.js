/*eslint-disable*/

/**
 * !This version of the program uses closure inside an object created from a *class* to isolate the basket
 * ! and provide the public methods asked for
**/

/*
Use the Module pattern to create a shopping cart that has one private member: basket which is an Array, 
and the following public methods:

upsertItem(item) add an item to basket if doesn't exist, or update if exist.
getItemsCount() returns the total number of items in the basket.
getTotalPrice() calculates the total price of items. Each item price is the product's price multiply
item's count. removeItemById(id) removes an item from the basket. Every product item has the following 
structure:

Item = {
    id: 0,
    product:
    {
        id: 1,
        name: 'Coffee',
        description: 'Coffee Grounds from Ethiopia',
        price: 9.5
    },
    count: 1
}
*/

const item1 = { id: 0, product: { id: 1, name: 'Coffee', description: 'Coffee Grounds from Ethiopia', price: 9 }, count: 1 }
const item2 = { id: 1, product: { id: 2, name: 'Tea', description: 'Oonlong Tea from China', price: 10 }, count: 5 }
const item3 = { id: 2, product: { id: 3, name: 'Bottled Water', description: 'Bottled Water from US', price: 2 }, count: 30 }

class ShoppingCart {
    #basket = []; //#basket is private and not accessible in child ShoppingCarts created from this

    upsertItem(item) {
        this.item = item;
        if (this.#basket.length === 0) {
            this.#basket.push(this.item);
        }
        else {
            this.removeItemById(this.item.id);
            /**
             * ?The line above runs the method of removal, which actually filters the object out if it's there, 
             * ? then we push it in after we make sure it's not there to begin with. This differs from the function
             * ? version in that the function version was not able to call the above method from a method this way. So the
             * ? function version of the code is below and commented out. Same exact code you see in the removeItemById method below.
             **/
            // this.#basket = this.#basket.filter((itemToRemove) => 
            //     itemToRemove.id !== this.item.id);

            this.#basket.push(this.item);
        }
    };

    getTotalPrice() {
        return this.#basket.reduce((prev, curr) => (prev + curr.count * curr.product.price), 0);
    };

    getItemsCount() {
        return this.#basket.length;
    };

    removeItemById(id) {
        this.id = id;
        this.#basket = this.#basket.filter((objToRemove) =>
            objToRemove.id !== this.id
        );
    };
};

let shoppingCart = new ShoppingCart

shoppingCart.upsertItem(item1);
shoppingCart.upsertItem(item2);
shoppingCart.upsertItem(item3);
console.log(shoppingCart.getTotalPrice()); //Expected Result: 119
item3.product.name = 'Himilayan Water';
item3.product.price = 10;
shoppingCart.upsertItem(item3);

console.log(shoppingCart.getItemsCount()); //Expected Result: 3
console.log(shoppingCart.getTotalPrice()); //Expected Result: 359
shoppingCart.removeItemById(1);
console.log(shoppingCart.getItemsCount()); //Expected Result: 2
console.log(shoppingCart.getTotalPrice()); //Expected Result: 309

/**
 * ? The tests below prove that the basket is isolated and not accessible outside the object and therefore private. 
 * ? Uncomment them individually to verify.
**/

//console.log(shoppingCart.#basket)//throws error - SyntaxError: Private field '#basket' must be declared in an enclosing class
//console.log(shoppingCart.basket)// returns undefined
