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

function squareClick(board) {
    let opponentSquaresDOM = document.querySelectorAll('.opponentContainer > .gameboard > .gridColumn > .gridBlock')
    opponentSquaresDOM.forEach(square => {
        square.addEventListener('click', () => {
            let xDOM = Number(square.getAttribute('x'));
            let yDOM = Number(square.getAttribute('y'));
            let attack = board.receiveAttack(xDOM, yDOM);
            console.log(attack)

            if(attack === 'you missed!') {
                square.textContent = '●'
                square.style.background = '#f2f4f8';
                square.style.cursor = 'default';
                turn = 'opponent';
                updateMessageBoard();
            }

            if(attack === 'you hit a ship!') {
                square.textContent = '❌'

                // Grays out diagonal squares
                opponentSquaresDOM.forEach(position => {                    
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
            }
            square.replaceWith(square.cloneNode(true));

            
        });
    })
    
}


export  {startGameOnClick, createGrid, addShipsToPlayerGrid, addShipsToOpponentGrid, playerBoardDOM, opponentBoardDOM};
