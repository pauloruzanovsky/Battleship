import Ship from "./ship";

class GameBoard {
    constructor(player) {
        this.player = player;
    }
    
    shipPositions = [];
    allShotsTaken = [];
    missedShots = [];
    ships = [];
    previousShot = [];
    
    placeShip(x, y, direction, shipSize) {
        let ship = new Ship(shipSize);
        let shipPosition = [];
        let nextX = x
        let nextY = y;

        if(x < 0 || x > 10 || y < 0 || y > 10 ) {
            return 'invalid position';
        }

        shipPosition.push([x,y]);
        for(let i=1; i < shipSize; i++) {
            if(direction === 'x') {
                nextX++;
                shipPosition.push([nextX,y]);
            } else {
                nextY++;
                shipPosition.push([x,nextY]);
            }
        }
        
        if(this.checkPositionAvailability(shipPosition, this.shipPositions) === false){  
            return 'invalid position';   
        };
        this.shipPositions = [...this.shipPositions,...shipPosition];
        ship.position = shipPosition;

        this.ships.push(ship);
        return
    }

    receiveAttack(x,y) {
        this.allShotsTaken.push([x,y]);

        // execute hit on the ship placed on the coordinates
        for(let i=0;i<this.shipPositions.length;i++) {
            let sunkCheck    
            let shipPosition                       
            if(this.shipPositions[i][0] === x && this.shipPositions[i][1] === y) {
                 this.ships.forEach(ship => {
                        ship.position.forEach(coordinate => {
                        if (coordinate[0] === x && coordinate[1] === y) {
                            ship.getHit();
                            sunkCheck = ship.isSunk();
                            shipPosition = ship.position;                            
                        }
                    }) 
                })
                console.log('is sunk: ', sunkCheck)
                if(sunkCheck) {

                    return {outcome: 'ship sunk!', shipPosition};
                } 
                return {outcome: 'you hit a ship!'};

            }
        }

        // If no ship was hit, pushes the coordinates onto the missed shots array.
        this.missedShots.push([x,y]);
        return {outcome: 'you missed!'};
    }

    checkIfAllShipsSunk() {
        if(this.ships.length === 0) {
            return false;
        }
        for(let i = 0; i < this.ships.length; i++ ){
            if(!this.ships[i].isSunk()) {
                return false;
            }
        }
        return true;
    }
    // checks if there is a ship already placed on the coordinate or 1 square of distance
    checkPositionAvailability(shipPosition, usedPositions) {
        for(let i = 0; i < shipPosition.length; i++) {
            for(let j = 0; j < usedPositions.length; j++) {

                if((shipPosition[i][0]-1 <= usedPositions[j][0] && usedPositions[j][0] <= shipPosition[i][0] + 1) &&
                   (shipPosition[i][1]-1 <= usedPositions[j][1] && usedPositions[j][1] <= shipPosition[i][1] + 1)) {
                    return false;
                }
            }
        }
    
        return true;
    }
}

export default GameBoard;
