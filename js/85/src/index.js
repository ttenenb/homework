import $ from 'jquery';
import './css/blog.css'
import posts from './posts';

async function getUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
    
        const users = await response.json();
    
        if (!response.ok) {
            throw new Error(users.message || response.statusText)
        }
        
        users.map(u => {
            $(`<div class="box" id=${u.id}>${u.name}<hr>Website: ${u.website}<br>
            Company Name: ${u.company.name}<br>${u.company.catchPhrase}<br>Services: ${u.company.bs}</div>`)
            .on('click', () => {
                posts(u.id,u.name);
                $('#users').css('display', 'none');
                $('#posts').css('display', 'block');
        
            }).appendTo('#users');
        })
    } catch (e) {
       return console.log(e);
      //  $('#userOutput').html(e);
    }
    
}

getUsers();

$('#home').on('click', () => {
    $('#users').css('display', 'grid');
    $('#posts').css('display', 'none');
    $('#posts').html('');

});