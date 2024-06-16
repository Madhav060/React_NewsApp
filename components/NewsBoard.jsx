import React, { useState,useEffect } from "react";
import NewsItem from "./NewsItem";

function NewsBoard() {
  const [articles, setArticles] = useState([]);
  const [category, setCategory] = useState("Technology");
 
  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=6a9909c39d5e4d38a0cd245e433cd3a6`;
   fetch(url)
    .then((data)=>data.json())
    .then(data=> setArticles(data.articles));
},[]);

  return (
    <div>
      <h1 className="text-center">Latest News</h1>
      {articles.map((news,index)=>
         {return <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url} />})}
    </div>
  );
}

export default NewsBoard;
