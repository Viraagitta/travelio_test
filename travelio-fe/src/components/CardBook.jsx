import React, { useEffect, useRef, useState } from 'react';
import rater from 'rater-js';
import {addWishlist} from '../store/book';


const CardBooks = ({ title, author, rating, thumbnail, data }) => {
  const raterRef = useRef(null);
  const [isHeartClicked, setHeartClicked] = useState(false);
  useEffect(() => {
    let myRater;

    if (raterRef.current) {
      const options = {
        element: raterRef.current,
        rateCallback: function (newRating, done) {
          console.log(`New Rating: ${rating}`);
        //   myRater.current.setRating(3);
          done();
        },
        max: rating || 0 ,
        starSize:25,
        ratingText: 'test', 
        disableText: 'Read-only', 
        readOnly: true, 
    };
    myRater = rater(options);
    }

    return () => {
      if (myRater) {
        myRater.dispose();
      }
    };
  }, [rating, isHeartClicked]);

  const handleHeartClick = async () => {
    if(!isHeartClicked){
        await addWishlist(data)
    }
    setHeartClicked(!isHeartClicked);
  };

  return (
    <div className="card height-card my-4 mx-2">
      <div className="card-image">
        <figure className="image img-height">
          <img src={thumbnail} alt="Book Cover" />
        </figure>
      </div>
      <div className="card-content has-icons-right">
        <p className="title is-5 is-text-overflow mb-2">{title}</p>
        <p className="is-7 content is-truncated is-text-overflow mb-8">{author}</p>
        {rating ?
            <div ref={raterRef}></div>
            :
            <div className='content has-text-grey is-size-7'>No Ratings</div>
        }
      <div className={`mt-4 is-clickable is-right heart-icon m-3 ${isHeartClicked ? 'has-text-danger' : 'has-text-grey'}`}  onClick={handleHeartClick} >
          <i className={`fas fa-heart is-size-4`}></i>
        </div>
      </div>
    </div>
  );
};

export default CardBooks;
