ENV['RAILS_ENV'] ||= 'test'
require File.expand_path('../../config/environment', __FILE__)
require 'rails/test_help'
require "capybara/rails"
require "minitest/rails/capybara"
require 'capybara/webkit'
require 'minitest/autorun'
#require 'thread'

Capybara.javascript_driver = :selenium
Capybara.default_max_wait_time = 5
include Rails.application.routes.url_helpers
class ActiveSupport::TestCase

  def login(user)
      old_controller = @controller
      @controller = SessionsController.new
      post :create, session: { email:  user.email, password: 'password' }
      @controller = old_controller
  end
  # Setup all fixtures in test/fixtures/*.yml for all tests in alphabetical order.
  fixtures :all
  include Capybara::DSL


  # Add more helper methods to be used by all tests here...
end

class   ActionDispatch::IntegrationTest < ActiveSupport::TestCase
  def setup
    Capybara.current_driver = Capybara.javascript_driver

  end
  def teardown
    Capybara.use_default_driver
  end

end
