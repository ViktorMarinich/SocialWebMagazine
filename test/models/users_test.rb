require 'test_helper'
class UserTest < ActiveSupport::TestCase

  def setup
    @user= users(:user1)
    @params = {name: "User1",   email: "mail@ukr.net",password: "aaaa",password_confirmation: "aaaa"}
  end

  def test_user_with_valid_values
    user = User.new(@params)
    assert user.save
  end

  def test_user_with_invalid_email
    @params[:email]= ""
    user = User.new(@params)
    assert_not user.save
    @params[:email]= "mail.ukr.net"
    user = User.new(@params)
    assert_not user.save
  end

  def test_user_with_invalid_name
    @params[:name]= ""
    user = User.new(@params)
    assert_not user.save
    @params[:name]= "A"
    user = User.new(@params)
    assert_not user.save
  end

end
