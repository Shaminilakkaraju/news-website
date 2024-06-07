import React from 'react';
import NewsCard from '../components/NewsCard';
import '../styles/NewsList.css'

const NewsList = ({ articles }) => {
  return (
    <div className="news-list">
      {articles.map((article) => (
        <NewsCard key={article.url} article={article} />
      ))}
    </div>
  );
};

export default NewsList;