var newItem = document.getElementById('new_item');
var addButton = document.getElementById('submit-button');
var shoppingList = document.getElementById('shopping-list');

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

console.log (listItem);

return listItem;

};

var addItem = function () {
  var listItem = createNewShoppingListItem(newItem.value);
  shoppingList.appendChild(listItem);
  newItem.value = "";
};

addButton.addEventListener("click", addItem);

newItem.onkeydown = function(){
    if(window.event.keyCode === 13){
        addItem();
    }
};



// <li>
//   <input type="checkbox"/>
//   <label>Chicken</label>
//   <div class="item-buttons">
//     <button class="delete-button">
//       <i title="Delete" class="fa fa-trash"></i>
//     </button>
//     <button class="save-button">
//       <i title="Save" class="fa fa-clock-o"></i>
//     </button>
//   </div>
// </li>
