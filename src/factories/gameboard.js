import Ship from './ship'

const Gameboard = function(sideSize) {
    const squares = Array.from({length: sideSize}, () => Array.from({length: sideSize}, () => [0, [null, null]]))   

    const opponentView = Array.from({length: sideSize}, () => Array.from({length: sideSize}, () => 0)) 

    const __placedShips = []

    const __calculateSquares = function() {
        __placedShips.forEach(([coords, ship]) => {
            for (let i = 0; i < ship.health.length; i += 1) {
                if (ship.direction === 'horizontal') {
                    squares[coords[1]][coords[0] + i][0] = ship.health[i]
                    squares[coords[1]][coords[0] + i][1][0] = ship
                    squares[coords[1]][coords[0] + i][1][1] = i
                } else {
                    squares[coords[1] + i][coords[0]][0] = ship.health[i]
                    squares[coords[1] + i][coords[0]][1][0] = ship
                    squares[coords[1] + i][coords[0]][1][1] = i
                }
            }
        })
    }

    const __isPlacementPossible = function(coords, ship) {
        if ((ship.direction === 'horizontal' && sideSize < coords[0] + ship.health.length) 
            || (ship.direction === 'vertical' && sideSize < coords[1] + ship.health.length))
            return false

        for (let i = 0; i < ship.health.length; i += 1) {
            if (ship.direction === 'horizontal') {
                if (squares[coords[1]][coords[0] + i][1][0] !== null)
                    return false
            } else if (ship.direction === 'vertical') {
                if (squares[coords[1] + i][coords[0]][1][0] !== null)
                    return false
            }
        }

        return true
    }

    const __makeRandomShips = function() {
        const directions = ['horizontal', 'vertical']

        const carrier = Ship(5, directions[Math.floor(Math.random() * directions.length)])
        const battleship = Ship(4, directions[Math.floor(Math.random() * directions.length)])
        const submarine1 = Ship(3, directions[Math.floor(Math.random() * directions.length)])
        const submarine2 = Ship(3, directions[Math.floor(Math.random() * directions.length)])
        const destroyer1 = Ship(2, directions[Math.floor(Math.random() * directions.length)])
        const destroyer2 = Ship(2, directions[Math.floor(Math.random() * directions.length)])

        return [carrier, battleship, submarine1, submarine2, destroyer1, destroyer2]
    }

    const placeShip = function(coords, ship) {
        if (__isPlacementPossible(coords, ship)) {
            __placedShips.push([coords, ship])
            __calculateSquares()
        } else {
            throw Error('cannot place ship')
        }
    }

    const placeRandomShips = function(shipsToPlace=__makeRandomShips()) {        
        shipsToPlace.forEach((ship) => {
            // eslint-disable-next-line no-constant-condition
            while (true) {
                try {
                    placeShip([Math.floor(Math.random() * sideSize), Math.floor(Math.random() * sideSize)], ship)
                    break
                } catch (e) { 
                    console.log(e)
                }
            }
        })
    }

    const receiveAttack = function(coords) {
        if (squares[coords[1]][coords[0]][0] === 'X' || squares[coords[1]][coords[0]][0] === 'O') {
            throw Error('cannot shoot the same square twice')
        } else if (squares[coords[1]][coords[0]][1][0] === null) {
            squares[coords[1]][coords[0]][0] = 'O'
            opponentView[coords[1]][coords[0]] = 'O'
        } else {
            squares[coords[1]][coords[0]][1][0].hit(squares[coords[1]][coords[0]][1][1])
            opponentView[coords[1]][coords[0]] = 'X'
            __calculateSquares()
        }
    }

    const receiveRandomAttack = function() {
        // eslint-disable-next-line no-constant-condition
        while (true) {
            try {
                receiveAttack([Math.floor(Math.random() * sideSize), Math.floor(Math.random() * sideSize)])
                break
            } catch (e) {
                console.log(e)
            }
        }
    }

    const allSunk = function() {
        if (__placedShips.length === 0) throw Error('there are no ships yet')

        // eslint-disable-next-line no-restricted-syntax
        for (const data of __placedShips) {
            const ship = data[1]

            if (!ship.isSunk()) 
                return false
        }

        return true
    }

    const reset = function() {
        for (let i = 0; i < sideSize; i += 1) {
            for (let j = 0; j < sideSize; j += 1) {
                squares[i][j] = [0, [null, null]]
                opponentView[i][j] = 0
            }
        }

        __placedShips.length = 0
    }

    return {
        sideSize,
        squares,
        allSunk,
        placeShip,
        placeRandomShips,
        receiveAttack,
        receiveRandomAttack,
        opponentView,
        reset,
    }
}

export default Gameboard