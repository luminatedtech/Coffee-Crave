class ShopsController < ApplicationController
    def index
        shops = Shop.all 
        render json: shops, include: :reviews
    end 
end
