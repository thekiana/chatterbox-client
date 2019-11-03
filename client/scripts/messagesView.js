var MessagesView = {

  $chats: $('#chats'),
  $username: $('.username'),

  initialize: function(data) {

  },

  renderMessage: function(message) {

    $('#chats').append(MessageView.render(message));

    $('.username').off().click(function(event) {

      // debugger;
      var elementUser = $(event.target).html();

      Friends.toggleStatus($(event.target).html());

      if (Friends.friendList[elementUser]) {
        $(`.${elementUser}`).addClass('friend');
      } else {
        $(`.${elementUser}`).removeClass('friend');
      }

    });
  }

};