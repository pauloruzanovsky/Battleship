let playerBoardDOM = document.querySelector('.playerContainer > div')
let opponentBoardDOM = document.querySelector('.opponentContainer > div')
let startButton = document.querySelector('.startButton')
let turn = 'player';
let messageBoardDOM = document.querySelector('.messageBoard')

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
        squareClick()
        return turn = 'opponent'
    }
    return turn = 'player'
}

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

function startGameOnClick(playerShips,opponentShips,board) {
    startButton.addEventListener('click', () => {
        addShipsToPlayerGrid(playerShips);
        addShipsToOpponentGrid(opponentShips);
        updateMessageBoard()
        squareClick(board)    
    })
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
    if(turn === 'player') {
       return messageBoardDOM.textContent = 'All your opponent\'s ships are sunk, you won!' 
    }

    return messageBoardDOM.textContent = 'All your ships are sunk, you lost!'  
}

function squareClick(board) {
    let currentSquaresDOM
    // if(turn === 'player') {
        currentSquaresDOM = document.querySelectorAll('.opponentContainer > .gameboard > .gridColumn > .gridBlock')
    // } else {currentSquaresDOM = document.querySelectorAll('.playerContainer > .gameboard > .gridColumn > .gridBlock')}

    currentSquaresDOM.forEach(square => {
        square.addEventListener('click', () => {
            let xDOM = Number(square.getAttribute('x'));
            let yDOM = Number(square.getAttribute('y'));
            let attack = board.receiveAttack(xDOM, yDOM);
            console.log(attack)

            if(attack.outcome === 'you missed!') {
                square.textContent = '●'
                square.style.background = '#f2f4f8';
                square.style.cursor = 'default';
                updateMessageBoard();
            }

            if(attack.outcome === 'you hit a ship!' || attack.outcome === 'ship sunk!') {
                square.textContent = '❌'
                square.style.cursor = 'default';
                square.replaceWith(square.cloneNode(true));

                // Grays out diagonal squares
                currentSquaresDOM.forEach(position => {                    
                    if((Number(position.getAttribute('x')) === xDOM-1 ||
                        Number(position.getAttribute('x')) === xDOM+1) &&
                        (Number(position.getAttribute('y')) === yDOM-1 ||
                        Number(position.getAttribute('y')) === yDOM+1)) {
                            position.textContent = '●'
                            position.style.background = '#f2f4f8';
                            position.style.cursor = 'default';
                            position.replaceWith(position.cloneNode(true));
                        }
                })
                if(attack.outcome === 'ship sunk!') {
                    attack.shipPosition.forEach(coordinate => {
                        currentSquaresDOM.forEach(position => {
                            if((coordinate[0]-1 <= Number(position.getAttribute('x')) && Number(position.getAttribute('x')) <= coordinate[0]+1) &&
                               (coordinate[1]-1 <= Number(position.getAttribute('y')) && Number(position.getAttribute('y')) <= coordinate[1]+1) &&
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
                        currentSquaresDOM.forEach(position => {
                            position.style.cursor = 'default';
                            position.replaceWith(position.cloneNode(true));

                        })
                    }
                }
             
            }
            square.replaceWith(square.cloneNode(true)); 
   
        });
    })
    
}


export  {startGameOnClick, createGrid, addShipsToPlayerGrid, addShipsToOpponentGrid, playerBoardDOM, opponentBoardDOM};
