class AddVisibleToJewelries < ActiveRecord::Migration
  def change
    add_column :jewelries, :visible, :boolean
  end
end
