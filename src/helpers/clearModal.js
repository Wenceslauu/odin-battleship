const clearModal = function() {
    const modal = document.querySelector('.modal')
    modal.classList.remove('start')
    modal.classList.remove('ship-selection')

    modal.innerHTML = ''
}

export default clearModal