class PlusOne < ActiveRecord::Base
  belongs_to :invitee

  validates :invitee_id, presence: true
end
