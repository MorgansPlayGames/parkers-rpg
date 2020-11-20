const Location = require('./location.js');

class Settlement extends Location {
    constructor(x, y, description, name){
        super(x, y, description);
        this.name = name;
        this.buildings = [];
    }

    addBuilding(building){
        this.buildings.append(building)
    }
}



module.exports = Settlement;