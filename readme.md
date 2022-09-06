<!-- Describe:

Test: 
Code: 
Expected Output: -->

Describe: Pizza()

Test: "this should return the pizza object with toppings and size"
Code: let myPizza = new Pizza([pepperoni, bacon, jalapenos], "large");
Expected Output: Pizza{toppings:[pepperoni, bacon, jalapenos], size:"large" }

Describe: acquireToppings()

Test: "it should return the checkboxed values into an array 
Code: console.log(toppings);
Expected Output: ["pepperoni", "bacon", "jalapenos"]

Describe Pizza.Prototype.acquireToppings()

Test: "it should read all checked boxes values and return the word Topping for number of boxes selected"
Code: document.querySelectorAll('.toppings:checked').forEach
Expected Output: [Topping, Topping, Topping, Topping]


