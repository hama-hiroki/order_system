Rails.application.routes.draw do
  resources :users, only: [:show, :edit, :update]
  resources :menu_items
  resources :orders
  
  # 他のルート設定
  get 'admin/dashboard', to: 'admin#dashboard'
  
  get 'login', to: 'sessions#new'
  post 'login', to: 'sessions#create'
  delete 'logout', to: 'sessions#destroy'

  # ルートページの設定
  root 'orders#index'

  # adminページへのルート
  get 'admin', to: 'admin#index'
end