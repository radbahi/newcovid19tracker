# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).


# require 'unirest'
require 'rest-client'

def api_secret_news
    ENV["NEWS_API_KEY"]
end

def news_dataset
    api_data = { key: api_secret_news }
    news = RestClient.get("https://newsapi.org/v2/top-headlines?q=coronavirus&apiKey=#{api_data[:key]}")
    news_array = JSON.parse(news)["articles"]
    news_array.each do |s|
        Story.create(title: s["title"], author: s["author"], description: s["description"], url: s["url"], urlToImage: s["urlToImage"], publishedAt: s["publishedAt"], content: s["content"]) 
    end
end

news_dataset()

u1 = User.create!(username: "poop", password_digest: "poop")
l1 = Location.create!(country: "poopville", flag: "neato", ISO: "TSM", confirmed: 1, deaths: 10, active: 12, recovered: 0, lat: 1.999, lon: 29.3999, date: "Today")
s1 = Story.create!(title: 'trump out', description: 'holy shit', author: 'noam chomsly', url: 'random string', urlToImage: 'amnother random string', publishedAt: 'yesterday')

