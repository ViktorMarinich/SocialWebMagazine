class UsersController < ApplicationController
  respond_to :json
  def index
       respond_with User.all
  #  render component: 'Users', props: { users: @users }
  end
end
