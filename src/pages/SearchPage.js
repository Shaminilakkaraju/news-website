import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import NewsList from '../components/NewsList';
import CategoryFilter from '../components/CategoryFilter';
import { searchNews } from '../utils/api';

const SearchPage = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [activeCategory, setActiveCategory] = useState('');
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('q') || '';

  const categories = ['Business', 'Entertainment', 'General', 'Health', 'Science', 'Sports', 'Technology'];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const results = await searchNews(searchQuery);
        setSearchResults(results);
        setFilteredResults(results);
      } catch (error) {
        console.error('Error searching for news:', error);
      }
    };

    if (searchQuery) {
      fetchData();
    } else {
      setSearchResults([]);
      setFilteredResults([]);
    }
  }, [searchQuery]);

  useEffect(() => {
    if (activeCategory) {
      const filtered = searchResults.filter((article) => article.category === activeCategory);
      setFilteredResults(filtered);
    } else {
      setFilteredResults(searchResults);
    }
  }, [activeCategory, searchResults]);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  return (
    <div className="search-page">
      <h1>Search Results for "{searchQuery}"</h1>
      <CategoryFilter
        categories={categories}
        activeCategory={activeCategory}
        onCategoryChange={handleCategoryChange}
      />
      <NewsList articles={filteredResults} />
    </div>
  );
};

export default SearchPage;