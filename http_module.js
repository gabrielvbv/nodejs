var http = require('http');

http.createServer(function (req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(req.url); /*"url" é uma propriedade do objeto "req".
                        Ela contém a parte que vem depois do domínio, por exemplo:
                        localhost:8080/hello_world
                        o conteúdo de "url" é hello_world
                        digitando isso no navegaor na hora de acessar o server atribuirá isso à variável e, 
                        como ela está na função write, isso sairá escrito na página como /hello_world*/
}).listen(8080);
