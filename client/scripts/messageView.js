var MessageView = {

  render: _.template(`
      <div class="chat">
        <span class="username <%- username  %>"><%- username  %></span><span>:</span>
        <div><%- text %></div>
      </div>
    `)

};