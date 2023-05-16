class Shop < ApplicationRecord
    has_many :reviews, through: :users
    has_many :users
end 
