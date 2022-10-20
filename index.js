// Modules and Globals
require('dotenv').config()
const express = require('express')
const app = express()

// Controllers & Routes
app.use(express.json())
app.use('/books', require('./controllers/books'))

app.get('/', (req, res)=> {
    res.send('Hello world!!')
})

app.get('*', (req,res) => {
    res.send('error404')
})

app.listen(process.env.PORT, () => {
    console.log("Listening on port ", process.env.PORT)
})