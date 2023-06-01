Rails.application.routes.draw do
  resources :users,:reviews,:shops,:sessions, only: [:create,:show,:destroy,:update,:index]
  get '/', to: 'shops#index'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  delete '/reviewList/reviews/:id', to: 'reviews#destroy'
  post '/signup', to: 'users#create'
  post '/reviews', to: 'reviews#create'
  get '/me', to: 'users#show'
  patch '/reviewList/reviews/:id', to: 'reviews#update'
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
