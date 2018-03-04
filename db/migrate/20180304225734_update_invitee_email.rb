class UpdateInviteeEmail < ActiveRecord::Migration[5.1]
  def up
    change_column :invitees, :email, :string, null: true
  end

  def down
    change_column :invitees, :email, :string, null: false
  end
end
