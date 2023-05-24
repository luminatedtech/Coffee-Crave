# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#

Shop.create(name: "Flick da Bean", address: "200 Bean Avenue, Beanville", image_url: "bean.jpg" )
Shop.create(name: "Starbucks", address: "319 Main Street, Norwood,NJ", image_url:"starbucks.jpg")
Shop.create(name: "Peet's Coffee", address: "20 Broadway Ave, Closter, NJ", image_url:"peets.jpg" )
Shop.create(name: "Dunkin Donuts", address: "9 Wayside Ave, Westwood, NJ", image_url:"dunkin.png" )
Shop.create(name: "Kuppi", address: "30 Lamp Street, Edgewater, NJ", image_url:"kuppi.jpg" )

Review.create(user_id:1, shop_id:1, comment: "This place was so cool!", name: "Allen", stars: 5)