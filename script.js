const jamk = document.getElementById('opr')
const stor1 = document.getElementById('stor1')
const stor2 = document.getElementById('stor2')
const stor3 = document.getElementById('stor3')
const strokviv = document.getElementById('vivod')
const err = document.getElementById('error')

function slozhen() {
    let summ = Number(stor1.value) + Number(stor2.value) + Number(stor3.value)
    if (isNaN(summ)) {
        err.textContent = 'Введите число!'
        err.classList.toggle('err')
        strokviv.textContent = ''
    }
    else if (stor1.value == '' || stor2.value == '' || stor3.value == '') {
        err.textContent = 'Есть пустая строка!'
        err.classList.toggle('err')
        strokviv.textContent = ''
    }
    else if (Number(stor1.value) <= 0 || Number(stor2.value) <= 0 || Number(stor3.value) <= 0) {
        err.textContent = 'Есть отрицательное число!'
        err.classList.toggle('err')
        strokviv.textContent = ''
    }
    else if ((Number(stor1.value) + Number(stor2.value) <= Number(stor3.value)) || (Number(stor1.value) + Number(stor3.value) <= Number(stor2.value)) || (Number(stor3.value) + Number(stor2.value) <= Number(stor1.value))) {
        err.textContent = 'Такого треугольника не существует!'
        err.classList.toggle('err')
        strokviv.textContent = ''
    }
    else if ((Number(stor1.value) !== Number(stor2.value)) && (Number(stor1.value) !== Number(stor3.value)) && (Number(stor2.value) !== Number(stor3.value))) {
        strokviv.textContent = 'Треугольник разносторонний'
        err.textContent = ''
    }
    else if ((Number(stor1.value) == Number(stor3.value)) && (Number(stor2.value) == Number(stor1.value)) && (Number(stor2.value) == Number(stor3.value))) {
        strokviv.textContent = 'Треугольник равносторонний'
        err.textContent = ''
    }
    else {
        strokviv.textContent = 'Треугольник равнобедренный'
        err.textContent = ''
    }
}
jamk.addEventListener('click', slozhen)