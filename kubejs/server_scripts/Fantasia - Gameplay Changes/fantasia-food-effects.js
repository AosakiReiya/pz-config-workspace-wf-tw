ItemEvents.foodEaten(event => {

    let { server, player } = event

    if (event.item.id === 'minecraft:golden_apple') {
        player.potionEffects.add("minecraft:regeneration", 100, 3, true, false)
    }

    if (event.item.id === 'minecraft:enchanted_golden_apple') {
        player.potionEffects.add("minecraft:regeneration", 400, 4, true, false)
    }
    
    if (event.item.id === 'netherexp:wraithing_flesh') {
        player.potionEffects.add("minecraft:strength", 400, 1, true, false)
    }
});

ItemEvents.foodEaten(event => {
  let { server, player } = event
  let wineTypes =
    [
      'hearthandharvest:mead',
      'hearthandharvest:blueberry_wine',
      'hearthandharvest:cherry_wine',
      'hearthandharvest:raspberry_wine',
      'hearthandharvest:red_grape_wine',
      'hearthandharvest:green_grape_wine',
      'hearthandharvest:sweet_berry_wine',
	  'kubejs:rose_wine',
	  'kubejs:rice_wine',
	  'kubejs:apple_wine'

    ];

//Note: Extra Food Effects can be found in new-fluids

  wineTypes.forEach(wine => {
    if (event.item.id === wine) {
      player.potionEffects.add("minecraft:nausea", 200, 9, true, false)
	  player.potionEffects.add("alexsmobs:fear", 20, 0, true, false)
	  player.potionEffects.add("cataclysm:curse_of_desert", 160, 0, true, false)
	  player.potionEffects.add('brewinandchewin:tipsy', 1, 1, true, true)
    }
  });

});


//fixes HnH foods not giving the player its container xd
//jar container foods
ItemEvents.foodEaten(event => {

	let { server, player } = event
  let jarTypes =
    [
      'hearthandharvest:pickled_beetroots',
	  'hearthandharvest:pickled_cabbage',
	  'hearthandharvest:pickled_carrots',
	  'hearthandharvest:pickled_onions',
	  'hearthandharvest:pickled_potatoes',
	  'hearthandharvest:blueberry_jam',
	  'hearthandharvest:cherry_jam',
	  'hearthandharvest:raspberry_jam',
	  'hearthandharvest:grape_jam',
	  'hearthandharvest:apple_jam',
	  'hearthandharvest:sweet_berry_jam',
	  'hearthandharvest:glow_berry_jam',
	  'hearthandharvest:melon_jam'
    ];
	
  jarTypes.forEach(jar => {
    if (event.item.id === jar) {
      event.player.give(Item.of('hearthandharvest:jar').strongNBT())
    }
  });
  
});

//stick container foods
ItemEvents.foodEaten(event => {

	let { server, player } = event
  let stickTypes =
    [
      'hearthandharvest:skewered_sausage',
	  'hearthandharvest:marshmallow_stick',
	  'hearthandharvest:roasted_marshmallow_stick',
	  'hearthandharvest:charred_marshmallow_stick',
	  'hearthandharvest:cotton_candy',
	  'hearthandharvest:caramel_apple'
    ];
	
  stickTypes.forEach(stick => {
    if (event.item.id === stick) {
      event.player.give(Item.of('minecraft:stick').strongNBT())
    }
  });
  
});

//bowl container foods
ItemEvents.foodEaten(event => {

	let { server, player } = event
  let bowlTypes =
    [
      'hearthandharvest:onion_soup',
	  'hearthandharvest:biscuits_and_gravy'
    ];
	
  bowlTypes.forEach(bowl => {
    if (event.item.id === bowl) {
      event.player.give(Item.of('minecraft:bowl').strongNBT())
    }
  });
  
});


//
//gives the tempting effect to creamy onion soup
ItemEvents.foodEaten(event => {

	let { server, player } = event
	
    if (event.item.id === 'brewinandchewin:creamy_onion_soup') {
      player.potionEffects.add("hearthandharvest:tempting", 3600, 0, false, true)
    }
  
});