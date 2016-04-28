class AdminsController < ApplicationController
	before_action :authenticate_admin!
	layout 'devise'
	
	def index
	end

end
