class User < ApplicationRecord
    # has_many :locations
    validates :username, uniqueness: true 
    # accepts_nested_attributes_for :locations
    has_secure_password
end
