const { Pool } = require('pg');
const config = require('../config/config.json');
let axios = require("axios");

const pool = new Pool(config);

const searchBooks = async (req, res) => {
    const client = await pool.connect();
    console.time('testing')
    try {
        const { keyword } = req.query;
        const { data: response } = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${keyword}`);
        
        const booksData = response.items.map((bookData) => {
          const { volumeInfo } = bookData;
          const { title, imageLinks, authors, averageRating } = volumeInfo;
    
          return {
            id: bookData.id,
            title,
            thumbnail: imageLinks?.thumbnail || '',
            author: authors?.toString() || '',
            rating: averageRating || '',
          };
        });
    
        res.status(200).json({
          data: booksData,
        });
        console.log(`Book inserted Successfully ${booksData}` + booksData.length);
    
      } catch (error) {
        console.error(`Error in searchBooks: ${error.message}`);
        res.status(500).json({ error: 'Internal Server Error', message: error.message });
      } finally {
        client.release(); 
        console.timeEnd('testing')
      }
    };
  

const getWishlistBooks = async (req, res) => {
  const client = await pool.connect();

  try {
    const result = await client.query('SELECT * FROM wishlist');
    const databaseBooks = result.rows;

    res.status(200).json({
      data: databaseBooks,
    });
  } catch (error) {
    console.error(`Error in getDatabaseBooks: ${error.message}`);
    res.status(500).json({ error: 'Internal Server Error', message: error.message });
  } finally {
    client.release(); 
  }
};

const createWishlist = async (req, res) => {
  const client = await pool.connect();

  try {
    const { id, title, thumbnail, author, rating } = req.body;

    const query = {
      text: 'INSERT INTO wishlist (id, title, thumbnail, author, rating) VALUES ($1, $2, $3, $4, $5) ON CONFLICT (id) DO NOTHING;',
      values: [id, title, thumbnail, author, rating],
    };

    await client.query(query);
    console.log(`Wishlist inserted: ${title}`);

    res.status(200).json({
      data: req.body,
      message: 'Wishlist inserted',
    });
  } catch (error) {
    console.error(`Error in create wishlist Books: ${error.message}`);
    res.status(500).json({ error: 'Internal Server Error', message: error.message });
  } finally {
    client.release(); 

  }
};

module.exports = {
  searchBooks,
  getWishlistBooks,
  createWishlist,
};
