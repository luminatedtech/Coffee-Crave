class Shop < ApplicationRecord
    has_many :reviews
    has_many :users, through: :reviews
def shop_order
    Shop.order(name: :asc)
end 
end 
