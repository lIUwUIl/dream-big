require 'grape'

class CategoryApi < Grape::API

  desc 'Allow creation of a category'
  params do
  
    requires :name, type: String, desc: 'Category name'
    requires :description, type: String, desc: 'The description of the category'
    requires :default_weight, type: String :title, precision: 10, scale: 2 desc: 'default weight for category'
  end
  post '/category' do
    category_parameters = ActionController::Parameters.new(params)
      .permit(
        :name,
        :description,
        :default_weight
      )

    # Auth...

    result = category.create!(category_parameters)

    present result, with: Entities::CategoryEntity
  end

  desc 'Allow updating of a categories'
  params do
    
    optional :name, type: String, desc: 'The categoryr name'
    optional :description, type: String, desc: 'The description of the category'
    optional :default_weight, type: String, desc: 'default weight for category'
  end
  put '/category/:id' do
    category_parameters = ActionController::Parameters.new(params)
      .permit(
        :name,
        :description,
        :default_weight
        #Ex:- :default =>''
      )

    # Auth

    result = Category.find(params[:id])
    result.update! category_parameters

    present result, with: Entities::CategoryEntity
  end

  desc 'Delete the category with the indicated id'
  params do
    requires :id, type: Integer, desc: 'The id of the category to delete'
  end
  delete '/category/:id' do
    Category.find(params[:id]).destroy!
    true
  end

  get '/category' do
    result = category.all

    present result, with: Entities::CategoryEntity
  end
end