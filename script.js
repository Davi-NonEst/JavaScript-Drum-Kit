function getKeyElement(code){
    const key = document.querySelector(`.key[data-key="${code}"]`)
    return key
}

window.addEventListener('keydown', (event) => {
    const key = getKeyElement(event.code)  //Seleciona a .key que possui o atributo data-key igual ao event.code, que é a tecla clicada 

    if (!key) return //Se key for null ou algo do tipo, return

    const audio = key.querySelector(`audio`) //A busca começa em key

    if (!audio) return //Se não conseguir achar o audio, return

    key.classList.add('keydown')
    audio.currentTime = 0
    audio.play()
})

window.addEventListener('keyup', (event) => {
    const key = getKeyElement(event.code)

    if(!key) return

    key.classList.remove('keydown')
})