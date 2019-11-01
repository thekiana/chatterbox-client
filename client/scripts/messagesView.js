var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
  },

  renderMessage: function() {
    $('#chats').append(MessageView.render(Messages['kJ8XUaKNrO']));
  }


};