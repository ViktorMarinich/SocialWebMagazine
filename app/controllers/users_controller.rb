class UsersController < ApplicationController

  def index
  end

  def all
      @users =User.all
      render json: @users.to_json
  #  render component: 'Users', props: { users: @users }
  end

  def show
      @user =User.find(params[:id])
      render json: @user.to_json
  #  render component: 'Users', props: { users: @users }
  end
end
