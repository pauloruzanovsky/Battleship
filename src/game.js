
import Gameboard from "./factories/gameBoard"
import {startGameOnClick, createGrid, playerBoardDOM, opponentBoardDOM} from "./dom"

let gbPlayer = new Gameboard('Player')
let gbComputer = new Gameboard('Computer')


// Placing ships for each player: one length 5, one length 4, two length 3, one length 2
gbPlayer.placeShip(1,1,'y',5);
gbPlayer.placeShip(3,1,'y',4);
gbPlayer.placeShip(5,1,'y',3);
gbPlayer.placeShip(7,1,'y',3);
gbPlayer.placeShip(9,1,'y',2);

gbComputer.placeShip(1,1,'x',5);
gbComputer.placeShip(1,3,'x',4);
gbComputer.placeShip(1,5,'x',3);
gbComputer.placeShip(1,7,'x',3);
gbComputer.placeShip(1,9,'x',2);


createGrid(10, playerBoardDOM);
createGrid(10, opponentBoardDOM);

startGameOnClick(gbPlayer.shipPositions, gbComputer.shipPositions, gbComputer);
