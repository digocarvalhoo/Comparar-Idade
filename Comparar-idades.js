

class Pessoa {

    nome;
    idade;
    anoDeNascimento;

    constructor(nome, idade) {

        this.nome = nome;
        this.idade = idade;

        const anoAtual = new Date().getFullYear();
        this.anoDeNascimento = anoAtual - idade;
    }
}


function CompararIdade(p1, p2) {
    if (p1.idade > p2.idade) {
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`);
    } else if (p2.idade > p1.idade) {
        console.log(`${p2.nome} é mais velho(a) que ${p1.nome}`);
    } else {
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`);
    }
}

const Diogo = new Pessoa('Diogo', 23);
const Rodrigo = new Pessoa('Rodrigo', 30);

console.log(Diogo);
console.log(Rodrigo);

CompararIdade(Diogo, Rodrigo);