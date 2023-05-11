const express = require('express');
const cors = require('cors');
const app = express();
const categories = require('./Data/Categories.json');
const news = require('./Data/news.json');
const port = process.env.PORT || 5000;

app.use(cors());

app.get('/', (req, res) => {
    res.send('Server is running.');
})

app.get('/news-category', (req, res) => {
    res.send(categories);
})

app.get('/news', (req, res) => {
    res.send(news);
})

app.get('/category/:id', (req, res) => {
    const id = req.params.id;
    if (id == "8") {   // url a jodi id er jaygay 08 thake, tahole
        res.send(news);
    }
    else {
        const selectedCategory = news.filter(n => n.category_id === id);
        res.send(selectedCategory);
    }
})

app.get('/news/:id', (req, res) => {
    const id = req.params.id;
    const selectedNews = news.find(n => n._id === id);
    res.send(selectedNews);
})

app.listen(port, () => {
    console.log('Latest news server is running on:', port);
})
