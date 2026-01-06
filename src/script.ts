function getKeyElement(code:string){
    const key = document.querySelector(`.key[data-key="${code}"]`) as HTMLDivElement

    if (!key) return

    return key
}

window.addEventListener('keydown', (event:KeyboardEvent) => {
    const key = getKeyElement(event.code)  //Seleciona a .key que possui o atributo data-key igual ao event.code, que é a tecla clicada 

    if (!key) return //Se key for null ou algo do tipo, return

    const audio = key.querySelector(`audio`) as HTMLAudioElement //A busca começa em key

    if (!audio) return //Se não conseguir achar o audio, return
    
    if (!key.classList.contains('playing')) {
        audio.currentTime = 0
        audio.play()
    }
    key.classList.add('playing')
})

window.addEventListener('keyup', (event:KeyboardEvent) => {
    const key = getKeyElement(event.code)

    if(!key) return

    key.classList.remove('playing')
})