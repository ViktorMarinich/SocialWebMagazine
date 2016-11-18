class News < ActiveRecord::Base
  belongs_to :user
  belongs_to :wall
  before_save :add_user_name
  def add_user_name
    self.user_name=self.user.name
  end
end
