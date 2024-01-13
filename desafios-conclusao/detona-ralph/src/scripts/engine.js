const state = {
    //guarda propriedades visuais.
    view: {
        squares: document.querySelectorAll(".square"),
        enemy: document.querySelector(".enemy"),
        timeLeft: document.querySelector("#time-left"),
        score: document.querySelector("#score"),
    },
    // guarda valores internos.
    values: {
        gameVelocity: 1000,
        //armazena a posicao do enemy 
        hitPosition: 0,
        //receberá a pontuação.
        result: 0,
        currentTime: 60,
    },
    //guarda chamadas de funcoes, que executam ações.
    actions:{
        timerId: null,
        //a cada 1000 ele executa o countDown. é executado de forma independente. nao precisa ser chamado para que seja executado.
        countDownTimerId: setInterval(countDown, 1000),
        //velocidade em que o boneco aparece.
    }
}
//vai subtraindo o tempo.
function countDown(){
    state.values.currentTime--;
    state.view.timeLeft.textContent = state.values.currentTime;

    if(state.values.currentTime <= 0){
        // é uma boa pratica limpar a memória, os actions.
        clearInterval(state.actions.countDownTimerId);
        clearInterval(state.actions.timerId);
        playSound('game-over-arcade-6435','mp3')
        alert("GAME OVER! O seu resultado foi " + state.values.result)
        
    }
}

function addShake() {
    state.view.squares.forEach((square) => {
        if (square.classList.contains('enemy')) {
            square.classList.add('shake');

            // Remova a classe 'shake' após o término da animação
            setTimeout(function() {
                square.classList.remove('shake');
            }, 100);
        }
    });
}


function playSound(audioName, extension){
    //instancia um audio.
    //eu passando o argumento eu deixo a minha função dinamica, basta eu digitar o nome do arquivo e ele executa.
    let audio = new Audio(`./src/audios/${audioName}.${extension}`)
    //controla o volume do audio
    audio.volume = 0.2;

    //toca o som
    audio.play();
}

//vai pegar um quadrado aleatório.
function randomSquare(){

state.view.squares.forEach((square) =>{
    //vai tirando de todos os squares a class "enemy"
    square.classList.remove("enemy");
})

//cria o sorteio de 1 a 9 - floor arredonda - 
let randomNumber = Math.floor(Math.random() * 9)
let randomSquare = state.view.squares[randomNumber]

// adiciona a classe "enemy" em um quadrado aleatório.
randomSquare.classList.add("enemy")
//guarda a posição que a class "enemy" foi adicionado.
state.values.hitPosition = randomSquare.id;
}

//pega a funcao randomSquare e seta um timer para que ela seja executa em um periodo determinado.
function moveEnemy(){
    //criar um intervalo
    state.values.timerId = setInterval(randomSquare, state.values.gameVelocity)
}
//alguem que fica esperando um evento, vai pegar esse evento.
function addListenerHitBox(){
    state.view.squares.forEach((square) =>{
       square.addEventListener('mousedown', () => {
        if(square.id === state.values.hitPosition){
            state.values.result ++;
            state.view.score.textContent = state.values.result;
            state.values.hitPosition = null;
            playSound('ouch-sound-effect-30-11844', 'mp3');
            addShake()
        }
       })
    })
}

//função que será inicializada.
function initialize() {
    
moveEnemy();
addListenerHitBox();
}

initialize();
// da um sentido semantico para quem vai alterar algo na tela.