/*function criaPessoa (nome, sobrenome, idade){
    return { nome, sobrenome, idade };
}

const pessoa1 = criaPessoa('Luiz', 'Miranda', 25);
const pessoa2 = criaPessoa('João', 'Pedro', 15);
const pessoa3 = criaPessoa('Luiza', 'Silva', 45);
const pessoa4 = criaPessoa('Gustavo', 'Takeuchi', 33);

console.log(pessoa1.nome, pessoa1.idade, pessoa1.sobrenome);
*/
const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25,

    fala(){
        console.log(`Minha idade atual é ${this.idade}`);
    },
    
    incrementaIdade(){
        this.idade++;
    }
};

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();




