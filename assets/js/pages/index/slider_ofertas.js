let contador = 1

setInterval(() => {
    proximoSlide()
}, 5000)

function proximoSlide() {
    contador++

    if (contador > 3) {
        contador = 1
    }

    document.getElementById('slide-oferta' + contador).checked = true
}