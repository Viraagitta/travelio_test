import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CardBooks from '../components/CardBook';
import { wishlistBooks } from '../store/book';

const Wishlists = () => {
  const navigate = useNavigate();
  const [wishlistData, setWishlistData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data, error } = await wishlistBooks();
        if (error) {
          console.error('Error fetching wishlist books:', error);
        } else {
          setWishlistData(data || []);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleHomeSearch = async (event) => {
    navigate('/');
  };

  return (
    <div className='custom-bg'>
      <div className='mx-6 py-5'>
        <div className='has-icons-right'>
          <h2 className="title is-3 has-text-centered ">WISHLIST BOOKS</h2>
          <div
            className={`mt-4 is-clickable is-right has-text-dark home-icon hoverable hoverable-custom`}
            onClick={handleHomeSearch}
          >
            <i className={`fas fa-home is-size-2`} />
          </div>
        </div>

        <div className="columns is-flex is-multiline">
          {loading ? (
            <p>Loading...</p>
          ) : (
            wishlistData.data.map((book) => (
              <div className="column is-one-fifth " key={book.id}>
                <CardBooks
                  title={book.title}
                  author={book.author}
                  rating={book.rating}
                  thumbnail={book.thumbnail}
                  data={book}
                />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Wishlists;
