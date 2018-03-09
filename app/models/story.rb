class Story < ActiveRecord::Base
  belongs_to :invitee

  validates :body, length: { maximum: 5000 }
  validates :invitee_id, presence: true
end
