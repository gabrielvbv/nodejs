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
        document.getElementById("escada").innerHTML = "finish!"
    }
}




