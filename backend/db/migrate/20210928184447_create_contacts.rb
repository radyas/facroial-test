class CreateContacts < ActiveRecord::Migration[6.1]
  def change
    create_table :contacts do |t|
      t.string :first_name, not_null: true
      t.string :last_name, not_null: true
      t.text :email, not_null: true
      t.string :phone, not_null: true, limit: 15
    end

    add_index :contacts, :email, unique: true
  end
end
