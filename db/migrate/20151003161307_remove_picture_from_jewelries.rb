class RemovePictureFromJewelries < ActiveRecord::Migration
  def change
  	remove_column :jewelries, :picture, :string
  end
end
