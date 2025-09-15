const jamk = document.getElementById('opr')
const AAAAH = new Audio('aah.mp3')

function slozhen() {
    AAAAH.play()
}

jamk.addEventListener('click', slozhen)