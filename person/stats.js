class Stats{
    constructor(initStats){
        this.maxhp = initStats.maxhp;
        this.hp = this.maxhp;
        this.attack = initStats.attack;
        this.defense = initStats.defense;
        this.maxmp = initStats.maxmp;
        this.mp = this.maxmp;
        this.magic = initStats.magic;
    }
}

module.exports = Stats

