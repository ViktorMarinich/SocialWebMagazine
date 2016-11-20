require 'test_helper'

class UsersTest < ActionDispatch::IntegrationTest

    def setup
      super
      @user= users(:user3)
      visit root_path
    end

    def teardown
      super
    end

    def test_create_new_user_and_sing_up
       assert_difference 'User.count', 1 do
        page.fill_in "name2", :with => "name"
        page.fill_in "email2", :with => "theusewr@a.net"
        page.fill_in "password2", :with => "password"
        page.fill_in "password_confirmation2", :with => "password"
        page.find('input[id="Sign Up"]').click
      end
      assert page.has_content?("My profile")
      assert page.has_content?("All news")
      click_on('Sign Out')
    end

    def test_settings
      visit('/users/logout')
      page.fill_in "email", :with => @user.email
      page.fill_in "password", :with => "aaaa"
      page.find('input[id="login"]').click
      assert page.has_content?("My profile")
      click_on 'My profile'
      assert page.has_content?(@user.name)
      click_on 'Friends'
      assert page.has_content?('My friends')
      click_on 'News'
      assert page.has_content?('All news')
      click_on 'Users'
      assert page.has_content?('All Users')
      click_on 'Sign Out'
      assert page.has_content?('Sign in')
    end

end
