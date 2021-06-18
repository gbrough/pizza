// Business Logic for AddressBook ---------
function AddressBook() {
  this.contacts = {};
  this.currentId = 0;
}

AddressBook.prototype.addContact = function(contact) {
  contact.id = this.assignId();
  this.contacts[contact.id] = contact;
};

AddressBook.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
};

AddressBook.prototype.findContact = function(id) {
  if (this.contacts[id] != undefined) {
    return this.contacts[id];
  }
  return false;
};

AddressBook.prototype.deleteContact = function(id) {
  if (this.contacts[id] === undefined) {
    return false;
  }
  delete this.contacts[id];
  return true;
};

// Business Logic for Contacts ---------
function Contact(firstName, lastName, phoneNumber, emailAddress, physicalAddress) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.phoneNumber = phoneNumber;
  this.emailAddress = emailAddress;
  this.physicalAddress = physicalAddress;
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
};

function displayContactDetails(addressBookToDisplay) {
  let contactsList = $("ul#contacts");
  let htmlForContactInfo = "";
  Object.keys(addressBookToDisplay.contacts).forEach(function(key) {
    const contact = addressBookToDisplay.findContact(key);
    htmlForContactInfo += "<li id=" + contact.id + ">" + contact.firstName + " " + contact.lastName + "</li>";
  });
  contactsList.html(htmlForContactInfo);
}
function showContact(contactId) {
  const contact = addressBook.findContact(contactId);
  $("#show-order").show();
  $(".topping-cheese").html(contact.firstName);
  $(".topping-meat").html(contact.lastName);
  $(".topping-extra").html(contact.phoneNumber);
  $(".pizza-size").html(contact.emailAddress);
  $(".physical-address").html(contact.physicalAddress);
  let buttons = $("#buttons");
  buttons.empty();
  buttons.append("<button class='deleteButton' id=" +  + contact.id + ">Delete</button>");
}

function attachContactListeners() {
  $("ul#contacts").on("click", "li", function() {
    showContact(this.id);
  });

  $("#buttons").on("click", ".deleteButton", function() {
    addressBook.deleteContact(this.id);
    $("#show-order").hide();
    displayContactDetails(addressBook);
  });
}


let addressBook = new AddressBook();

$(document).ready(function() {
  attachContactListeners();    // <--- This line is new!
  $("form#new-topping").submit(function(event) {
    event.preventDefault();
    const inputtedFirstName = $("input#new-topping-cheese").val();
    const inputtedLastName = $("input#new-topping-meat").val();
    const inputtedPhoneNumber = $("input#new-topping-extra").val();
    const inputtedEmailAddress = $("input#new-pizza-size").val();
    const inputtedPhysicalAddress = $("input#new-physical-address").val();
    $("input#new-topping-cheese").val("");
    $("input#new-topping-meat").val("");
    $("input#new-topping-extra").val("");
    $("input#new-pizza-size").val("");
    $("input#new-physical-address").val("");
    
    let newContact = new Contact(inputtedFirstName, inputtedLastName, inputtedPhoneNumber, inputtedEmailAddress, inputtedPhysicalAddress);
    addressBook.addContact(newContact);
    displayContactDetails(addressBook);  
  });
});