const userInput = document.getElementById("user-input");
const allItems = document.getElementsByClassName("all-items")[0];
const alert = document.getElementById("alert");


function addItem(){

    if(userInput.value == ''){
        alert.innerHTML = "This field cannot be empty";
    }else{
    const divItem = document.createElement("div");
    divItem.className = "item";
    divItem.innerHTML = "<div>" + userInput.value + "</div>";

    allItems.appendChild(divItem);

    const divAllIcons = document.createElement("div");
    divAllIcons.className = "icons";

    divItem.appendChild(divAllIcons);

    const checkIcon = document.createElement("i");
    checkIcon.className = "fas fa-check-square";

    divAllIcons.appendChild(checkIcon);

    checkIcon.addEventListener("click", function(){
        checkIcon.classList.toggle('color-clicked');
    })

    const trashIcon = document.createElement("i");
    trashIcon.className = "fas fa-trash";
    divAllIcons.appendChild(trashIcon);
    trashIcon.addEventListener("click", function(){
        divItem.remove();
    })

    if(checkIcon.style.color == "limegreen"){
        checkIcon.addEventListener("click", function(){
        checkIcon.style.color = "grey";})}

   userInput.value = '';
    alert.innerHTML = '';

}

}
