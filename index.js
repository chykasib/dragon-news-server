const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.port || 5000;

const categories = require('./data/category.json')

app.use(cors())
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/news-categories', (req, res) => {
    res.send(categories)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})