class ContactsController < ApplicationController
	def new
		@contact = Contact.new
	end

	def create
	    @contact = Contact.new(params[:contact])
	    @contact.request = request
	    if @contact.deliver
	      flash[:success] = 'Thank you for your message. Camille will contact you soon!'
	      redirect_to contacts_path
	    else
	      flash.now[:danger] = 'Cannot send message.'
	      render :new
	    end
	end
end
