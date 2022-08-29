function acquireToppings(event) {
  event.preventDefault();
  let toppings = [];
  document.querySelector('.toppings').checked.each(function() {
    toppings.push(this.value);
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