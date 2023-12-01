// src/store.js
import axios from 'axios';


const searchBooks = async (keyword) => {
    try {
      const response = await axios.get(`https://travelio-be-production.up.railway.app/search?keyword=${keyword}`);
        console.log(response.data, '<ini hasil book')
      return { data: response.data, error: null };
    } catch (error) {
      return { data: null, error: error.message || 'An error occurred' };
    }
  };
  
  export default searchBooks;