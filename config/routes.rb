Rails.application.routes.draw do
  root to: 'pages#home'
  get 'lemeuble', to: 'pages#lemeuble'
  get 'nature', to: 'pages#nature'
  get 'restauration', to: 'pages#restauration'
  get 'cultureetpatrimoine', to: 'pages#cultureetpatrimoine'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
