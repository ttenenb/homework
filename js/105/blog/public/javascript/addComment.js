(function () {
    'use strict';

    $('#addCommentButton').on('click', () => {
        let changed;
        if ($('#addComment').css('display') === 'none') {
            changed = true;
            $('#addComment').css('display', 'flex')
        } else if ($('#addComment').css('display') === 'flex') {
            changed = false;
            $('#addComment').css('display', 'none')
        }

        if (changed) {
            $('#addCommentButton').text('Cancel');
        } else {
            $('#addCommentButton').text('Add Comment');
        }

    })

    const  commentIdInput= $('#commentId');
    const commentInput = $('#comment');
    $('#addComment').submit(async (e) => {
        e.preventDefault();
        try {
            const comment = { id: commentIdInput.val(), comment:  commentInput.val() };

            const response = await fetch('/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(comment)
            })
            if (!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`)
            }
            const c = await response.json();
            $('#comments').append(' '+ c);
        } catch (e) {
            console.error(e);
        };
    });

}())