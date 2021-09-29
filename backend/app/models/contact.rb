class Contact < ApplicationRecord
  validates :first_name, presence: true, length: {minimum: 3}
  validates :last_name, presence: true, length: {minimum: 3}
  validates :email, presence: true, format: { with: /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i}
  validates :phone, presence: true, length: {minimum: 3, maximum: 15},
            format: { with: /([+|0])?([0-9]{2})?[0-9]{9}/}

  has_many :contact_edit_histories
  after_update :create_record_history

  def create_record_history
    saved_changes.each do
      |key, val| self.contact_edit_histories.create(:attr => key, :previous => val[0], :current => val[1])
    end
  end
end
