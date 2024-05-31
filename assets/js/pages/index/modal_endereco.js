const inputEndereco = document.getElementById('input-endereco')
const modalEndereco = document.querySelector('.janela-modal-endereco')
inputEndereco.addEventListener('focus', (e) => {
    modalEndereco.classList.add('open')
})
modalEndereco.addEventListener('click', (e) => {
    if (e.target.id == 'fechar-modal-endereco' || e.target.id == 'janela-modal-endereco') {
    modalEndereco.classList.remove('open')
    }
})