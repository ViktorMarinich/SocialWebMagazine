class Friendship < ActiveRecord::Base
#  after_save :revese_friend_confirm
#  after_destroy :revese_friend_destroy
  belongs_to :user
  belongs_to :friend, class_name: 'User'
end
