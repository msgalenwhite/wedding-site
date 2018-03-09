class UpdateInviteesGroupings < ActiveRecord::Migration[5.1]
  def change
    add_belongs_to :invitees, :response_group, optional: true
    add_column :invitees, :allow_plus_one, :boolean, null: false
    add_column :invitees, :using_plus_one, :boolean
  end
end
