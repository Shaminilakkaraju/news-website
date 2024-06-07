import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

const categories = ['Business', 'Entertainment', 'General', 'Health', 'Science', 'Sports', 'Technology'];

const Navigation = () => {
  return (
    <nav>
        <div className="nav-content">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        {categories.map((category) => (
          <li key={category}>
            <Link to={`/category/${category}`}>{category}</Link>
          </li>
        ))}
        <li className="shop-now">
          <Link to="/">Shop Now</Link>
        </li>
      </ul>
      <SearchBar />
      </div>
    </nav>
  );
};

export default Navigation;
