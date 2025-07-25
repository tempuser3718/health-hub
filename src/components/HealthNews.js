import { useEffect, useState, useRef } from 'react';

export default function HealthNews() {
  const [status, setStatus] = useState('loading');
  const [articles, setArticles] = useState([]);
  const cached = useRef(null);

  useEffect(() => {
    if (cached.current) {
      setArticles(cached.current);
      setStatus('success');
      return;
    }

    let didCancel = false;

    fetch(
      'http://api.mediastack.com/v1/news?access_key=ee370027f55a2631aa0cae6d2530b28e&categories=health&countries=gb&limit=5&sort=published_desc'
    )
      .then((res) => {
        if (!res.ok) throw new Error();
        return res.json();
      })
      .then((data) => {
        if (!didCancel) {
          const news = Array.isArray(data.data) ? data.data : [];
          cached.current = news;
          setArticles(news);
          setStatus(news.length > 0 ? 'success' : 'error');
        }
      })
      .catch(() => {
        if (!didCancel) {
          setArticles([]);
          setStatus('error');
        }
      });

    return () => {
      didCancel = true;
    };
  }, []);

  return (
    <div>
      <h1>Latest Health News</h1>
      <section style={{ maxWidth: '600px', margin: 'auto' }}>
        {status === 'loading' ? (
          <p>Loading news...</p>
        ) : status === 'error' ? (
          <p style={{ color: 'red' }}>No news can be found.</p>
        ) : (
          <ul>
            {articles.map((article, index) => (
              <li key={index} style={{ marginBottom: '20px' }}>
                <a href={article.url} target="_blank" rel="noopener noreferrer">
                  <strong>{article.title}</strong>
                </a>
                <p>{article.description}</p>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}
