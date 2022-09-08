const popShipFromSelection = function(shipType) {
    const shipContainer = document.querySelector('.ship-container')

    const shipOnBox = document.querySelector(`.ship.${shipType}`)

    shipContainer.removeChild(shipOnBox)
}

export default popShipFromSelection