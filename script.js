const jamk = document.getElementById('opr')
const strokviv = document.getElementById('vivod')
const AAAAH = new Audio('aah.mp3')

function slozhen() {
    strokviv.classList.toggle('bukva')
    strokviv.textContent = "СКИБИДИ ДОП ДОП"
    AAAAH.play()
}
jamk.addEventListener('click', slozhen)