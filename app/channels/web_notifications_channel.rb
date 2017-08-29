class WebNotificationsChannel < ApplicationCable::Channel
  def subscribed
    stream_from "web_notifications_channel"
  end

  def receive(data)
    ActionCable.server.broadcast("web_notifications_channel", data)
  end

  def unsubscribed
    ActionCable.server.broadcast("web_notifications_channel", {message: 'Someone left!'})
  end
end
