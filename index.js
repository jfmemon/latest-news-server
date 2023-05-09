const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

const categories = require('./Data/Categories.json');

app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello world.');
})

app.get('/news-category', (req, res) => {
    res.send(categories);
})

app.listen(port, () => {
    console.log('Latest news server is running on:', port);
})

