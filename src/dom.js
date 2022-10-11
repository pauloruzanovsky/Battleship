let playerBoardDOM = document.querySelector('.playerContainer > div')
let opponentBoardDOM = document.querySelector('.opponentContainer > div')
let startButton = document.querySelector('.startButton')
let resetButton = document.querySelector('.resetButton');
let playAgainButton = document.querySelector('.playAgainButton');
let turn = 'player';
let messageBoardDOM = document.querySelector('.messageBoard')
let previousSquare = null
let nextX = null;
let nextY = null;
let shipContainerDOM = document.querySelector('.shipContainer');
let shipBlockMessageDOM = document.querySelector('.shipBlockMessage')
let shipBlockDOM = document.querySelector('.shipBlock')
let shipBlockMessage2DOM = document.querySelector('.shipBlockMessage2')



function createGrid(gridSize, parent) {
    let i = 0;
    let j = 0;
    for (i = 0; i < gridSize; i++) {
        const gridColumn = document.createElement('div');
        gridColumn.classList.add('gridColumn');
        parent.appendChild(gridColumn);
        for (j = 0; j < gridSize; j++) {
            const gridBlock = document.createElement('div');
            gridBlock.classList.add('gridBlock');


            gridBlock.setAttribute('x',i+1);
            gridBlock.setAttribute('y',j+1);
            gridColumn.appendChild(gridBlock);
        }
    }
}

function endTurn() {
    if(turn === 'player') {
        turn = 'opponent'

    } else {
        turn = 'player'
    }
}

shipContainerDOM.addEventListener('click', () => {
    if(shipContainerDOM.getAttribute('direction') === 'y'){
        shipContainerDOM.setAttribute('direction','x')
        shipContainerDOM.style.display = 'flex'
        return
    }
    shipContainerDOM.setAttribute('direction','y')
    shipContainerDOM.style.display = 'block'

})
function addShipsToPlayerGrid(ships) {
    let playerSquaresDOM = document.querySelectorAll('.playerContainer > .gameboard > .gridColumn > .gridBlock')

    playerSquaresDOM.forEach(square => {
        let xDOM = Number(square.getAttribute('x'));
        let yDOM = Number(square.getAttribute('y'));

        ships.forEach(ship => {
            if(ship[0] === xDOM && ship[1] === yDOM) {
                square.classList.add('hasShip')
                return
            }

        })
    })
}

function addShipsToOpponentGrid(ships) {
    let opponentSquaresDOM = document.querySelectorAll('.opponentContainer > .gameboard > .gridColumn > .gridBlock')

    opponentSquaresDOM.forEach(square => {
        let xDOM = Number(square.getAttribute('x'));
        let yDOM = Number(square.getAttribute('y'));

        ships.forEach(ship => {
            if(ship[0] === xDOM && ship[1] === yDOM) {
                square.classList.add('hasShip')
                return
            }

        })
    })
}

function startGame(playerShips,opponentShips,playerBoard, opponentBoard) {
        shipBlockMessage2DOM.style.display = 'none';
        startButton.style.display = 'none'
        resetButton.style.display = 'block'
        playAgainButton.style.display = 'none';
        addShipsToPlayerGrid(playerShips);
        addShipsToOpponentGrid(opponentShips);
        updateMessageBoard()
        turnAction(playerBoard, opponentBoard)   
 
}

function playerShipsSelection(playerBoard) {

    if(playerBoard.ships.length === 0) {
        // placing the 5 length
        shipBlockMessageDOM.textContent = 'Click on your board to place your Carrier'
        let part1 = document.createElement('div');
        let part2 = document.createElement('div');
        let part3 = document.createElement('div');
        let part4 = document.createElement('div');
        let part5 = document.createElement('div');
        let child = shipContainerDOM.lastElementChild;
        while(child) {
            shipContainerDOM.removeChild(child);
            child = shipContainerDOM.lastElementChild;
        }
        shipContainerDOM.append(part1, part2, part3, part4, part5);
        placeShipOnClick(playerBoard,5)
    }

    if(playerBoard.ships.length === 1) {
        // placing the 4 length
        shipBlockMessageDOM.textContent = 'Click on your board to place your Battleship'
        let part1 = document.createElement('div');
        let part2 = document.createElement('div');
        let part3 = document.createElement('div');
        let part4 = document.createElement('div');
        let child = shipContainerDOM.lastElementChild;
        while(child) {
            shipContainerDOM.removeChild(child);
            child = shipContainerDOM.lastElementChild;
        }
        shipContainerDOM.append(part1, part2, part3, part4);
        placeShipOnClick(playerBoard,4)
    }

    if(playerBoard.ships.length === 2 || playerBoard.ships.length === 3) {
        // placing both 3 length
        shipBlockMessageDOM.textContent = 'Click on your board to place your Cruiser'
        let part1 = document.createElement('div');
        let part2 = document.createElement('div');
        let part3 = document.createElement('div');
        let child = shipContainerDOM.lastElementChild;
        while(child) {
            shipContainerDOM.removeChild(child);
            child = shipContainerDOM.lastElementChild;
        }
        shipContainerDOM.append(part1, part2, part3);
        placeShipOnClick(playerBoard,3)
    }

    if(playerBoard.ships.length === 4) {
        // placing 2 length
        shipBlockMessageDOM.textContent = 'Click on your board to place your Destroyer'
        let part1 = document.createElement('div');
        let part2 = document.createElement('div');
        let child = shipContainerDOM.lastElementChild;
        while(child) {
            shipContainerDOM.removeChild(child);
            child = shipContainerDOM.lastElementChild;
        }
        shipContainerDOM.append(part1, part2);
        placeShipOnClick(playerBoard,2)
    }

    if(playerBoard.ships.length === 5) {
        shipBlockDOM.style.display = 'none';
        shipBlockMessageDOM.style.display = 'none'
        shipBlockMessage2DOM.textContent = 'Good luck!';
        startButton.disabled = false;
        startButton.style.display = 'block';
        

    }

}

function placeShipOnClick(playerBoard, shipSize) {
    let playerSquaresDOM = document.querySelectorAll('.playerContainer > .gameboard > .gridColumn > .gridBlock')
    
    playerSquaresDOM.forEach(square => {
        square.addEventListener('click', () => {
            let direction = shipContainerDOM.getAttribute('direction');
            let x = Number(square.getAttribute('x'));
            let y = Number(square.getAttribute('y'));
            playerBoard.placeShip(x,y,direction,shipSize)
            addShipsToPlayerGrid(playerBoard.shipPositions);
            playerSquaresDOM.forEach(square => {
                square.replaceWith(square.cloneNode(true))
            })
            playerShipsSelection(playerBoard)
        })
    })
}



function deleteGrids() {
    let playerSquaresDOM = document.querySelectorAll('.playerContainer > .gameboard > .gridColumn > .gridBlock')
    let opponentSquaresDOM = document.querySelectorAll('.opponentContainer > .gameboard > .gridColumn > .gridBlock')

    playerSquaresDOM.forEach(square => {
        square.remove();
    })

    opponentSquaresDOM.forEach(square => {
        square.remove();
    })

    
}
function resetGame(playerShips,opponentShips,playerBoard, opponentBoard) {
 
        deleteGrids();
        createGrid(10, playerBoardDOM)
        createGrid(10, opponentBoardDOM)
        addShipsToPlayerGrid(playerShips);
        addShipsToOpponentGrid(opponentShips);
        updateMessageBoard()
        turnAction(playerBoard, opponentBoard)
        showShips(); 
}

function updateMessageBoard() {
    if( turn === 'player') {
        return messageBoardDOM.textContent = 'Your turn to play'
    }
    if( turn === 'opponent') {
        return messageBoardDOM.textContent = "Opponent's turn to play"
    }
}

function displayWinningMessage() {
    lockBoards();
    startButton.style.display = 'none'
    resetButton.style.display = 'none'
    playAgainButton.style.display = 'block';

    if(turn === 'player') {
       return messageBoardDOM.textContent = 'All of your opponent\'s ships went down, you won!' 
    }

    return messageBoardDOM.textContent = 'All of your ships went down, you lost!'  


}

function turnAction(playerBoard, opponentBoard) {
    let currentSquaresDOM
    let board
    console.log('current turn: ', turn)
    
    if(turn === 'player') {
        currentSquaresDOM = document.querySelectorAll('.opponentContainer > .gameboard > .gridColumn > .gridBlock')
        board = opponentBoard
    } else {
        currentSquaresDOM = document.querySelectorAll('.playerContainer > .gameboard > .gridColumn > .gridBlock')
        board = playerBoard
        }

        
    currentSquaresDOM.forEach(square => {
        if(square.textContent === '') {
            square.addEventListener('click', () => {
                let xDOM = Number(square.getAttribute('x'));
                let yDOM = Number(square.getAttribute('y'));
                let attack = board.receiveAttack(xDOM, yDOM);
                console.log(attack)


                if(attack.outcome === 'you missed!') {
                    square.textContent = '●'
                    square.style.background = '#f2f4f8';
                    square.style.cursor = 'default';
                    endTurn();
                    updateMessageBoard();
                    disableEventListeners(currentSquaresDOM);
                    turnAction(playerBoard, opponentBoard)


                }

                if(attack.outcome === 'you hit a ship!' || attack.outcome === 'ship sunk!') {
                    square.textContent = '❌'
                    square.style.cursor = 'default';
                    square.replaceWith(square.cloneNode(true));

                    // Grays out diagonal squares
                    currentSquaresDOM.forEach(position => {
                        let positionX = Number(position.getAttribute('x'))
                        let positionY = Number(position.getAttribute('y'))                    
                        if((positionX === xDOM-1 ||
                            positionX === xDOM+1) &&
                            (positionY === yDOM-1 ||
                            positionY === yDOM+1)) {
                                position.textContent = '●'
                                position.style.background = '#f2f4f8';
                                position.style.cursor = 'default';
                                position.replaceWith(position.cloneNode(true));
                            }
                    })
                    if(attack.outcome === 'ship sunk!') {
                        attack.shipPosition.forEach(coordinate => {
                            currentSquaresDOM.forEach(position => {
                                let positionX = Number(position.getAttribute('x'))
                                let positionY = Number(position.getAttribute('y'))   
                                if((coordinate[0]-1 <= positionX && positionX <= coordinate[0]+1) &&
                                (coordinate[1]-1 <= positionY && positionY <= coordinate[1]+1) &&
                                (!position.classList.contains('hasShip'))) {
                                        position.textContent = '●'
                                        position.style.background = '#f2f4f8';
                                        position.style.cursor = 'default';
                                        position.replaceWith(position.cloneNode(true));
                                    }
                            })
                        })
                        if(board.checkIfAllShipsSunk()) {
                            displayWinningMessage();
                        }
                    }
                }
                square.replaceWith(square.cloneNode(true));

            });
        }
    })

        if(turn === 'opponent') {
        randomSquareClick(currentSquaresDOM, board)
        
    }
    
}

function disableEventListeners(elementArray) {
    elementArray.forEach(element => {
        element.replaceWith(element.cloneNode(true));
    })
}

function getAvailableSquares(board) {
    if(turn === 'opponent') {
        let availableSquares = [];
        board.forEach(square => {
            let xDOM = Number(square.getAttribute('x'))
            let yDOM = Number(square.getAttribute('y'));

            if(square.textContent === '') {
                availableSquares.push(JSON.stringify([xDOM, yDOM]))
            }
        })
        return availableSquares

        }
}

function getSquaresAround(square) {
    let squaresAround = [];
    let x = Number(square.getAttribute('x'));
    let y = Number(square.getAttribute('y'));
    squaresAround.push(JSON.stringify([x+1, y]))
    squaresAround.push(JSON.stringify([x, y+1]))
    squaresAround.push(JSON.stringify([x-1, y]))
    squaresAround.push(JSON.stringify([x, y-1]))
    return squaresAround;
}

function randomSquareClick(board, opponentBoard) {
    let randomSquare;

    board.forEach(square => {
        if(square.textContent === '❌') {
            console.log('squares around: ', getSquaresAround(square))
            console.log('getAvailableSquares: ', getAvailableSquares(board));
            getSquaresAround(square).forEach(position => {
                console.log('getAvailableSquares(board).includes(position): ', getAvailableSquares(board).includes(position))
                if(getAvailableSquares(board).includes(position)) {
                    nextX = JSON.parse(position)[0];
                    nextY = JSON.parse(position)[1];
                    board.forEach(newSquare => {
                        let xDOM = Number(newSquare.getAttribute('x'));
                        let yDOM = Number(newSquare.getAttribute('y'));
                        if(xDOM === nextX && yDOM === nextY) {
                            newSquare.click();
                            previousSquare = newSquare;
                            return
                        }
                    })
                    return

                } 
            })
            return
        }       
    })

    randomSquare = JSON.parse(getAvailableSquares(board)[Math.floor(Math.random()*getAvailableSquares(board).length)]);
    board.forEach(newSquare => {
        let xDOM = Number(newSquare.getAttribute('x'));
        let yDOM = Number(newSquare.getAttribute('y'));
        if(xDOM === randomSquare[0] && yDOM === randomSquare[1]) {
            newSquare.click();
            previousSquare = newSquare;
            return
        }
    })

    if(opponentBoard.checkIfAllShipsSunk()) {
        turn = 'opponent';
        displayWinningMessage();
        return
    } 

    if(previousSquare.textContent === '❌') {
        randomSquareClick(board, opponentBoard);
    }
}

function lockBoards() {
    let opponentBoard = document.querySelectorAll('.opponentContainer > .gameboard > .gridColumn > .gridBlock')
    let playerBoard = document.querySelectorAll('.playerContainer > .gameboard > .gridColumn > .gridBlock')

    opponentBoard.forEach(position => {
        position.style.cursor = 'default';
        position.replaceWith(position.cloneNode(true));
    })

    playerBoard.forEach(position => {
        position.style.cursor = 'default';
        position.replaceWith(position.cloneNode(true));
    })
    

}

function showShips() {
    let opponentSquaresDOM = document.querySelectorAll('.opponentContainer > .gameboard > .gridColumn > .gridBlock')
    opponentSquaresDOM.forEach(position => {
        if (position.classList.contains('hasShip')) {
            position.classList.toggle('showShip');
        }
    })
}


export  {startGame,
        resetButton,
        startButton, 
        playAgainButton,
        resetGame, 
        showShips, 
        createGrid, 
        addShipsToPlayerGrid, 
        addShipsToOpponentGrid, 
        playerShipsSelection,
        playerBoardDOM, 
        opponentBoardDOM,
        messageBoardDOM};
