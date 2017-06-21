//verificano apenas a escrita na página

var http = require('http'); //habilita o módulo http

http.createServer(function (req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<p>testando parágrafo 1</p>' +
    '<p>testando parágrafo 2</p>' +
    '<p><strong>texto strong</strong></p>' +
    '<p><b>texto negrito</b></p>');
    res.write('<p>mais <del>uma linha</del> um paragrafo</p>');
    res.end('<b>Hello World</b>');
}).listen(8080);