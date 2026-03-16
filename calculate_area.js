let length;
let width;

function calculateArea() {
    length = parseFloat(document.getElementById('length').value);
    width = parseFloat(document.getElementById('width').value);

    let area = length * width;
    let shape = (length === width) ? "square" : "rectangle";

    document.getElementById('result').innerText = `The area of the ${shape} is ${area} units²`;
}

var groceryPrice1;
var groceryPrice2;
var groceryPrice3;

function groceryTracker() {
    groceryPrice1 = parseFloat(document.getElementById('grocery1').value);
    groceryPrice2 = parseFloat(document.getElementById('grocery2').value);
    groceryPrice3 = parseFloat(document.getElementById('grocery3').value);
    
    let total = groceryPrice1 + groceryPrice2 + groceryPrice3;

    document.getElementById('result2').innerText = `The total amount is $${total}`;
}