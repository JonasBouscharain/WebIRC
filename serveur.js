var http = require('http');
var fs = require('fs');

// Chargement du fichier index.html affiché au client
var server = http.createServer(function(req, res) {
    fs.readFile('./index.html', 'utf-8', function(error, content) {
        res.writeHead(200, {"Content-Type": "text/html"});
        res.end(content);
    });
});

// Chargement de socket.io
var io = require('socket.io').listen(server);

var logFactory = function(type, msg){
	var date = new Date();
	console.log("["+date.getDate()+"/"+date.getMonth()+"/"+date.getYear()+", "+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds()+"] "+ type + " -> " + msg);
}

// Quand on client se connecte, on le note dans la console
io.sockets.on('connection', function (socket) {
	clientPseudo = "Anonym";
    // console.log('Un client anonyme est en train de se connecter...');
    logFactory("CONNECTION", "Pending, anonym");

    // socket.emit('message', 'Vous êtes bien connecté !');

    socket.on('new', function (pseudo) {
    	clientPseudo = pseudo;
    	socket.emit('serv_msg', 'Bienvenue '+clientPseudo+' !');
    	socket.broadcast.emit('message', clientPseudo+' vient de se connecter !');
        // console.log('Un client me parle ! Il me dit : ' + message);
        logFactory("CONNECTED", clientPseudo+" is connected");
    });

    socket.on('message', function (message) {
    	socket.emit('message', clientPseudo+" : "+message);
    	socket.broadcast.emit('message', clientPseudo+" : "+message);
        // console.log('Un client me parle ! Il me dit : ' + message);
        logFactory("CLIENTMSG", clientPseudo+" : "+message);
    });	
});



server.listen(8080);