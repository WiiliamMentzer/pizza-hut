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

Test: "it should read all checked boxes values and return the toppings selected"
Code: document.querySelectorAll('.toppings:checked').forEach
Expected Output: ['pepperoni', 'Sausage', 'Bacon', 'jalapeno']

Describe: Pizza.prototype.toppingCost();

Test: "it should collect the length of the toppings array and calculate the cost of the pizza and output it to console"
Code: toppings = ["Pepperoni"]
let cost = ("$" + ((toppings.length * 2.50) + 10));
console.log(cost);
Expected Output: $ 12.5

# pizza-hut

#### By _William Mentzer_

#### _pizza-hut_

## _Github Pages Link_

	N/A

## Technologies Used

* HTML
* Javascipt
* Bootstrap

## Description

_Creates a pizza via checking boxes and then outputting the pizza to console._

## Setup/Installation Requirements

* Clone Repository to Desktop.
* Navigate to top level of the directory.
* Open pizza-hut/index.html in browser.

## Known Bugs

* _trying to access pizza out of eventListener will show up as "undefined"_

## License

MIT License

Copyright (c) [2022] [William Mentzer]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

Copyright (c) _9/6/2022_ _William Mentzer_