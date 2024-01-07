class Pessoa{
    nome;
    peso;
    altura;

    constructor(nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularImc(){
        return this.peso /(this.altura * this.altura)
    }

    classificarImc(){
        const imc = this.calcularImc();
        if (imc < 18.5 ){
            return ('Abaixo do peso')
        } else if (imc >= 18.5 && imc < 25 ){
            return ('Peso Normal')
        } else if (imc >= 25 && imc < 30 ){
            return ('Acima do Peso')
        } else if (imc >= 30 && imc < 40 ){
            return ('Obeso');
        } else {
            return ('Obesidade Grave');
        }
    }
}

const jorge = new Pessoa('Jorge', 80, 1.80);
const jose = new Pessoa('José', 70, 1.75)
const clarissa = new Pessoa('Clarissa', 67, 1.50);



console.log(jose.calcularImc())
console.log(jose.classificarImc())

console.log(jorge.calcularImc())
console.log(jorge.classificarImc())

console.log(clarissa.calcularImc())
console.log(clarissa.classificarImc())
