var imgBx = document.querySelectorAll('.imgBx')

imgBx.forEach(popUp => popUp.addEventListener('click', () => {
    popUp.classList.toggle('activate')
}));

