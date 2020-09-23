/* importar as configurações do servidor */
var app = require('./config/server');

/* parametrizar a porta de escuta */
var server = app.listen(8087, function(){
    console.log('Servidor online');
});


require('socket.io').listen(server);