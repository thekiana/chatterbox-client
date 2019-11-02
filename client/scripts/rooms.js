var Rooms = {

  roomsList: {},

  add: function () {
    var roomToAdd = prompt('What room would you like to add?') || 'undefined';
    RoomsView.renderRoom(roomToAdd);
  }
};