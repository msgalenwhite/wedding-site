class Invitee < ActiveRecord::Base
  belongs_to :response_group
  has_one :plus_one
  has_many :stories

  validates :name, presence: true
  validates :password, presence: true
  validates :email, format: {
    with: /\A[-\w\.]+@(?:[-\w]+\.)+[-\w]{2,4}\z/,
    message: "Email must be properly formatted, (I.E. name@website.com)"
  }, allow_nil: true
  validates :dietary_restrictions,
    length: { maximum: 5000 }, allow_nil: true
  validates :attending, inclusion: { in: [true, false, nil],
    message: "Please let us know if you're attending!" }
  validates :allow_plus_one, inclusion: { in: [true, false],
    message: "Must be true or false" }
  validates :attending, inclusion: { in: [true, false, nil],
    message: "Please let us know if you're bringing a plus one!" }
end
