class User < ApplicationRecord
    has_many :locations
    validates :username, uniqueness: true 

    has_secure_password
end
