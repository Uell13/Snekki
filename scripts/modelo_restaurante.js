function abrirVerMais() {
    const modal = document.querySelector('.janela-modal')

    const sobre = document.querySelector('.sobre')
    const horario = document.querySelector('.horario')
    const pagamento = document.querySelector('.pagamento')

    modal.classList.add('abrir')

    sobre.classList.add('abrir')
    horario.classList.remove('abrir')
    pagamento.classList.remove('abrir')

    modal.addEventListener('click', (e) => {
        if (e.target.id == 'fechar' || e.target.id == 'janela-modal') {
            modal.classList.remove('abrir')
        }

        if (e.target.id == 'sobre') {
            sobre.classList.add('abrir')
            horario.classList.remove('abrir')
            pagamento.classList.remove('abrir')
        }
        if (e.target.id == 'horario') {
            sobre.classList.remove('abrir')
            horario.classList.add('abrir')
            pagamento.classList.remove('abrir')
        }
        if (e.target.id == 'pagamento') {
            sobre.classList.remove('abrir')
            horario.classList.remove('abrir')
            pagamento.classList.add('abrir')
        }
    })
}