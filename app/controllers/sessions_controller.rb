class SessionsController < ApplicationController
  before_action :authenticate, only: [:destroy]
 def new
   @user=User.new
   if user_signed_in?
     redirect_to root_path
   end
 end

 def create
     user = User.find_by(email: params[:session][:email].downcase)
     if user && user.authenticate(params[:session][:password])
       sign_in user
       redirect_to root_path
    else
      flash['error']="Invalid email or password"
      redirect_to root_path
    end
 end

 def destroy
   sign_out
   redirect_to root_path
 end

 def logout
   session[:user_id] = nil
   redirect_to root_path
 end
end
