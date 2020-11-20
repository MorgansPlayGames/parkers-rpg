const Location = require('./location');

class Wild extends Location {
    constructor(x, y, description){
        super(x, y, description)
        this.encounters = [];

    }
}

module.exports = Wild;