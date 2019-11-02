var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function () {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);

  },

  fetch: function (callback = () => { }) {
    Parse.readAll((data) => {
      // examine the response from the server request:
      console.log(data.results);
      for (var i = 0; i < data.results.length; i++) {
        if (data.results[i].username !== undefined & data.results[i].text !== undefined) {
          Messages[data.results[i].objectId] = {
            username: data.results[i].username,
            text: data.results[i].text,
            roomname: data.results[i].roomname
          };

        }
        if (data.results[i].roomname !== undefined) {
          Rooms.roomsList[data.results[i].roomname] = data.results[i].roomname;
        }
      }
      for (var key in Messages) {
        MessagesView.renderMessage(Messages[key]);
      }
      for (var key in Rooms.roomsList) {
        RoomsView.renderRoom(Rooms.roomsList[key]);
      }
      callback();
    });
  },

  startSpinner: function () {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function () {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
