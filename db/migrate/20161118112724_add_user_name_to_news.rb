class AddUserNameToNews < ActiveRecord::Migration
  def change
    add_column :news, :user_name, :string
  end
end
