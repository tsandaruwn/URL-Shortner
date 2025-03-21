import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

function App() {
  const [originalUrl, setOriginalUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!originalUrl) {
      toast.error('Please enter a URL!');
      return;
    }
    setIsLoading(true); // Start loading
    try {
      const response = await fetch('http://localhost:8000/api/shorten/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ original_url: originalUrl }),
      });
      const data = await response.json();
      const newShortUrl = `http://localhost:8000/api/${data.short_code}/`;
      setShortUrl(newShortUrl);
      toast.success('URL shortened successfully!');
    } catch (error) {
      toast.error('Error shortening URL. Try again!');
      console.error(error);
    } finally {
      setIsLoading(false); // Stop loading, whether success or failure
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shortUrl);
    toast.info('Copied to clipboard!');
  };

  return (
    <div className="app-container">
      <h1 className="title">Shortify</h1>
      <p className="subtitle">Shrink your links with style!</p>

      <form onSubmit={handleSubmit} className="url-form">
        <input
          type="url"
          value={originalUrl}
          onChange={(e) => setOriginalUrl(e.target.value)}
          placeholder="Paste your long URL here"
          className="url-input"
        />
        <button type="submit" className="shorten-btn" disabled={isLoading}>
  {isLoading ? 'Shortening...' : 'Shorten It!'}
</button>
      </form>

      {shortUrl && (
        <div className="result-container">
          <p className="short-url-label">Your Shortened URL:</p>
          <div className="short-url-box">
            <a href={shortUrl} target="_blank" rel="noopener noreferrer" className="short-url">
              {shortUrl}
            </a>
            <button onClick={copyToClipboard} className="copy-btn">
              Copy
            </button>
          </div>
        </div>
      )}

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="colored"
      />
    </div>
  );
}

export default App;