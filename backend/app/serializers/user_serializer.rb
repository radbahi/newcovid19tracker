class UserSerializer < ActiveModel::Serializer
attributes :username, :password, :id

has_one :location
end



