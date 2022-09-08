const Player = function(name, allyBoard, oppBoard) {
    let isTurn = true

    if (name === 'computer') {
        allyBoard.placeRandomShips()

        isTurn = false
    }

    return {
        name,
        allyBoard,
        oppBoard,
        isTurn,
    }
}

export default Player