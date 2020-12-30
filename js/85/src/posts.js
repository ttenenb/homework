import $ from 'jquery';
import comments from './comments';
export default async function (userID,userName) {
    try {
        const r = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userID}`);
        const p = await r.json();
        if (!r.ok) {
            throw new Error(p.message || r.status);
        }
        $('#posts').html(`<h2>${userName}</h2>`);
        p.forEach(p => {
            let showComment = false;
           
            $(`<div id="post${p.id}" class="cposts"><div>${p.title}</div> <p>${p.body}</p></div>`)
                .appendTo('#posts');
            
            $(`<br><button id="button${p.id}">Show Comments</button><hr>`)
                .on('click', () => {
                    comments(p.id);

                    showComment = !showComment;
                    if (!showComment) {
                        $(`#comment${p.id}`).css('display', 'none');
                        $(`#button${p.id}`).text('Show Comments');
                    } else {
                        $(`#button${p.id}`).text('Hide Comments');
                        $(`#comment${p.id}`).css('display', 'block');
                    }
                }).appendTo('#posts');
        });
        
        
     
    } catch (err) {
        return console.error(err);
    }

}
{/* <button id=${p.id} class="comments">Show Comments</button> */}