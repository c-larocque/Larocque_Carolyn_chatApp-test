const express = require('express'); // require is the same thing as a php include -- basically means "include this"
const app = express();
<<<<<<< HEAD
const io = require('socket.io')(); // activate the chat plugin

// serve up static files
app.use(express.static('public'));

// add routes
app.use(require('./routes/index'));
app.use(require('./routes/contact'));
app.use(require('./routes/portfolio'));

const server = app.listen(3000, () => {
  console.log('listening on port 3000');
});

io.attach(server);

io.on('connection', socket => { // this is the same thing as function(socket) {...}
  console.log('a user has connected!');

  io.emit('chat message', { for : 'everyone', message : `${socket.id} is here!`});

  socket.on('disconnect', () => {
    console.log('a user disconnected');

    io.emit('disconnect message', `${socket.id} has left the building!`);
  });
=======

app.get('/', (req, res)=> {
  res.sendFile(__dirname + '/index.html');
});

app.get('/contact', (req, res)=> {
  res.sendFile(__dirname + '/contact.html');
});

app.get('/portfolio', (req, res)=> {
  res.sendFile(__dirname + '/portfolio.html');
});

app.listen(3000, () => {
  console.log('listening on port 3000');
>>>>>>> 596a74311da6785f4ac0fe7ab061b8a49fb48fbe
});
