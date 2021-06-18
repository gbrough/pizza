function Pizza() {
  this.toppings = {};
  this.currentId = 0;
}

Pizza.prototype.addTopping = function(topping) {
  topping.id = this.assignId();
  this.toppings[topping.id] = topping;
};

Pizza.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
};

Pizza.prototype.findTopping = function(id) {
  if (this.toppings[id] != undefined) {
    return this.toppings[id];
  }
  return false;
};

// Business Logic for Toppings ---------
function Topping(cheese, meat, extra) {
  this.cheese = cheese;
  this.meat = meat;
  this.extra = extra;
}

Topping.prototype.orderSummary = function() {
  return this.cheese + " " + this.meat + " " + this.chesse;
};

function displayToppingDetails(pizzaOrderToDisplay) {
  let toppingsList = $("ul#toppings");
  let htmlForToppingInfo = "";
  Object.keys(pizzaOrderToDisplay.toppings).forEach(function(key) {
    const topping = pizzaOrderToDisplay.findTopping(key);
    htmlForToppingInfo += "<li id=" + topping.id + ">" + topping.cheese + " " + topping.meat + "</li>";
  });
  toppingsList.html(htmlForToppingInfo);
}
function showTopping(toppingId) {
  const topping = pizzaOrder.findTopping(toppingId);
  $("#show-topping").show();
  $(".topping-cheese").html(topping.meat);
  $(".topping-meat").html(topping.cheese);
  $(".topping-extra").html(topping.extra);
  $(".topping-size").html(topping.size);
  let buttons = $("#buttons");
  buttons.empty();
  // buttons.append("<button class='deleteButton' id=" +  + topping.id + ">Delete</button>");
}

function attachToppingListeners() {
  $("ul#toppings").on("click", "li", function() {
    showTopping(this.id);
  });

  // $("#buttons").on("click", ".deleteButton", function() {
  //   pizzaOrder.deleteTopping(this.id);
  //   $("#show-Topping").hide();
  //   displayToppingDetails(pizzaOrder);
  // });
}

let pizzaOrder = new Pizza();

$(document).ready(function() {
  attachToppingListeners();    
  $("form#order-topping").submit(function(event) {
    event.preventDefault();
    const inputtedCheese = $("input#order-cheese").val();
    const inputtedMeat = $("input#order-meat").val();
    const inputtedExtra = $("input#order-extra").val();
    const inputtedSize = $("input#order-size").val();
    $("input#order-chease").val("");
    $("input#order-meat").val("");
    $("input#order-extra").val("");
    $("input#order-size").val("");
    
    let newTopping = new Topping(inputtedCheese, inputtedMeat, inputtedExtra, inputtedSize);
    pizzaOrder.addTopping(newTopping);
    displayToppingDetails(pizzaOrder);  
  });
});