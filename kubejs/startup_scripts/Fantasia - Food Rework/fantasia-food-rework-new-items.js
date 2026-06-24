StartupEvents.registry('item', event => {
	
	//functions to make it so foxes eating foods don't crash the game LOL
	function bottleFoodItem (event) {
            if (event.entity.type !== 'minecraft:player') {
                const bottleitem = event.level.createEntity('item')
                bottleitem.item = Item.of('minecraft:glass_bottle', 1)
                bottleitem.setPos(event.entity.getX(), event.entity.getY(), event.entity.getZ())
                bottleitem.spawn()
            } else {
                event.player.give('minecraft:glass_bottle')
            }
    }
	
	function tankardFoodItem (event) {
            if (event.entity.type !== 'minecraft:player') {
                const tankarditem = event.level.createEntity('item')
                tankarditem.item = Item.of('brewinandchewin:tankard', 1)
                tankarditem.setPos(event.entity.getX(), event.entity.getY(), event.entity.getZ())
                tankarditem.spawn()
            } else {
                event.player.give('brewinandchewin:tankard')
            }
    }
	
	function bowlFoodItem (event) {
            if (event.entity.type !== 'minecraft:player') {
                const bowlitem = event.level.createEntity('item')
                bowlitem.item = Item.of('minecraft:bowl', 1)
                bowlitem.setPos(event.entity.getX(), event.entity.getY(), event.entity.getZ())
                bowlitem.spawn()
            } else {
                event.player.give('minecraft:bowl')
            }
    }
  //
  //
	
	//Add Yeast Culture
	event.create('yeast_culture')
	.displayName('酵母菌')
	
	//Add New Wines
	event.create('rose_wine')
	.displayName('桃紅葡萄酒')
	.maxStackSize(16)
	.rarity('uncommon')
	.tag('hearthandharvest:wine_bottles')
	.useAnimation('drink')
	.food(food => {food
	.effect('minecraft:health_boost', 4800, 0, 1)
	.effect('minecraft:regeneration', 600, 1, 1)
	.effect('brewinandchewin:intoxication', 3600, 0,1)
	.hunger(7)
	.saturation(0.47)
	.eaten(event => {
        bottleFoodItem(event)
		})
	});
	
	event.create('rice_wine')
	.displayName('米酒')
	.maxStackSize(16)
	.rarity('uncommon')
	.tag('hearthandharvest:wine_bottles')
	.useAnimation('drink')
	.food(food => {food
	.hunger(7)
	.saturation(0.47)
	.effect('netherexp:poison_immunity', 2400, 0, 1)
	.effect('netherexp:hunger_immunity', 4800, 0, 1)
	.effect('brewinandchewin:intoxication', 3600, 0,1)
	.eaten(event => {
        bottleFoodItem(event)
		})
	});
	
	event.create('apple_wine')
	.displayName('蘋果酒')
	.maxStackSize(16)
	.rarity('uncommon')
	.tag('hearthandharvest:wine_bottles')
	.useAnimation('drink')
	.food(food => {food
	.hunger(7)
	.saturation(0.47)
	.effect('irons_spellbooks:fortify', 3600, 9, 1)
	.effect('attributeslib:vitality', 3600, 1, 1)
	.effect('brewinandchewin:intoxication', 3600, 0,1)
	.eaten(event => {
        bottleFoodItem(event)
		})
	});
	
	//Add missing Juice for recipe
	event.create('sweet_berry_juice')
	.displayName('甜漿果汁')
	.maxStackSize(16)
	.texture('hearthandharvest:item/sweet_berry_juice')
	.useAnimation('drink')
	.food(food => {food
	.hunger(3)
	.saturation(0.15) //(hunger * saturation * 2 + saturation)
	.eaten(event => {
        bottleFoodItem(event)
		})
	});
	
	
	//Add Unaged Wines
  event.create('unaged_red_wine')
    .color(0, '#928299')
	.displayName('未熟紅葡萄酒')
	.maxStackSize(16)
	.tag('hearthandharvest:wine_bottles')
	.useAnimation('drink')
	.food(food => {food
	.hunger(3.5)
	.saturation(0.45)
	.effect('kubejs:might', 900, 0, 1)
	.effect('kubejs:rapidity', 900, 0, 1)
	.effect('brewinandchewin:intoxication', 900, 0,1)
	.effect('brewinandchewin:tipsy', 1, 0, 1)
	.eaten(event => {
        bottleFoodItem(event)
		})
	});
	
  event.create('unaged_white_wine')
    .color(0, '#999082')
	.displayName('未熟白酒')
	.maxStackSize(16)
	.tag('hearthandharvest:wine_bottles')
	.useAnimation('drink')
	.food(food => {food
	.hunger(3.5)
	.saturation(0.45)
	.effect('minecraft:resistance', 600, 0, 1)
	.effect('alexsmobs:knockback_resistance', 1200, 0, 1)
	.effect('brewinandchewin:intoxication', 900, 0,1)
	.effect('brewinandchewin:tipsy', 1, 0, 1)
	.eaten(event => {
        bottleFoodItem(event)
		})
	});
	
  event.create('unaged_rose_wine')
    .color(0, '#928299')
	.displayName('未熟桃紅葡萄酒')
	.maxStackSize(16)
	.tag('hearthandharvest:wine_bottles')
	.useAnimation('drink')
	.food(food => {food
	.hunger(3.5)
	.saturation(0.45)
	.effect('minecraft:health_boost', 1200, 0, 1)
	.effect('minecraft:regeneration', 600, 0, 1)
	.effect('brewinandchewin:intoxication', 900, 0,1)
	.effect('brewinandchewin:tipsy', 1, 0, 1)
	.eaten(event => {
        bottleFoodItem(event)
		})
	});
	
  event.create('unaged_cherry_wine')
    .color(0, '#928299')
	.displayName('未熟櫻桃酒')
	.maxStackSize(16)
	.tag('hearthandharvest:wine_bottles')
	.useAnimation('drink')
	.food(food => {food
	.hunger(3.5)
	.saturation(0.45)
	.effect('kubejs:treading', 1200, 0, 1)
	.effect('kubejs:athletics', 600, 0, 1)
	.effect('brewinandchewin:intoxication', 900, 0,1)
	.effect('brewinandchewin:tipsy', 1, 0, 1)
	.eaten(event => {
        bottleFoodItem(event)
		})
	});
	
  event.create('unaged_blueberry_wine')
    .color(0, '#928299')
	.displayName('未熟藍莓酒')
	.maxStackSize(16)
	.tag('hearthandharvest:wine_bottles')
	.useAnimation('drink')
	.food(food => {food
	.hunger(3.5)
	.saturation(0.45)
	.effect('minecraft:luck', 1200, 0, 1)
	.effect('kubejs:striding', 600, 0, 1)
	.effect('brewinandchewin:intoxication', 900, 0,1)
	.effect('brewinandchewin:tipsy', 1, 0, 1)
	.eaten(event => {
        bottleFoodItem(event)
		})
	});
	
  event.create('unaged_raspberry_wine')
    .color(0, '#928299')
	.displayName('未熟樹莓酒')
	.maxStackSize(16)
	.tag('hearthandharvest:wine_bottles')
	.useAnimation('drink')
	.food(food => {food
	.hunger(3.5)
	.saturation(0.45)
	.effect('minecraft:haste', 900, 0, 1)
	.effect('kubejs:deftness', 900, 0, 1)
	.effect('brewinandchewin:intoxication', 900, 0,1)
	.effect('brewinandchewin:tipsy', 1, 0, 1)
	.eaten(event => {
        bottleFoodItem(event)
		})
	});
	
  event.create('unaged_sweet_berry_wine')
    .color(0, '#928299')
	.displayName('未熟甜漿果酒')
	.maxStackSize(16)
	.tag('hearthandharvest:wine_bottles')
	.useAnimation('drink')
	.food(food => {food
	.hunger(3.5)
	.saturation(0.45)
	.effect('minecraft:speed', 900, 0, 1)
	.effect('minecraft:jump_boost', 900, 0, 1)
	.effect('brewinandchewin:intoxication', 900, 0,1)
	.effect('brewinandchewin:tipsy', 1, 0, 1)
	.eaten(event => {
        bottleFoodItem(event)
		})
	});
	
  event.create('unaged_apple_wine')
    .color(0, '#999082')
	.displayName('未熟蘋果酒')
	.maxStackSize(16)
	.tag('hearthandharvest:wine_bottles')
	.useAnimation('drink')
	.food(food => {food
	.hunger(3.5)
	.saturation(0.45)
	.effect('irons_spellbooks:fortify', 900, 4, 1)
	.effect('attributeslib:vitality', 900, 0, 1)
	.effect('brewinandchewin:intoxication', 900, 0,1)
	.effect('brewinandchewin:tipsy', 1, 0, 1)
	.eaten(event => {
        bottleFoodItem(event)
		})
	});
	
  event.create('unaged_rice_wine')
    .color(0, '#999082')
	.displayName('未熟米酒')
	.maxStackSize(16)
	.tag('hearthandharvest:wine_bottles')
	.useAnimation('drink')
	.food(food => {food
	.hunger(3.5)
	.saturation(0.45)
	.effect('netherexp:poison_immunity', 600, 0, 1)
	.effect('netherexp:hunger_immunity', 1200, 0, 1)
	.effect('brewinandchewin:intoxication', 900, 0,1)
	.effect('brewinandchewin:tipsy', 1, 0, 1)
	.eaten(event => {
        bottleFoodItem(event)
		})
	});
	
  event.create('unaged_mead')
    .color(0, '#999082')
	.displayName('未熟成蜂蜜酒')
	.maxStackSize(16)
	.tag('hearthandharvest:wine_bottles')
	.useAnimation('drink')
	.food(food => {food
	.hunger(3.5)
	.saturation(0.45)
	.effect('farmersdelight:nourishment', 900, 0, 1)
	.effect('brewinandchewin:sweet_heart', 900, 0, 1)
	.effect('brewinandchewin:intoxication', 900, 0,1)
	.effect('brewinandchewin:tipsy', 1, 0, 1)
	.eaten(event => {
        bottleFoodItem(event)
		})
	});
	
	//
	//Add unaged beers
	event.create('unaged_beer')
    .color(0, '#999082')
	.displayName('未熟成啤酒')
	.maxStackSize(16)
	.tag('brewinandchewin:fermented_drinks')
	.useAnimation('drink')
	.food(food => {food
	.effect('brewinandchewin:intoxication', 600, 0,1)
	.eaten(event => {
        tankardFoodItem(event)
		})
	});
	
	event.create('unaged_vodka')
    .color(0, '#999082')
	.displayName('未熟伏特加')
	.maxStackSize(16)
	.tag('brewinandchewin:fermented_drinks')
	.useAnimation('drink')
	.food(food => {food
	.effect('brewinandchewin:intoxication', 600, 0,1)
	.eaten(event => {
        tankardFoodItem(event)
		})
	});
	
	event.create('unaged_gin')
    .color(0, '#999082')
	.displayName('未熟成金酒')
	.maxStackSize(16)
	.tag('brewinandchewin:fermented_drinks')
	.useAnimation('drink')
	.food(food => {food
	.effect('brewinandchewin:intoxication', 600, 0,1)
	.eaten(event => {
        tankardFoodItem(event)
		})
	});
	
	event.create('unaged_rum')
    .color(0, '#999082')
	.displayName('未熟成朗姆酒')
	.maxStackSize(16)
	.tag('brewinandchewin:fermented_drinks')
	.useAnimation('drink')
	.food(food => {food
	.effect('brewinandchewin:intoxication', 600, 0,1)
	.eaten(event => {
        tankardFoodItem(event)
		})
	});
	
	//
	//Add pickled eggs
	event.create('pickled_eggs')
	.displayName('皮蛋')
	.maxStackSize(16)
	.tag('forge:cooked_eggs')
	.food(food => {food
	.hunger(6.0)
	.saturation(0.54)
	});

	//
	//Prepared bug meat
	event.create('bug_meat_slice')
	.displayName('預處理蟲肉')
	.texture("fantasia:item/bug_meat_slice")
	.maxStackSize(16)
	.food(food => {food
	.hunger(1.0)
	.saturation(0.80)
	.effect('minecraft:poison', 100, 0, 1)
	.fastToEat()
	});
	
});

//
//new blocks
StartupEvents.registry('block', event => {
	
	event.create('rose_wine_crate','slab')
	.displayName('桃紅葡萄酒箱')
	.woodSoundType()
	.mapColor('wood')
	.hardness(2.0)
	.resistance(2.5)
	.tagBlock('forge:storage_blocks')
	.tagBlock('minecraft:mineable/axe')
	.blockstateJson= {
    "variants": {
      "type=bottom": {
        "model": "kubejs:block/rose_wine_crate"
      },
      "type=top": {
        "model": "kubejs:block/rose_wine_crate_top"
      },
      "type=double": {
        "model": "kubejs:block/rose_wine_crate_double"
		}}}

	event.create('rice_wine_crate','slab')
	.displayName('米酒箱')
	.woodSoundType()
	.mapColor('wood')
	.hardness(2.0)
	.resistance(2.5)
	.tagBlock('forge:storage_blocks')
	.tagBlock('minecraft:mineable/axe')
	.blockstateJson= {
    "variants": {
      "type=bottom": {
        "model": "kubejs:block/rice_wine_crate"
      },
      "type=top": {
        "model": "kubejs:block/rice_wine_crate_top"
      },
      "type=double": {
        "model": "kubejs:block/rice_wine_crate_double"
		}}}
		
	event.create('apple_wine_crate','slab')
	.displayName('蘋果酒箱')
	.woodSoundType()
	.mapColor('wood')
	.hardness(2.0)
	.resistance(2.5)
	.tagBlock('forge:storage_blocks')
	.tagBlock('minecraft:mineable/axe')
	.blockstateJson= {
    "variants": {
      "type=bottom": {
        "model": "kubejs:block/apple_wine_crate"
      },
      "type=top": {
        "model": "kubejs:block/apple_wine_crate_top"
      },
      "type=double": {
        "model": "kubejs:block/apple_wine_crate_double"
		}}}
		
})