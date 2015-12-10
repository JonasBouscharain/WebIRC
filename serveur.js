var path = require('path');
var express = require('express');
http = require('http');
var bodyParser = require('body-parser');
var app = express();

app.set('port', (process.env.PORT || 8080));

app.use('/', express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

var server = http.createServer(app);

// Chargement de socket.io
var io = require('socket.io').listen(server);

var logFactory = function(type, msg){
  var date = new Date();
  console.log("["+addZero(date.getDate())+"/"+addZero(date.getMonth())+"/"+date.getFullYear()+", "+addZero(date.getHours())+":"+addZero(date.getMinutes())+":"+addZero(date.getSeconds())+"] "+ type + " -> " + msg);
}

var addZero = function(i){
    var tmp = '';
    (i<10)?tmp = '0'+i:tmp = i;
    return tmp;
}

// Quand on client se connecte, on le note dans la console
io.sockets.on('connection', function (socket) {
  socket.clientPseudo = "Anonym";
    logFactory("CONNECTION", "Pending, anonym");

    socket.on('new', function (pseudo) {
      socket.clientPseudo = pseudo;
      socket.emit('serv_msg', '<tr><td></td><td>Bienvenue '+socket.clientPseudo+' !</td></tr>');
      socket.broadcast.emit('message', '<tr><td></td><td>'+socket.clientPseudo+' vient de se connecter !</td></tr>');
        logFactory("CONNECTED", socket.clientPseudo+" is connected");
    });

    socket.on('message', function (message) {
      socket.emit('message', '<tr><td>'+socket.clientPseudo+"</td><td>"+message+'</td></tr>');
      socket.broadcast.emit('message', '<tr><td>'+socket.clientPseudo+"</td><td>"+message+'</td></tr>');
        logFactory("CLIENTMSG", socket.clientPseudo+" : "+message);
    }); 
});

server.listen(app.get('port'), function() {
  console.log('Server started: http://localhost:' + app.get('port') + '/');
});
