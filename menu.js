///////////////////////////////////////////////
///////////////////MENU.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code that
    deals with food objects, arrays of objects
    and filtering those arrays. 
*/


//////////////////PROBLEM 1////////////////////
/*  
    Create an object called `pizza` that has 6
    properties: 
        - name (string)
        - price (number)
        - category (string)
        - popularity (number)
        - rating (number)
        - tags (array of strings)

    Make sure that you give your properties values
    of the correct data type.

    Note: the category is something like appetizer/entree,
    the popularity is an overall ranking, the
    rating is an average of all customer ratings, and
    for the tags, think of things that a
    user might filter by, like 'gluten-free' or
    'kids'
*/

//CODE HERE
let pizza = {
    name: "Meat Lovers",
    price: 20.00,
    category: "Entree",
    popularity: 1,
    rating: 4.8,
    tags: ["Medium", "Large", "GF Available", "Ham", "Pepperoni", "Cabanossi", "Beef", "Bacon"]
}


//////////////////PROBLEM 2////////////////////
/* 
    Let's print a few values from our pizza object.

    First, log the popularity of pizza. 
    Use dot notation to access the value.
*/

//CODE HERE
console.log(pizza.popularity);


/*
    Second, log the second tag in your pizza's
    tags array.
    Use a combination of dots and brackets to
    get the value.
*/

//CODE HERE
pizza.tags.length >= 2 ? console.log(pizza.tags[1]) : console.log("Tag does not exist");

/*
    Third, destructure the price off of the
    pizza object.
    
    Print the value of your new price variable.
*/

//CODE HERE
let {price} = pizza;
console.log(price);

/*
    Fourth, and last, destructure the category
    property.

    Print the value of your category variable. 
*/

//CODE HERE
let {category} = pizza;
console.log(category);

//////////////////PROBLEM 3////////////////////
/* 
    Create an array with about 5 objects in it.
    The objects should mimic the `pizza` object.
    Call the array `foodArr`.

    Make sure that they have slightly different
    values for price, popularity, rating, and
    tags. That way, you'll be able to use this
    data in some functions that you'll write.
*/

//CODE HERE
class Pizza {
    constructor(name, price, popularity, tags, rating, category = "Entree") {
        this.name = name;
        this.price = price;
        this.popularity = popularity;
        this.tags = tags;
        this.category = category;
        this.rating = rating;
    }
}

let foodArr = [
    new Pizza("Cheese", 17.00, 4, ["Cheese", "Mozerella", "Ricotta", "Parmesean", "GF Available", "Large"], 3.9),
    new Pizza("BBQ Chicken", 20.00, 3, ["Chicken", "Mushroom", "Cabsicum", "Onions"], 4.2),
    new Pizza("Amigos", 22.00, 14, ["Beef", "Onion", "Cabsicum", "Diced Tomatoes", "Chilli", "Beans", "Tortilla Chips", "Sour Cream"], 4.5),
    new Pizza("Popeye", 24.00, 12, ["Spinach", "Spanish Onion", "Feta", "Fresh Tomato", "Bacon", "GF Available"], 4.6),
    new Pizza("Basilica", 21.00, 7, ["Fresh Tomato", "Haloumi", "Basil", "Chilli"], 4.4)
]


//////////////////PROBLEM 4////////////////////
/* 
    Let's filter the food objects according
    to their tags.

    Write a callback function below that will
    return only food objects that have a certain tag.

    You can check for any tag that at least 1 of
    your food objects has.
*/

const filteredFood = foodArr.filter(pizza => pizza.tags.includes("Cabsicum"));
console.log(filteredFood);



//////////////////PROBLEM 5////////////////////
/* 
    Now let's write a function that's a little
    more flexible than just filtering for one
    value. We want to be able to filter for 
    food that has above a certain rating, 
    below a certain price, or any other combo.

    Write a function called `filterByProperty`
    that takes in three arguments: `property`, 
    `number`, and `type. 

    The property will be a string (rating,
    popularity, or price)

    The number will be the number that you want
    to compare against 

    The type should be 'above' or 'below' to 
    indicate whether you want to get foods with
    values that are above or below the given number
    for the given property

    Inside the function, create a variable to hold
    a filtered array

    Use the filter method to filter the foodArr

        In the callback, check if the `type` is `above`, 
        if it is, return objects whose value for the given
        property is greater than the `number` passed in

        If the type isn't `below`, return objects whose
        value for the given property is less than the 
        `number` passed in
    
    Return the filtered array from the entire function
*/

//CODE HERE

function pizzaFilterByNum(pizza, property, number, type) {
    if (property.toLowerCase() === "popularity") {
        if(type.toLowerCase() === "above") {
            return pizza[property] <= number;
        } else if (type.toLowerCase() === "below") {
            return pizza[property] > number;
        }
    }else {
        if(type.toLowerCase() === "above") {
            return pizza[property] >= number;
        } else if (type.toLowerCase() === "below") {
            return pizza[property] < number;
        }
    }
}

function pizzaFilterTag(pizza, tagName) {
    return pizza.tags.includes(tagName);
}

const filterByProperty = (property, number = 0, type = "above", tag = "") => {
    let filteredArr;
    if(property === "tags") {
        filteredArr = foodArr.filter(pizza => pizzaFilterTag(pizza, tag))
    } else {
       filteredArr = foodArr.filter(pizza => pizzaFilterByNum(pizza, property, number, type));
    }
    return filteredArr;
}

/*
    Invoke the `filterByProperty` function passing
    in a value for each paramter.

    You'll have to console.log to see the filtered array
*/

//CODE HERE
console.log(filterByProperty("popularity", 5, "Above"));
console.log(filterByProperty("rating", 4.0, "BELOW"));
console.log(filterByProperty("tags", 0, "ABOVE", "Fresh Tomato"));
console.log(filterByProperty("rating", 4.4));