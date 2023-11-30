const { Client } = require('pg');
const config = require('../config/config.json'); 
const client = new Client(config);
let axios = require("axios");

const searchBooks = async (req, res) => {
    try {
        const { keyword } = req.query;
        const { data: response } = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${keyword}`);

        await client.connect();

        for (const bookData of response.items) {
            try {
                const { volumeInfo } = bookData;
                const title = volumeInfo.title;
                const thumbnail = volumeInfo.imageLinks.thumbnail;
                const author = volumeInfo.authors?.toString() || "";
                const rating = volumeInfo.averageRating || "";

                const query = {
                    text: 'INSERT INTO books (id, title, thumbnail, author, rating) VALUES ($1, $2, $3, $4, $5) ON CONFLICT (id) DO NOTHING;',
                    values: [bookData.id, title, thumbnail, author, rating],
                };

                await client.query(query);
                console.log(`Book inserted: ${title}` + `${bookData.length}`);
            } catch (insertError) {
                console.error(`Error inserting book: ${insertError.message}`);
            }
        }

        res.status(200).json({
            data: response.items || [],
        });
    } catch (error) {
        console.error(`Error in searchBooks: ${error.message}`);
        res.status(500).json({ error: 'Internal Server Error' });
    } finally {
        await client.end();
    }
};

const getDatabaseBooks = async (req, res) => {
    try {
        await client.connect();

        const result = await client.query('SELECT * FROM books');
        const databaseBooks = result.rows;
        // console.log(databaseBooks, '<<book from database')
        res.status(200).json({
            data: databaseBooks,
        });
    } catch (error) {
        console.error(`Error in getDatabaseBooks: ${error.message}`);
        res.status(500).json({ error: 'Internal Server Error' });
    } finally {
        await client.end();
    }
};

const createWishlist = async (req, res) => {
    try {
        await client.connect();
        try {
            const { id, title, thumbnail, author, rating  } = req.body;

            const query = {
                text: 'INSERT INTO wishlist (id, title, thumbnail, author, rating) VALUES ($1, $2, $3, $4, $5) ON CONFLICT (id) DO NOTHING;',
                values: [id, title, thumbnail, author, rating],
            };

            await client.query(query);
            console.log(`Wishlist inserted: ${title}`);
        } catch (insertError) {
            console.error(`Error inserting wishlist: ${insertError.message}`);
        }

        res.status(200).json({
            data:  req.body,
            message: 'Wishlist inserted'
        });
    } catch (error) {
        console.error(`Error in create wishlist Books: ${error.message}`);
        res.status(500).json({ error: 'Internal Server Error' });
    } finally {
        await client.end();
    }
};



module.exports = {
    searchBooks,
    getDatabaseBooks,
    createWishlist
  };