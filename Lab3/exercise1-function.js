/*eslint-disable*/

/**
 * !This version of the program uses closure inside an IFFE function to isolate the basket
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


const shoppingCart = (function () {
    let basket = [];

    return {
        upsertItem: function (item) {
            if (basket.length === 0) {
                basket.push(item);
            }
            else {
                // removeItemById(item.id);
            /**
             * ?The two lines below runs the method of removal, which actually filters the object out if it's there, 
             * ? then we push it in after we make sure it's not there to begin with. That method call above works in the object version
             * ? of this pattern implementation but will not execute without error in this function version. This differs from the object
             * ? version in that the object version was able to call the above method from itself and work as intended. So the
             * ? object version of the code is above and commented out. Code right below is exact code you see in the removeItemById method below.
             **/              
                
                // this works in object version not function where two lines just below could be reduced to one
                basket = basket.filter((itemToRemove) => 
                    itemToRemove.id !== item.id);

                basket.push(item);
            }
        },

        getItemsCount: function () {
            return basket.length;
        },

        getTotalPrice: function () {
            return basket.reduce((sum, item) => (sum + item.count * item.product.price), 0);

        },


        removeItemById: function (id) {
            basket = basket.filter((objToRemove) =>
                objToRemove.id !== id);
        }
    };
})();


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

