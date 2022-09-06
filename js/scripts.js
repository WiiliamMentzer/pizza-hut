//Business Logic

function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size
};

Pizza.prototype.toppingCost = function(toppings) {
  let cost = ("$" + ((toppings.length * 2.50) + 10));
  console.log(cost);
  return(cost);
};

// UI Logic

function acquireToppingsAndCost(event) {
  event.preventDefault();

  let toppings = [];

  if (document.querySelector(".sizes:checked") === null || document.querySelectorAll(".toppings:checked") === null) {
    document.getElementById("error").removeAttribute("class");
    return;
  } else {
    document.getElementById("error").setAttribute("class", "hidden");
  };

  document.querySelectorAll(".toppings:checked").forEach(function(element) {
    toppings.push(element.value);
  });

  document.getElementById("myToppings").innerHTML = "";
  document.getElementById("mySize").innerHTML = "";
  document.getElementById("myCost").innerHTML = "";

  let size = document.querySelector(".sizes:checked").value;
  let pizza = new Pizza(toppings, size);
  let pizzaToppingsDisplay = document.getElementById("myToppings");
  let pizzaSizeDisplay = document.getElementById("mySize");
  let pizzaCostDisplay = document.getElementById("myCost");

  toppings.forEach((element)=>{
    let li = document.createElement("li");
    li.innerText = element;
    pizzaToppingsDisplay.appendChild(li);
  })

  let liSize = document.createElement("li");
  liSize.innerText = size;
  pizzaSizeDisplay.appendChild(liSize);

  let liCost = document.createElement("li");
  liCost.innerText = pizza.toppingCost(toppings);
  pizzaCostDisplay.appendChild(liCost);

  console.log(pizza);

  document.querySelector('input[name="size"]:checked').checked = false;
  document.querySelectorAll(".toppings:checked").forEach(function(element) {
    element.checked = false;
  });
};

window.addEventListener("load", function() {
  document.querySelector("form#SizeSelector").addEventListener("submit", acquireToppingsAndCost);
}); 