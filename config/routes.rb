Rails.application.routes.draw do
  get '/about', to: 'resume#index'
end
