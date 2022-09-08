import { placementDirection } from "./handleDirection"

const addDragListeners = function() {
    const ships = document.querySelectorAll('.ship')

    ships.forEach((ship) => {
        ship.setAttribute('draggable', 'true')
        ship.addEventListener('dragstart', (e) => {
            e.dataTransfer.setData('text/plain', `{"shipType": "${ship.classList.item(1)}", "shipDirection": "${placementDirection}"}`)
        })
    })
}

export default addDragListeners
