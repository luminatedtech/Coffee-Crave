class Review < ApplicationRecord
    belongs_to :user
    belongs_to :shop
    validates :stars, numericality: { only_integer: true, in: 1..5}
end 