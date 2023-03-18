// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected;
let tableTop = document.getElementById("grid");
let cellString = `<td onclick="alert('Clicked a table cell');"></td>`

// Add a row
function addR() {
    let cells = "";
    if(tableTop.childElementCount > 0){
        let table = tableTop.firstElementChild;
        if(table.childElementCount > 0){
            for(i=0; i<table.firstChild.childElementCount; i++){
                cells += cellString;
            }
            table.insertAdjacentHTML("beforeend", `<tr>${cells}</tr>`);      
        }else{
            table.insertAdjacentHTML("beforeend", `<tr>${cells}</tr>`);
        }
    }else{
        tableTop.insertAdjacentHTML("beforeend", `<tr>${cells}</tr>`);
    }
    
}

// Add a column
function addC() {
    if(tableTop.childElementCount > 0){
        let table = tableTop.firstElementChild;
        if(table.childElementCount > 0){
            for(let i = 0; i<table.childElementCount; i++){
                table.children[i].insertAdjacentHTML("beforeend", cellString);
            }    
        }else{
            addR();
            addC();
        }
    }else{
        addR();
        addC();
    }
}

// Remove a row
function removeR() {
    if(tableTop.childElementCount > 0){
        table = tableTop.firstElementChild;
        if(table.childElementCount > 0){
            table.removeChild(table.lastChild); 
        }
    }
}

// Remove a column
function removeC() {
    if(tableTop.childElementCount > 0){
        let table = tableTop.firstElementChild;
        for(let i = 0; i<table.childElementCount; i++){
            table.children[i].removeChild(table.children[i].lastChild);
        }
    }
}

// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}

// Fill all uncolored cells
function fillU(){
    alert("Clicked Fill All Uncolored"); // Replace this line with your code.
}

// Fill all cells
function fillAll(){
    alert("Clicked Fill All"); // Replace this line with your code.
}

// Clear all cells
function clearAll(){
    alert("Clicked Clear All"); // Replace this line with your code.
}