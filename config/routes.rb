Rails.application.routes.draw do
  resources :users,:reviews,:shops,:sessions, only: [:create,:show,:destroy,:update,:index]
  get '/shops', to: 'shops#index'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  post '/signup', to: 'users#create'
  post '/reviews', to: 'reviews#create'
  get '/reviews', to: 'reviews#index'
  get '/me', to: 'users#show'
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
