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
        Story.create!(title: s["title"], author: s["author"], description: s["description"], url: s["url"], urlToImage: s["urlToImage"], publishedAt: s["publishedAt"], content: s["content"]) 
    end
end

news_dataset()
