class UserSerializer < ActiveModel::Serializer
attributes :username, :password, :id, :saved_location

# has_many :locations
end
