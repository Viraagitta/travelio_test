import React, { useState } from 'react';
import '../styles/Search.css';
import searchBooks from '../store/book';
import { useNavigate } from 'react-router-dom';

const Search = () => {
  const [keyword, setKeyword] = useState('');
  const navigate = useNavigate();

  const handleKeywordChange = (event) => {
    setKeyword(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSearchBooks();
    }
  };

  const handleSearchBooks = async (event) => {
    const { data, loading, error } = await searchBooks(keyword);
    if (data.data.length) {
      console.log(data.data, '<<ini data di search')
      navigate('/books', { state: { searchData: data.data } });
    }
  };

  return (
    <section className="hero is-fullheight custom-image">
      <div className="hero-body ">
        <div className="column is-half is-offset-one-quarter">
        <div className="box has-background-white-ter">
            <div className="control">
              <div className="field">
                <p className="control has-icons-right">
                  <input className="input is-half" type="text" 
                  id="keyword"
                  value={keyword}
                  onChange={handleKeywordChange} 
                  onKeyDown={handleKeyDown}
                  placeholder="Title book in english" />
                  <span onClick={handleSearchBooks} className="icon is-medium is-right has-text-danger is-clickable">
                    <i className="fas fa-search" ></i>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Search;
