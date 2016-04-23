class JewelriesController < ApplicationController

  # before_action :jewelry_with_id, only: [:show, :edit, :update, :delete]
  # before_action :require_user, except: [:index, :show]

  respond_to :json

  def index 
    respond_with Jewelry.order("position ASC").to_json(methods: [:image_url])
  end

  def show
    respond_with Jewelry.find(params[:id]).to_json(methods: [:image_url])
  end

  def create
    jewelry = Jewelry.new(jewelry_params)

    if jewelry.save
      respond_with jewelry
    end
  end

  def update
    respond_with Jewelry.update(params[:id], jewelry_params)
  end

  def destroy
    respond_with Jewelry.destroy(params[:id])
  end

  # def index
  #   @jewelries = Jewelry.order("position ASC")
  # end

  # def show
  #   @jewelries = Jewelry.all
  # end

  # def new
  #   @jewelry = Jewelry.new
  #   @jewerly_count = Jewelry.count + 1
  # end

  # def create
  #   @jewelry = Jewelry.new(jewelry_params)

  #   if @jewelry.save
  #     flash[:success] = "Jewelry add successfully!"
  #     redirect_to new_jewelry_path
  #   else
  #     @jewerly_count = Jewelry.count + 1
  #     render "new"
  #   end
  # end

  # def edit
  #   @jewerly_count = Jewelry.count
  # end

  # def update
  #   if @jewelry.update_attributes(jewelry_params)
  #     flash[:success] = "Jewelry edited successfully!"
  #     redirect_to jewelries_path
  #   else
  #     render "edit"
  #   end
  # end

  # def delete
  # end

  # def destroy
  #   jewelry = Jewelry.find(params[:id]).destroy
  #   flash[:success] = "Jewelry deleted successfully!"
  #   redirect_to jewelries_path
  # end

  private

    def jewelry_params
      params.require(:jewelry).permit(:name, :summary, :image, :image_modal, :description, :position, :collection) 
    end

    # def jewelry_with_id
    #   @jewelry = Jewelry.find(params[:id])
    # end
end
