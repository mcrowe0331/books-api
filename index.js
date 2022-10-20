// Modules and Globals
require('dotenv').config()
const express = require('express')
const app = express()

// Express Settings
app.use(express.json())
app.use('/books', require('./controllers/books'))

app.get('/', (req, res)=> {
    res.send('Hello world!!')
})

app.get('*', (req,res) => {
    res.status(404).send('<h1>404 Page</h1>')
})

app.listen(process.env.PORT, () => {
    console.log("Listening on port ", process.env.PORT)
})