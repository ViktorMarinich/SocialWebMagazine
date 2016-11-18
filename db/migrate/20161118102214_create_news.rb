class CreateNews < ActiveRecord::Migration
  def change
    create_table :news do |t|
      t.string :text
      t.references :user, index: true, foreign_key: true
      t.json :images
      t.integer :wall_id

      t.timestamps null: false
    end
  end
end
