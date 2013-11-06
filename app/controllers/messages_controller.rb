class MessagesController < ApplicationController
  responds_to :json
  def index
    @messages = Message.all
    responds_with @messages
  end

  def create
    params
    binding.pry
  end

end
