import $ from 'jquery';

export default async function (postID) {
    try {
        const r = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postID}`);
        const c = await r.json();
        if (!r.ok) {
            throw new Error(c.message || r.status);
        }
        $(`#post${postID}`).append(`<div class="ccomment" id="comment${postID}"></div>`);
        $(`#comment${postID}`).html('Comments: <br>');
        c.forEach(c => $(`<hr> ${c.body}</hr>`).appendTo(`#comment${postID}`));

    } catch (err) {
        return console.error(err);
    }
}