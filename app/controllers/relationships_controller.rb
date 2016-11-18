class RelationshipsController < ApplicationController
#  before_action :set_friend_request, except: [:index, :create]
#  before_action :authenticate

  def create
    friend = User.find(params[:friend_id])
    @request = User.find(100).relationships.new(friend: friend)
    respond_to do |format|
      format.json do
        if @request.save
          render :json => @request
        else
          render :json => { :errors => @request.errors.messages }, :status => 422
        end
      end
    end
  end

  private

end
