App.web_notifications = App.cable.subscriptions.create("WebNotificationsChannel",
  {
    connected: function (data) {
      App.web_notifications.send({message: '<p>Someone connected!</p>'})
    },

    disconnected: function () {
      
    },

    received: function (data) {
      document.getElementById('messages').innerHTML += data.message
    }
  }
)
