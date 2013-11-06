class Messages < ActiveRecord::Base
  respond_to :json

  def index

    respond_with @messages
  end
end
