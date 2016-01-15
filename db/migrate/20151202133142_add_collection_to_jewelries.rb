class AddCollectionToJewelries < ActiveRecord::Migration
  def change
  	add_column :jewelries, :collection, :string
  end
end
