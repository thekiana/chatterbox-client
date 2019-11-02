var MessagesView = {

  $chats: $('#chats'),

  initialize: function(data) {

  },

  renderMessage: function(message) {
    
    $('#chats').append(MessageView.render(message));
  }

};