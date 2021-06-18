// Business Logic for PizzaParlor ---------
function PizzaParlor() {
  this.toppings = {};
  this.currentId = 0;
}

PizzaParlor.prototype.addTopping = function(contact) {
  contact.id = this.assignId();
  this.toppings[contact.id] = contact;
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
function Contact(firstName, lastName, phoneNumber, emailAddress) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.phoneNumber = phoneNumber;
  this.emailAddress = emailAddress;

}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
};

function displayToppingDetails(pizzaParlorToDisplay) {
  let contactsList = $("ul#toppings");
  let htmlForContactInfo = "";
  Object.keys(pizzaParlorToDisplay.toppings).forEach(function(key) {
    const contact = pizzaParlorToDisplay.findTopping(key);
    htmlForContactInfo += "<li id=" + contact.id + ">" + contact.firstName + " " + contact.lastName + "</li>";
  });
  contactsList.html(htmlForContactInfo);
}
function showTopping(contactId) {
  const contact = pizzaParlor.findTopping(contactId);
  $("#show-order").show();
  $(".topping-cheese").html(contact.firstName);
  $(".topping-meat").html(contact.lastName);
  $(".topping-extra").html(contact.phoneNumber);
  $(".pizza-size").html(contact.emailAddress);
  let buttons = $("#buttons");
  buttons.empty();
  buttons.append("<button class='deleteButton' id=" +  + contact.id + ">Delete</button>");
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
    
    let newContact = new Contact(inputtedToppingCheese, inputtedToppingMeat, inputtedToppingExtra, inputtedPizzaSize);
    pizzaParlor.addTopping(newContact);
    displayToppingDetails(pizzaParlor);  
  });
});