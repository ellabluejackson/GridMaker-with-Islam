// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected; 

// Add a row
function addR() {
    const grid = document.getElementById("grid");
    const newRow = document.createElement("tr");
    const rows = grid.getElementsByTagName("tr");// Replace this line with your code.
    
    if(rows.length == 0){
        const cell = document.createElement("td");
        cell.onclick = function() {this.style.backgroundColor = colorSelected; };
        newRow.appendChild(cell);
    }else{
        const cellCount = rows[0].getElementsByTagName("td").length;
        for (let i = 0; i < cellCount; i++) {
            const cell = document.createElement("td");
            cell.onclick = function() { this.style.backgroundColor = colorSelected; };
            newRow.appendChild(cell);
        }
        
    }
    grid.appendChild(newRow);
} 

// Add a column
function addC() {
    const grid = document.getElementById("grid")
    const rows = grid.getElementsByTagName("tr");
        
    if(rows.length ==0){
        const newRow = document.createElement("tr");
        const cell = document.createElement("td");
        cell.onclick = function() {this.style.backgroundColor = colorSelected;} ;
        newRow.appendChild(cell);
        grid.appendChild(newRow);
    }else{
        for (let i=0; i<rows.length; i++){
            const cell = document.createElement ("td")
            cell.onclick = function() { this.style.backgroundColor = colorSelected; }; 
            rows[i].appendChild(cell);
        
        }
    }
    
}

// Remove a row
function removeR() {
    const grid = document.getElementById("grid");
    const rows = grid.getElementsByTagName("tr");
    if (rows.length > 0) {
        grid.removeChild(rows[rows.length - 1]);
    }
}

// Remove a column
function removeC() {
    const grid = document.getElementById("grid");
    const rows = grid.getElementsByTagName("tr");
    
    for (let i = 0; i < rows.length; i++) {
        const cells = rows[i].getElementsByTagName("td");
        if (cells.length > 0) {
            rows[i].removeChild(cells[cells.length - 1]);
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