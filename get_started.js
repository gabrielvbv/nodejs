//sessão Get Started - W3Schools

var http = require('http'); /*require() é uma função para incluir um módulo (que é o equivalente às bibliotecas)
                            nesse exemplo foi habilitado o módulo http, que permite a criação de um server com o código abaixo*/

http.createServer(function (req, res){  /*createServer cria um server http (create a server object)
                                        req é requisição do servior, e res é resposta do servidor.*/
    res.writeHead(200, {'Content-Type': 'text/html'});  /*essa linha adiciona um header http para que possa exibit o conteúdo numa página do navegator em HTML
            o método writeHead é o status code. 200 significa que ta tudo ok, e o segundo argumento é um objeto que contém os headers de resposta*/
    res.end('Hello World'); //res.end é o que vai finalizar a resposta. Entre parênteses fica algum conteúdo apenas se quisermos colocar alguma mensagem de finalização, que neste caso é o Hello World
}).listen(8080);    //listen indica que o server fica na escuta da porta 8080 no computador local

//para rodar esse server, rodamos o mesmo via terminal ("node get_started.js" no CMD) e então pelo navegador acessamos como "localhost:8080"