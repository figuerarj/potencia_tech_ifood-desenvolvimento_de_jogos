class Carro{
    marca;
    cor;
    gastoMedioPorKm;

    constructor (marca, cor, gastoMedioPorKm){
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
    }

    calcularGastoDoPercurso(km, preco){
        return km * this.gastoMedioPorKm * preco
        
    };
    
}


const fox = new Carro('VW', 'branco', 1/12)//Por xKm eu faco xLitros.
console.log(fox.calcularGastoDoPercurso(70,5))

const uno = new Carro('Fiat', 'preto', 1/10)
console.log(uno.calcularGastoDoPercurso(70,5))

const onix = new Carro('Chevrolet', 'verde', 1/15)
console.log(onix.calcularGastoDoPercurso(70,5))