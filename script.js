const jamk = document.getElementById('opr')
const scrimer = document.getElementById('scrimac')
const scrim = document.querySelector('scrimac')
const AAAAH = document.getElementById('AAH')
function slozhen() {
    scrimer.src = "scrimer.jpg"
    scrim.append(scrimer)
    scrimer.textContent = "СКИБИДИ ДОП ДОП"
    AAAAH.volume = 1;
    if (AAAAH.paused) {
        AAAAH.play();
    } else {
        AAAAHР.pause();
    }

}
jamk.addEventListener('click', slozhen)