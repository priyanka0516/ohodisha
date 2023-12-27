import React from 'react';
const Blogcard = ({ title, content, imageUrl }) => {
  return (
    <div className="blog-card">
      <img src={imageUrl} alt={title} />
        <h3>{title}</h3>
        <p>{content}</p>
    </div>
  );
};
export default Blogcard;
