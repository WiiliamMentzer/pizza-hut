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
  // document.querySelectorAll('.toppings:checked').forEach(function() {
  //   toppings.push(document.getElementsByClassName(".toppings"));
  //   console.log(toppings);
  // });
  document.querySelectorAll('.toppings:checked').forEach(function() {
    toppings.push("topping");
  });
  console.log(toppings);
}

window.addEventListener("load", function() {
  document.querySelector("form#SizeSelector").addEventListener("submit", Pizza.prototype.acquireToppings);
}); 