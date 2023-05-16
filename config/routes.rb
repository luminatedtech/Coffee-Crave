Rails.application.routes.draw do
  resources :users,:reviews,:shops, only: [:create,:show,:destroy,:update,:index]
  get '/shops', to: 'shops#index'
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
