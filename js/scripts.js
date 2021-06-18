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