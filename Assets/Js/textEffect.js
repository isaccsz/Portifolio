const typing = document.querySelector('[data-js="typing"]')

const messages = ["Olá, meu nome é Isac, e eu sou um Desenvolvedor de Sistemas pronto para transformar a sua ideia em realidade."]

let messageIndex = 0
let characterIndex = 0
let currentMessage = ''
let currentCharacters = ''

const type = () =>{

    if(messageIndex === messages.length){
        messageIndex = 0
    }

    currentMessage = messages[messageIndex]
    currentCharacters = currentMessage.slice(0, characterIndex++)
    typing.textContent = currentCharacters

}

setInterval(type, 80)