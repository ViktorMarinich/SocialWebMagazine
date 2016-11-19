class UsersController < ApplicationController
  #  before_action :find_id, only: [:show,:edit,:update]
  #    before_action :authenticate, except: [:new, :create, :search, :email_find, :update]

        def new
        end

    #    def all
    #        @users =User.all
    #        render json: @users.to_json
    #    #  render component: 'Users', props: { users: @users }
    #    end

     def all
       @users = User.all
       render json: @users.to_json
     end

     def current
       @user = current_user
       render json: @user
     end

        def create
          unless user_signed_in?
            @user = User.new(user_params)
            if @user.save
              sign_in @user
              redirect_to root_path
            end
          end
          #respond_to do |format|
          #  format.json do
          #    if @user.save
          #      render :json => @user
          #    else
          #      render :json => { :errors => @user.errors.messages }, :status => 422
          #    end
          #  end
          #end
        end

    #    def search
    #      if @user = User.find_by(email: params[:email])
    #        @user.generate_reset_token
    #        UserMailer.password_reset(@user).deliver_now
    #        redirect_to root_path
    #      else
    #        render 'email_find'
    #      end
    #    end

    #    def email_find
    #    end

    #    def edit
    #      respond_to do |format|
    #        format.js { render layout: false }
    #        format.html
    #      end
    #    end

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
          #if @user.update_attributes(user_params)
          #  redirect_to  user_path(@user)
        #  else
        #    @user.name=params[:user][:name]
        #    @user.first_name=params[:user][:first_name]
        #    @user.last_name=params[:user][:last_name]
        #    @user.city=params[:user][:city]
        #    @user.image=params[:user][:image] unless params[:user][:image].nil?
        #    @user.save(validate: false)
        #    redirect_to user_path(@user)
        #  end
        end

        def show
          @user = User.find(params[:id])
          render json: @user.to_json( :include => [{:friends => {:only => [:name,:email,:id,
          :avatar]}}, :wall =>{:include=> :news}], :only => [:name,:email,:id,:avatar])
#(:include => { :b => { :include => :c } })

        #  @friends = current_user.friends.order(:created_at).page(params[:page]).per(20)
        end

    #    def confirm_email
    #      user = User.find_by(email: params[:email])
    #      if user
    #        user.email_activate
    #        redirect_to root_path
    #      else
    #        redirect_to user_path(user)
    #      end
    #    end

    #    def password_reset
    #      @user = User.find_by(email: params[:email])
    #      if !@user.is_reset_token?
    #        redirect_to root_path
    #      else
    #        if @user.reset_token==(params[:id])
    #          render 'password_reset'
    #        else
    #          redirect_to root_path
    #        end
    #      end
    #    end

        private

        def find_id
          @user= User.find(params[:id])
        end

        def user_params
          params.required(:user).permit(:name,:email, :password, :password_confirmation, :avatar)
        end

end
