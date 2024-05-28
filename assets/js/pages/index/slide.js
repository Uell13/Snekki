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

const primeiro = document.getElementById('primeiro')
const btnDireito = document.querySelector('#direita')
const btnEsquerdo = document.querySelector('#esquerda')

let valor = 0

btnDireito.addEventListener('click', (e) => {
    if (e.target.id == 'direita') {
        if (valor > -17) {
            valor -= 2
            primeiro.style.marginLeft = valor+'%'
        }
    }
})
btnEsquerdo.addEventListener('click', (e) => {
    if (e.target.id == 'esquerda') {
        if (valor <= -1) {
            valor += 2
            primeiro.style.marginLeft = valor+'%'
        }
    }
})