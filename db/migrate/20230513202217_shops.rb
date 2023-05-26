class Shops < ActiveRecord::Migration[6.1]
  def change
    create_table :shops do |t| 
      t.string :name
      t.string :image_url
      t.string :address
      t.string :phone_number
     end 
  end
end
