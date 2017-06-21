//chamando o módulo criado no arquivo myfirstmodule.js

var http = require('http');
var dt = require('./myfirstmodule.js'); //inclui o módulo criado no outro arquivo, que neste caso está na mesma pasta (./)

http.createServer(function (req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("Data de hora atuais: " + dt.myDateTime());''
    res.end();
}).listen(8080);