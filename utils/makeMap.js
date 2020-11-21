const Settlement = require('../location/settlement.js');
const Wild = require('../location/wild.js');
class Map {
    constructor(name, height, width, xStart, yStart){
        this.name = name;
        this.width = width;
        this.height = height;
        this.xStart = xStart;
        this.yStart = yStart;
        this.currentLocation;
        this.map = []
    }
    generate(){
        for(let i = 0; i < this.width; i++){
            for(let j = 0; j < this.height; j++){
                let description = "generic place"
                if(i === this.xStart && j === this.yStart){
                    this.currentLocation = new Settlement(i, j, description+' and town', "towny");
                    console.log(this.currentLocation);
                }else{
                    this.currentLocation = new Wild(i, j, description+' wild');
                    console.log(this.currentLocation)
                }
                this.map.push(this.currentLocation);
            }
        }
    }
    getLocation(x, y){
        this.here()
        const loc = this.map.find((location) => location.x === x && location.y === y);
        return loc;
    }
    here(){
        console.log('here')
    }
}

let testMap = new Map('Big Area', 5, 5, 3, 3)
testMap.generate()
let thisArea = testMap.getLocation(2,2);

thisArea.getStats();



module.exports = Map;