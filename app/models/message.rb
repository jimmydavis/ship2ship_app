class Messages < ActiveRecord::Base
  attr_accessible :title, :body, :is_read
end
