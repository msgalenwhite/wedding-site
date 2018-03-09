class CreatePlusOnes < ActiveRecord::Migration[5.1]
  def change
    create_table :plus_ones do |t|
      t.string :name
      t.belongs_to :invitee, null: false
    end
  end
end
