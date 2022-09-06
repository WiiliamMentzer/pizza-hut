//Business Logic

function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size
};

Pizza.prototype.toppingCost = function(toppings) {
  let cost = ("$" + ((toppings.length * 2.50) + 10));
  console.log(cost);
};

// UI Logic

function acquireToppingsAndCost(event) {
  event.preventDefault();

  let toppings = [];

  document.querySelectorAll(".toppings:checked").forEach(function(element) {
    toppings.push(element.value);
  });

  let size = document.querySelector(".sizes:checked").value;
  let pizza = new Pizza(toppings, size);
  
  console.log(toppings, size);
  console.log(pizza);

  pizza.toppingCost(toppings);

  document.querySelector('input[name="size"]:checked').checked = false;
  document.querySelectorAll(".toppings:checked").forEach(function(element) {
    element.checked = false;
  });
};

window.addEventListener("load", function() {
  document.querySelector("form#SizeSelector").addEventListener("submit", acquireToppingsAndCost);
}); 