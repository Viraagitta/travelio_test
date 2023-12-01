import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import CardBooks from '../components/CardBook';

const Books = () => {
    const location = useLocation();
  const navigate = useNavigate();

    const {searchData, keyword} = location.state || null;
  
    const handleHomeSearch = async (event) => {
        navigate('/')
    };
    const handleWishlistPage = async (event) => {
      navigate('/wishlists')
  };

  return (
    <div className='custom-bg'>
      <div className='mx-6 py-5'>
        <div className='has-icons-right'>
          <h2 className="title is-4 is-text-overflow custom-title">KEYWORD: {keyword}</h2>
          <div
            className={`mt-4 is-clickable is-right has-text-dark home-icon hoverable hoverable-custom`}
            onClick={handleHomeSearch}
          >
            <i className={`fas fa-home is-size-2`} />
          </div>
          <div
            className={`mt-4 is-clickable is-right has-text-dark home-icon mr-4 hoverable hoverable-custom`}
            onClick={handleWishlistPage}
          >
            <i className={`fas fa-heart is-size-2`} />
          </div>
        </div>

        <div className="columns is-flex is-multiline">
          {searchData && searchData.map((book) => (
            <div className="column is-one-fifth " key={book.id}>
              <CardBooks
                title={book.title}
                author={book.author}
                rating={book.rating}
                thumbnail={book.thumbnail}
                data={book}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Books;
