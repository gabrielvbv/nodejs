//função pra mudar o conteúdo de um ID
function funcao() {
    document.getElementById("par").innerHTML = "Agora não vê mais!";
}

//função pra verificar o conteúdo de um ID e mudar ele dependendo se ele for igual ou diferente
function vaivem() {
    if (document.getElementById("vaivem").innerHTML == "Now you see me...") {
        document.getElementById("vaivem").innerHTML = "Now you don't!";
        //abaixo muda o texto do botão
        document.getElementById("but").innerHTML = "Change back!";
        //document.getElementById("vaivem").innerText = "Now you see me...";
    }else{
        document.getElementById("vaivem").innerHTML = "Now you see me...";
        document.getElementById("but").innerHTML = "Change!";
    }
}

//outra forma de fazer a função de cima:
/*
function vaivem() {
    var elmt = document.getElementById("vaivem").childNodes[0].textContent;
    if (elmt == "Now you see me...") {
        document.getElementById("vaivem").innerHTML = "Now you don't!";
        //document.getElementById("vaivem").innerText = "Now you see me...";
    }else{
        document.getElementById("vaivem").innerHTML = "Now you see me...";
    }
}
*/



//===============================

//função para somar um no elemento toda vez que a função roda, desde que o elemento seja menor que 5
function crescente() {
    //cria uma variavel cre com o conteúdo do elemento de id "escada", transformando esse conteúdo pra inteiro
    var cre = parseInt(document.getElementById("escada").innerHTML);
    if (cre < 5) {
        //inremento de uma unidade. as duas linhas fazem a mesma coisa que a liha de código comentada abaixo
        cre++;
        document.getElementById("escada").innerHTML = cre;
        //document.getElementById("escada").innerHTML = (cre + 1);
    } else {
        document.getElementById("escada").innerHTML = "finish!";
    }
}


//função para fazer uma ação de acordo com um input na página
function withInput() {
    //obtendo o conteúdo da caixa de texto com .value, para pegar o conteúdo como texto
    var inp = document.getElementById("texto").value;
    switch (inp) {
        case "1":
            document.getElementById("resultado").innerHTML = "Primeiro!";
            break;
        case "2":
            document.getElementById("resultado").innerHTML = "Segundo!";
            break;
        case "3":
            document.getElementById("resultado").innerHTML = "Terceiro!";
            break;
        default:
            document.getElementById("resultado").innerHTML = "Não foi dessa vez ¯\_(ツ)_/¯";
    }
}



function logics() {
    var inp1 = document.getElementById("logi1").value;
    var inp2 = document.getElementById("logi2").value;
    if (inp1 == "1" && inp2 == "2") {
        //console.log("ok1");
        document.getElementById("outputis").innerHTML = "and funcional";
    } else {
        //console.log("ok2");
        if (inp1 == "2" || inp2 == "3") {
            //console.log("ok3");
            document.getElementById("outputis").innerHTML = "or funcional";
        }
    }
}



/*
//função com entrada de parâmetros
//var param1 = parseInt(document.getElementById("par1").value);
//var param2 = parseInt(document.getElementById("par2").value);
function paramis(param1, param2) {
    param1 = parseInt(param1);
    param2 = parseInt(param2);
    console.log(param1);
    document.getElementById("outParam").innerHTML = (param1 + param2);
}

*/




function fatorial() {
    var n = document.getElementById("fat").value;
    var f = n;
    for (i = (n - 1); i > 0; i--) {
        console.log(i);
        f = f * i;
    }
    document.getElementById("fatFin").innerHTML = f;
}