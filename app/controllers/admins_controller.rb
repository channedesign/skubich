class AdminsController < ApplicationController
	before_action :authenticate_admin!
	layout 'devise'
	
	def index
	end



	



	
 
 #  def login
 #  end

 #  def access
 #  	user = Admin.find_by(username: params[:username])
	# if user && user.authenticate(params[:password])
	#     session[:user_id] = user.id
	#     flash[:success] = "Your are logged in"
	#     redirect_to root_path
	# else
	#     flash.now[:danger] = "Your username or password does not match"
	#     render "login"
	# end
 #  end

 #  def logout
 # 	session[:user_id] = nil
 # 	flash[:success] = "Your are logged Out"
 # 	redirect_to root_path
 #  end
end
