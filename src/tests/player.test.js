import Player from '../factories/player'

let player = new Player('Paulo');

test('test', () => {
    expect('hi').toMatch('hi');
})

test('player name', () => {
    expect(player.name).toMatch('Paulo');
})