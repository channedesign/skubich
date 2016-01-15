class AddAttachmentImageToJewelries < ActiveRecord::Migration
  def self.up
    change_table :jewelries do |t|
      t.attachment :image
    end
  end

  def self.down
    remove_attachment :jewelries, :image
  end
end
