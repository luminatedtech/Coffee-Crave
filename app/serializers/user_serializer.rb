class UserSerializer < ActiveModel::Serializer
  attributes :id,:username, :profile_url
  has_many :shops, through: :reviews
  
  
end
