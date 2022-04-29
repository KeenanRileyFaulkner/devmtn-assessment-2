///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE

const summedPrice = cart.reduce((acc, curr) => acc += curr.price, 0);
// console.log(summedPrice);


//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE
const calcFinalPrice = (cartTotal, couponValue, tax) => {
    let finalTotal = (cartTotal * (1 + tax)) - couponValue;
    return Number(finalTotal.toFixed(2));
}

console.log(calcFinalPrice(summedPrice, 5.00, 0.075));

//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE
    Name(string) - so the company can be personable (string type because names are typically ascii represented)
    OrderNum(int) - so the company can keep track of the order placed (and the customer can too) (number type because it's a number)
    OrderTime(string) - so the comapany can be timely in getting orders ready (string type because we can get currTime as string w/ function)
    PaymentCardNum(int) - so the company can get their money (card numbers are always number types)

    Could have more like pickup time, numEntrees, totalCost etc, but I'll stick to those four for this exercise
*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE
//because the program recompiles on run, the time is always the time the program runs at.
//On a running server, that time should just be whatever time the Customer is instantiated.
function currTime() {
    const today = new Date();
    return today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
}

class Customer {
    constructor(name, orderNum, payCardNum, orderTime = currTime()) {
        this.name = name;
        this.orderNum = orderNum;
        this.orderTime = orderTime;
        this.payCardNum = payCardNum;
    }
}

let keenanrf = new Customer("Keenan", 148, 1234567890123456);
console.log(keenanrf);