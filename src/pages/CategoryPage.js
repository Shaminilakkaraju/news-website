import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import NewsList from '../components/NewsList';
import CategoryFilter from '../components/CategoryFilter';
import { fetchNewsByCategory } from '../utils/api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faBriefcase, 
  faFilm, 
  faGlobe, 
  faHeartbeat, 
  faFlask, 
  faFutbol, 
  faLaptop, 
  faBalanceScale, 
  faGraduationCap 
} from '@fortawesome/free-solid-svg-icons';
import '../styles/CategoryPage.css';

const CategoryPage = () => {
  const { category } = useParams();
  const [categoryNews, setCategoryNews] = useState([]);
  const [activeCategory, setActiveCategory] = useState(category);
  const [isLoading, setIsLoading] = useState(false); 
  const [error, setError] = useState(null); 

  const categories = ['Business', 'Entertainment', 'General', 'Health', 'Science', 'Sports', 'Technology', 'Politics','Education'];

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const news = await fetchNewsByCategory(activeCategory);
        setCategoryNews(news);
      } catch (error) {
        console.error(`Error fetching news for category ${activeCategory}:`, error);
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [activeCategory]);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  const categoryColors = {
    Business: '#007bff',
    Entertainment: '#ffc107',
    General: '#28a745',
    Health: '#dc3545',
    Science: '#17a2b8',
    Sports: '#6610f2',
    Technology: '#6c757d',
    Politics: '#fd7e14',
    Education: '#20c997'
  };

  return (
    <div className="category-page">
      <h1 className="active-category-title">
        <FontAwesomeIcon 
          icon={activeCategory === 'Business' ? faBriefcase : 
                activeCategory === 'Entertainment' ? faFilm :
                activeCategory === 'General' ? faGlobe :
                activeCategory === 'Health' ? faHeartbeat :
                activeCategory === 'Science' ? faFlask :
                activeCategory === 'Sports' ? faFutbol :
                activeCategory === 'Technology' ? faLaptop :
                activeCategory === 'Politics' ? faBalanceScale :
                activeCategory === 'Education' ? faGraduationCap : null
          } 
          style={{ color: categoryColors[activeCategory] }} 
        />
        {activeCategory}
      </h1>
      <CategoryFilter
        categories={categories}
        activeCategory={activeCategory}
        onCategoryChange={handleCategoryChange}
      />
      {isLoading && <p>Loading news...</p>}
      {error && <p>Error fetching news: {error.message}</p>}
      <NewsList articles={categoryNews} />
    </div>
  );
};

export default CategoryPage;
