class WebNotificationsChannel < ApplicationCable::Channel
  def subscribed
    stream_from "web_notifications_channel_#{params[:room]}"
  end

  def receive(data)
    ActionCable.server.broadcast("web_notifications_channel_#{params[:room]}", data)
  end

  def unsubscribed
    ActionCable.server.broadcast("web_notifications_channel_#{params[:room]}", {message: '<p>Someone left!</p>'})
  end
end
