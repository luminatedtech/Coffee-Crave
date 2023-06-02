class ShopsController < ApplicationController
    def index
        shops = Shop.all 
        render json: shops
    end 
    def show
        shop = Shop.find_by(params[:id])
        if shop
            render json: shop
        else 
            render json: { error: "Shop not found"}, status: :not_found
        end 
    end 
end
