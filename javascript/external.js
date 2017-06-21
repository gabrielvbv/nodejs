//função pra mudar o conteúdo de um ID
function funcao() {
    document.getElementById("par").innerHTML = "Agora não vê mais!";
}

//função pra verificar o conteúdo de um ID e mudar ele dependendo se ele for igual ou diferente
function vaivem() {
    if (document.getElementById("vaivem").innerHTML == "Now you see me...") {
        document.getElementById("vaivem").innerHTML = "Now you don't!";
        //document.getElementById("vaivem").innerText = "Now you see me...";
    }else{
        document.getElementById("vaivem").innerHTML = "Now you see me...";
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
        document.getElementById("escada").innerHTML = (cre + 1);
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

