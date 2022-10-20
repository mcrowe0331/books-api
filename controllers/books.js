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

router.put('/:id', (req, res) => {

})

router.delete('/:id', (req, res) => {
    res.redirect('/books')
})
module.exports = router


