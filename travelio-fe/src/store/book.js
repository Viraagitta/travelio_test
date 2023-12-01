// src/store.js
import axios from 'axios';


const searchBooks = async (keyword) => {
    try {
      const response = await axios.get(`https://travelio-be-production.up.railway.app/search?keyword=${keyword}`);

      return { data: response.data, error: null };
    } catch (error) {
      return { data: null, error: error.message || 'An error occurred' };
    }
  };

  const wishlistBooks = async (keyword) => {
    try {
      const response = await axios.get(`https://travelio-be-production.up.railway.app/books`);
    console.log(response.data , '<<ini apa')
      return { data: response.data, error: null };
    } catch (error) {
      return { data: null, error: error.message || 'An error occurred' };
    }
  };
  
  const addWishlist = async (data) => {
    try {
      const url = 'https://travelio-be-production.up.railway.app/wishlist';
      const response = await axios.post(url, data);
  
      console.log('Wishlist added successfully:', response.data);
    } catch (error) {
      console.error('Error adding wishlist:', error.message);
    }
  };
  
  export { searchBooks, addWishlist, wishlistBooks };