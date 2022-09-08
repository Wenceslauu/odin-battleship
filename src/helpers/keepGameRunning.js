/* eslint-disable no-use-before-define */
import renderGrid from "../components/boards"
import Ship from "../factories/ship"
import popShipFromSelection from "./popShipFromSelection"
import changeTurns from "./changeTurns"
import countChildElements from "./countChildElements"
import gameEnds from "./gameEnds"

const checkNextPhase = function(player1, player2) {
    const shipContainer = document.querySelector('.ship-container')
    console.log(countChildElements(shipContainer.childNodes))
    if (countChildElements(shipContainer.childNodes) > 0) { // Ship placement phase
        keepGameRunning(player1, player2, 'dragover')
        keepGameRunning(player1, player2, 'dragenter')
        keepGameRunning(player1, player2, 'drop')
    } else if (player2.allyBoard.allSunk()) { // Check for human win condition 
        gameEnds(player1.name)
    } else if (player1.allyBoard.allSunk()) { // Check for computer win condition
        gameEnds(player2.name)
    } else if (player1.isTurn) { // Player 1(human) attack phase
        changeTurns(player1, player2)
        keepGameRunning(player2, player1, 'click') 
    } else if (player2.isTurn) { // Player 2(computer) attack phase
        changeTurns(player1, player2)
        player1.allyBoard.receiveRandomAttack()
        renderGrid(player1.allyBoard, player1)
        checkNextPhase(player1, player2)
    }
}

function keepGameRunning(player1, player2, action) {
    const board = player1.allyBoard
    let grid
    if (player1.name === 'human') {
        grid = document.querySelector('.board.left .grid')
    } else {
        grid = document.querySelector('.board.right .grid')
    }

    const cells = grid.childNodes
    cells.forEach((cell) => {
        const x = parseInt(cell.dataset.x, 10)
        const y = parseInt(cell.dataset.y, 10)

        cell.addEventListener(action, (event) => {
            if (action === 'click') {
                try {
                    console.log(`x=${x}y=${y}`)
                    board.receiveAttack([x, y])
                    renderGrid(board, player1) // Change turns
                    checkNextPhase(player2, player1)
                } catch (e) {
                    console.log(e)
                }
            } else if (action === 'dragover' || action === 'dragenter') {
                event.preventDefault()
            } else if (action === 'drop') {
                const obj = JSON.parse(event.dataTransfer.getData('text/plain'))

                switch (obj.shipType) {
                    case 'carrier':
                        const carrier = Ship(5, obj.shipDirection)
                        try {
                            board.placeShip([x, y], carrier)
                            popShipFromSelection('carrier')
                            renderGrid(board, player1)
                            checkNextPhase(player1, player2)
                        } catch (e) {
                            console.log(e)
                        }
                        break
                    case 'battleship':
                        const battleship = Ship(4, obj.shipDirection)
                        try {
                            board.placeShip([x, y], battleship)
                            popShipFromSelection('battleship')
                            renderGrid(board, player1)
                            checkNextPhase(player1, player2)
                        } catch (e) {
                            console.log(e)
                        }
                        break
                    case 'submarine':
                        const submarine = Ship(3, obj.shipDirection)
                        try {
                            board.placeShip([x, y], submarine)
                            popShipFromSelection('submarine')
                            renderGrid(board, player1)
                            checkNextPhase(player1, player2)
                        } catch (e) {
                            console.log(e)
                        }
                        break
                    case 'destroyer':
                        const destroyer = Ship(2, obj.shipDirection)
                        try {
                            board.placeShip([x, y], destroyer)
                            popShipFromSelection('destroyer')
                            renderGrid(board, player1)
                            checkNextPhase(player1, player2)
                        } catch (e) {
                            console.log(e)
                        }
                        break
                    default:
                        console.log('unexpected behavior')
                }
            }
        })
    })   
}



export default keepGameRunning