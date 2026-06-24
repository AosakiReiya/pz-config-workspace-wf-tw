ItemEvents.modification(event => {
	
	const winetype = ['red_grape', 'green_grape', 'cherry', 'blueberry', 'raspberry', 'sweet_berry'];
	
	//remove all properties from wine
	winetype.forEach((winetype) => {
		event.modify(`hearthandharvest:${winetype}_wine`, item => {
        item.foodProperties = null
		});
	});
	//and mead
	event.modify('hearthandharvest:mead', item => {
    item.foodProperties = null
	});

	//
	//adding custom properties to nulled food stuff
	//mead
	event.modify('hearthandharvest:mead', item => {
    item.foodProperties = food => {
		food.hunger(7)
		food.saturation(0.47)
		food.effect('farmersdelight:nourishment', 3600, 0, 1)
		food.effect('brewinandchewin:sweet_heart', 3600, 0, 1)
		food.effect('brewinandchewin:intoxication', 3600, 0,1)
		}
	item.rarity = 'uncommon'
	});
	
	//red wine
	event.modify('hearthandharvest:red_grape_wine', item => {
    item.foodProperties = food => {
		food.effect('kubejs:might', 3600, 1, 1)
		food.effect('kubejs:rapidity', 3600, 1, 1)
		}
	});
	
	//white wine
	event.modify('hearthandharvest:green_grape_wine', item => {
    item.foodProperties = food => {
		food.effect('minecraft:resistance', 2400, 0, 1)
		food.effect('alexsmobs:knockback_resistance', 4800, 0, 1)
		}
	});
	
	//cherry wine
	event.modify('hearthandharvest:cherry_wine', item => {
    item.foodProperties = food => {
		food.effect('kubejs:treading', 4800, 0, 1)
		food.effect('kubejs:athletics', 2400, 1, 1)
		}
	});
	
	//blueberry wine
	event.modify('hearthandharvest:blueberry_wine', item => {
    item.foodProperties = food => {
		food.effect('minecraft:luck', 4800, 1, 1)
		food.effect('kubejs:striding', 2400, 1, 1)
		}
	});
	
	//raspberry wine
	event.modify('hearthandharvest:raspberry_wine', item => {
    item.foodProperties = food => {
		food.effect('minecraft:haste', 3600, 0, 1)
		food.effect('kubejs:deftness', 3600, 1, 1)
		}
	});
	
	//sweet berry wine
	event.modify('hearthandharvest:sweet_berry_wine', item => {
    item.foodProperties = food => {
		food.effect('minecraft:speed', 3600, 1, 1)
		food.effect('minecraft:jump_boost', 3600, 0, 1)
		}
	});
	
	//bulk add hunger, negative effects and rarity to all the wines

	winetype.forEach((winetype) => {

		event.modify(`hearthandharvest:${winetype}_wine`, item => {
		item.foodProperties = food => {
		food.hunger(7)
		food.saturation(0.47)
		food.effect('brewinandchewin:intoxication', 3600, 0,1)
		}
		item.rarity = 'uncommon'
		})
	});
	
	
	//
	//Beer Time
	//
	
	const beertype1 = ['vodka', 'mead', 'salty_folly', 'egg_grog', 'glittering_grenadine', 'saccharine_rum', 'withering_dross'];
	const beertype2 = ['strongroot_ale', 'steel_toe_stout', 'bloody_mary', 'pale_jane', 'kombucha', 'dread_nog', 'red_rum'];
	//remove all properties from beers
	beertype1.forEach((beertype1) => {
		event.modify(`brewinandchewin:${beertype1}`, item => {
        item.foodProperties = null
		});
	});
	//
	beertype2.forEach((beertype2) => {
		event.modify(`brewinandchewin:${beertype2}`, item => {
        item.foodProperties = null
		});
	});
	//
	event.modify(`brewinandchewin:rice_wine`, item => {
        item.foodProperties = null
		});
	
	//add new properties to beers
	//bulk add always edible and negative effects to the beers
	beertype1.forEach((beertype1) => {
		event.modify(`brewinandchewin:${beertype1}`, item => {
        item.foodProperties = food => {
		food.alwaysEdible()
		food.effect('brewinandchewin:tipsy', 2400, 0, 1)
		food.effect('brewinandchewin:intoxication', 1800, 0, 1)
		}
		});
	});
	//
	beertype2.forEach((beertype2) => {
		event.modify(`brewinandchewin:${beertype2}`, item => {
        item.foodProperties = food => {
		food.alwaysEdible()
		food.effect('brewinandchewin:tipsy', 2400, 1, 1)
		food.effect('brewinandchewin:intoxication', 1800, 0, 1)
		}
		});
	});
	
	//Fanta (Rice Wine)
	event.modify('brewinandchewin:rice_wine', item => {
    item.foodProperties = food => {
		food.alwaysEdible()
		food.effect('farmersdelight:comfort', 2400, 0, 1)
		}
	});
	
	//Beer
	event.modify('brewinandchewin:beer', item => {
    item.foodProperties = food => {
		food.effect('minecraft:luck', 2400, 0, 1)
		}
	});
	
	//Golden Lager (Strongroot Ale)
	event.modify('brewinandchewin:strongroot_ale', item => {
    item.foodProperties = food => {
		food.effect('minecraft:absorption', 1800, 1, 1)
		}
	});
	
	//Obsidian Stout (Steel-Toe Stout)
	event.modify('brewinandchewin:steel_toe_stout', item => {
    item.foodProperties = food => {
		food.effect('minecraft:resistance', 1800, 0, 1)
		}
	});
	
	//Vodka
	event.modify('brewinandchewin:vodka', item => {
    item.foodProperties = food => {
		food.effect('kubejs:treading', 2400, 0, 1)
		}
	});
	
	//Bloody Mary
	event.modify('brewinandchewin:bloody_mary', item => {
    item.foodProperties = food => {
		food.effect('brewinandchewin:raging', 2400, 0, 1)
		}
	});
	
	//Ghast's Tears (Pale Jane)
	event.modify('brewinandchewin:pale_jane', item => {
    item.foodProperties = food => {
		food.effect('minecraft:regeneration', 600, 1, 1)
		}
	});
	
	//Gin (Kombucha)
	event.modify('brewinandchewin:kombucha', item => {
    item.foodProperties = food => {
		food.effect('minecraft:haste', 1200, 1, 1)
		}
	});
	
	//Pink Lady (Mead)
	event.modify('brewinandchewin:mead', item => {
    item.foodProperties = food => {
		food.effect('brewinandchewin:sweet_heart', 2400, 0, 1)
		}
	});
	
	//Martini (Salty Folly)
	event.modify('brewinandchewin:salty_folly', item => {
    item.foodProperties = food => {
		food.effect('kubejs:deftness', 2400, 0, 1)
		}
	});
	
	//Glistening Gin (Glittering Grenadine)
	event.modify('brewinandchewin:glittering_grenadine', item => {
    item.foodProperties = food => {
		food.effect('minecraft:glowing', 600, 0, 1)
		food.effect('minecraft:night_vision', 1800, 0, 1)
		}
	});
	
	//Rum (Saccharine Rum)
	event.modify('brewinandchewin:saccharine_rum', item => {
    item.foodProperties = food => {
		food.effect('minecraft:speed', 1800, 0, 1)
		}
	});
	
	//Eggnog (Egg Grog)
	event.modify('brewinandchewin:egg_grog', item => {
    item.foodProperties = food => {
		food.effect('attributeslib:vitality', 2400, 0, 1)
		}
	});
	
	//Mojito (Withering Dross)
	event.modify('brewinandchewin:withering_dross', item => {
    item.foodProperties = food => {
		food.effect('kubejs:athletics', 1200, 0, 1)
		}
	});
	
	//Nether Cracked Rum (Red Rum)
	event.modify('brewinandchewin:red_rum', item => {
    item.foodProperties = food => {
		food.effect('minecraft:fire_resistance', 1800, 0, 1)
		}
	});
	
	//Ominous ale (Dread Nog)
	event.modify('brewinandchewin:dread_nog', item => {
    item.foodProperties = food => {
		food.effect('minecraft:bad_omen', 72000, 0, 1)
		}
	});
	
})