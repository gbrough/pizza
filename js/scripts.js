// Business Logic for PizzaParlor ---------
function PizzaParlor() {
  this.toppings = {};
  this.currentId = 0;
}

PizzaParlor.prototype.addTopping = function(topping) {
  topping.id = this.assignId();
  this.toppings[topping.id] = topping;
};

PizzaParlor.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
};

PizzaParlor.prototype.findTopping = function(id) {
  if (this.toppings[id] != undefined) {
    return this.toppings[id];
  }
  return false;
};

PizzaParlor.prototype.deleteTopping = function(id) {
  if (this.toppings[id] === undefined) {
    return false;
  }
  delete this.toppings[id];
  return true;
};

// Business Logic for Toppings ---------
function Topping(toppingCheese, toppingMeat, toppingExtra, pizzaSize) {
  this.toppingCheese = toppingCheese;
  this.toppingMeat = toppingMeat;
  this.toppingExtra = toppingExtra;
  this.pizzaSize = pizzaSize;
}

// Topping.prototype.orderSummary = function() {
//   return this.toppingCheese + " " + this.toppingMeat + this.toppingExtra;
// };

function displayToppingDetails(pizzaParlorToDisplay) {
  let toppingsList = $("ul#toppings");
  let htmlForToppingInfo = "";
  Object.keys(pizzaParlorToDisplay.toppings).forEach(function(key) {
    const topping = pizzaParlorToDisplay.findTopping(key);
    htmlForToppingInfo += "<li id=" + topping.id + ">" + topping.toppingCheese + " " + topping.toppingMeat + "</li>";
  });
  toppingsList.html(htmlForToppingInfo);
}
function showTopping(toppingId) {
  const topping = pizzaParlor.findTopping(toppingId);
  $("#show-order").show();
  $(".topping-cheese").html(topping.toppingCheese);
  $(".topping-meat").html(topping.toppingMeat);
  $(".topping-extra").html(topping.toppingExtra);
  $(".pizza-size").html(topping.pizzaSize);
  let buttons = $("#buttons");
  buttons.empty();
  buttons.append("<button class='deleteButton' id=" +  + topping.id + ">Delete</button>");
}

function attachToppingListeners() {
  $("ul#toppings").on("click", "li", function() {
    showTopping(this.id);
  });

  $("#buttons").on("click", ".deleteButton", function() {
    pizzaParlor.deleteTopping(this.id);
    $("#show-order").hide();
    displayToppingDetails(pizzaParlor);
  });
}

let pizzaParlor = new PizzaParlor();

$(document).ready(function() {
  attachToppingListeners();    
  $("form#new-topping").submit(function(event) {
    event.preventDefault();
    const inputtedToppingCheese = $("input#new-topping-cheese").val();
    const inputtedToppingMeat = $("input#new-topping-meat").val();
    const inputtedToppingExtra = $("input#new-topping-extra").val();
    const inputtedPizzaSize = $("input#new-pizza-size").val();
    $("input#new-topping-cheese").val("");
    $("input#new-topping-meat").val("");
    $("input#new-topping-extra").val("");
    $("input#new-pizza-size").val("");
    
    let newTopping = new Topping(inputtedToppingCheese, inputtedToppingMeat, inputtedToppingExtra, inputtedPizzaSize);
    pizzaParlor.addTopping(newTopping);
    displayToppingDetails(pizzaParlor);  
  });
});