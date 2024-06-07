import React, { useState, useEffect } from 'react';
import NewsList from '../components/NewsList';
import { fetchTopHeadlines } from '../utils/api';
import '../styles/HomePage.css';

const HomePage = () => {
  const [topHeadlines, setTopHeadlines] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const headlines = await fetchTopHeadlines();
        setTopHeadlines(headlines);
      } catch (error) {
        console.error('Error fetching top headlines:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="home-page">
      <h1 className="page-title">Top Headlines</h1>
      <NewsList articles={topHeadlines} />
    </div>
  );
};

export default HomePage;