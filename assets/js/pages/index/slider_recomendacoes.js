const slider = document.querySelector('.slider-recomendacoes')
const btnsFlechas = document.querySelectorAll('.container-recomendacoes i')
const cardRestaurante = document.querySelector('.card-restaurante').offsetWidth;

btnsFlechas.forEach(btn => {
    btn.addEventListener('click', () => {
        slider.scrollLeft += btn.id === 'esquerdo' ? -cardRestaurante : cardRestaurante
    })
})