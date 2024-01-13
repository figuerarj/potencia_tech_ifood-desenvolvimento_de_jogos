const nomePersonagem = "Jubileu";


const acaoEscolhida = 'Fugir';

function tomarDecisao(){
    if(acaoEscolhida === 'Fugir'){
        console.log(`${nomePersonagem} escolheu Fugir!` )
    } else if (acaoEscolhida === 'Atacar'){
        console.log(`${nomePersonagem} escolheu Atacar!` )
    } else{
        console.log('Tente novamente')
    }
}

tomarDecisao()