const jamk = document.getElementById('opr')
const scrimer = document.getElementById('scrimac')
const scrim = document.querySelector('scrimac')
const AAAAH = Audio('aah.mp3')

function slozhen() {
    scrimer.src = "scrimer.jpg"
    scrim.append(scrimer)
    scrimer.textContent = "СКИБИДИ ДОП ДОП"
    AAAAH.play()
}
jamk.addEventListener('click', slozhen)