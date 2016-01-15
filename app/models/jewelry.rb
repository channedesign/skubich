class Jewelry < ActiveRecord::Base

	acts_as_list

	validates :name, presence: true, length: {maximum: 200}, uniqueness: { case_sensitive: false}
	validates :summary, presence: true, length: {maximum: 255}
	validates :description, presence: true, length: {maximum: 500}
	has_attached_file :image, styles: {large: "600x650>", medium: "400x450>", thumb: "100x100#" }, processors: [:thumbnail, :compression]
  	validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/
  	has_attached_file :image_modal
  	validates_attachment_content_type :image_modal, content_type: /\Aimage\/.*\Z/
end
 