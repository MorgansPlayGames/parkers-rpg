Skyrim Psudocode
Person{
    Name
    Cpc{
        Gold
        Equipment
        Actions
        Stats{
            maxHP
            HP
            Attack
            Defense
            maxMP
            MP
            Magic
        }
        isDead()
        Type{
            Player{
                OptionsAvailable[]
                Death()
            }
            Enemy{
                attackList[]
            }
        }
    }
    Npc{
        talkOptions[]
        Jobs[]
        Relationships[]
        Rumors[]
        xyLocation
        buildingLocation
    }
}   
Location{
	xyLocation
	Description
        Type{
            Wilderness{
			    Type{Forest, Desert, Mountain}
                Encounters[]
            }
        }
    Settlement{
        Buildings[{
	        name
            Type{bar, shop, smith, specific house}
            Description
            Options
        }]

        Hamlet{

        }
        Town{

        }
        City{

        }
    }
}

Options{
	Combat{
	Attack()
	Magic()
	Run()
    }
    Settlement{
	    Talk[
		    talk()
		    gossip()
            questRelated[]
        ]
        BuildingInvestigation(building)
        Explore(cardinalLocation)	
    }
}
Exploration{
	Explore()
	EstablishSettlement()
	Head(cardinalDirection)
}
BuildingInvestigation{
	Investigate(Locate Hidden?)
	Talk(Person)
}
Encounter{
	Description
	isThereNextRoom()
	Combat()
	Investigate(Locate Hidden?)
}

