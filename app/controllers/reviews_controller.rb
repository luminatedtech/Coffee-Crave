class ReviewsController < ApplicationController
    def create
        user = User.find_by(id: session[:user_id])
        if session[:user_id]
            review = user.reviews.create(review_params)
            if review.valid? && session[:user_id] = review.user.id
                render json: review, include: :user, status: :created
            else
                render json: {errors: ["Not a valid review"]}, status: :unprocessable_entity
            end 
        else 
            render json: {errors: ["Not logged in"]}, status: :unauthorized
        end 
    end 
    def index
        user = User.find_by(id: session[:user_id])
        if user
            reviews = user.reviews
            render json: reviews, include: :user
        else 
            render json: {errors: ["Not authorized"]}, status: :unauthorized
        end 
    end 
    def destroy 
        review = Review.find_by(id: params[:id])
        user = User.find_by(id: session[:user_id])
        if review && session[:user_id] == review.user.id 
            review.destroy
            head :no_content
        else 
            render json: {error: ["Review not found"]}, status: :not_found
        end 
    end 
private
    def review_params
        params.permit(:user_id, :shop_id, :comment, :title, :stars)
    end 
end
