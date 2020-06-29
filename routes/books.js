const express = require('express')
const router = express.Router()
const Book = require('../models/book')
const Author = require('../models/author')



// All books Route
router.get('/', async (req, res) => {
    res.send('All Books')

})

// New book Route
router.get('/new', async (req, res) => {
    try {
        const authors = await Author.find({})
        const book = new Book
        res.render('books/new', {
            authors: authors,
            book: book
        })
    } catch (err) {
        res.redirect('/')
        console.log(err);
        
    }

})

// Creat book Route
router.post('/', async (req, res) => {
    res.send('Create Books')

})

module.exports = router