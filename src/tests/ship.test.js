import Ship from '../factories/ship';

describe.skip('Ship', () => {
    let ship = new Ship(3);

    test('test ship length', () => {
        expect(ship.length).toBe(3)
    })

    test('ship body array', () => {
        ship.createBody();
        expect(ship.body).toEqual(['o','o','o'])
    })

    test('ship got hit', () => {
        ship.getHit(1);
        expect(ship.body).toEqual(['o','hit','o'])
    })

    test('ship not sunk', () => {
        expect(ship.isSunk()).toBe(false)
    })

    test('ship sunk', () => {
        for(let i = 0; i < ship.body.length; i++) {
            ship.getHit(i)
        }
        expect(ship.isSunk()).toBe(true);
    })
})