App.web_notifications = App.cable.subscriptions.create("WebNotificationsChannel",
  {
    connected: function () {

    },

    disconnected: function () {

    },

    received: function (data) {
      document.getElementById('messages').innerHTML += data.message
    }
  }
)
