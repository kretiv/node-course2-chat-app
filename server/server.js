const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);


app.use(express.static(publicPath));

io.on('connection', (socket) => {
console.log('New user connected');

socket.on('connect', () => {
  console.log('Connnected to Server');
});

socket.on('disconnect', () => {
  console.log('User was disconnected from server');
});

});

server.listen(port, () => {
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
