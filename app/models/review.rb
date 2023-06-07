class Review < ApplicationRecord
    belongs_to :user
    belongs_to :shop
    validates :title, presence: true 
    validates :comment, presence: true
    validates :stars, numericality: { only_integer: true, in: 1..5}
end 