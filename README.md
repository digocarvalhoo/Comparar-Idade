Classe Pessoa e Função CompararIdade
Este projeto em JavaScript inclui uma classe Pessoa para representar indivíduos com nome e idade, e uma função CompararIdade para comparar as idades de duas pessoas.

Uso
Criando uma Pessoa:

Para criar uma pessoa, instancie a classe Pessoa com um nome e idade:

javascript
Copiar código

const Diogo = new Pessoa('Diogo', 23);
Isso cria uma pessoa chamada "Diogo" com idade 23.

Comparando Idades:

Utilize a função CompararIdade para comparar as idades de duas pessoas:

javascript
Copiar código
const Rodrigo = new Pessoa('Rodrigo', 30);
CompararIdade(Diogo, Rodrigo);
Esta função imprimirá no console quem é mais velho, quem é mais novo ou se têm a mesma idade.