import Gameboard from "./gameboard";
import Player from "./player";
import renderGrid from "../components/boards";
import keepGameRunning from "../helpers/keepGameRunning";
import addDragListeners from "../helpers/dragAndDrop";
import { handleDirection } from "../helpers/handleDirection";
import fillShipContainer from "../helpers/fillShipContainer";

const Game = function() {
    const board1 = Gameboard(10)
    const board2 = Gameboard(10)

    let human = Player('human', board1, board2)
    let computer = Player('computer', board2, board1)

    const setUpGrids = function() {
        renderGrid(board1, human)
        renderGrid(board2, computer)
    }

    const startGameFlow = function() {
        keepGameRunning(human, computer, 'dragover')
        keepGameRunning(human, computer, 'dragenter')
        keepGameRunning(human, computer, 'drop')
    }

    const playAgain = function() {
        board1.reset()
        board2.reset()

        human = Player('human', board1, board2)
        computer = Player('computer', board2, board1)

        fillShipContainer()
        setUpGrids()
        handleDirection()
        addDragListeners()
        startGameFlow()
    }

    return {
        setUpGrids,
        startGameFlow,
        playAgain,
    }
}

export default Game


