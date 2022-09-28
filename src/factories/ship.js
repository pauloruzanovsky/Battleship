class Ship {
    constructor(length) {
        this.length = length; 
    }
    hitCount = 0;
    position = [];

    getHit =  () => {
        return this.hitCount++;
    }

    isSunk = () => {
        return this.hitCount >= this.length

    }
    }


export default Ship;

