import React from 'react';

const CategoryFilter = ({ categories, activeCategory, onCategoryChange, showFilter }) => {
  if (!showFilter) {
    return null; 
  }

  return (
    <div className="category-filter">
      <h3>Categories</h3>
      <ul>
        {categories.map((category) => (
          <li key={category}>
            <button
              onClick={() => onCategoryChange(category)}
              className={activeCategory === category ? 'active' : '' }
            >
              {category}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryFilter;
