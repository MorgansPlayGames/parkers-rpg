const Stats = require('./stats.js')
const Person = require('./person.js')
class CPC extends Person {
    constructor(name, gold, stats, controller){
        super(name);
        this.gold = gold;
        this.stats = new Stats(stats);
        this.actions = [];
        this.equipment = [];
        this.controller = controller;
        this.notDead = true;
        
    }

    deadCheck(){
        if (this.stats.hp <= 0){
            this.notDead = false;  
            console.log("alive = " + this.notDead);
        }
    }
    getStats(){
        console.log(this.name+': ');
        console.log(this.stats);
        console.log('gold: ' + this.gold);
        console.log('alive? ', this.notDead);
    }
    attack(target){
        if(this.notDead === true){
            target.stats.hp -= this.stats.attack;
            console.log(`${target.name} took ${this.stats.attack} damage!`)
            target.deadCheck()
        }else{
            this.dead()
        }
    }
    dead(){console.log("Sorry, you are dead")}

    
   

}
//test values
let stats = {
    'maxhp':100,
    'attack':25,
    'defense':0,
    'maxmp':0,
    'magic':0
}
hero = new CPC('hero', 100, stats, 'player')
hero.getStats();
g1 = new CPC('goblin', 10, stats, 'npc')
hero.attack(g1);
//g1.getStats()
g1.attack(hero)
g1.attack(hero)
g1.attack(hero)
g1.attack(hero)
g1.attack(hero)

hero.attack(g1);
hero.getStats();
hero.deadCheck();
//g1.getStats();


module.exports = CPC;