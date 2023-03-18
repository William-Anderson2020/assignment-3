// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected;
let tableTop = document.getElementById("grid");
let cellString = `<td onclick="fillC(this);"></td>`

// Add a row
function addR() {
    let cells = "";
    //Check if table is empty
    if(tableTop.childElementCount > 0){
        let table = tableTop.firstElementChild;
        //Check if tbody is empty
        if(table.childElementCount > 0){
            //Counts existing cells, adds the corresponding amount of cells to 'cells'
            for(i=0; i<table.firstChild.childElementCount; i++){
                cells += cellString;
            }
            //Insert row and correct number of cells into the table
            table.insertAdjacentHTML("beforeend", `<tr>${cells}</tr>`);      
        }else{
            //If table is empty, inject single cell row
            table.insertAdjacentHTML("beforeend", `<tr>${cellString}</tr>`);
        }
    }else{
        //If table is empty, inject single cell row
        tableTop.insertAdjacentHTML("beforeend", `<tr>${cellString}</tr>`);
    }
    
}

// Add a column
function addC() {
    //Check if table is empty
    if(tableTop.childElementCount > 0){
        let table = tableTop.firstElementChild;
        //Check if tbody is empty
        if(table.childElementCount > 0){
            //Iterate over existing rows, inject one new cell per row
            for(let i = 0; i<table.childElementCount; i++){
                table.children[i].insertAdjacentHTML("beforeend", cellString);
            }    
        }else{
            //If table is empty, add single celled row
            addR();
        }
    }else{
        //If table is empty, add single celled row
        addR();
    }
}

// Remove a row
function removeR() {
    //Check if table is empty
    if(tableTop.childElementCount > 0){
        table = tableTop.firstElementChild;
        //Check if row exists
        if(table.childElementCount > 0){
            //Remove last row
            table.removeChild(table.lastChild); 
        }
    }
}

// Remove a column
function removeC() {
    //Check if table is empty
    if(tableTop.childElementCount > 0){
        let table = tableTop.firstElementChild;
        //Iterate over each row, remove the last cell from each
        for(let i = 0; i<table.childElementCount; i++){
            table.children[i].removeChild(table.children[i].lastChild);
        }
        //Check if rows are empty, if so, remove all rows
        if(table.children[0].childElementCount == 0){
            let rows = table.childElementCount
            for(let i = 0; i<rows; i++){
                removeR();
            }
        }
    }
}

// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}

// Fill selected cell with selected color
function fillC(cell){
    cell.style.backgroundColor = colorSelected
}

// Fill all uncolored cells
function fillU(){
    //Check if table is empty
    if(tableTop.childElementCount > 0){
        let table = tableTop.firstElementChild;
        //Check if tbody is empty
        if(table.childElementCount > 0){
            //Iterate over each row
            for(let i = 0; i < table.childElementCount; i++){
                //Iterate over each cell
                for(let j = 0; j < table.children[i].childElementCount; j++){
                    cell = table.children[i].children[j];
                    //Check if cell has any style attributes
                    if(cell.getAttribute("style")){
                        //If there are stly attributes, check if background color is empty
                        //set background color to colorSelected if so
                        if(cell.style.backgroundColor == null){
                            cell.style.backgroundColor = colorSelected;    
                        }
                    }else{
                        //If no style attributes, set background color
                        cell.style.backgroundColor = colorSelected;
                    }
                }
            }
        }
    }
    
}

// Fill all cells
function fillAll(){
    //Check if table is empty
    if(tableTop.childElementCount > 0){
        let table = tableTop.firstElementChild;
        //Check if tbody is empty
        if(table.childElementCount > 0){
            //Iterate each all row
            for(let i = 0; i < table.childElementCount; i++){
                //Iterate over each cell, set cell background color
                for(let j = 0; j < table.children[i].childElementCount; j++){
                    cell = table.children[i].children[j];
                    cell.style.backgroundColor = colorSelected;
                    
                }
            }
        }
    }
}

// Clear all cells
function clearAll(){
    //Check if table is empty
    if(tableTop.childElementCount > 0){
        let table = tableTop.firstElementChild;
        //Check if tbody is empty
        if(table.childElementCount > 0){
            //Iterate over each row
            for(let i = 0; i < table.childElementCount; i++){
                //Iterate over each cell, clear cell background color
                for(let j = 0; j < table.children[i].childElementCount; j++){
                    cell = table.children[i].children[j];
                    cell.style.backgroundColor = null;
                    
                }
            }
        }
    }
}