class ContactsController < ApplicationController

  def index
    render json: Contact.all
  end

  def create
    contact = Contact.new(contact_args)

    if contact.save
      render json: contact, status: :created
    else
      render json: contact.errors, status: :unprocessable_entity
    end
  end

  def show
    contact = Contact.find(params[:id])
    render json: contact
  end

  def update
    contact = Contact.find(params[:id])
    contact.update(contact_args)

    if contact.save
      render json: contact, status: :created
    else
      render json: contact.errors, status: :unprocessable_entity
    end
  end

  def destroy
    contact = Contact.find(params[:id])
    contact.contact_edit_histories.delete_all(:delete_all)
    contact.destroy
  end


  private

  def contact_args
    params.require(:contact).permit(:first_name, :last_name, :email, :phone)
  end


end
