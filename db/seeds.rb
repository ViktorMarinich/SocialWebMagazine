# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
#News.delete_all
#Wall.delete_all
#Gallery.delete_all
Relationship.delete_all
Friendship.delete_all
User.delete_all
99.times do |n|
  if n<= 9
User.create(name:"Mister#{n}", email: "#{n+1}@ukr.net", password: "aaaa",password_confirmation: "aaaa",avatar: Rails.root.join("public/user-images/#{n}.jpg").open)
else
  User.create(name:"Mister#{n}", email: "#{n+1}@ukr.net", password: "aaaa",password_confirmation: "aaaa")
end
#user= User.last
#Wall.create(user: user)
end
User.all.each do |n|
  User.first.friendships.new(friend: n).save unless User.first == n
end
