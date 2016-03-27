// Element Variables

var newItem = document.getElementById('new_item');
var addButton = document.getElementById('submit-button');
var shoppingList = document.getElementById('shopping-list');
var deletedShoppingList = document.getElementById('deleted-shopping-list');
var savedShoppingList = document.getElementById('saved-shopping-list');
var completeShoppingList = document.getElementById('complete-shopping-list');
var homeButton = document.getElementById('home');
var deletedShoppingListButton = document.getElementById('deleted');
var savedShoppingListButton = document.getElementById('delayed');
var completedShoppingListButton = document.getElementById('complete');
var shoppingListHeader = document.getElementById('shop-head');
var deletedItemsHeader = document.getElementById('delete-head');
var savedItemsHeader = document.getElementById('save-head');
var completedItemsHeader = document. getElementById('bought-head');

// Add item to list

var createNewShoppingListItem = function(newItemUserInput) {
  var listItem = document.createElement("li");
  var checkBox = document.createElement("input");
  var userInput = document.createElement("label");
  var buttonDiv = document.createElement('div');
  var delButton = document.createElement('button');
  var faIconDelete = document.createElement('i');
  var saveButton = document.createElement('button');
  var faIconSave = document.createElement('i');


  checkBox.type = "checkbox";

  buttonDiv.className = "item-button";

  userInput.innerText = newItemUserInput;

  delButton.className = "delete-button";
  faIconDelete.title = "Delete";
  faIconDelete.className = "fa fa-trash";

  saveButton.className = "save-button";
  faIconSave.title = "Save";
  faIconSave.className= "fa fa-clock-o";

  delButton.appendChild(faIconDelete);
  saveButton.appendChild(faIconSave);

  buttonDiv.appendChild(delButton);
  buttonDiv.appendChild(saveButton);

  listItem.appendChild(checkBox);
  listItem.appendChild(userInput);
  listItem.appendChild(buttonDiv);

  return listItem;

};

var addItem = function () {
  var listItem = createNewShoppingListItem(newItem.value);
  shoppingList.appendChild(listItem);
  
  newItem.value = "";

  buttonCheckboxFunc(listItem);
};

addButton.addEventListener("click", addItem);

newItem.onkeydown = function(){
    if(window.event.keyCode === 13){
        addItem();
    }
};

// Buttons and Checkbox

var buttonCheckboxFunc = function(groceryListItem) {
  var deleteButton = groceryListItem.getElementsByClassName("delete-button")[0];
  var saveButton = groceryListItem.getElementsByClassName("save-button")[0];
  var checkBox = groceryListItem.getElementsByTagName('input')[0];

  deleteButton.onclick = deleteGroceryItem;
  saveButton.onclick = saveGroceryItem;
  checkBox.onclick = completeGroceryItem;

};


var deleteGroceryItem = function () {
  listItem = this.parentNode.parentNode;
  parent = this.parentNode.parentNode.parentNode;
  
  deletedShoppingList.appendChild(listItem);
  
  parent.removeChild(listItem);
};

var saveGroceryItem = function () {
  listItem = this.parentNode.parentNode;
  parent = this.parentNode.parentNode.parentNode;
  savedShoppingList.appendChild(listItem);
  parent.removeChild(listItem);
};

var completeGroceryItem = function () {
  listItem = this.parentNode;
  parent = listItem.parentNode;
  completeShoppingList.appendChild(listItem);
  parent.removeChild(listItem);
};

var showShoppingList = function () {
  shoppingList.style.display = "block";
  shoppingListHeader.style.display ="inline";
  deletedItemsHeader.style.display ="none";
  savedItemsHeader.style.display = "none";
  completedItemsHeader.style.display = "none";
  savedShoppingList.style.display = "none";
  completeShoppingList.style.display = "none";
  deletedShoppingList.style.display = "none";
};

var showDeletedList = function () {
  deletedShoppingList.style.display = "block";
  shoppingListHeader.style.display = "none";
  deletedItemsHeader.style.display = "inline";
  savedItemsHeader.style.display = "none";
  completedItemsHeader.style.display = "none";
  shoppingList.style.display = "none";
  savedShoppingList.style.display = "none";
  completeShoppingList.style.display = "none";
 };

var showDelayedList = function () {
  savedShoppingList.style.display = "block";
  shoppingListHeader.style.display = "none";
  deletedItemsHeader.style.display = "none";
  savedItemsHeader.style.display = "inline";
  completedItemsHeader.style.display = "none";
  shoppingList.style.display = "none";
  completeShoppingList.style.display = "none";
  deletedShoppingList.style.display = "none";
};

var showCompletedList = function () {
  completeShoppingList.style.display = "block";
  shoppingList.style.display = "none";
  deletedItemsHeader.style.display = "none";
  savedItemsHeader.style.display = "none";
  completedItemsHeader.style.display = "inline";
  deletedShoppingList.style.display = "none";
  savedShoppingList.style.display = "none";
  shoppingListHeader.style.display = "none";
};

homeButton.addEventListener('click', showShoppingList);
deletedShoppingListButton.addEventListener('click', showDeletedList);
savedShoppingListButton.addEventListener('click', showDelayedList);
completedShoppingListButton.addEventListener('click', showCompletedList);














