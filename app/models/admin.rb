class Admin < ActiveRecord::Base

	validates :username, presence: true, length: {maximum: 20}


	has_secure_password
end
