const fillShipContainer = function() {
    const shipContainer = document.querySelector('.ship-container')

    shipContainer.innerHTML = ''

    const carrier = document.createElement('div')
    carrier.classList.add('ship')
    carrier.classList.add('carrier')
    shipContainer.appendChild(carrier)

    for (let i = 0; i < 5; i += 1) {
        const cell = document.createElement('div')
        cell.classList.add('cell')
        cell.classList.add('isShip')
        carrier.appendChild(cell)
    }

    const battleship = document.createElement('div')
    battleship.classList.add('ship')
    battleship.classList.add('battleship')
    shipContainer.appendChild(battleship)

    for (let i = 0; i < 4; i += 1) {
        const cell = document.createElement('div')
        cell.classList.add('cell')
        cell.classList.add('isShip')
        battleship.appendChild(cell)
    }

    const submarine1 = document.createElement('div')
    submarine1.classList.add('ship')
    submarine1.classList.add('submarine')
    shipContainer.appendChild(submarine1)

    for (let i = 0; i < 3; i += 1) {
        const cell = document.createElement('div')
        cell.classList.add('cell')
        cell.classList.add('isShip')
        submarine1.appendChild(cell)
    }

    const submarine2 = document.createElement('div')
    submarine2.classList.add('ship')
    submarine2.classList.add('submarine')
    shipContainer.appendChild(submarine2)

    for (let i = 0; i < 3; i += 1) {
        const cell = document.createElement('div')
        cell.classList.add('cell')
        cell.classList.add('isShip')
        submarine2.appendChild(cell)
    }
    
    const destroyer1 = document.createElement('div')
    destroyer1.classList.add('ship')
    destroyer1.classList.add('destroyer')
    shipContainer.appendChild(destroyer1)

    for (let i = 0; i < 2; i += 1) {
        const cell = document.createElement('div')
        cell.classList.add('cell')
        cell.classList.add('isShip')
        destroyer1.appendChild(cell)
    }

    const destroyer2 = document.createElement('div')
    destroyer2.classList.add('ship')
    destroyer2.classList.add('destroyer')
    shipContainer.appendChild(destroyer2)

    for (let i = 0; i < 2; i += 1) {
        const cell = document.createElement('div')
        cell.classList.add('cell')
        cell.classList.add('isShip')
        destroyer2.appendChild(cell)
    }
}

export default fillShipContainer