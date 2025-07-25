import { useEffect, useState } from 'react';

export default function HealthNews() {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          `http://api.mediastack.com/v1/news?access_key=ee370027f55a2631aa0cae6d2530b28e&categories=health&languages=en&limit=5`
        );
        const data = await response.json();
        if (data.data) {
          setArticles(data.data);
        } else {
          setError('Could not fetch news.');
        }
      } catch (err) {
        setError('An error occurred while fetching news.');
      }
    };

    fetchNews();
  }, []);

  return (
    <div>
      <h1>Latest Health News</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ul>
        {articles.map((article, index) => (
          <li key={index} style={{ marginBottom: '15px' }}>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              <strong>{article.title}</strong>
            </a>
            <p>{article.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
