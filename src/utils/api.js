import axios from 'axios';

const API_KEY = '1ad3872e1d5045a59a1aaf55b2e1d72e';
const BASE_URL = 'https://newsapi.org/v2';

const handleError = (error) => {
  console.error('API Error:', error);
  throw error;
};

export const fetchTopHeadlines = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/top-headlines`, {
      params: {
        country: 'in',
        apiKey: API_KEY,
      },
    });
    return response.data.articles;
  } catch (error) {
    handleError(error);
  }
};

export const fetchNewsByCategory = async (category) => {
  try {
    const response = await axios.get(`${BASE_URL}/top-headlines`, {
      params: {
        country: 'in',
        category,
        apiKey: API_KEY,
      },
    });
    return response.data.articles;
  } catch (error) {
    handleError(error);
  }
};

export const fetchArticleDetails = async (articleId) => {
  try {
    const response = await axios.get(`${BASE_URL}/articles/${articleId}`, {
      params: {
        apiKey: API_KEY,
      },
    });

    const article = response.data;
    const relatedArticles = await fetchRelatedArticles(article.title);

    return { article, relatedArticles };
  } catch (error) {
    handleError(error);
  }
};

const fetchRelatedArticles = async (query) => {
  try {
    const response = await axios.get(`${BASE_URL}/everything`, {
      params: {
        q: query,
        apiKey: API_KEY,
      },
    });
    return response.data.articles;
  } catch (error) {
    handleError(error);
  }
};


export const searchNews = async (query) => {
  try {
    const response = await axios.get(`${BASE_URL}/everything`, {
      params: {
        q: query,
        apiKey: API_KEY,
      },
    });
    return response.data.articles;
  } catch (error) {
    handleError(error);
  }
};