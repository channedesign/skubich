class AddAttachmentImageModalToJewelries < ActiveRecord::Migration
  def self.up
    change_table :jewelries do |t|
      t.attachment :image_modal
    end
  end

  def self.down
    remove_attachment :jewelries, :image_modal
  end
end
