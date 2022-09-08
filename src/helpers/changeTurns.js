const changeTurns = function(player1, player2) {
    console.log(player1.isTurn)
    console.log(player2.isTurn)
    console.log('')
    if (player1.isTurn) {
        player1.isTurn = false
        player2.isTurn = true
    } else {
        player1.isTurn = true
        player2.isTurn = false
    }
    console.log(player1.isTurn)
    console.log(player2.isTurn)
}

export default changeTurns