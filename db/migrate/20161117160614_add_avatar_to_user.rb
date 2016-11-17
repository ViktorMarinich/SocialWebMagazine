class AddAvatarToUser < ActiveRecord::Migration
  def change
    add_column :users, :avatar, :string
    add_column :users, :password_digest, :string
    add_column :users, :remember_digest, :string
    add_column :users, :activation_digest, :string
    add_column :users, :activated, :boolean
    add_column :users, :activated_at, :datetime
    add_column :users, :confirm_token, :string
    add_column :users, :reset_token, :string
    add_column :users, :token_created, :datetime
  end
end
