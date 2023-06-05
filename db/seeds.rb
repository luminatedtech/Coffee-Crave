# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#


 Shop.create(name: "da Bean", address: "200 Bean Avenue, Beanville", image_url: "bean.jpg", phone_number: "201-403-2341", hours: "Mon-Sat: 9:00AM - 8:30PM" )
Shop.create(name: "Starbucks", address: "319 Main Street, Norwood,NJ", image_url:"starbucks.jpg", phone_number: "324-123-5123", hours: "Mon-Sat: 7:00AM - 8:00PM")
 Shop.create(name: "Peet's Coffee", address: "20 Broadway Ave, Closter, NJ", image_url:"peets.jpg", phone_number: "551-312-5903",hours: "Mon-Sat: 6:00AM - 9:00PM" )
 Shop.create(name: "Dunkin Donuts", address: "9 Wayside Ave, Westwood, NJ", image_url:"dunkin.png", phone_number: "201-451-9921",hours: "Mon-Sat: 6:30AM - 8:30PM" )
 Shop.create(name: "Kuppi", address: "30 Lamp Street, Edgewater, NJ", image_url:"kuppi.jpg", phone_number: "551-351-0931",hours: "Mon-Sat: 7:30AM - 9:00PM" )

Review.create(user_id:1, shop_id:1, comment: "They had coffee! Cool!", title:"Very cool place!", stars: 5)