const numbers = [];
function addNumberToArray() {
    const number = parseInt(document.getElementById('numberInput').value);
    if (isNaN(number)|| number === '') {
        alert("Please enter a valid number.");
        return;
    }
    numbers.push(number);
    document.getElementById('arrayDisplay').innerText = "Updated Array: " + numbers.join(', ');
    document.getElementById('numberInput').value = '';
}

function insertNumberAtIndex() {
    const number = parseInt(document.getElementById('numberInput').value.trim());
    const index = parseInt(document.getElementById('indexInput').value.trim());
    if (isNaN(index) || isNaN(number) || index < 0 || index > numbers.length) {
        alert("Please enter a valid number and index.");
        return;
    }
    numbers.splice(index, 0, number); 
    document.getElementById('arrayDisplay').innerText = "Updated Array: " + numbers.join(', ');
    document.getElementById('numberInput').value = ''; 
    document.getElementById('indexInput').value = ''; 
}

function replaceNumber() {
    const oldNumber = parseInt(document.getElementById('oldNumberInput').value);
    const newNumber = parseInt(document.getElementById('newNumberInput').value);
    if (isNaN(oldNumber) || isNaN(newNumber)) {
        alert("Please enter valid numbers.");
        return;
    }
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === oldNumber) {
            numbers[i] = newNumber;
        }
    }
    document.getElementById('arrayDisplay').innerText = "Updated Array: " + numbers.join(', ');
    document.getElementById('oldNumberInput').value = ''; 
    document.getElementById('newNumberInput').value = ''; 
}

function removeFirstNumber() {
    if (numbers.length > 0) {
        numbers.shift(); 
    } else {
        alert("No elements to remove.");
    }
    document.getElementById('arrayDisplay').innerText = "Updated Array: " + numbers.join(', ');
}
    
