Rails.application.routes.draw do
  get '/about', to: 'resume#index'
  get '/blog', to: 'blog#index'
end
