
import Gameboard from "./factories/gameBoard"
import {resetButton, startButton, playAgainButton, showShips, playerShipsSelection, startGame, createGrid, playerBoardDOM, opponentBoardDOM} from "./dom"
import css from "style.css";

let gbPlayer = new Gameboard('Player')
let gbComputer = new Gameboard('Computer')

createGrid(10, playerBoardDOM);
createGrid(10, opponentBoardDOM);

// Placing ships for each player: one length 5, one length 4, two length 3, one length 2

// gbPlayer.placeRandomShips();
playerShipsSelection(gbPlayer, gbPlayer.shipPositions)

startButton.addEventListener('click', () => {
    gbComputer.placeRandomShips();
    showShips()
    startGame(gbPlayer.shipPositions, gbComputer.shipPositions, gbPlayer, gbComputer);

})

resetButton.addEventListener('click', () => {
    location.reload();
})

playAgainButton.addEventListener('click', () => {
    location.reload();
})

