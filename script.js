const jamk = document.getElementById('opr')
const strokviv = document.getElementById('vivod')


function slozhen() {
    strokviv.classList.toggle('bukva')
    strokviv.textContent = "СКИБИДИ ДОП ДОП"
}
jamk.addEventListener('click', slozhen)