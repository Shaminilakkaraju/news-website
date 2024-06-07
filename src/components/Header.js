import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faSun, faCloud, faCloudRain, faSnowflake } from '@fortawesome/free-solid-svg-icons'; 
import logo from '../images/logo.jpg';

import '../styles/Header.css';

const Header = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [currentTime, setCurrentTime] = useState(currentDate.toLocaleTimeString());
  const [currentDay, setCurrentDay] = useState('');
  const [weather, setWeather] = useState({});
  const [breakingNews, setBreakingNews] = useState([]);
  const [weatherIcon, setWeatherIcon] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      setCurrentDate(now);
      setCurrentTime(now.toLocaleTimeString());
      const options = { weekday: 'long' };
      const day = now.toLocaleDateString('en-IN', options);
      setCurrentDay(day);
    }, 1000);

    fetchWeatherData();
    setBreakingNews(generateRandomBreakingNews(15));
    

    return () => clearInterval(interval);
  }, []);

  const fetchWeatherData = async () => {
    try {
      const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m');
      const data = await response.json();
      setWeather(data.current);

      const weatherCode = data.current.weather.code;
      if (weatherCode < 20) {
        setWeatherIcon(faSun);
      } else if (weatherCode < 30) {
        setWeatherIcon(faCloud);
      } else if (weatherCode < 50) {
        setWeatherIcon(faCloudRain);
      } else if (weatherCode >= 50) {
        setWeatherIcon(faSnowflake);
      }
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  const generateRandomBreakingNews = (count) => {
    const headlines = [
      "Stock Market Surges After Positive Economic Data",
      "Scientists Discover New Planet in Nearby Solar System",
      "Major Breakthrough in Cancer Treatment Research",
      "Global Leaders Convene for Emergency Climate Summit",
      "Popular Music Artist Announces Surprise Retirement",
      "Local Hero Saves Family from Burning Building",
      "Tech Giant Unveils Revolutionary New Product",
      "Archaeologists Unearth Ancient City in Remote Location",
      "International Sports Tournament Ends in Dramatic Upset",
      "Popular Streaming Service Announces Price Increase",
      "World Health Organization Issues New Guidelines for Vaccinations",
      "Renowned Author Releases Highly Anticipated Sequel to Bestseller",
      "Groundbreaking Study Reveals Insights into Human Brain Function",
      "New Study Shows Benefits of Mediterranean Diet for Heart Health",
      "Innovative Startup Launches Sustainable Energy Solution",
      "Government Announces Initiative to Combat Climate Change",
      "Award-Winning Film Director to Produce New Blockbuster Movie",
      "Famous Celebrity Couple Files for Divorce After Decades of Marriage",
      "Groundbreaking Technology Promises to Revolutionize Transportation",
      "Emerging Artist Wins Prestigious Art Award for Experimental Work"
    ];

    const randomNews = [];
    for (let i = 0; i < count; i++) {
      const randomIndex = Math.floor(Math.random() * headlines.length);
      randomNews.push({ id: i + 1, headline: headlines[randomIndex] });
    }
    return randomNews;
  };

  return (
    <header>
      <div className="top-section">
        <div className="left-section">
          <div className="date-weather">
            <span>{currentDate.toLocaleDateString('en-GB')} | {currentDay} | {currentTime} | 
              {weather.temperature_2m ? `${weather.temperature_2m}°C` : ''}
              {weather.wind_speed_10m ? ` |  ${weather.wind_speed_10m} m/s` : ''}
              {weatherIcon ? <FontAwesomeIcon icon={weatherIcon} /> : null}</span> 
          </div>
        </div>
        <div className="right-section">
        <p>Start 14 Days Free Trial</p><button className="subscribe-btn">Subscribe</button>
        <a href="https://www.facebook.com/indianexpress"><FontAwesomeIcon icon={faFacebook} className="social-icon facebook" /></a>
        <a href="https://twitter.com/indianexpress"><FontAwesomeIcon icon={faTwitter} className="social-icon twitter" /></a>
        <a href="https://www.linkedin.com/company/indian-express/"><FontAwesomeIcon icon={faLinkedin} className="social-icon" /></a>
        <a href="https://www.instagram.com/indianexpress/"><FontAwesomeIcon icon={faInstagram} className="social-icon instagram" /></a>
        <a href="http://www.youtube.com/@indianexpress"><FontAwesomeIcon icon={faYoutube} className="social-icon youtube" /></a>
        </div>
      </div>
      <div className="center-section">
        <img src={logo} alt="The Indian Express Logo" className="logo" />
      </div>
      <div className="breaking-news-container">
        <ul className="breaking-news-list">
          {breakingNews.map((newsItem, index) => (
            <li key={index}>
              {newsItem.headline}
            </li>
          ))}
        </ul>
      </div>
      <Navigation />
    </header>
  );
};

export default Header;
