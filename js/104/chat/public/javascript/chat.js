(function () {
  const socketIo = io();

  //socketIo.emit('message', 'This is a message from the client');
  const loginForm = $('#loginForm');
  loginForm.submit(e => {
    e.preventDefault();

    socketIo.emit('login', $('#name').val(), callbackData => {
      if (callbackData) {
        $('#error').text(callbackData);
      } else {
        loginForm.slideUp();
        $('#messagesContainer').slideDown();
        socketIo.on('chatters', (chatters => {
          $('#chatters').empty();
          chatters.forEach(chatter => {
            $('#chatters').append(`${chatter}\n`);
          })
        }));
      }
    });
  });

  const messageInput = $('#message');
  let typing = false;

  $('#messageForm').on('keydown', e => {
    if (!typing) {
      socketIo.emit('typing', 'is typing');
      setTimeout(() => typing = false, 3000);
    }
    typing = true;
  })

  $('#messageForm').submit(e => {
    e.preventDefault();
    const msg = messageInput.val().trim();
    if (msg) {
      socketIo.emit('message', messageInput.val());
    }
    messageInput.val('');
  });

  const messagesElem = $('#messages');
  socketIo.on('message', msg => {
    messagesElem.append(`<div>${msg.author} wrote: ${msg.msg}</div>`);
  })
  socketIo.on('typing', typing => {
    $('#typing').css('display', 'flex')
    $('#typing').html(`<div>${typing.author} ${typing.typing}</div>`);
    setTimeout(() => $('#typing').css('display', 'none'), 3000)
  });

}());