ServerEvents.recipes(event => {
  
  event.shapeless(
    Item.of('kubejs:steel_pallet', 1),
    [
      '9x overgeared:steel_block'
    ]
  );

  event.shapeless(
    Item.of('kubejs:silver_pallet', 1),
    [
      '9x galosphere:silver_block'
    ]
  );

  event.campfireCooking('minecraft:torch', 'minecraft:stick').cookingTime(200)

  event.shapeless(
    Item.of('spelunkery:salt', 8),
    [
      'spelunkery:salt_bucket'
    ]
  );

  event.shapeless(
    Item.of('spelunkery:salt', 8),
    [
      'kubejs:wooden_salt_bucket'
    ]
  ).replaceIngredient('kubejs:wooden_salt_bucket', 'windswept:wooden_bucket');

  event.shapeless(
    Item.of('supplementaries:safe', 1),
    [
      'tide:wooden_crate',
      'minecraft:netherite_ingot'
    ]
  );

  event.shaped(
    Item.of('minecraft:recovery_compass', 1),
    [
      ' A ',
      'ABA',
      ' A '
    ],
    {
      A: 'minecraft:echo_shard',
      B: '#fantasia:compass'
    }
  );

  event.shaped(
    Item.of('spelunkery:magnetic_compass', 1),
    [
      ' A ',
      'ABA',
      ' A '
    ],
    {
      A: 'overgeared:steel_ingot',
      B: 'spelunkery:raw_magnetite_nugget'
    }
  );

  event.shapeless(
    Item.of('spelunkery:portal_fluid_bottle', 1),
    [
      'spelunkery:portal_fluid_bottle'
    ]
  );

  event.custom({
    "type": "minecraft:crafting_shaped",
    "key": {
      "x": {
        "item": "minecraft:black_dye"
      },
      "y": {
        "item": "minecraft:bone_meal"
      },
      "z": {
        "type": "forge:partial_nbt",
        "item": "minecraft:potion",
        "nbt": "{Potion:\"minecraft:water\"}"
      }
    },
    "pattern": [
      "xy",
      "z "
    ],
    "result": {
      "item": "minecraft:ink_sac"
    }
  })

  event.shaped(
    Item.of('minecraft:campfire', 1),
    [
      'AA',
      'BB'
    ],
    {
      A: 'minecraft:stick',
      B: '#minecraft:logs'
    }
  );

  event.shaped(
    Item.of('spelunkery:wooden_channel', 2),
    [
      'A A',
      'AAA',
      'B B'
    ],
    {
      A: '#minecraft:wooden_slabs',
      B: '#minecraft:fences'
    }
  );

  event.shaped(
    Item.of('spelunkery:stone_channel', 2),
    [
      'A A',
      'AAA',
      'B B'
    ],
    {
      A: 'minecraft:stone_brick_slab',
      B: 'minecraft:stone_brick_wall'
    }
  );

  event.shaped(
    Item.of('minecraft:saddle', 1),
    [
      ' A ',
      'ABA'
    ],
    {
      A: 'minecraft:leather',
      B: 'minecraft:iron_ingot'
    }
  );

  event.shaped(
    Item.of('supplementaries:sack', 1),
    [
      'BAB',
      'B B',
      'BBB'
    ],
    {
      A: 'minecraft:string',
      B: 'farmersdelight:canvas'
    }
  );

  event.shapeless(
    Item.of('minecraft:string', 3),
    [
      '#minecraft:wool',
      '#farmersdelight:tools/knives'
    ]
  ).damageIngredient("#farmersdelight:tools/knives", 1);

  event.shapeless(
    Item.of('minecraft:torch', 1),
    [
      'minecraft:stick',
      '#fantasia:coal_recipe',
      'farmersdelight:straw'
    ]
  )

  event.shapeless(
    Item.of('minecraft:mud', 1),
    [
      'minecraft:dirt',
      'windswept:wooden_water_bucket'
    ]
  ).damageIngredient('windswept:wooden_water_bucket', 1);

  event.shapeless(
    Item.of('minecraft:mud', 1),
    [
      'minecraft:dirt',
      'minecraft:water_bucket'
    ]
  ).keepIngredient('minecraft:water_bucket');

  event.shapeless(
    Item.of('regions_unexplored:silt_mud', 1),
    [
      'regions_unexplored:silt_dirt',
      'minecraft:water_bucket'
    ]
  ).keepIngredient('minecraft:water_bucket');

  event.shapeless(
    Item.of('regions_unexplored:peat_mud', 1),
    [
      'regions_unexplored:peat_dirt',
      'minecraft:water_bucket'
    ]
  ).keepIngredient('minecraft:water_bucket');

  event.shapeless(
    Item.of('minecraft:map', 1),
    [
      '#minecraft:compasses',
      'minecraft:paper'
    ]
  ).keepIngredient('#minecraft:compasses');

  event.shapeless(
    Item.of('supplementaries:slice_map', 1),
    [
      'spelunkery:depth_gauge',
      'minecraft:paper'
    ]
  ).keepIngredient('spelunkery:depth_gauge');

  event.custom({
    "type": "hexerei:pestle_and_mortar",
    "ingredients": [
      {
        "item": "minecraft:amethyst_shard"
      },
      {
        "item": "galosphere:allurite_shard"
      },
      {
        "item": "minecraft:quartz"
      }
    ],
    "output": {
      "item": "irons_spellbooks:arcane_essence",
      "count": 4
    },
    "grindingTime": 100
  });

  event.shapeless(
    Item.of('farmersdelight:wheat_dough', 1),
    [
      'minecraft:wheat',
      'minecraft:potion'
    ]
  ).replaceIngredient('minecraft:potion', 'minecraft:glass_bottle');

  event.shapeless(
    Item.of('farmersdelight:wheat_dough', 1),
    [
      'regions_unexplored:barley',
      'minecraft:potion'
    ]
  ).replaceIngredient('minecraft:potion', 'minecraft:glass_bottle');

  event.shapeless(
    Item.of('minecraft:crying_obsidian', 1),
    [
      'minecraft:obsidian',
      'minecraft:ghast_tear',
      'irons_spellbooks:arcane_essence'
    ]
  );

  event.shaped(
    Item.of('clayworks:kiln', 1),
    [
      "AAA",
      "A A",
      "CCC"
    ],
    {
      A: 'minecraft:cobblestone',
      C: 'minecraft:mud_bricks'
    }
  );

  event.custom(
    {
      "type": "farmersdelight:cutting",
      "ingredients": [
        {
          "item": "galosphere:allurite_block"
        }
      ],
      "result": [
        {
          "count": 4,
          "item": "galosphere:allurite_shard"
        }
      ],
      "tool": {
        "type": "farmersdelight:tool_action",
        "action": "pickaxe_dig"
      }
    }
  );

  event.custom(
    {
      "type": "farmersdelight:cutting",
      "ingredients": [
        {
          "item": "spelunkery:rock_salt_block"
        }
      ],
      "result": [
        {
          "count": 4,
          "item": "spelunkery:rock_salt"
        }
      ],
      "tool": {
        "type": "farmersdelight:tool_action",
        "action": "pickaxe_dig"
      }
    }
  );

  event.smelting('kubejs:wooden_salt_bucket', 'windswept:wooden_water_bucket');

  //hearth and harvest crate recipe fix
  function crate_fix(bottle_input, crate_output) {

    event.shaped(
      Item.of(crate_output, 1),
      [
        'AAA',
        'AAA',
        'AAA'
      ],
      {
        A: bottle_input
      }).replaceIngredient(bottle_input, "minecraft:air");;
  }

  crate_fix('hearthandharvest:red_grape_wine', 'hearthandharvest:red_grape_wine_crate')
  crate_fix('hearthandharvest:green_grape_wine', 'hearthandharvest:green_grape_wine_crate')
  crate_fix('hearthandharvest:raspberry_wine', 'hearthandharvest:raspberry_wine_crate')
  crate_fix('hearthandharvest:blueberry_wine', 'hearthandharvest:blueberry_wine_crate')
  crate_fix('hearthandharvest:cherry_wine', 'hearthandharvest:cherry_wine_crate')
  crate_fix('hearthandharvest:sweet_berry_wine', 'hearthandharvest:sweet_berry_wine_crate')
  crate_fix('hearthandharvest:mead', 'hearthandharvest:mead_crate')
  crate_fix({ "type": "forge:partial_nbt", "item": "minecraft:potion", "nbt": "{Potion:\"minecraft:water\"}" }, 'hearthandharvest:water_crate')
  crate_fix('hearthandharvest:goat_milk_bottle', 'hearthandharvest:goat_milk_crate')
  crate_fix('farmersdelight:milk_bottle', 'hearthandharvest:milk_crate')
  crate_fix('minecraft:honey_bottle', 'hearthandharvest:honey_crate')
  crate_fix('hearthandharvest:syrup_bottle', 'hearthandharvest:syrup_crate')

  //water bottle crate recipe fix
  event.remove({ id: 'hearthandharvest:water_crate' })

  event.shapeless(
    Item.of({ "type": "forge:partial_nbt", "item": "minecraft:potion", "nbt": "{Potion:\"minecraft:water\"}" }, 9),
    [
      'hearthandharvest:water_crate'
    ]
  )

  // half cabinet
  event.shapeless(
    Item.of('hearthandharvest:oak_half_cabinet', 2),
    [
      'farmersdelight:oak_cabinet',
      '#minecraft:axes'
    ]
  ).damageIngredient("#minecraft:axes", 1);

  event.shapeless(
    Item.of('hearthandharvest:spruce_half_cabinet', 2),
    [
      'farmersdelight:spruce_cabinet',
      '#minecraft:axes'
    ]
  ).damageIngredient("#minecraft:axes", 1);

  event.shapeless(
    Item.of('hearthandharvest:birch_half_cabinet', 2),
    [
      'farmersdelight:birch_cabinet',
      '#minecraft:axes'
    ]
  ).damageIngredient("#minecraft:axes", 1);

  event.shapeless(
    Item.of('hearthandharvest:jungle_half_cabinet', 2),
    [
      'farmersdelight:jungle_cabinet',
      '#minecraft:axes'
    ]
  ).damageIngredient("#minecraft:axes", 1);

  event.shapeless(
    Item.of('hearthandharvest:acacia_half_cabinet', 2),
    [
      'farmersdelight:acacia_cabinet',
      '#minecraft:axes'
    ]
  ).damageIngredient("#minecraft:axes", 1);

  event.shapeless(
    Item.of('hearthandharvest:dark_oak_half_cabinet', 2),
    [
      'farmersdelight:dark_oak_cabinet',
      '#minecraft:axes'
    ]
  ).damageIngredient("#minecraft:axes", 1);

  event.shapeless(
    Item.of('hearthandharvest:mangrove_half_cabinet', 2),
    [
      'farmersdelight:mangrove_cabinet',
      '#minecraft:axes'
    ]
  ).damageIngredient("#minecraft:axes", 1);

  event.shapeless(
    Item.of('hearthandharvest:cherry_half_cabinet', 2),
    [
      'farmersdelight:cherry_cabinet',
      '#minecraft:axes'
    ]
  ).damageIngredient("#minecraft:axes", 1);

  event.shapeless(
    Item.of('hearthandharvest:bamboo_half_cabinet', 2),
    [
      'farmersdelight:bamboo_cabinet',
      '#minecraft:axes'
    ]
  ).damageIngredient("#minecraft:axes", 1);

  event.shapeless(
    Item.of('hearthandharvest:crimson_half_cabinet', 2),
    [
      'farmersdelight:crimson_cabinet',
      '#minecraft:axes'
    ]
  ).damageIngredient("#minecraft:axes", 1);

  event.shapeless(
    Item.of('hearthandharvest:warped_half_cabinet', 2),
    [
      'farmersdelight:warped_cabinet',
      '#minecraft:axes'
    ]
  ).damageIngredient("#minecraft:axes", 1);

  //bell
  event.shaped(
    Item.of('minecraft:bell', 1),
    [
      "AAA",
      "BBB",
      "BCB"
    ],
    {
      A: 'minecraft:stick',
      B: 'minecraft:gold_ingot',
      C: 'minecraft:gold_nugget'
    }
  );

  //doused 
  event.shapeless(
    Item.of('valhelsia_structures:doused_torch', 1),
    [
      'minecraft:torch',
      '#c:water_buckets'
    ]
  ).keepIngredient('#c:water_buckets');

  event.shapeless(
    Item.of('valhelsia_structures:doused_soul_torch', 1),
    [
      'minecraft:soul_torch',
      '#c:water_buckets'
    ]
  ).keepIngredient('#c:water_buckets');

  event.shapeless(
    Item.of('valhelsia_structures:unlit_lantern', 1),
    [
      'minecraft:lantern',
      '#c:water_buckets'
    ]
  ).keepIngredient('#c:water_buckets');

  event.shapeless(
    Item.of('valhelsia_structures:unlit_soul_lantern', 1),
    [
      'minecraft:soul_lantern',
      '#c:water_buckets'
    ]
  ).keepIngredient('#c:water_buckets');

  //jukebox
  event.shaped(
    Item.of('minecraft:jukebox', 1),
    [
      " A ",
      "BB ",
      "BB "
    ],
    {
      A: ['kubejs:silver_needle', 'kubejs:steel_needle'],
      B: 'minecraft:note_block'
    }
  );

  //Bonemeal from Skull
  event.shapeless(
    Item.of('minecraft:bone_meal', 4),
    [
      'minecraft:skeleton_skull'
    ]
  )

  //Fishy Note to Paper
  event.shapeless(
    Item.of('minecraft:paper', 1),
    [
      'tide:fishy_note'
    ]
  )

  //Packed Silt with Straw
  event.shapeless(
    Item.of('twigs:packed_silt', 2),
    [
      'farmersdelight:straw',
      'twigs:silt',
      'twigs:silt'
    ]
  )

  //Lumiere Block cutting
  event.custom(
    {
      "type": "farmersdelight:cutting",
      "ingredients": [
        {
          "item": "galosphere:lumiere_block"
        }
      ],
      "result": [
        {
          "count": 4,
          "item": "galosphere:lumiere_shard"
        }
      ],
      "tool": {
        "type": "farmersdelight:tool_action",
        "action": "pickaxe_dig"
      }
    }
  );

});
