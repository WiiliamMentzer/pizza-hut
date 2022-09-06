// function acquireToppings(event) {
//   event.preventDefault();
//   let toppings = [];
//   document.querySelectorAll('.toppings:checked').forEach(function() {
//     toppings.push(document.getElementsByClassName(".toppings"));
//     console.log(toppings);
//   });
//   console.log(toppings);
// }

function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size
}

Pizza.prototype.acquireToppings = function(event) {
  event.preventDefault();
  let toppings = [];
  document.querySelectorAll(".toppings:checked").forEach(function(element) {
    toppings.push(element.name);
  });
  console.log(toppings);
}

window.addEventListener("load", function() {
  document.querySelector("form#SizeSelector").addEventListener("submit", Pizza.prototype.acquireToppings);
}); 