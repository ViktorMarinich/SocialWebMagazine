class FriendsController < ApplicationController
  before_action :authenticate

  def index
    @friends = current_user.friends.order(:created_at).page(params[:page]).per(20)
  end

  def create
    @user = User.find( params[:friend_id])
    unless @user == current_user&&!friend?(@user)
      current_user.friendships.new(friend: @user).save
      rel = @user.relationships.find_by(friend_id: current_user)
      rel.destroy if rel
    end
    render json: current_user
  end

  def remove
    friendships = current_user.friendships.find_by(friend: params[:id])
    if friendships.destroy
      render json: friendships
    end
  end
end
