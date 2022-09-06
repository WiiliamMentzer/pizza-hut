function acquireToppings(event) {
  event.preventDefault();
  let toppings = [];
  document.querySelectorAll('.toppings:checked').forEach(function() {
    toppings.push(document.getElementsByClassName(".toppings"));
  });
  console.log(toppings);
}

function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size
}

let myPizza = new Pizza(["pepperoni", "bacon", "jalapenos"], "large");

window.addEventListener("load", function() {
  document.querySelector("form#toppingSelector").addEventListener("submit", acquireToppings);
}); 