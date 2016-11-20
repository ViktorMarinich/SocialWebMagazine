class UsersController < ApplicationController
  #  before_action :find_id, only: [:show,:edit,:update]
  #    before_action :authenticate, except: [:new, :create, :search, :email_find, :update]

    def new
    end


    def all
      @users = User.all
      render json: @users.to_json
     end

    def current
       @user = current_user
       render json:  @user.to_json( :include => [{:friends => {:only => [:name,:email,:id,
       :avatar]}}])
    end

    def create
      unless user_signed_in?
        @user = User.new(user_params)
        if @user.save
          sign_in @user
          redirect_to root_path
        else
          render template: 'users/index'
        end
      end
    end

    def update
      @user = User.find(params[:id])
      respond_to do |format|
        format.json do
          if @user.update(user_params)
            render :json => @user
          else
            render :json => { :errors => @user.errors.messages }, :status => 422
          end
        end
      end
    end

    def show
      @user = User.find(params[:id])
      render json: @user.to_json( :include => [{:friends => {:only => [:name,:email,:id,
      :avatar]}}, :wall =>{:include=>{ :news =>{:include => [{:user=>{:only => [:name,:email,:id,
      :avatar]}}]}}}], :only => [:name,:email,:id,:avatar])
    end

    private
    def find_id
      @user= User.find(params[:id])
    end

    def user_params
      params.required(:user).permit(:name,:email, :password, :password_confirmation, :avatar)
    end
end
