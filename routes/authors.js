const express = require('express')
const author = require('../models/author')
const router = express.Router()
const Author = require('../models/author')

// All Authors Route
router.get('/', async (req, res) => {
    try {
        const authors = await Author.find({})
        res.render('authors/index', { authors: authors })
    } catch(err) {
        res.redirect('/')
    }
    
})

// New Authors Route
router.get('/new', (req, res) => {
    res.render('authors/new', { author: new Author() })
})

// Creat Author Route
router.post('/', async (req, res) => {
    const author = new Author({
        name: req.body.name
    })
    try {
        const newAuthor = await author.save()
        res.redirect('authors')
    } catch (err) {
        res.render('authors/new', {
            author: author,
            errorMessage: err
        })
    }
})

module.exports = router