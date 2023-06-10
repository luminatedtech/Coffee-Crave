class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :comment, :title, :stars, :user
  
  belongs_to :shop
  belongs_to :user
end
