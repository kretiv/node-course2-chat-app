const path = require('path');

const publicPath = path.join(__dirname, '../public');

const port = process.env.PORT || 3000;

const request = require('request');
const express = require('express');

var app = express();


app.use(express.static(publicPath));

app.listen(3000, () => {
  console.log(`Server is up on ${port}`);
});

// app.get('/', (req, res) => {
//   res.render('home.hbs', {
//     pageTitle: 'Home Page',
//     welcomeMessage: 'Welcome to my website',
//     currentTime: new Date().getFullYear()
//   });
// });

// console.log(__dirname);
// console.log(publicPath);
