(function () {
    'use strict';
  
    function get(id) {
      return document.getElementById(id);
    }
  
    function setCss(element, property, value) {
      element.style[property] = value;
    }
  
  const contacts = [];
  const rows = [];
  const deleteButtons = [];
    const contactForm = get('contactForm');
    const firstInput = get('first');
    const lastInput = get('last');
    const emailInput = get('email');
    const phoneInput = get('phone');
  
    get('add').addEventListener('click', () => {
      setCss(contactForm, 'display', 'block');
    });
  
    function hideAddContactForm() {
      contactForm.reset();
      setCss(contactForm, 'display', 'none');
    }
  
  let increment = 0;
    contactForm.addEventListener('submit', e => {
      e.preventDefault();
  
      const contactsTable = get('contacts');
  
      if (!contacts.length) {
        contactsTable.deleteRow(1);
      }
  
      const newContact = {
        first: firstInput.value,
        last: lastInput.value,
        email: emailInput.value,
        phone: phoneInput.value
      };
      contacts.push(newContact);
  
      /*firstInput.value = '';
      lastInput.value = '';
      emailInput.value = '';
      phoneInput.value = '';*/
      //contactForm.reset();
  
      const newRow = contactsTable.insertRow();
      rows.push(newRow);
      const firstCell = newRow.insertCell();
      const lastCell = newRow.insertCell();
      const emailCell = newRow.insertCell();
      const phoneCell = newRow.insertCell();
      
  
      firstCell.innerHTML = newContact.first;
      lastCell.innerHTML = newContact.last;
      emailCell.innerHTML = newContact.email;
      phoneCell.innerHTML = newContact.phone;
      const deleteButton = document.createElement('button');
      phoneCell.appendChild(deleteButton);
      deleteButtons.push(deleteButton);
      deleteButton.innerText = 'Delete';
      deleteButton.setAttribute('id', 'deleteButton' + increment);
      const db = get('deleteButton' + increment);
      setCss(db, 'margin-left', '1em');
      let indexButton = deleteButtons.indexOf(deleteButton);
      deleteButtons[indexButton].addEventListener('click', function () {
        let index = rows.indexOf(newRow);
         if (index + 1 > 0) {
          contactsTable.deleteRow(index + 1);
        }
       
        indexButton--;
        index--;
        contacts.pop(newContact);
        rows.pop(newRow);
        deleteButtons.pop(deleteButton);
        if (!contacts.length) {
          console.log(contacts.length);
          const nr = contactsTable.insertRow();
          const nc = nr.insertCell();
          nc.innerHTML = 'No contacts added';
        }
        });
      // deleteButton.className = 'deleteButton';
      // const db = document.getElementsByClassName('deleteButton');
      // setCss(db[increment], 'margin-left', '1em');
      // setCss(contactForm, 'display', 'none');
      increment++;
      hideAddContactForm();
    });
  
    get('cancel').addEventListener('click', hideAddContactForm);

    
  }());