/* importar as configurações do servidor */
var app = require('./config/server');

/* parametrizar a porta de escuta */
var server = app.listen(8087, function(){
    console.log('Servidor online');
});


var io = require('socket.io').listen(server);

app.set('io', io);

// criar a conexao por websocket
io.on('connection', function(socket){
    console.log('usuario conectou');

    socket.on('disconnect', function(){
        console.log('usuario desconectou');
    });

    socket.on('msgParaServidor', function(data){
        socket.emit('msgParaCliente', {apelido: data.apelido, mensagem: data.mensagem});
        socket.broadcast.emit('msgParaCliente', {apelido: data.apelido, mensagem: data.mensagem});
    });



});
