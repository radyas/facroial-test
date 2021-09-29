class ContactHistoriesController < ApplicationController
  def index
    if params[:contact_id]
      contact = Contact.find(params[:contact_id])
      render json: contact.contact_edit_histories.all
    else
      render json: ContactEditHistory.all
    end
  end
end
