class ShopsController < ApplicationController
    before_action :authorize
    def create
        shop = Shop.create(shop_params)
        if shop 
            render json: shop
        else 
            render json: {errors: ["Invalid Data"]}, status: :unprocessable_entity
        end 
    end 
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
private 
def shop_params
    params.permit(:name, :hours, :address,:phone_number,:image_url)
end 
end
