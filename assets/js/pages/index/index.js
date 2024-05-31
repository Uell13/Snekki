const btnHamburguer = document.querySelector('.hamburguer')
const menu = document.querySelector('.menu')

btnHamburguer.addEventListener('click', (e) => {
    menu.classList.toggle('active')

    if (btnHamburguer.classList.contains('fa-bars')) {
    btnHamburguer.classList.replace('fa-bars', 'fa-xmark')
    } else {
    btnHamburguer.classList.replace('fa-xmark', 'fa-bars')
    }

})