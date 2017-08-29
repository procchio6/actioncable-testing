App.web_notifications = App.cable.subscriptions.create(
  {
    channel: "WebNotificationsChannel",
    room: "Best Room"
  },
  {
    connected: function (data) {
      App.web_notifications.send({message: '<p>Someone connected!</p>'})
    },

    disconnected: function () {
      alert('Lost connection!')
    },

    received: function (data) {
      document.getElementById('messages').innerHTML += data.message
    }
  }
)
