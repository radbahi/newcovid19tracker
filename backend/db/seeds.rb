# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
l1 = Location.create(country: "poopville", flag: "neato", ISO: "TSM", confirmed: 1, deaths: 10, active: 12, recovered: 0, lat: 1.999, lon: 29.3999, date: "Today")

u1 = User.create(username: "poop", password_digest: "poop", locations_id: l1.id)

