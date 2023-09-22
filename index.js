const http = require('http');
const express = require('express');
const { Server } = require('socket.io');
const app = express();
const server = http.createServer(app);
const path = require('path');

const io = new Server(server);

// Socket.io
io.on('connection', (socket) => {
    socket.on('message', (message) => {
        io.emit('message', message);
    });
});



app.use(express.static(path.resolve('./public')));
app.get('/', function (req, res) {
    return res.sendFile('/public/index.html')
})
server.listen(9000, () => {
    console.log(`Server started at PORT: 9000`);
})
