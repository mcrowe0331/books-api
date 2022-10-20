const router = require('express').Router()

//routes
router.get('/', (req, res) => {
    res.send('GET/books')
})

router.get('/new', (req, res) => {
    res.send('books/new')
})

router.get('/:id', (req, res) => {
    res.render('books/show', { book })
})
module.exports = router


