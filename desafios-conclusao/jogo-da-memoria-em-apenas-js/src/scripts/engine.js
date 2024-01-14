// emojis string
const emojis = [
    "🐱‍🐉",
    "🐱‍🐉",
    "🐶",
    "🐶",
    "🐵",
    "🐵",
    "🐺",
    "🐺",
    "🐯",
    "🐯",
    "🦄",
    "🦄",
    "🐲",
    "🐲",
    "🐮",
    "🐮",
];

let openCards = []

let shuffleEmojis = emojis.sort(()=>(Math.random() > 0.5 ? 2: -1))

for(let i=0; i< emojis.length; i++){
    let box = document.createElement("div")
    box.className = "item";
    box.innerHTML = shuffleEmojis[i]
    box.onclick = handleClick;
    document.querySelector(".game").appendChild(box)
}

function handleClick(){
    if(openCards.length < 2){
        this.classList.add("boxOpen");
        //guarda no vetor opencards.
        openCards.push(this)
    }
    //verifica se deu match.
    if(openCards.length == 2){
        setTimeout(checkMatch, 500);
    }

    
}

function checkMatch(){
    //compara o valor da innerHTML da posicao 0 e 1 de openCards
    if(openCards[0].innerHTML === openCards[1].innerHTML){
        // se deu match fica aberto.
        openCards[0].classList.add("boxMatch")
        openCards[1].classList.add("boxMatch")
    } else{
        //se nao , remove a class open.
        openCards[0].classList.remove("boxOpen")
        openCards[1].classList.remove("boxOpen")
    }

    // reseta o opencards
    openCards = [];

    if(document.querySelectorAll(".boxMatch").length === emojis.length){
        alert("Você venceu!");
    }

}