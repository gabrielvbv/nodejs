//testando mandar um valor pela URL e fazer uma condição pra escrever alguma coisa na tela

var http = require('http');

http.createServer(function (req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    if (req.url == "/blu"){
        res.write("blublublu");
    }else{
        if (req.url == "/tendeu"){
            res.write("Cadeira erótica!");
        }else{
            res.write("ERROOOOOOOOOUUUU!!");
        }
    }
    res.end("<p>THE END</p>");
}).listen(8080);