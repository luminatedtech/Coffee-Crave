class Reviews < ActiveRecord::Migration[6.1]
  def change
    create_table :reviews do |t|
      t.integer :user_id
      t.integer :shop_id
      t.string :comment
      t.string :title
      t.integer :stars 
      t.string :name
    end 
  end
end
