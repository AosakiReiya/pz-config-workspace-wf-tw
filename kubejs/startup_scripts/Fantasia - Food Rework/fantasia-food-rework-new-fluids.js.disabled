StartupEvents.registry('fluid', event => {
	
	//Juice fluids
  event.create('red_grape_juice')
    .thinTexture(0x763E6D)
    .bucketColor(0x763E6D)
    .displayName('紅葡萄汁')
    .noBucket() 
    .noBlock() 

  event.create('green_grape_juice')
    .thinTexture(0x8EA852)
    .bucketColor(0x8EA852)
    .displayName('綠葡萄汁')
    .noBucket() 
    .noBlock() 
	
  event.create('cherry_juice')
    .thinTexture(0xB1121E)
    .bucketColor(0xB1121E)
    .displayName('櫻桃汁')
    .noBucket() 
    .noBlock() 
	
  event.create('blueberry_juice')
    .thinTexture(0x494CD5)
    .bucketColor(0x494CD5)
    .displayName('藍莓汁')
    .noBucket() 
    .noBlock() 
	
  event.create('raspberry_juice')
    .thinTexture(0xBF3064)
    .bucketColor(0xBF3064)
    .displayName('覆盆子汁')
    .noBucket() 
    .noBlock() 
	
  event.create('sweet_berry_juice')
    .thinTexture(0x8C1914)
    .bucketColor(0x8C1914)
    .displayName('甜漿果汁')
    .noBucket() 
    .noBlock() 
	
  event.create('apple_cider')
    .thinTexture(0xC68A47)
    .bucketColor(0xC68A47)
    .displayName('蘋果酒')
    .noBucket() 
    .noBlock() 
	
	//Unaged Wines
	event.create('unaged_red_wine')
    .thinTexture(0x2E1935)
    .bucketColor(0x2E1935)
    .displayName('未熟紅葡萄酒')
    .noBucket() 
    .noBlock() 

  event.create('unaged_white_wine')
    .thinTexture(0x48552E)
    .bucketColor(0x48552E)
    .displayName('未熟白酒')
    .noBucket() 
    .noBlock() 
	
  event.create('unaged_rose_wine')
    .thinTexture(0x73243C)
    .bucketColor(0x73243C)
    .displayName('未熟桃紅葡萄酒')
    .noBucket() 
    .noBlock() 
	
  event.create('unaged_cherry_wine')
    .thinTexture(0x6E161B)
    .bucketColor(0x6E161B)
    .displayName('未熟櫻桃酒')
    .noBucket() 
    .noBlock() 
	
  event.create('unaged_blueberry_wine')
    .thinTexture(0x17193C)
    .bucketColor(0x17193C)
    .displayName('未熟藍莓酒')
    .noBucket() 
    .noBlock() 
	
  event.create('unaged_raspberry_wine')
    .thinTexture(0x651C39)
    .bucketColor(0x651C39)
    .displayName('未熟樹莓酒')
    .noBucket() 
    .noBlock() 
	
  event.create('unaged_sweet_berry_wine')
    .thinTexture(0x51090C)
    .bucketColor(0x51090C)
    .displayName('未熟甜漿果酒')
    .noBucket() 
    .noBlock() 
	
  event.create('unaged_apple_wine')
    .thinTexture(0x79430E)
    .bucketColor(0x79430E)
    .displayName('未熟蘋果酒')
    .noBucket() 
    .noBlock() 
	
  event.create('unaged_rice_wine')
    .thinTexture(0x817462)
    .bucketColor(0x817462)
    .displayName('未熟米酒')
    .noBucket() 
    .noBlock() 
	
  event.create('unaged_mead')
    .thinTexture(0x915917)
    .bucketColor(0x915917)
    .displayName('未熟成蜂蜜酒')
    .noBucket() 
    .noBlock() 
	
	//Unaged Beers
	event.create('unaged_beer')
    .thinTexture(0x826B38)
    .bucketColor(0x826B38)
    .displayName('未熟成啤酒')
    .noBucket() 
    .noBlock() 
	
	event.create('unaged_vodka')
    .thinTexture(0x978E80)
    .bucketColor(0x978E80)
    .displayName('未熟伏特加')
    .noBucket() 
    .noBlock() 
	
	event.create('unaged_gin')
    .thinTexture(0x977F73)
    .bucketColor(0x977F73)
    .displayName('未熟成金酒')
    .noBucket() 
    .noBlock() 
	
	event.create('unaged_rum')
    .thinTexture(0x8A5A26)
    .bucketColor(0x8A5A26)
    .displayName('未熟成朗姆酒')
    .noBucket() 
    .noBlock() 
	
	//Goat Milk
	event.create('goat_milk')
    .thinTexture(0xF0EDE4)
    .bucketColor(0xF0EDE4)
    .displayName('山羊奶')
    .noBucket() 
    .noBlock() 
})

//adding new effects here as well lol
StartupEvents.registry('mob_effect', event => {
	
	//increases attack speed by 10%
	event.create('rapidity') // Create the effect under "kubejs:custom_effect"
    .color(0xAEFDF0) // Sets the color of the Effect's Particles.
    .beneficial() // Categorizes the Effect as Beneficial.
    .modifyAttribute('minecraft:generic.attack_speed', // The attribute to scale
      'd353de8c-3de8-47e1-a38e-e703e91b1e18',//Some random UUID which serves as the effect's unique instance
      0.10, // The amount to increase/decrease by
      "multiply_base" // The operation to perform
    )
	
	//increases step height
	event.create('treading')
    .color(0xF8D290)
    .beneficial() 
    .modifyAttribute('forge:step_height_addition',
      '44fcce2a-b68e-4e13-b0fc-82206af704eb',
      0.6,
      "addition"
    )
	
	//increases combat roll recharge rate
	event.create('athletics')
    .color(0x7FAEFF)
    .beneficial() 
    .modifyAttribute('combatroll:recharge',
      '63adb40d-2a3b-4c48-8aaa-810ce6f0ff4b',
      0.10,
      "multiply_base"
    )
	
	//increases attack damage by 10%
	event.create('might')
    .color(0xA9463B)
    .beneficial() 
    .modifyAttribute('minecraft:generic.attack_damage',
      '3d76029a-6f97-4e1c-9cbe-305a0becd585',
      0.10,
      "multiply_base"
    )
	
	//increases swim speed by 20%
	event.create('striding')
    .color(0x95D2F6)
    .beneficial() 
    .modifyAttribute('forge:swim_speed',
      '0676a075-c041-4aeb-8518-0f88e37fe32f',
      0.20,
      "multiply_base"
    )

	//increases bow drawing speed by 20%
	event.create('deftness')
    .color(0xCF8F26)
    .beneficial() 
    .modifyAttribute('attributeslib:draw_speed',
      'a296704f-81f4-4c97-a401-b8fbe61412f3',
      0.20,
      "multiply_base"
    )
	
})

//makes drinking stack the tipsy effect
ForgeEvents.onEvent('net.minecraftforge.event.entity.living.LivingEntityUseItemEvent$Finish', event => {

    function getDrunk(drink, length, amp){

    const {entity, item} = event
    if (item.id == drink) {
        let duration = length
        let potency = amp

        if (entity.hasEffect('brewinandchewin:tipsy')) {
            let effect = entity.getEffect('brewinandchewin:tipsy')
            entity.potionEffects.add('brewinandchewin:tipsy', effect.duration == -1 ? -1 : effect.duration + duration, Math.min(effect.amplifier + potency + 1, 9), effect.ambient, effect.visible)
        } else {
            entity.potionEffects.add('brewinandchewin:tipsy', duration, potency)
        }
    }
    }

	//wines
    getDrunk('hearthandharvest:mead', 4799, 0)
	getDrunk('hearthandharvest:red_grape_wine', 4799, 0)
	getDrunk('hearthandharvest:green_grape_wine', 4799, 0)
	getDrunk('hearthandharvest:cherry_wine', 4799, 0)
	getDrunk('hearthandharvest:blueberry_wine', 4799, 0)
	getDrunk('hearthandharvest:raspberry_wine', 4799, 0)
	getDrunk('hearthandharvest:sweet_berry_wine', 4799, 0)
	getDrunk('kubejs:apple_wine', 4799, 0)
	getDrunk('kubejs:rose_wine', 4799, 0)
	getDrunk('kubejs:rice_wine', 4799, 0)
	getDrunk('kubejs:unaged_mead', 1199, 0)
	getDrunk('kubejs:unaged_red_wine', 1199, 0)
	getDrunk('kubejs:unaged_white_wine', 1199, 0)
	getDrunk('kubejs:unaged_cherry_wine', 1199, 0)
	getDrunk('kubejs:unaged_blueberry_wine', 1199, 0)
	getDrunk('kubejs:unaged_raspberry_wine', 1199, 0)
	getDrunk('kubejs:unaged_sweet_berry_wine', 1199, 0)
	getDrunk('kubejs:unaged_rose_wine', 1199, 0)
	getDrunk('kubejs:unaged_rice_wine', 1199, 0)
	getDrunk('kubejs:unaged_apple_wine', 1199, 0)
	//beers
	getDrunk('kubejs:unaged_beer', 1200, 0)
	getDrunk('kubejs:unaged_vodka', 1200, 0)
	getDrunk('kubejs:unaged_gin', 1200, 0)
	getDrunk('kubejs:unaged_rum', 1200, 0)

})