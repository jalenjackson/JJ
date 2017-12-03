Rails.application.routes.draw do
  get '/about', to: 'resume#index'
  get '/blog', to: 'blog#index'
  get '/choose', to: 'choose#index'
  get '/bio', to: 'choose#bio'
  get '/resume', to: 'choose#resume'

end
