class ResponseGroup < ActiveRecord::Base
  has_many :invitees

  validates :name, presence: true
  validates :baby, inclusion: { in: [true, false],
    message: "Please let us know if you're bringing a baby!" }
end
