class Users < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :username
      t.string :profile_url
      t.string :password_digest
    end 
  end
end
