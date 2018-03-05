class CreateInvitees < ActiveRecord::Migration[5.1]
  def change
    create_table :invitees do |t|
      t.string :name, null: false
      t.string :password, default: 'galenandchriswedding', null: false
      t.string :email, null: false
      t.text :dietary_restrictions
      t.boolean :attending

      t.timestamps null: false
    end
  end
end
