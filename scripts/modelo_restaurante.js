function abrirVerMais() {
    const modal = document.querySelector('.janela-modal')

    const divSobre = document.querySelector('.sobre')
    const divHorario = document.querySelector('.horario')
    const divPagamento = document.querySelector('.pagamento')

    const opcaoSobre = document.querySelector('#sobre')
    const opcaoHorario = document.querySelector('#horario')
    const opcaoPagamento = document.querySelector('#pagamento')

    modal.classList.add('abrir')

    divSobre.classList.add('abrir')
    divHorario.classList.remove('abrir')
    divPagamento.classList.remove('abrir')

    opcaoSobre.classList.add('indicacao-modal-vermais')

    modal.addEventListener('click', (e) => {
        if (e.target.id == 'fechar' || e.target.id == 'janela-modal') {
            modal.classList.remove('abrir')

            opcaoSobre.classList.remove('indicacao-modal-vermais')
            opcaoHorario.classList.remove('indicacao-modal-vermais')
            opcaoPagamento.classList.remove('indicacao-modal-vermais')
        }

        if (e.target.id == 'sobre') {
            divSobre.classList.add('abrir')
            divHorario.classList.remove('abrir')
            divPagamento.classList.remove('abrir')

            opcaoSobre.classList.add('indicacao-modal-vermais')
            opcaoHorario.classList.remove('indicacao-modal-vermais')
            opcaoPagamento.classList.remove('indicacao-modal-vermais')
        }
        if (e.target.id == 'horario') {
            divSobre.classList.remove('abrir')
            divHorario.classList.add('abrir')
            divPagamento.classList.remove('abrir')

            opcaoSobre.classList.remove('indicacao-modal-vermais')
            opcaoHorario.classList.add('indicacao-modal-vermais')
            opcaoPagamento.classList.remove('indicacao-modal-vermais')
        }
        if (e.target.id == 'pagamento') {
            divSobre.classList.remove('abrir')
            divHorario.classList.remove('abrir')
            divPagamento.classList.add('abrir')

            opcaoSobre.classList.remove('indicacao-modal-vermais')
            opcaoHorario.classList.remove('indicacao-modal-vermais')
            opcaoPagamento.classList.add('indicacao-modal-vermais')
        }
    })
}

function abrirOpcaoDeEntrega() {
    const modal = document.querySelector('.janela-modal-opcaoDeEntrega')

    modal.classList.add('abrir')

    modal.addEventListener('click', (e) => {
        if (e.target.id == 'fechar-opcaoDeEntrega' || e.target.id == 'janela-modal-opcaoDeEntrega') {
            modal.classList.remove('abrir')
        }
    })
}