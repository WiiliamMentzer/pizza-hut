function acquireToppings(event) {
  event.preventDefault();
  let toppings = [];
  document.querySelectorAll('.toppings:checked').forEach(function() {
    toppings.push(document.getElementsByClassName(".toppings"));
    console.log(toppings);
  });
  console.log(toppings);
}

function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size
}


window.addEventListener("load", function() {
  document.querySelector("form#SizeSelector").addEventListener("submit", acquireToppings);
}); 