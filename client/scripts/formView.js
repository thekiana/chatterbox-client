var FormView = {

  $form: $('form'),

  initialize: function () {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function (event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    var message = {
      'username': App.username,
      'text': $('#message').val(),
      'roomname': $("#rooms select option:selected").text()
    }
    Parse.create(message);
    $('#chats').prepend(MessageView.render(message));
    // $('#chats').empty();
    $('#message').val("");
    // App.fetch();
    console.log('click!');
  },

  setStatus: function (active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};

// `<script>$('#main').css('background-image', 'url(' + 'https://media.giphy.com/media/iDsBlQBsGTNeM/giphy.gif' + ')')</script>`