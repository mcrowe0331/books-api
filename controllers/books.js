const router = require('express').Router()

//routes
router.get('/', (req, res) => {
    res.send('GET/books')
})
module.exports = router
