class AddPositionToJewelries < ActiveRecord::Migration
  def change
    add_column :jewelries, :position, :integer
  end
end
