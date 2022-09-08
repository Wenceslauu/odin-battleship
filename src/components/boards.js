const renderGrid = function(board, player) {
    let grid
    if (player.name === 'human') 
        grid = document.querySelector('.board.left .grid')
    else {
        grid = document.querySelector('.board.right .grid')
    }

    grid.innerHTML = ''

    for (let i = 0; i < board.sideSize; i += 1) {
        for (let j = 0; j < board.sideSize; j += 1) {
            const cell = document.createElement('div')
            cell.classList.add('cell')
            cell.setAttribute('data-x', j)
            cell.setAttribute('data-y', i)
            grid.appendChild(cell)

            if (player.name === 'human') {
                const squareStatus = board.squares[i][j][0]

                switch(squareStatus) {
                    case 0:
                        break
                    case 1:
                        cell.classList.add('isShip')
                        break
                    case "X":
                        cell.classList.add('hit')
                        break
                    case "O":
                        cell.classList.add('miss')
                        break
                    default:
                        console.log('unexpected behavior')
                }
            } else {
                const squareStatus = board.opponentView[i][j]
                
                switch(squareStatus) {
                    case 0:
                        break
                    case "X":
                        cell.classList.add('hit')
                        break
                    case "O":
                        cell.classList.add('miss')
                        break
                    default:
                        console.log('unexpected behavior')
                }
            }
        }
    }
}

export default renderGrid
