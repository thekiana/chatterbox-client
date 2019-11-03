var Friends = {

  friendList: {},

  toggleStatus: function(username)
  {
    if (Friends.friendList[username] === undefined) {
      Friends.friendList[username] = true;
    } else {
      Friends.friendList[username] = !Friends.friendList[username];
    }
  }

};