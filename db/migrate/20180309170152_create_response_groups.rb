class CreateResponseGroups < ActiveRecord::Migration[5.1]
  def change
    create_table :response_groups do |t|
      t.string :name, null: false
      t.boolean :baby, null: false
    end
  end
end
