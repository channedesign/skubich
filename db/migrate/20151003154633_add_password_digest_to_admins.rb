class AddPasswordDigestToAdmins < ActiveRecord::Migration
  def change
  	 add_column :admins, :password_digest, :string
  	 remove_column :admins, :password, :string
  end
end
