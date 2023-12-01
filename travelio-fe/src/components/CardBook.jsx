import React from 'react';
import '../styles/Search.css';

const CardBooks = ({ title, author, rating, imageUrl }) => {
  return (
    <div className="card height-card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={imageUrl} alt="Book Cover" />
        </figure>
      </div>
      <div className="card-content">
        <p className="title is-5 is-truncated">{title}</p>
        <p className="subtitle is-6">{author}</p>
        <p className="subtitle is-6">{rating}</p>
      </div>
    </div>
  );
};

export default CardBooks;
