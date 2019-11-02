var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function () {
  },

  renderRoom: function(room) {
    var compiled = _.template(`
    <option value="<%= room %>"><%= room %></option>
  `);
    $('#rooms select').append(compiled({'room': room}));
  }

};
