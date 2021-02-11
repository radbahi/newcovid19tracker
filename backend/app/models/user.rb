class User < ApplicationRecord
    has_one :location
    accepts_nested_attributes_for :location

    validates :username, uniqueness: true 
    has_secure_password
end
