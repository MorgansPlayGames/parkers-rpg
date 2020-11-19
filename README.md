# parkers-rpg

Using classes, and random tables, I'm attempting to make an RPG game using node.

### Current Instructions:

    Download, in cpc: create combat player character (cpc) classes with sample code, run cpc through node to create cpc's and have them attack things

### Current Bugs:

    - After getting to 0 hp, notDead is reset back to true. 

### Documentation

    create character:
    - stats = 
        'maxhp':'value',
        'attack':'value',
        'defense':'value',
        'maxmp':'value',
        'magic':'value
    - 'character' = new CPC(name, gold, stats, [human/comp])