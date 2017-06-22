//declaração de um objeto com dois atributos: NOME e SOBRNENOME
var obj_human = {nome:"Pafuncio", sobrenome:"Figueiredo"};

//declaração de um array
var aray = ["P", "a", "f", "u", "n", "c", "i", "o"];

//classe
class person {
    //construtor da classe
    constructor (nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    fullname(nome, sobrenome) {
        return (nome + " " + sobrenome);        
    }
}




