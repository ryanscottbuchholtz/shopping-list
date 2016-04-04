// Element Variables

var newItem = document.getElementById('new_item');

// Buttons
var homeButton = document.getElementById('home');
var deletedShoppingListButton = document.getElementById('deleted');
var savedShoppingListButton = document.getElementById('delayed');
var completedShoppingListButton = document.getElementById('complete');
var addButton = document.getElementById('submit-button');

// Lists
var allLists = document.getElementsByClassName('shop-list');
var shoppingList = document.getElementById('shopping-list');
var deletedShoppingList = document.getElementById('deleted-shopping-list');
var savedShoppingList = document.getElementById('saved-shopping-list');
var completeShoppingList = document.getElementById('complete-shopping-list');

// Headers
var allHeaders = document.getElementsByClassName('list-head');
var shoppingListHeader = document.getElementById('shop-head');
var deletedItemsHeader = document.getElementById('delete-head');
var savedItemsHeader = document.getElementById('save-head');
var completedItemsHeader = document.getElementById('bought-head');

// Add item to list

var createNewShoppingListItem = function(newItemUserInput) {
  var listItem = document.createElement("li");
      checkBox = document.createElement("input");
  var userInput = document.createElement("label");
  var buttonDiv = document.createElement('div');
      homeButton = document.createElement('button');
  var faIconHome = document.createElement('i');
      delButton = document.createElement('button');
  var faIconDelete = document.createElement('i');
      saveButton = document.createElement('button');
  var faIconSave = document.createElement('i');


  checkBox.type = "checkbox";

  buttonDiv.className = "item-button";

  userInput.innerText = newItemUserInput;

  homeButton.className = "home-button";
  faIconHome.title = "Home";
  faIconHome.className = "fa fa-home";
  homeButton.style.display = "none";

  delButton.className = "delete-button";
  faIconDelete.title = "Delete";
  faIconDelete.className = "fa fa-trash";

  saveButton.className = "save-button";
  faIconSave.title = "Save";
  faIconSave.className= "fa fa-clock-o";

  homeButton.appendChild(faIconHome);
  delButton.appendChild(faIconDelete);
  saveButton.appendChild(faIconSave);

  buttonDiv.appendChild(homeButton);
  buttonDiv.appendChild(delButton);
  buttonDiv.appendChild(saveButton);

  listItem.appendChild(checkBox);
  listItem.appendChild(userInput);
  listItem.appendChild(buttonDiv);

  return listItem;

};

function validateInput() {
  if (newItem.value === '') {
    alert("New item must be entered");
    return false;
  }
  
}

var addItem = function () {

  if (newItem.value === "") {
    alert("New item must be entered");
    return false;
  }

  var listItem = createNewShoppingListItem(newItem.value);
  shoppingList.appendChild(listItem);
  
  // store the new item in shopping list session storage

  newItem.value = "";

  buttonCheckboxFunc(listItem);
};

// addButton.addEventListener("click", addItem);

// newItem.onkeyup = function(){
//     if(window.event.keyCode === 13){    //remove return keycode and write different code to accept return/submit
//         addItem();
//     }
// };

// Buttons and Checkbox

var buttonCheckboxFunc = function(groceryListItem) {
  var deleteButton = groceryListItem.getElementsByClassName("delete-button")[0];
  var saveButton = groceryListItem.getElementsByClassName("save-button")[0];
  var checkBox = groceryListItem.getElementsByTagName('input')[0];

  deleteButton.onclick = deleteGroceryItem;
  saveButton.onclick = saveGroceryItem;
  checkBox.onclick = completeGroceryItem;
  homeButton.onclick = groceryItemHome;

};


var groceryItemHome = function () {
  listItem = this.parentNode.parentNode;
  parent = this.parentNode.parentNode.parentNode;
  shoppingList.appendChild(listItem);
  homeButton.style.display = "inline";
  delButton.style.display = "inline";
  saveButton.style.display = "inline";
  checkBox.style.display = "inline";
  checkBox.checked = false;
  parent.removeChild(listItem);
};

var deleteGroceryItem = function () {
  listItem = this.parentNode.parentNode;
  parent = this.parentNode.parentNode.parentNode;
  homeButton.style.display = "inline";
  deletedShoppingList.appendChild(listItem);
  delButton.style.display = 'none';
  checkBox.style.display = 'none';
  saveButton.style.display = 'inline';
  // remove item from shopping list session storage
  // add item to deleted item session storage
  
  parent.removeChild(listItem);
};

var saveGroceryItem = function () {
  listItem = this.parentNode.parentNode;
  parent = this.parentNode.parentNode.parentNode;
  homeButton.style.display = "inline";
  delButton.style.display = "inline";
  saveButton.style.display = "none";
  checkBox.style.display = "none";
  savedShoppingList.appendChild(listItem);
  // remove item from current list session storage
  // add item to saved item session storage
  parent.removeChild(listItem);
};

var completeGroceryItem = function () {
  listItem = this.parentNode;
  parent = listItem.parentNode;
  completeShoppingList.appendChild(listItem);
  checkBox.style.display = "none";
  homeButton.style.display = "inline";
  delButton.style.display = "inline";
  saveButton.style.display = "inline";
  // remove item from current list session storage
  // add item to complete item session storage
  parent.removeChild(listItem);
};

var showShoppingList = function () {
  showThisListAndHeader(shoppingList, shoppingListHeader);
};

var showDeletedList = function () {
  showThisListAndHeader(deletedShoppingList, deletedItemsHeader);
 };

var showDelayedList = function () {
  showThisListAndHeader(savedShoppingList, savedItemsHeader);
};

var showCompletedList = function () {
  showThisListAndHeader(completeShoppingList, completedItemsHeader);
};

// Show Hide List/Header Function

function showThisListAndHeader(listToShow, headerToShow) {
  var showList = listToShow;
  var showHead = headerToShow;

    for (i = 0; i < allLists.length; i++) {
      allLists[i].style.display = "none";
    }

    for (x = 0; x < allHeaders.length; x++) {
        allHeaders[x].style.display = "none";
      }
 
  showList.style.display = "block";
  showHead.style.display = "inline";
  
}

homeButton.addEventListener('click', showShoppingList);
deletedShoppingListButton.addEventListener('click', showDeletedList);
savedShoppingListButton.addEventListener('click', showDelayedList);
completedShoppingListButton.addEventListener('click', showCompletedList);
