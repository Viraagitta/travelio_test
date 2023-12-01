import React from 'react';
import { useLocation } from 'react-router-dom';
import CardBooks from '../components/CardBook';

const Books = () => {
  // Access the location object to get the state
  const location = useLocation();
  const searchData = location.state?.searchData || null;

  return (
    <div className='mx-6 my-5'>
    <h2 className="title is-2">Books Page</h2>
    <div className="columns is-flex is-multiline">
      {searchData && searchData.map((book) => (
        <div className="column is-one-quarter " key={book.id}>
          <CardBooks
            title={book.title}
            author={book.author}
            description={book.rating}
            imageUrl={book.thumbnail}
          />
        </div>
      ))}
    </div>
  </div>
  );
};

export default Books;
