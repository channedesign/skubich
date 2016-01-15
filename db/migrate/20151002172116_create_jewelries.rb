class CreateJewelries < ActiveRecord::Migration
  def change
    create_table :jewelries do |t|
    	t.string :name
    	t.text :summary
    	t.string :picture
    	t.text :description
    	t.integer :price

      t.timestamps 
    end
  end
end
