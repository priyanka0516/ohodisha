import React, { useState, useEffect } from 'react';

const NewsTicker = ({ newsItems }) => {
  const [tickerIndex, setTickerIndex] = useState(0);

  useEffect(() => {
    // Update the ticker index every few seconds to simulate scrolling
    const interval = setInterval(() => {
      setTickerIndex((prevIndex) => (prevIndex + 1) % newsItems.length);
    }, 3000); // Adjust the interval as needed

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [newsItems.length]);

  return (
    <div className="news-ticker">
      <div className="ticker-container">
        {newsItems.map((item, index) => (
          <div
            key={index}
            className={`ticker-item ${index === tickerIndex ? 'active' : ''}`}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsTicker;
