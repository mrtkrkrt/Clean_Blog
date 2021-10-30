const express = require('express');
const mongoose = require('mongoose');
const ejs = require('ejs');
const path = require('path');
const Post = require('./models/Post');

const app = express();

mongoose.connect('mongodb://localhost/Clean_Blog', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = 3000;

app.get('/', async (req, res) => {
    //res.render('index');
    const posts = await Post.find({});
    res.render('index', {
        posts,
    });
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/add_post', (req, res) => {
    res.render('add_post');
});

app.post('/posts', async (req, res) => {
    await Post.create(req.body);
    res.redirect('/');
});

app.listen(port, () => {
    console.log(`Sunucu ${port} portunda başlatıldı.`);
});
