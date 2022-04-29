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

// console.log(calcFinalPrice(summedPrice, 5.00, 0.075));

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
    Tickets(arr) - allows a customer to have multiple orders at once (array of ticket/order objects)
    Phone Number(Number) - allows the company to text the customer updates on their order(s)
    PaymentCardNum(int) - so the company can get their money (card numbers are always number types)
*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE

class Customer {
    constructor(name, payCardNum, phoneNumber, tickets = []) {
        this.name = name;
        this.payCardNum = payCardNum;
        this.phoneNumber = phoneNumber;
        this.tickets = tickets;
    }
}

// let keenanrf = new Customer("Keenan", 1234567890123456, 8012345678); //tickets defaults to empty array
// console.log(keenanrf);