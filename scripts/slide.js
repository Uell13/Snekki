const radio = document.querySelector('.manual-btn')
let contador = 1

document.getElementById('oferta1').checked = true

setInterval(() => {
    proximoSlide()
}, 5000)

function proximoSlide() {
    contador++

    if (contador > 3) {
        contador = 1
    }

    document.getElementById('oferta' + contador).checked = true
}