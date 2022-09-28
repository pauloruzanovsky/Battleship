import GameBoard from '../factories/gameBoard';

let gameBoard = new GameBoard();

describe.skip('GameBoard', () => {
    test('place ship on board', () => {
        expect(gameBoard.placeShip(1,1,'y',3)).toMatch('ship placed on: 1,1,1,2,1,3');
    })

    test('place ship on board', () => {
        expect(gameBoard.placeShip(2,2,'x',4)).toEqual('ship placed on: 2,2,3,2,4,2,5,2');

    })

    test('fail place ship if position is taken', () => {
        gameBoard.placeShip(1,1,'x',3);
        expect(gameBoard.placeShip(1,1,'x',3)).toEqual('invalid position');
    })

    test('fail place if position is out of range', () => {
        expect(gameBoard.placeShip(-1,1,'x',4)).toEqual('invalid position');
        expect(gameBoard.placeShip(1,11,'y',5)).toEqual('invalid position');
    })

    test('receive attack', () => {
        expect(gameBoard.receiveAttack(1,1)).toEqual('you hit a ship!');
        expect(gameBoard.receiveAttack(4,4)).toEqual('you missed!');
    })

    test('position already hit cant be hit again', () => {
        expect(gameBoard.receiveAttack(1,1)).toEqual('this position was already hit!');
    })

    test('If hit a ship, log on the ship object', () => {
        expect(gameBoard.ships[0].hitCount).toBe(1)
    })

    test('If ship hitCount === length, sink', () => {
        expect(gameBoard.receiveAttack(1,2)).toEqual('you hit a ship!');
        expect(gameBoard.receiveAttack(1,3)).toEqual('you hit a ship!');
        expect(gameBoard.ships[0].isSunk()).toBe(true)

    })

    test('check if all ships are sunk', () => {
        gameBoard.receiveAttack(2,2)
        gameBoard.receiveAttack(3,2)
        gameBoard.receiveAttack(4,2)
        gameBoard.receiveAttack(5,2)
        expect(gameBoard.checkIfAllShipsSunk()).toBe(true);
    })

})


