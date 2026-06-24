ServerEvents.recipes((event) => {

  //recipes for yeast culture
  event.custom({
    type: "brewinandchewin:fermenting",
    experience: 1.0,
    fermentingtime: 4800,
    ingredients: [
      [
        { item: "hearthandharvest:red_grapes" }, { item: "hearthandharvest:green_grapes" }, { item: "minecraft:apple" }
      ],
      [
        { item: "hearthandharvest:red_grapes" }, { item: "hearthandharvest:green_grapes" }, { item: "minecraft:apple" }
      ],
      [
        { item: "hearthandharvest:red_grapes" }, { item: "hearthandharvest:green_grapes" }, { item: "minecraft:apple" }
      ],
      {
        item: "minecraft:sugar",
      },
      [],
    ],
    result: {
      count: 4,
      item: "kubejs:yeast_culture",
    },
    temperature: 4
  });

  event.custom({
    type: "brewinandchewin:fermenting",
    experience: 1.0,
    fermentingtime: 1200,
    ingredients: [
      {
        item: "minecraft:brown_mushroom",
      },
      {
        tag: "forge:grain",
      },
      {
        item: "minecraft:sugar",
      },
      [],
    ],
    result: {
      count: 1,
      item: "kubejs:yeast_culture",
    },
    temperature: 3
  });

  //replace fermented spider eye recipe
  event.remove({ id: 'minecraft:fermented_spider_eye' })

  event.custom({
    type: "brewinandchewin:fermenting",
    experience: 1.0,
    fermentingtime: 3600,
    ingredients: [
      {
        item: "kubejs:yeast_culture",
      },
      {
        item: "kubejs:bug_meat_slice",
      },
      [],
    ],
    result: {
      count: 1,
      item: "minecraft:fermented_spider_eye",
    },
    temperature: 3
  });


  //recipes for new wine crates
  const winecrates = ['rose', 'rice', 'apple'];

  winecrates.forEach((winecrates) => {

    event.shaped(
      Item.of(`kubejs:${winecrates}_wine_crate`, 1),
      [
        'BBB',
        'BBB',
        'BBB'
      ],
      {
        B: `kubejs:${winecrates}_wine`
      }).replaceIngredient(`kubejs:${winecrates}_wine`, "minecraft:air");;

    event.shapeless(
      Item.of(`kubejs:${winecrates}_wine`, 9),
      [
        `kubejs:${winecrates}_wine_crate`
      ])
  });

  //remove old winemaking recipes
  const wineferment = ['green_grape_wine', 'blueberry_wine', 'sweet_berry_wine', 'mead', 'cherry_wine', 'red_grape_wine', 'raspberry_wine'];

  wineferment.forEach((wineferment) => {

    event.remove({ id: `hearthandharvest:integration/brewinandchewin/fermenting/${wineferment}` });

    event.remove({ id: `hearthandharvest:aging/${wineferment}` })

    event.remove({ id: `hearthandharvest:integration/brewinandchewin/pouring/${wineferment}` })

  });

  //remove old beermaking recipes
  const beerfermentold = ['beer_from_water', 'strongroot_ale_from_beer', 'steel_toe_stout_from_strongroot_ale', 'vodka_from_water', 'bloody_mary_from_vodka', 'pale_jane_from_rice_wine', 'rice_wine_from_water', 'kombucha', 'mead_from_honey', 'salty_folly_from_vodka', 'egg_grog_from_milk', 'glittering_grenadine_from_water', 'saccharine_rum_from_mead', 'dread_nog_from_egg_grog', 'withering_dross_from_salty_folly', 'red_rum_from_bloody_mary'];

  beerfermentold.forEach((beerfermentold) => {
    event.remove({ id: `brewinandchewin:fermenting/${beerfermentold}` })
  });

  //remove old beer pouring recipes
  const beerpourold = ['beer', 'strongroot_ale', 'steel_toe_stout', 'vodka', 'bloody_mary', 'pale_jane', 'rice_wine', 'kombucha', 'mead', 'salty_folly', 'egg_grog', 'glittering_grenadine', 'saccharine_rum', 'dread_nog', 'withering_dross', 'red_rum'];

  beerpourold.forEach((beerpourold) => {
    event.remove({ id: `brewinandchewin:pouring/${beerpourold}` })
  });

  //remove old cheesemaking recipes

  event.remove({ id: 'brewinandchewin:fermenting/scarlet_cheese_from_milk' })
  event.remove({ id: 'brewinandchewin:fermenting/flaxen_cheese_from_milk' })
  event.remove({ id: 'brewinandchewin:pouring/unripe_flaxen_cheese_wheel' })
  event.remove({ id: 'brewinandchewin:pouring/unripe_scarlet_cheese_wheel' })
  event.remove({ id: 'hearthandharvest:integration/brewinandchewin/fermenting/unripe_goat_cheese_wheel' })
  event.remove({ id: 'hearthandharvest:integration/brewinandchewin/fermenting/unripe_cheddar_cheese_wheel' })
  event.remove({ id: 'farmersdelight:cooking/unripe_cheddar_cheese_wheel' })
  event.remove({ id: 'farmersdelight:cooking/unripe_goat_cheese_wheel' })
  event.remove({ id: 'hearthandharvest:aging/goat_cheese_wheel' })
  event.remove({ id: 'hearthandharvest:aging/cheddar_cheese_wheel' })
  event.remove({ id: 'hearthandharvest:fermenting/fermented_unripe_goat_cheese_wheel' })
  event.remove({ id: 'hearthandharvest:fermenting/fermented_unripe_cheddar_cheese_wheel' })

  //
  //sweet berry juice recipe
  event.custom({
    type: "farmersdelight:cooking",
    container: { item: "minecraft:glass_bottle" },
    cookingtime: 200,
    experience: 1.0,
    ingredients: [
      {
        item: "minecraft:sweet_berries"
      },
      {
        item: "minecraft:sweet_berries"
      },
      {
        item: "minecraft:sugar"
      }],
    result: {
      item: "kubejs:sweet_berry_juice"
    }
  });

  //
  //pouring recipes (lets you place fluids into kegs)
  function juicepour(juice_input, juice_output) {

    event.custom({
      type: "brewinandchewin:keg_pouring",
      amount: 250,
      container: { item: "minecraft:glass_bottle" },
      filling: true,
      fluid: (juice_input),
      output: {
        item: (juice_output)
      },
      strict: false
    });

  }
  //juice
  juicepour("kubejs:red_grape_juice", 'hearthandharvest:red_grape_juice')
  juicepour("kubejs:green_grape_juice", 'hearthandharvest:green_grape_juice')
  juicepour("kubejs:cherry_juice", 'hearthandharvest:cherry_juice')
  juicepour("kubejs:blueberry_juice", 'hearthandharvest:blueberry_juice')
  juicepour("kubejs:raspberry_juice", 'hearthandharvest:raspberry_juice')
  juicepour("kubejs:sweet_berry_juice", 'kubejs:sweet_berry_juice')
  juicepour("kubejs:apple_cider", 'farmersdelight:apple_cider')

  //unaged wine
  function unagedpour(unaged_input, unaged_output) {

    event.custom({
      type: "brewinandchewin:keg_pouring",
      amount: 1000,
      container: { item: "minecraft:glass_bottle" },
      filling: true,
      fluid: (unaged_input),
      output: {
        item: (unaged_output)
      },
      strict: false
    });

  }
  unagedpour("kubejs:unaged_red_wine", 'kubejs:unaged_red_wine')
  unagedpour("kubejs:unaged_white_wine", 'kubejs:unaged_white_wine')
  unagedpour("kubejs:unaged_cherry_wine", 'kubejs:unaged_cherry_wine')
  unagedpour("kubejs:unaged_blueberry_wine", 'kubejs:unaged_blueberry_wine')
  unagedpour("kubejs:unaged_raspberry_wine", 'kubejs:unaged_raspberry_wine')
  unagedpour("kubejs:unaged_sweet_berry_wine", 'kubejs:unaged_sweet_berry_wine')
  unagedpour("kubejs:unaged_apple_wine", 'kubejs:unaged_apple_wine')
  unagedpour("kubejs:unaged_rose_wine", 'kubejs:unaged_rose_wine')
  unagedpour("kubejs:unaged_rice_wine", 'kubejs:unaged_rice_wine')
  unagedpour("kubejs:unaged_mead", 'kubejs:unaged_mead')

  //unaged beer
  function beerpour(beer_input, beer_output) {

    event.custom({
      type: "brewinandchewin:keg_pouring",
      amount: 250,
      container: { item: "brewinandchewin:tankard" },
      filling: true,
      fluid: (beer_input),
      output: {
        item: (beer_output)
      },
      strict: false
    });

  }
  beerpour("kubejs:unaged_beer", 'kubejs:unaged_beer')
  beerpour("kubejs:unaged_vodka", 'kubejs:unaged_vodka')
  beerpour("kubejs:unaged_gin", 'kubejs:unaged_gin')
  beerpour("kubejs:unaged_rum", 'kubejs:unaged_rum')

  //goat milk
  event.custom({
    type: "brewinandchewin:keg_pouring",
    amount: 250,
    container: { item: "minecraft:glass_bottle" },
    filling: true,
    fluid: ('kubejs:goat_milk'),
    output: {
      item: ('hearthandharvest:goat_milk_bottle')
    },
    strict: false
  });

  //wine fermenting
  //unaged wine
  //temperature 3
  function winemake3(fluid_input, item1, item2, fluid_output) {

    event.custom({
      type: "brewinandchewin:fermenting",
      basefluid: {
        count: 1000,
        fluid: (fluid_input),
      },
      experience: 1.0,
      fermentingtime: 24000,
      ingredients: [
        {
          item: ('kubejs:yeast_culture'),
        },
        {
          item: (item1),
        },
        {
          item: (item2),
        },
        {
          item: (item2),
        },
        [],
      ],
      result: {
        count: 1000,
        fluid: (fluid_output),
      },
      temperature: 3
    })
  }

  //
  winemake3('kubejs:red_grape_juice', 'hearthandharvest:red_grapes', 'hearthandharvest:red_grapes', 'kubejs:unaged_red_wine') // Red Wine
  winemake3('kubejs:cherry_juice', 'minecraft:sugar', 'hearthandharvest:cherry', 'kubejs:unaged_cherry_wine') // Cherry Wine
  winemake3('kubejs:blueberry_juice', 'minecraft:sugar', 'hearthandharvest:blueberries', 'kubejs:unaged_blueberry_wine') // Blueberry Wine
  winemake3('kubejs:raspberry_juice', 'minecraft:sugar', 'hearthandharvest:raspberry', 'kubejs:unaged_raspberry_wine') // Raspberry Wine

  //temperature 2
  function winemake2(fluid_input, item1, item2, fluid_output) {

    event.custom({
      type: "brewinandchewin:fermenting",
      basefluid: {
        count: 1000,
        fluid: (fluid_input),
      },
      experience: 1.0,
      fermentingtime: 24000,
      ingredients: [
        {
          item: ('kubejs:yeast_culture'),
        },
        {
          item: (item1),
        },
        {
          item: (item2),
        },
        {
          item: (item2),
        },
        [],
      ],
      result: {
        count: 1000,
        fluid: (fluid_output),
      },
      temperature: 2
    })
  }

  //
  winemake2('kubejs:green_grape_juice', 'hearthandharvest:green_grapes', 'hearthandharvest:green_grapes', 'kubejs:unaged_white_wine')
  winemake2('kubejs:red_grape_juice', 'hearthandharvest:green_grapes', 'hearthandharvest:green_grapes', 'kubejs:unaged_rose_wine')
  winemake2('kubejs:sweet_berry_juice', 'minecraft:sweet_berries', 'minecraft:sweet_berries', 'kubejs:unaged_sweet_berry_wine')
  winemake2('kubejs:apple_cider', 'minecraft:sugar', 'minecraft:apple', 'kubejs:unaged_apple_wine')

  //temperature 4
  event.custom({
    type: "brewinandchewin:fermenting",
    basefluid: {
      count: 1000,
      fluid: 'minecraft:water',
    },
    experience: 1.0,
    fermentingtime: 24000,
    ingredients: [
      {
        item: ('kubejs:yeast_culture'),
      },
      {
        item: 'farmersdelight:cooked_rice',
      },
      {
        item: 'farmersdelight:cooked_rice',
      },
      {
        item: 'farmersdelight:cooked_rice',
      },
      [],
    ],
    result: {
      count: 1000,
      fluid: 'kubejs:unaged_rice_wine',
    },
    temperature: 4
  })

  //mead
  event.custom({
    type: "brewinandchewin:fermenting",
    basefluid: {
      count: 1000,
      fluid: 'brewinandchewin:honey',
    },
    experience: 1.0,
    fermentingtime: 1200,
    ingredients: [
      {
        item: ('kubejs:yeast_culture'),
      },
      {
        "type": "forge:partial_nbt",
        "item": "minecraft:potion",
        "nbt": "{Potion:\"minecraft:water\"}"
      },
      {
        "type": "forge:partial_nbt",
        "item": "minecraft:potion",
        "nbt": "{Potion:\"minecraft:water\"}"
      },
      {
        "type": "forge:partial_nbt",
        "item": "minecraft:potion",
        "nbt": "{Potion:\"minecraft:water\"}"
      },
      [],
    ],
    result: {
      count: 1000,
      fluid: 'kubejs:unaged_mead',
    },
    temperature: 3
  })

  //wine aging
  function wineage(wine_input, wine_output) {

    event.custom({
      type: "hearthandharvest:aging",
      cookingtime: 96000,
      experience: 8,
      ingredients: [
        {
          item: (wine_input)
        }
      ],
      result: {
        item: (wine_output)
      }
    })

    //bulk wine aging
    event.custom({
      type: "hearthandharvest:aging",
      cookingtime: 96000,
      experience: 8,
      ingredients: [
        {
          item: (wine_input)
        },
        {
          item: (wine_input)
        },
        {
          item: (wine_input)
        },
        {
          item: (wine_input)
        }
      ],
      result: { count: 4, item: (wine_output) }
    })
  }

  //
  wineage('kubejs:unaged_red_wine', 'hearthandharvest:red_grape_wine')
  wineage('kubejs:unaged_white_wine', 'hearthandharvest:green_grape_wine')
  wineage('kubejs:unaged_cherry_wine', 'hearthandharvest:cherry_wine')
  wineage('kubejs:unaged_blueberry_wine', 'hearthandharvest:blueberry_wine')
  wineage('kubejs:unaged_raspberry_wine', 'hearthandharvest:raspberry_wine')
  wineage('kubejs:unaged_sweet_berry_wine', 'hearthandharvest:sweet_berry_wine')
  wineage('kubejs:unaged_apple_wine', 'kubejs:apple_wine')
  wineage('kubejs:unaged_rose_wine', 'kubejs:rose_wine')
  wineage('kubejs:unaged_rice_wine', 'kubejs:rice_wine')
  wineage('kubejs:unaged_mead', 'hearthandharvest:mead')

  //
  //Beers
  //beer fermenting
  //temperature 3
  event.custom({
    type: "brewinandchewin:fermenting",
    basefluid: {
      count: 1000,
      fluid: "minecraft:water",
    },
    experience: 1.0,
    fermentingtime: 24000,
    ingredients: [
      {
        item: 'kubejs:yeast_culture',
      },
      {
        tag: 'forge:grain',
      },
      {
        tag: 'forge:grain',
      },
      {
        tag: 'forge:grain',
      },
      [],
    ],
    result: {
      count: 1000,
      fluid: 'kubejs:unaged_beer',
    },
    temperature: 3
  })

  //Rum
  event.custom({
    type: "brewinandchewin:fermenting",
    basefluid: {
      count: 1000,
      fluid: "minecraft:water",
    },
    experience: 1.0,
    fermentingtime: 24000,
    ingredients: [
      {
        item: 'kubejs:yeast_culture',
      },
      {
        item: 'minecraft:sugar',
      },
      {
        item: 'minecraft:sugar_cane',
      },
      {
        item: 'minecraft:sugar_cane',
      },
      [],
    ],
    result: {
      count: 1000,
      fluid: 'kubejs:unaged_rum',
    },
    temperature: 3
  })

  //temperature 4
  //Vodka
  event.custom({
    type: "brewinandchewin:fermenting",
    basefluid: {
      count: 1000,
      fluid: "minecraft:water",
    },
    experience: 1.0,
    fermentingtime: 24000,
    ingredients: [
      {
        item: 'kubejs:yeast_culture',
      },
      {
        item: 'minecraft:potato',
      },
      {
        item: 'minecraft:potato',
      },
      {
        item: 'minecraft:potato',
      },
      [],
    ],
    result: {
      count: 1000,
      fluid: 'kubejs:unaged_vodka',
    },
    temperature: 4
  })

  //Gin
  event.custom({
    type: "brewinandchewin:fermenting",
    basefluid: {
      count: 1000,
      fluid: "minecraft:water",
    },
    experience: 1.0,
    fermentingtime: 24000,
    ingredients: [
      {
        item: 'kubejs:yeast_culture',
      },
      {
        tag: 'forge:grain',
      },
      {
        item: 'minecraft:glow_berries',
      },
      {
        item: 'sniffers_delight:torchflower_pistill',
      },
      [],
    ],
    result: {
      count: 1000,
      fluid: 'kubejs:unaged_gin',
    },
    temperature: 4
  })

  //beer aging
  function beerage(beer_input, beer_output) {

    event.custom({
      type: "hearthandharvest:aging",
      cookingtime: 48000,
      experience: 4,
      ingredients: [
        {
          item: (beer_input)
        },
        {
          item: (beer_input)
        },
        {
          item: (beer_input)
        },
        {
          item: (beer_input)
        }
      ],
      result: { count: 4, item: (beer_output) }
    })

    event.custom({
      type: "hearthandharvest:aging",
      cookingtime: 48000,
      experience: 1,
      ingredients: [
        {
          item: (beer_input)
        }
      ],
      result: { item: (beer_output) }
    })

  }//

  //
  beerage('kubejs:unaged_beer', 'brewinandchewin:beer')
  beerage('kubejs:unaged_vodka', 'brewinandchewin:vodka')
  beerage('kubejs:unaged_gin', 'brewinandchewin:kombucha')
  beerage('kubejs:unaged_rum', 'brewinandchewin:saccharine_rum')

  //
  //Beer Cooking
  function beercook(item1, item2, item3, item4, output) {

    event.custom({
      type: "farmersdelight:cooking",
      container: { item: "brewinandchewin:tankard" },
      cookingtime: 200,
      experience: 1.0,
      ingredients: [
        {
          item: item1
        },
        [
          item2
        ],
        [
          item3
        ],
        [
          item4
        ]
      ], result: { item: output }

    });
  }//
  //
  beercook('brewinandchewin:beer', { item: 'minecraft:golden_carrot' }, { item: 'farmersdelight:apple_cider' }, { item: 'minecraft:sugar' }, 'brewinandchewin:strongroot_ale') //Golden Lager (strongroot ale)
  beercook('brewinandchewin:beer', { item: 'minecraft:ink_sac' }, { item: 'minecraft:cocoa_beans' }, { item: 'sniffers_delight:torchflower_pistill' }, 'brewinandchewin:steel_toe_stout') //Obsidian Stout (steel toe stout)
  beercook('brewinandchewin:beer', { item: 'minecraft:turtle_egg' }, { item: 'minecraft:nether_wart' }, { item: 'minecraft:fermented_spider_eye' }, 'brewinandchewin:dread_nog') //Ominous Ale (dread nog)
  beercook('brewinandchewin:vodka', { item: 'farmersdelight:tomato' }, { item: 'spelunkery:salt' }, { item: 'sniffers_delight:torchflower_pistill' }, 'brewinandchewin:bloody_mary') //Bloody Mary (bloody mary)
  beercook('brewinandchewin:vodka', { tag: 'forge:crops/rice' }, { item: 'minecraft:snowball' }, { item: 'minecraft:oxeye_daisy' }, 'brewinandchewin:pale_jane') //Ghast's Tear (pale jane)
  beercook('brewinandchewin:vodka', { item: 'minecraft:glow_berries' }, { item: 'regions_unexplored:hanging_earlight_fruit' }, { item: 'regions_unexplored:salmonberry' }, 'brewinandchewin:rice_wine') //Fanta (rice wine)
  beercook('brewinandchewin:kombucha', { item: 'hearthandharvest:cherry_juice' }, { item: 'kubejs:sweet_berry_juice' }, { tag: 'forge:eggs' }, 'brewinandchewin:mead') //Pink Lady (mead)
  beercook('brewinandchewin:kombucha', { tag: 'fantasia:juices' }, { tag: 'forge:berries' }, { item: 'spelunkery:salt' }, 'brewinandchewin:salty_folly') //Martini (salty folly)
  beercook('brewinandchewin:kombucha', { item: 'minecraft:glow_berries' }, { item: 'regions_unexplored:hanging_earlight_fruit' }, { item: 'minecraft:glow_ink_sac' }, 'brewinandchewin:glittering_grenadine') //Glistening Gin (glittering grenadine)
  beercook('brewinandchewin:saccharine_rum', { tag: 'forge:milk' }, { tag: 'forge:eggs' }, { item: 'minecraft:sugar' }, 'brewinandchewin:egg_grog') //Egg Nog (egg grog)
  beercook('brewinandchewin:saccharine_rum', { item: 'minecraft:sugar' }, { item: 'sniffers_delight:torchflower_pistill' }, { tag: 'fantasia:juices' }, 'brewinandchewin:withering_dross') //Mojito (withering dross)
  beercook('brewinandchewin:saccharine_rum', { item: 'minecraft:nether_wart' }, { item: 'minecraft:twisting_vines' }, { item: 'minecraft:crimson_fungus' }, 'brewinandchewin:red_rum') //Nether Cracked Rum (red rum)

  //
  //Cheeses
  //cheese fermenting
  //flaxen cheese ferment
  event.custom({
    type: "brewinandchewin:fermenting",
    basefluid: {
      count: 1000,
      fluid: "minecraft:milk",
    },
    experience: 1.0,
    fermentingtime: 3600,
    ingredients: [
      {
        item: 'kubejs:yeast_culture',
      },
      {
        item: 'spelunkery:salt',
      },
      {
        item: 'minecraft:pumpkin_seeds',
      },
      [],
    ],
    result: {
      count: 1,
      item: 'brewinandchewin:unripe_flaxen_cheese_wheel',
    },
    temperature: 3
  })

  //scarlet cheese ferment
  event.custom({
    type: "brewinandchewin:fermenting",
    basefluid: {
      count: 1000,
      fluid: "minecraft:milk",
    },
    experience: 1.0,
    fermentingtime: 3600,
    ingredients: [
      {
        item: 'kubejs:yeast_culture',
      },
      {
        item: 'spelunkery:salt',
      },
      {
        item: 'minecraft:crimson_fungus',
      },
      [],
    ],
    result: {
      count: 1,
      item: 'brewinandchewin:unripe_scarlet_cheese_wheel',
    },
    temperature: 5
  })

  //cheddar cheese ferment
  event.custom({
    type: "brewinandchewin:fermenting",
    basefluid: {
      count: 1000,
      fluid: "minecraft:milk",
    },
    experience: 1.0,
    fermentingtime: 3600,
    ingredients: [
      {
        item: 'kubejs:yeast_culture',
      },
      {
        item: 'spelunkery:salt',
      },
      [],
    ],
    result: {
      count: 1,
      item: 'hearthandharvest:unripe_cheddar_cheese_wheel',
    },
    temperature: 2
  })

  //goat cheese ferment
  event.custom({
    type: "brewinandchewin:fermenting",
    basefluid: {
      count: 1000,
      fluid: "kubejs:goat_milk",
    },
    experience: 1.0,
    fermentingtime: 3600,
    ingredients: [
      {
        item: 'kubejs:yeast_culture',
      },
      {
        item: 'spelunkery:salt',
      },
      [],
    ],
    result: {
      count: 1,
      item: 'hearthandharvest:unripe_goat_cheese_wheel',
    },
    temperature: 3
  })

  //cheese aging
  function cheeseage(cheese_input, cheese_output) {
    event.custom({
      type: "hearthandharvest:aging",
      cookingtime: 38400,
      experience: 1,
      ingredients: [
        {
          item: (cheese_input)
        }
      ],
      result: { item: (cheese_output) }
    })

  }//
  //
  cheeseage('brewinandchewin:unripe_flaxen_cheese_wheel', 'brewinandchewin:flaxen_cheese_wheel')
  cheeseage('brewinandchewin:unripe_scarlet_cheese_wheel', 'brewinandchewin:scarlet_cheese_wheel')
  cheeseage('hearthandharvest:unripe_cheddar_cheese_wheel', 'hearthandharvest:cheddar_cheese_wheel')
  cheeseage('hearthandharvest:unripe_goat_cheese_wheel', 'hearthandharvest:goat_cheese_wheel')

  //
  //hnh cheese crafting
  function cheesecraft(cheese_input, cheese_output) {
    event.shaped(
      Item.of(cheese_output, 1),
      [
        'CC ',
        'CC ',
        '   '
      ],
      {
        C: cheese_input,
      })
  }
  //
  cheesecraft('hearthandharvest:cheddar_cheese_slice', 'hearthandharvest:cheddar_cheese_wheel')
  cheesecraft('hearthandharvest:goat_cheese_slice', 'hearthandharvest:goat_cheese_wheel')

  //
  //cheese dishes adjustments
  //creamy onion soup
  event.remove({ id: 'brewinandchewin:cooking/creamy_onion_soup' })
  event.custom({
    type: "farmersdelight:cooking",
    container: { item: "minecraft:bowl" },
    cookingtime: 200,
    experience: 1.0,
    ingredients: [
      { item: 'brewinandchewin:flaxen_cheese_wedge' }, { item: 'farmersdelight:onion' },
      { tag: 'forge:vegetables' }, { tag: 'forge:bread' }
    ], result: { item: 'brewinandchewin:creamy_onion_soup' }
  })

  //cheesy pasta
  event.remove({ id: 'brewinandchewin:cooking/cheesy_pasta' })
  event.custom({
    type: "farmersdelight:cooking",
    container: { item: "minecraft:bowl" },
    cookingtime: 200,
    experience: 1.0,
    ingredients: [
      { tag: 'brewinandchewin:cheese_wedges' }, { tag: 'forge:pasta' },
      { item: 'farmersdelight:tomato' }, { tag: 'forge:raw_fishes' }
    ], result: { item: 'brewinandchewin:cheesy_pasta' }
  })

  //ham and cheese sandwich
  event.replaceInput(
    { id: 'brewinandchewin:ham_and_cheese_sandwich' }, 'brewinandchewin:flaxen_cheese_wedge', '#brewinandchewin:cheese_wedges')


  //
  //Pickle time

  //remove all old pickle recipes
  //pickle cask
  const pickleage = ['beetroots', 'cabbage', 'carrots', 'onions', 'potatoes'];

  pickleage.forEach((pickleage) => {

    event.remove({ id: `hearthandharvest:aging/pickled_${pickleage}` });
  });

  //pickle keg
  const pickleferment = ['kimchi', 'pickled_pickles', 'kippers'];

  pickleferment.forEach((pickleferment) => {

    event.remove({ id: `brewinandchewin:fermenting/${pickleferment}` });
    event.remove({ id: `culturaldelights:fermenting/pickle` });
  });

  //
  //add new pickling recipes
  //temp 3
  function pickling1(veggie, item2, result, result_count) {

    event.custom({
      type: "brewinandchewin:fermenting",
      basefluid: {
        count: 250,
        fluid: "minecraft:water",
      },
      experience: 1.0,
      fermentingtime: 9600,
      ingredients: [
        {
          item: (veggie),
        },
        {
          item: (veggie),
        },
        {
          item: (item2),
        },
        {
          item: ('spelunkery:salt'),
        },
        [],
      ],
      result: {
        count: (result_count),
        item: (result),
      },
      temperature: 3
    })
  }
  //
  pickling1('culturaldelights:cucumber', 'minecraft:sugar', 'culturaldelights:pickle', 2) // Pickles
  pickling1('minecraft:beetroot', 'hearthandharvest:jar', 'hearthandharvest:pickled_beetroots', 1) // Pickled Beetroots
  pickling1('minecraft:carrot', 'hearthandharvest:jar', 'hearthandharvest:pickled_carrots', 1) // Pickled Carrots
  pickling1('farmersdelight:onion', 'hearthandharvest:jar', 'hearthandharvest:pickled_onions', 1) // Pickled Onions
  pickling1('minecraft:potato', 'hearthandharvest:jar', 'hearthandharvest:pickled_potatoes', 1) // Pickled Potatoes

  //temp 2
  function pickling2(fluid, item1, item2, item3, result, result_count) {

    event.custom({
      type: "brewinandchewin:fermenting",
      basefluid: {
        count: 250,
        fluid: (fluid),
      },
      experience: 1.0,
      fermentingtime: 9600,
      ingredients: [
        {
          item: (item1),
        },
        {
          item: (item2),
        },
        {
          item: (item3),
        },
        {
          item: ('spelunkery:salt'),
        },
        [],
      ],
      result: {
        count: (result_count),
        item: (result),
      },
      temperature: 2
    })
  }
  //
  pickling2('minecraft:water', 'farmersdelight:cabbage', 'minecraft:kelp', 'sniffers_delight:torchflower_pistill', 'brewinandchewin:kimchi', 2) // Kimchi
  pickling2('brewinandchewin:honey', 'minecraft:sea_pickle', 'minecraft:sea_pickle', 'minecraft:glow_berries', 'brewinandchewin:pickled_pickles', 2) // Pickled Pickles
  pickling2('minecraft:water', 'farmersdelight:cabbage', 'farmersdelight:cabbage', 'hearthandharvest:jar', 'hearthandharvest:pickled_cabbage', 1) // Pickled Cabbage
  pickling2('minecraft:water', 'mynethersdelight:boiled_egg', 'mynethersdelight:boiled_egg', 'minecraft:beetroot', 'kubejs:pickled_eggs', 2) // Pickled Eggs

  //temp 4
  event.custom({
    type: "brewinandchewin:fermenting",
    experience: 1.0,
    fermentingtime: 9600,
    ingredients: [
      {
        tag: ('forge:raw_fishes'),
      },
      {
        tag: ('forge:raw_fishes'),
      },
      {
        item: ('minecraft:dried_kelp'),
      },
      {
        item: ('spelunkery:salt'),
      },
      [],
    ],
    result: {
      count: 2,
      item: ('brewinandchewin:kippers'),
    },
    temperature: 4
  })

  //Prepared bug meat
  event.custom(
    {
      "type": "farmersdelight:cutting",
      "ingredients": [
        {
          "item": "minecraft:spider_eye"
        }
      ],
      "result": [
        {
          "count": 2,
          "item": "kubejs:bug_meat_slice"
        }
      ],
      "tool": {
        "tag": "c:tools/knives"
      }
    }
  );


  //Fowl Meat stuff
  event.remove({ id: 'alexsmobsdelight:roast_seagull' })
  event.remove({ id: 'alexsmobsdelight:cooking/seagull_soup' })
  event.remove({ id: 'alexsmobsdelight:cooking/seagull_soup_2' })
  event.remove({ id: 'alexsmobsdelight:cooking/fried_seagull_with_fries' })

  event.shapeless(
    Item.of('alexsmobsdelight:roast_seagull', 1),
    [
      { item: "minecraft:carrot" },
      { item: "farmersdelight:onion" },
      { item: "environmental:cooked_duck" },
      { item: "minecraft:beetroot" },
	    { tag: "forge:grain" },
      { item: "minecraft:bowl" }
    ]
  );

  event.custom({
      type: "farmersdelight:cooking",
      container: { item: "minecraft:bowl" },
      cookingtime: 200,
      experience: 1.0,
      ingredients: [
        {
          item: "environmental:duck"
        },
        {
          item: "minecraft:brown_mushroom"
        },
        {
          item: "minecraft:red_mushroom"
        }],
      result: {
        item: "alexsmobsdelight:seagull_soup"
      }
    });

  event.custom({
      type: "farmersdelight:cooking",
      container: { item: "minecraft:bowl" },
      cookingtime: 200,
      experience: 1.0,
      ingredients: [
        {
          item: "environmental:duck"
        },
        {
          item: "minecraft:mushroom_stew"
        }],
      result: {
        item: "alexsmobsdelight:seagull_soup"
      }
    });

  event.custom({
      type: "farmersdelight:cooking",
      container: { item: "minecraft:bucket" },
      cookingtime: 200,
      experience: 1.0,
      ingredients: [
        {
          item: "environmental:duck"
        },
        {
          item: "environmental:duck"
        },
        {
          item: "minecraft:baked_potato"
        },
        {
          item: "minecraft:baked_potato"
        },
        {
          item: "alexsmobs:fish_oil"
        },
        {
          item: "alexsmobs:fish_oil"
        }],
      result: {
        item: "alexsmobsdelight:fried_seagull_with_fries"
      }
    });


})//

//
ServerEvents.tags('item', event => {

  //make new juice tag
  event.add(
    "fantasia:juices",
    [
      "hearthandharvest:blueberry_juice",
      "hearthandharvest:red_grape_juice",
      "hearthandharvest:green_grape_juice",
      "hearthandharvest:cherry_juice",
      "hearthandharvest:raspberry_juice",
      "kubejs:sweet_berry_juice",
      "farmersdelight:apple_cider",
      "farmersdelight:melon_juice",
      "windswept_delights:wild_berry_juice"
    ])

  //add nutrient to wines
  event.add(
    "diet:sugars",
    [
      "hearthandharvest:blueberry_wine",
      "hearthandharvest:cherry_wine",
      "hearthandharvest:raspberry_wine",
      "hearthandharvest:red_grape_wine",
      "hearthandharvest:green_grape_wine",
      "hearthandharvest:sweet_berry_wine",
      "hearthandharvest:mead",
      "kubejs:apple_wine",
      "kubejs:rose_wine",
      "kubejs:rice_wine",
      "kubejs:unaged_red_wine",
      "kubejs:unaged_white_wine",
      "kubejs:unaged_cherry_wine",
      "kubejs:unaged_blueberry_wine",
      "kubejs:unaged_raspberry_wine",
      "kubejs:unaged_sweet_berry_wine",
      "kubejs:unaged_mead",
      "kubejs:unaged_apple_wine",
      "kubejs:unaged_rose_wine",
      "kubejs:unaged_rice_wine"
    ])

  event.add(
    "diet:fruits",
    [
      "hearthandharvest:blueberry_wine",
      "hearthandharvest:cherry_wine",
      "hearthandharvest:raspberry_wine",
      "hearthandharvest:red_grape_wine",
      "hearthandharvest:green_grape_wine",
      "hearthandharvest:sweet_berry_wine",
      "kubejs:apple_wine",
      "kubejs:rose_wine",
      "kubejs:unaged_red_wine",
      "kubejs:unaged_white_wine",
      "kubejs:unaged_cherry_wine",
      "kubejs:unaged_blueberry_wine",
      "kubejs:unaged_raspberry_wine",
      "kubejs:unaged_sweet_berry_wine",
      "kubejs:unaged_apple_wine",
      "kubejs:unaged_rose_wine"
    ])

  event.add(
    "diet:grains",
    [
      "kubejs:rice_wine",
      "kubejs:unaged_rice_wine"
    ])

  event.add("forge:grain", "culturaldelights:corn_cob")

  //
  //remove fermented drinks tag from fanta
  event.remove('brewinandchewin:fermented_drinks', 'brewinandchewin:rice_wine')

  //
  //cheese tags adjustments
  event.add(
    "brewinandchewin:cheese_wedges",
    [
      "hearthandharvest:cheddar_cheese_slice",
      "hearthandharvest:goat_cheese_slice"
    ])

  //
  //custom block stuffs
  event.remove('minecraft:slabs', 'kubejs:rose_wine_crate')
  event.remove('minecraft:slabs', 'kubejs:rice_wine_crate')
  event.remove('minecraft:slabs', 'kubejs:apple_wine_crate')

});
//
ServerEvents.tags('block', event => {

  event.remove('minecraft:slabs', 'kubejs:rose_wine_crate')
  event.remove('minecraft:slabs', 'kubejs:rice_wine_crate')
  event.remove('minecraft:slabs', 'kubejs:apple_wine_crate')

  //
  //cheese tags adjustments, block edition
  event.add('farmersdelight:mineable/knife', 'hearthandharvest:unripe_cheddar_cheese_wheel')
  event.add('farmersdelight:mineable/knife', 'hearthandharvest:unripe_goat_cheese_wheel')
  event.add('farmersdelight:mineable/knife', 'hearthandharvest:cheddar_cheese_wheel')
  event.add('farmersdelight:mineable/knife', 'hearthandharvest:goat_cheese_wheel')

  //
  //blocks to add brewinandchewin:freeze_sources to
  event.add(
    "brewinandchewin:freeze_sources",
    [
      'minecraft:snow_block',
      'minecraft:powder_snow',
      'spelunkery:rock_salt_block',
      'spelunkery:polished_rock_salt',
      'netherexp:black_ice',
      'netherexp:thin_black_ice',
      'miningmaster:ice_sapphire_block',
      'miningmaster:ice_sapphire_ore',
      'miningmaster:deepslate_ice_sapphire_ore',
      'quark:permafrost',
      'quark:permafrost_bricks',
      'quark:shale',
      'quark:polished_shale',
      'quark:shale_bricks',
      'quark:chiseled_shale_bricks',
      'quark:shale_pillar',
      'windswept:shale',
      'windswept:polished_shale',
      'windswept:polished_shale_bricks',
      'windswept:chiseled_polished_shale_bricks',
      'windswept:icicles',
      'windswept:ice_lantern',
      'windswept:icicle_block',
      'windswept:chiseled_icicle_block',
      'windswept:packed_ice_bricks',
      'windswept:chiseled_packed_ice_bricks',
      'windswept:blue_ice_bricks',
      'windswept:chiseled_blue_ice_bricks',
      'windswept:snow_bricks',
      'windswept:suspicious_snow'
    ])

});