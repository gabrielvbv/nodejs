//tentativa de fazer algo a mais com o que entendi da sessão Get Started, tentando ler um arquivo .html

var http = require('http'); //habilita o módulo http
//dalterações tiradas daqui: http://stackoverflow.com/questions/35995273/how-to-run-html-file-using-node-js
var fs = require('fs');

fs.readFile('./pagteste.html', function(err, html){

    if (err) throw err;

    http.createServer(function (req, res){
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write(html);
        res.end('<b>Hello World</b>');
    }).listen(8080);
});