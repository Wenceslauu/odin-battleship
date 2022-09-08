import './style.css';

import fillShipContainer from './helpers/fillShipContainer';
import Game from './factories/game';
import { handleDirection } from './helpers/handleDirection';
import addDragListeners from './helpers/dragAndDrop';

const startBtn = document.querySelector('.modal.start button')
const endBtn = document.querySelector('.main-content > button')
const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')

const game = Game()

// Listen to start button
startBtn.addEventListener('click', () => {
    game.startGameFlow()
    modal.classList.remove('active')
    overlay.classList.remove('active')
})

fillShipContainer()
game.setUpGrids()
handleDirection()
addDragListeners()

// Listen to restart button
endBtn.addEventListener('click', () => { 
    game.playAgain()
})



