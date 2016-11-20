require 'test_helper'

class RelationshipsTest < ActionDispatch::IntegrationTest

    def setup
      super
      @user= users(:user3)
      @user2= users(:user4)
      Capybara.current_driver = Capybara.javascript_driver
    end

    def teardown
      super
    end

    def test_create_new_relationships
      visit(root_path)
      page.fill_in "email", :with => @user.email
      page.fill_in "password", :with => "aaaa"
      page.find('input[id="login"]').click
      click_on('Users')
      click_on('The user4')
      assert page.has_content?(@user2.name)
      if (page.has_content?('Add to my friendlist'))
          click_on('Add to my friendlist')
          assert page.has_content?(@user.name)
      else
        click_on('Remove from my friendlist')
        assert page.has_no_content?(@user.name)
      end
    end

end
