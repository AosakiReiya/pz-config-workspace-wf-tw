ServerEvents.recipes(event => {

//chiseled copper
  function chiseledcopper(chiseledcopper_output, chiseledcopper_input) {
  
    event.remove({output: chiseledcopper_output });

    event.shaped(
      Item.of(chiseledcopper_output, 2), 
      [
        ' C ',
        ' C ',
        '   '
      ],
      {
        C: chiseledcopper_input
      }
    )
  
  }
  //
  chiseledcopper('silly_oddities:chiseled_copper', 'minecraft:copper_block')
  chiseledcopper('silly_oddities:exposed_chiseled_copper', 'minecraft:exposed_copper')
  chiseledcopper('silly_oddities:weathered_chiseled_copper', 'minecraft:weathered_copper')
  chiseledcopper('silly_oddities:oxidized_chiseled_copper', 'minecraft:oxidized_copper')
  chiseledcopper('silly_oddities:waxed_chiseled_copper', 'minecraft:waxed_copper_block')
  chiseledcopper('silly_oddities:waxed_exposed_chiseled_copper', 'minecraft:waxed_exposed_copper')
  chiseledcopper('silly_oddities:waxed_weathered_chiseled_copper', 'minecraft:waxed_weathered_copper')
  chiseledcopper('silly_oddities:waxed_oxidized_chiseled_copper', 'minecraft:waxed_oxidized_copper')


//chiseled bricks
  event.remove({ id: 'clayworks:chiseled_bricks' })

  event.shaped(
    Item.of('clayworks:chiseled_bricks', 4), [
    'AA ',
    'AA ',
    '   '
  ], {
    A: 'twigs:chiseled_bricks'
  })


//bone pile
  event.remove({ id: 'valhelsia_structures:bone_pile_from_bone_pile_block' })

  event.shapeless(
    Item.of('minecraft:bone', 1), [
    'valhelsia_structures:bone_pile'
  ])


//stacked bone
  event.remove({ id: 'netherexp:stacked_bones' })

  event.shaped(
    Item.of('netherexp:stacked_bones', 4), [
    'AA ',
    'AA ',
    '   '
  ], {
    A: 'species:bone_bark'
  })


//stone tiles adjustment
  function stone_tiles(stone_tiles_output, stone_tiles_input) {
    if (!Item.exists(stone_tiles_output)) return; 

    event.remove({ output: stone_tiles_output });

    event.shaped(
      Item.of(stone_tiles_output, 4),
      [
        'AA ',
        'AA ',
        '   '
      ],
      {
        A: stone_tiles_input
      });
  }
  //
  stone_tiles('stonezone:bbb/regions_unexplored/argillite_tiles', 'regions_unexplored:argillite')
  stone_tiles('stonezone:bbb/spelunkery/nephrite_tiles', 'spelunkery:polished_nephrite_bricks')
  stone_tiles('stonezone:bbb/windswept/shale_tiles', 'windswept:polished_shale_bricks')
  stone_tiles('stonezone:bbb/twigs/schist_tiles', 'twigs:polished_schist_bricks')
  stone_tiles('stonezone:bbb/twigs/rhyolite_tiles', 'twigs:polished_rhyolite_bricks')
  stone_tiles('stonezone:bbb/twigs/bloodstone_tiles', 'twigs:polished_bloodstone_bricks')


//bone rod
  event.remove({ id: 'netherexp:bone_rod' })

  event.shaped(
    Item.of('netherexp:bone_rod', 3), [
    ' A ',
    ' A ',
    ' A '
  ], {
    A: 'minecraft:bone'
  })


//blackstone cluster
  event.remove({id:'regions_unexplored:blackstone_cluster'})

  event.shapeless(
    Item.of('regions_unexplored:blackstone_cluster', 1), [

      '6x spelunkery:blackstone_pebble'

    ])


//bamboo beam
  event.remove({ id: 'bbb:bamboo_beam' })

  event.shaped(
    Item.of('bbb:bamboo_beam', 3), [
    ' A ',
    ' A ',
    ' A '
  ], {
    A: 'bbb:bamboo_wall'
  })


//smooth amethyst
  event.remove({ id: 'galosphere:smooth_amethyst' })

  event.smelting('galosphere:smooth_amethyst', 'minecraft:amethyst_block').xp(0.1)

  event.custom({
    "type": "clayworks:baking",
    "category": "blocks",
    "cookingtime": 100,
    "experience": 0.1,
    "ingredient": {
      "item": "minecraft:amethyst_block"
    },
    "result": "galosphere:smooth_amethyst"
  })


//sugar bag
  event.remove({id:'hearthandharvest:sugar_bag'})
  event.remove({id:'hearthandharvest:sugar_from_bag'})

  event.shaped(
    Item.of('hearthandharvest:sugar_bag', 1), [
      'AAA',
      'AAA',
      'AAA'
    ], {
      A: 'supplementaries:sugar_cube'
    })

  event.shapeless(
    Item.of('supplementaries:sugar_cube', 9), [
    'hearthandharvest:sugar_bag'
    ])


//iron plate
  event.remove({id:'quark:building/crafting/iron_plate'})
  event.remove({id:'quark:building/crafting/rusty_iron_plate'})

  event.shaped(
    Item.of('quark:iron_plate', 24), [
      'AAA',
      'A A',
      'AAA'
    ], {
      A: 'overgeared:iron_plate'
    })

  event.shaped(
    Item.of('quark:rusty_iron_plate', 24), [
      'AAA',
      'ABA',
      'AAA'
    ], {
      A: 'overgeared:iron_plate',
      B: 'minecraft:water_bucket'
    }).replaceIngredient('minecraft:water_bucket', 'minecraft:bucket')


//waxed weathered copper grate
  event.remove({id:'silly_oddities:shaped/copper/waxed_weathered_copper_grate'})


//polished basalt bricks
  event.remove({id:'twigs:polished_basalt_bricks'})

  event.shaped(
    Item.of('twigs:polished_basalt_bricks', 4), [
      'AA ',
      'AA ',
      '   '
    ], {
      A: 'netherexp:polished_basalt_bricks'
    })


//stone tiles
  event.remove({id:'cataclysm:stone_tiles'})

  event.shaped(
    Item.of('cataclysm:stone_tiles', 4), [
      'AA ',
      'AA ',
      '   '
    ], {
      A: 'supplementaries:stone_tile'
    })


//snow carpet
  event.remove({id:'minecraft:snow'})

  event.shaped(
    Item.of('minecraft:snow', 6), [
      '   ',
      'AAA',
      '   '
    ], {
      A: 'windswept:snow_slab'
    })


//chiseled mud bricks
  event.remove({id:'environmental:chiseled_mud_bricks'})

  event.shaped(
    Item.of('environmental:chiseled_mud_bricks', 2), [
      ' A ',
      ' A ',
      '   '
    ], {
      A: 'minecraft:mud_bricks'
    })


//polished blackstone pillar
  event.remove({id:'netherexp:polished_blackstone_pillar'})

  event.shaped(
    Item.of('netherexp:polished_blackstone_pillar', 2), [
      ' A ',
      ' A ',
      '   '
    ], {
      A: 'cataclysm:blackstone_pillar'
    })


//chiseled purpur block
  event.remove({id:'cataclysm:chiseled_purpur_block'})

  event.shaped(
    Item.of('cataclysm:chiseled_purpur_block', 2), [
      ' A ',
      ' A ',
      '   '
    ], {
      A: 'minecraft:purpur_block'
    })

})