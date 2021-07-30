const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const cookieParser = require('cookie-parser');
const { requireAuth, checkUser } = require('./middleware/authMiddleware');
require('dotenv').config();
const dotenv = require('dotenv');

const app = express();

// middleware
app.use(express.static('assets'));
app.use(express.json());
app.use(cookieParser());



// database connection
const dbURI = process.env.db_connect
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true })
  .then((result) => app.listen((process.env.PORT || 3000)))
  .catch((err) => console.log(err));

// routes
app.get('*', checkUser);
app.get('/', function(req, res) {
    res.sendFile('views/INDEX.html', {root: __dirname })
});
app.get('/about', function(req, res) {
    res.sendFile('views/about us.html', {root: __dirname })
});
app.get('/contact', function(req, res) {
    res.sendFile('views/contact.html', {root: __dirname })
});
app.get('/learn', function(req, res) {
    res.sendFile('views/Portfolio 1stpage.html', {root: __dirname })
});
app.get('/signup1', function(req, res) {
    res.sendFile('views/signup.html', {root: __dirname })
});
app.get('/login1', function(req, res) {
    res.sendFile('views/login.html', {root: __dirname })
});
app.get('/home', function(req, res) {
    res.sendFile('views/home.html', {root: __dirname })
});
app.get('/choose', function(req, res) {
    res.sendFile('views/Choose Template.html', {root: __dirname })
});



app.use(authRoutes);


