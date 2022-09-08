import clearModal from './clearModal'

const gameEnds = function(winnerName) {
    const modal = document.querySelector('.modal')
    const overlay = document.querySelector('.overlay')
    clearModal()

    const p = document.createElement('p')
    if (winnerName === 'human')
        p.textContent = `Congratulations ${winnerName}, you won!`
    else
        p.textContent = `You lost, ${winnerName} beat you :(`    
    modal.appendChild(p)

    modal.classList.add('active')
    modal.classList.add('end')
    overlay.classList.add('active')

    overlay.addEventListener('click', () => {
        modal.classList.remove('active')
        overlay.classList.remove('active')
    })
}

export default gameEnds