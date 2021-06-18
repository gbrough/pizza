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

function displayToppingDetails(addressBookToDisplay) {
  let toppingsList = $("ul#toppings");
  let htmlForToppingInfo = "";
  Object.keys(addressBookToDisplay.toppings).forEach(function(key) {
    const topping = addressBookToDisplay.findTopping(key);
    htmlForToppingInfo += "<li id=" + topping.id + ">" + topping.firstName + " " + topping.lastName + "</li>";
  });
  toppingsList.html(htmlForToppingInfo);
}
function showContact(contactId) {
  const topping = addressBook.findTopping(toppingId);
  $("#show-topping").show();
  $(".first-name").html(topping.firstName);
  $(".last-name").html(topping.lastName);
  $(".phone-number").html(topping.phoneNumber);
  $(".email-address").html(topping.emailAddress);
  $(".physical-address").html(topping.physicalAddress);
  let buttons = $("#buttons");
  buttons.empty();
  buttons.append("<button class='deleteButton' id=" +  + contact.id + ">Delete</button>");
}

function attachToppingListeners() {
  $("ul#toppings").on("click", "li", function() {
    showTopping(this.id);
  });

  // $("#buttons").on("click", ".deleteButton", function() {
  //   addressBook.deleteContact(this.id);
  //   $("#show-contact").hide();
  //   displayToppingDetails(addressBook);
  // });
}

let addressBook = new Pizza();

$(document).ready(function() {
  attachContactListeners();    // <--- This line is new!
  $("form#new-contact").submit(function(event) {
    event.preventDefault();
    const inputtedFirstName = $("input#new-first-name").val();
    const inputtedLastName = $("input#new-last-name").val();
    const inputtedPhoneNumber = $("input#new-phone-number").val();
    const inputtedEmailAddress = $("input#new-email-address").val();
    const inputtedPhysicalAddress = $("input#new-physical-address").val();
    $("input#new-first-name").val("");
    $("input#new-last-name").val("");
    $("input#new-phone-number").val("");
    $("input#new-email-address").val("");
    $("input#new-physical-address").val("");
    
    let newTopping = new Topping(inputtedCheese, inputtedMeat, inputtedExtra, inputtedSize);
    addressBook.addContact(newContact);
    displayToppingDetails(addressBook);  
  });
});