class CreateStories < ActiveRecord::Migration[5.1]
  def change
    create_table :stories do |t|
      t.text :body, null: false
      t.belongs_to :invitee, null: false
    end
  end
end
