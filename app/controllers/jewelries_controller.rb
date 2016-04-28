class JewelriesController < ApplicationController

  before_action :authenticate_admin!, except: [:index, :show]

  respond_to :json

  def index 
    respond_with Jewelry.order("position ASC").to_json(methods: [:image_url, :image_url_min, :image_url_og])
  end

  def show
    respond_with Jewelry.find(params[:id]).to_json(methods: [:image_url, :image_url_min, :image_url_og])
  end

  def create
    jewelry = Jewelry.new(jewelry_params)

    if jewelry.save
      respond_with jewelry, status: 200
    end
  end

  def update
    respond_with Jewelry.update(params[:id], jewelry_params).to_json(methods: [:image_url, :image_url_min, :image_url_og])
  end

  def destroy
    respond_with Jewelry.destroy(params[:id])
  end

  def sort
    params[:jewelry].each_with_index do |id, index|
      Jewelry.where(id: id).update_all({position: index + 1})
    end
    render nothing: true
  end


  private

    def jewelry_params
      params.require(:jewelry).permit(:name, :summary, :image, :image_modal, :description, :position, :collection, :visible) 
    end

end
