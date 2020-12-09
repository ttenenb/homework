import './css/index.css';
import excel from './addingJSON';
import $ from 'jquery';
import message from './message';

let names = [];

const nameForm = document.getElementById('nameForm');
const firstInput = document.getElementById('first');
const lastInput = document.getElementById('last');
const phoneInput = document.getElementById('phone');
const nameTable = document.getElementById('names');
const check = document.getElementById('check');
const rowInd = document.getElementById('row');

//pops open the form when the add button is clicked
document.getElementById('add').addEventListener('click', () => {
    nameForm.style.setProperty('display', 'block');
});
//adds a submit listener to the form
nameForm.addEventListener('submit', e => {
    e.preventDefault();
    addName();
});

//returns a row number in the table
function getRow() {
    return nameTable.rows.length;
}

function addName() {
    //deletes the "no name" row
    if (!names.length) {
        nameTable.deleteRow(1);
    }
    //saving the name in an object
    const newName = {
        first: firstInput.value,
        last: lastInput.value,
        phone: phoneInput.value,
        isChecked: check.checked,
        numberOfWeeks: 0,
        rowIndex: rowInd.value || getRow()
    };
    //checking to see if this is name is being updated and if so save the row number
    if (newName.rowIndex === rowInd.value) {
        //and save this info in the name array in the old name's index
        names.splice(rowInd.value - 1, 1, newName);
        //and deleting the old name
        nameTable.deleteRow(rowInd.value);
    //otherwise just pop the name onto the array 
    } else {
        names.push(newName);
    }
    //either way save the name in localStorage
    localStorage.names = JSON.stringify(names);
    //call the function that updates the table with the name
    populateNewName(newName);

    //clears the form
    clearForm(nameForm);
}

//add functionality to the form's cancel button
document.getElementById('cancel').addEventListener('click', () => {
    clearForm(nameForm);
});

function clearForm(form) {
    form.style.setProperty('display', 'none');
    form.reset();
}

//populate table from the localStorage on load
if (localStorage.names) {

    nameTable.deleteRow(1);
    names = JSON.parse(localStorage.names);

    names.forEach(n => {
        populateNewName(n);
    });
}

//add a button to sort the name on click
document.getElementById('sort').addEventListener('click', () => {
    if (names.length) {
        names.sort((a, b) => a.last > b.last ? 1 : a.last < b.last ? -1 : 0);
        $('#names td').remove();
        names.forEach(n => populateNewName(n));
    }
});

function populateNewName(n) {

    const newRow = nameTable.insertRow(n.rowIndex);
    const checkCell = newRow.insertCell();
    const firstCell = newRow.insertCell();
    const lastCell = newRow.insertCell();
    const phoneCell = newRow.insertCell();
    const numberOfWeeksCell = newRow.insertCell();
    const buttonsCell = newRow.insertCell();
    const phoneSpan = document.createElement('span');
    phoneCell.appendChild(phoneSpan);
    const weekSpan = document.createElement('span');
    numberOfWeeksCell.appendChild(weekSpan);
    firstCell.innerText = n.first;
    lastCell.innerText = n.last;
    phoneSpan.innerText = n.phone;
    weekSpan.innerText = n.numberOfWeeks;
    //add edit button to each row
    const editButton = document.createElement('button');
    editButton.setAttribute('class', 'buttons');
    editButton.innerHTML = 'Edit';
    editButton.style.setProperty('color', 'blue');
    editButton.style.setProperty('margin-left', '1em');
    //add delete button to every name    
    const deleteButton = document.createElement('button');
    deleteButton.setAttribute('class', 'buttons');
    deleteButton.innerHTML = 'Delete';
    deleteButton.style.setProperty('color', 'red');
    deleteButton.style.setProperty('margin-left', '1em');
    //add a increment weeks button
    const incrementButton = document.createElement('button');
    incrementButton.innerHTML = '+';
    incrementButton.style.setProperty('color', 'green');
    incrementButton.style.setProperty('margin-left', '1em');
    const decrementButton = document.createElement('button');
    decrementButton.innerHTML = '-';
    decrementButton.style.setProperty('color', 'green');
    decrementButton.style.setProperty('margin-left', '1em');
    //add a checkbox to each name to validate for the current raffle
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = n.isChecked;
    //ensuring that the object is reflected from the user's input and save it in localStorage
    checkbox.addEventListener('change', () => {
        n.isChecked = !n.isChecked;
        localStorage.names = JSON.stringify(names);
    });
    checkCell.appendChild(checkbox);
    const b = document.getElementsByClassName('buttons');
    for (let index = 0; index < b.length; index++) {
        b[index].setAttribute('align-items', 'flex-start');
    }
    buttonsCell.appendChild(editButton);
    buttonsCell.appendChild(deleteButton);
    numberOfWeeksCell.appendChild(incrementButton);
    numberOfWeeksCell.appendChild(decrementButton);
    //add functionality to the edit button
    editButton.addEventListener('click', () => {
        nameForm.style.setProperty('display', 'block');
        firstInput.value = n.first;
        lastInput.value = n.last;
        phoneInput.value = n.phone;
        rowInd.value = n.rowIndex;

    });

    //add functionality to the delete button
    deleteButton.addEventListener('click', () => {
        names = names.filter(name => name !== n);
        for (let index = n.rowIndex - 1; index < names.length; index++) {
            names[index].rowIndex = names[index].rowIndex- 1;
            
        }
        localStorage.names = JSON.stringify(names);
        nameTable.deleteRow(newRow.rowIndex);
        if (!names.length) {
            const newRow = nameTable.insertRow();
            newRow.setAttribute('id', "firstRow");
            const noName = newRow.insertCell();
            noName.innerHTML = 'No names loaded';
            noName.setAttribute('colspan', '6');
            localStorage.removeItem('names');
        }
    });
    //add functionality to the increment button
    incrementButton.addEventListener('click', () => {
        weekSpan.innerText = ++n.numberOfWeeks;
        localStorage.names = JSON.stringify(names);
    });
    decrementButton.addEventListener('click', () => {
        if (n.numberOfWeeks > 0) {
            weekSpan.innerText = --n.numberOfWeeks;
            localStorage.names = JSON.stringify(names);
        }
    });
}

//adds the name from the json file (which I manually put there from an excel file using a data converter tool) when this button is clicked
document.getElementById('addJSON').addEventListener('click', () => {
    const re = excel();
    //remove "no names" row
    if (!names.length) {
        $('#allNames tr').remove();
    }
    //remove this "no names" row in the event that all names were deleted and such a row was inserted from the delete button
    if ($('#firstRow')) {
        $('#firstRow').remove();
    }
    //checking to see if there are any names in the json file
    if (re.length > 1) {
        re.forEach(n => {
            n.phone = n.phone === undefined ? n.phone = '' : n.phone;
            n.isChecked = n.isChecked === undefined ? n.isChecked = false : n.isChecked;
            n.numberOfWeeks = n.numberOfWeeks === undefined ? n.numberOfWeeks = 0 : n.numberOfWeeks;
            n.rowIndex = n.rowIndex === undefined ? n.rowIndex = getRow() : n.rowIndex;
            populateNewName(n);
            names.push(n);
        });
        localStorage.names = JSON.stringify(names);
    } else {
        message('Sorry, there are no names in this file.');
    }

});

//importing the raffle file which chooses a winner from the checked off names
import(/* webpackChunkName: "raffle" */ './raffle').then(module => {
    const raffle = module.default;

    document.getElementById('winner').addEventListener('click', () => {
        raffle(names);
    });
});


