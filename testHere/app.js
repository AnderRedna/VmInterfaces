const express = require('express'); 
var path = require('path');
const app = express();
const http = require('http');
const { Server } = require('socket.io'); 
const server = http.createServer(app)
const io = new Server(server);

server.listen(3000, () => {
    console.log("Rodando")
});
app.use(express.static(path.join(__dirme,)));

io.on('connection', (socket) => {
    console.log('Nova conexao')

    socket.on('yourEvent', (object, objectminutesVm, objectsecondsVm, minute_text, second_text) => {
        io.emit('resposta', object, objectminutesVm, objectsecondsVm, minute_text, second_text)
    }) 
})
