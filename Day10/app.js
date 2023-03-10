// ****** SELECT ITEMS **********
const alert = document.querySelector(".alert");
const form = document.querySelector(".toDo-form");
const toDo = document.getElementById("toDo");
const submitBtn = document.querySelector(".submit-btn");
const container = document.querySelector(".toDo-container");
const list = document.querySelector(".toDo-list");
const clearBtn = document.querySelector(".clear-btn");

// edit option
let editElement;
let editFlag = false;
let editID = "";

// ****** EVENT LISTENERS **********
//submit form
form.addEventListener("submit", addItem);
//clear items
clearBtn.addEventListener('click', clearItems);
// display items onload
window.addEventListener("DOMContentLoaded", setupItems);

// ****** FUNCTIONS **********
function addItem(e) {
  e.preventDefault();
  const value = toDo.value;
  const id = new Date().getTime().toString();
  if (value && !editFlag) {
    const element = document.createElement("article");
    //add class
    element.classList.add("toDo-item");
    //add id
    const attr = document.createAttribute("data-id");
    attr.value = id;

    element.setAttributeNode(attr);
    element.innerHTML = `<p class="title">${value}</p>
                         <div class="btn-container">
                            <button type="button" class="edit-btn">
                                <i class="fas fa-edit"></i>
                            </button>
                            <button type="button" class="delete-btn">
                                <i class="fas fa-trash"></i>
                            </button>
                         </div>`;

    const deleteBtn=element.querySelector('.delete-btn');                     
    const editBtn = element.querySelector('.edit-btn'); 
    deleteBtn.addEventListener('click',deleteItem);                    
    editBtn.addEventListener('click',editItem);                    
    //append child
    list.appendChild(element)
    //display alert 
    displayAlert('item added to the list', 'success')
    //show container
    container.classList.add("show-container")
    //add to localstorage
    addToLocalStorage(id,value);
    //set back to default
    setBackToDefault();
} else if (value && editFlag) {
    editElement.innerHTML = value;
    displayAlert('value changed', 'success');
    //edit local storage
    editLocalStorage(editID,value);
    setBackToDefault();
} else {
    displayAlert("Empty Value", "danger");
  }
}
//display alert
function displayAlert(text, action) {
  alert.textContent = text;
  alert.classList.add(`alert-${action}`);

  //remove alert
  setTimeout(() => {
    alert.textContent = "";
    alert.classList.remove(`alert-${action}`);
  }, 1000);
}
//deleteItem
function deleteItem(e){
    const element = e.currentTarget.parentElement.parentElement;
    const id = element.dataset.id;
    list.removeChild(element);
    console.log(list.children.length);
    if(list.children.length === 1){
        container.classList.remove("show-container");
    }
    displayAlert('item removed', 'danger');
    setBackToDefault();
    //remove from localstorage 
    removeFromLocalStorage(id)
}
//editItem
function editItem(e){
    const element = e.currentTarget.parentElement.parentElement;
    //set edit item
    editElement = e.currentTarget.parentElement.previousElementSibling;
    //setform value
    toDo.value= editElement.innerHTML;
    editFlag = true;
    editID = element.dataset.id;
    submitBtn.textContent = "Edit";
}

//clear items
function clearItems(){
    const items = document.querySelectorAll('.toDo-item');
    if(items.length>0){
        items.forEach((item)=>{
            list.removeChild(item);
        })
    }
    container.classList.remove("show-container");
    displayAlert('Empty list', 'danger')
    // localStorage.removeItem('list');
    setBackToDefault();
    localStorage.removeItem("list");
}


//set back to default
function setBackToDefault(){
    toDo.value = '';
    editFlag = false;
    editID = "";
    submitBtn.textContent = "Add"
}
// ****** LOCAL STORAGE **********
function addToLocalStorage(id,value){
    const toDo = {id,value};
    let items = getLocalStorage();
    items.push(toDo);
    localStorage.setItem("list", JSON.stringify(items));
}
function getLocalStorage(){
    return localStorage.getItem("list") ? JSON.parse(localStorage.getItem("list")) : [];
}
function removeFromLocalStorage(id){
    let items = getLocalStorage();
    items = items.filter((item)=>{
        if(item.id !== id){
            return item;
        }
    });
    localStorage.setItem("list", JSON.stringify(items));
}

function editLocalStorage(id, value){
    let items = getLocalStorage();
    
    items = items.map((item)=>{
        if(item.id === id){
            item.value = value;
        }
        return item;
    })
    localStorage.setItem("list", JSON.stringify(items));
}

// ****** SETUP ITEMS **********
function setupItems(){
    let items = getLocalStorage();

    if(items.length > 0){
        items.forEach(item=>{
            createListItem(item.id, item.value)
        })
        container.classList.add("show-container");
    }
}

function createListItem(id,value){  
    const element = document.createElement("article");
    //add class
    element.classList.add("toDo-item");
    //add id
    const attr = document.createAttribute("data-id");
    attr.value = id;

    element.setAttributeNode(attr);
    element.innerHTML = `<p class="title">${value}</p>
                         <div class="btn-container">
                            <button type="button" class="edit-btn">
                                <i class="fas fa-edit"></i>
                            </button>
                            <button type="button" class="delete-btn">
                                <i class="fas fa-trash"></i>
                            </button>
                         </div>`;

    const deleteBtn=element.querySelector('.delete-btn');                     
    const editBtn = element.querySelector('.edit-btn'); 
    deleteBtn.addEventListener('click',deleteItem);                    
    editBtn.addEventListener('click',editItem);                    
    //append child
    list.appendChild(element)
}