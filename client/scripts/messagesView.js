var MessagesView = {

  $chats: $('#chats'),
  $username: $('.username'),

  initialize: function(data) {

  },

  renderMessage: function(message) {

    $('#chats').append(MessageView.render(message));
    $('.username').off().click(function(event) {
      Friends.toggleStatus($(event.target).html());
    });
  }

};