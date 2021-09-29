class CreateContactEditHistories < ActiveRecord::Migration[6.1]
  def change
    create_table :contact_edit_histories do |t|
      t.string :attr, not_null: true
      t.string :previous, not_null: true
      t.string :current, not_null: true
      t.timestamps
    end

    add_reference :contact_edit_histories, :contact, null: false, foreign_key: true
  end
end
