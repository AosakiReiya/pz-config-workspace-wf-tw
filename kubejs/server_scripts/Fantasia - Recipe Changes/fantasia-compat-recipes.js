ServerEvents.recipes(event => {

  event.shapeless(
    Item.of("medieval_healing:herbal_tonic", 1),
    [
      "minecraft:honey_bottle", "medieval_healing:herbal_medicine"
    ]
  ).replaceIngredient("minecraft:honey_bottle", "minecraft:air");

  event.shaped(
    Item.of("suppsquared:copper_lantern", 1),
    [
      'AAA',
      'ABA',
      'AAA'
    ],
    {
      A: "spelunkery:copper_nugget",
      B: "minecraft:torch"
    }
  );

  event.shaped(
    Item.of("twigs:black_packed_silt", 8),
    [
      'AAA',
      'ABA',
      'AAA'
    ],
    {
      A: "twigs:packed_silt",
      B: "minecraft:black_dye"
    }
  );

  event.custom({
    "type": "hexerei:dipper",
    "liquid": {
      "fluid": "hexerei:tallow_fluid"
    },
    "input": {
      "item": "minecraft:string"
    },
    "output": {
      "item": "minecraft:candle"
    },
    "fluidLevelsConsumed": 50,
    "dippingTimeInTicks": 200,
    "dryingTimeInTicks": 200,
    "numberOfDips": 3
  });

  event.custom({
    "type": "hexerei:mixingcauldron",
    "liquid": {
      "fluid": "hexerei:tallow_fluid"
    },
    "ingredients": [
      {
        "item": "supplementaries:ash"
      },
      {
        "item": "supplementaries:ash"
      },
      {
        "item": "supplementaries:ash"
      },
      {
        "item": "supplementaries:ash"
      },
      {
        "item": "supplementaries:ash"
      },
      {
        "item": "supplementaries:ash"
      },
      {
        "item": "supplementaries:ash"
      },
      {
        "item": "supplementaries:ash"
      }
    ],
    "output": {
      "item": "supplementaries:soap",
      "count": 9
    },
    "liquidOutput": {
      "fluid": "minecraft:water"
    },
    "fluidLevelsConsumed": 1000
  });

  event.custom({
    "type": "overgeared:crafting_shapeless",
    "category": "equipment",
    "ingredients": [
      {
        "item": "kubejs:iron_blade"
      },
      {
        "item": "kubejs:iron_blade"
      }
    ],
    "result": {
      "item": "minecraft:shears"
    }
  });

  event.shapeless(
    Item.of('magistuarmory:gazelle_horns_decoration', 1),
    [
      'alexsmobs:gazelle_horn',
      'alexsmobs:gazelle_horn'
    ]
  );

  event.shapeless(
    Item.of('minecraft:stick', 4),
    [
      '#regions_unexplored:branches'
    ]
  );

  event.shapeless(
    Item.of('minecraft:flint_and_steel', 1),
    [
      'overgeared:steel_ingot',
      'minecraft:flint'
    ]
  );

  event.shaped(
    Item.of('supplementaries:quiver', 1),
    [
      'A A',
      'A A',
      ' A '
    ],
    {
      A: 'minecraft:leather'
    }
  );

  event.shaped(
    Item.of("packedup:grass_thatch", 1),
    [
      'AB',
      'BA'
    ],
    {
      A: 'farmersdelight:straw',
      B: 'minecraft:stick'
    }
  );

  event.shaped(
    Item.of('farmersdelight:rope', 6),
    [
      'A',
      'A',
      'A'
    ],
    {
      A: 'spelunkery:tangle_roots'
    }
  );

  event.shaped(
    Item.of('spelunkery:rope_ladder', 1),
    [
      'A A',
      'BBB',
      'A A'
    ],
    {
      A: 'farmersdelight:rope',
      B: 'minecraft:stick'
    }
  );

  event.shaped(
    Item.of('supplementaries:lunch_basket', 1),
    [
      'CCC',
      'ABA',
      'AAA'
    ],
    {
      A: 'minecraft:sugar_cane',
      B: 'farmersdelight:canvas',
      C: 'minecraft:stick'
    }
  );

  event.shapeless(
    Item.of('magistuarmory:leather_strip', 3),
    [
      'minecraft:leather',
      '#farmersdelight:tools/knives'
    ]
  ).damageIngredient("#farmersdelight:tools/knives", 1);

  event.shapeless(
    Item.of('spelunkery:salt_block', 9),
    [
      'hearthandharvest:salt_bag'
    ]
  );

  event.shaped(
    Item.of('hearthandharvest:salt_bag', 1),
    [
      'AAA',
      'AAA',
      'AAA'
    ],
    {
      A: 'spelunkery:salt_block'
    }
  );

  event.shapeless(
    Item.of('minecraft:pumpkin_pie', 1),
    [
      'farmersdelight:pumpkin_slice',
      'minecraft:sugar',
      'farmersdelight:pie_crust'
    ]
  );

  event.shapeless(
    Item.of('upgrade_aquatic:mulberry_pie', 1),
    [
      'upgrade_aquatic:mulberry',
      'minecraft:sugar',
      'farmersdelight:pie_crust'
    ]
  );

  event.shaped(
    Item.of('quark:seed_pouch', 1),
    [
      " A ",
      "BCB",
      " B "
    ],
    {
      A: 'minecraft:string',
      B: 'farmersdelight:canvas',
      C: '#quark:seed_pouch_holdable'
    }
  );

  event.custom({
    "type": "farmersdelight:cooking",
    "cookingtime": 200,
    "experience": 0.0,
    "ingredients": [
      {
        "item": "minecraft:egg"
      }
    ],
    "recipe_book_tab": "misc",
    "result": {
      "item": "mynethersdelight:boiled_egg",
      "count": 1
    }
  });

  event.custom({
    "type": "farmersdelight:cooking",
    "cookingtime": 200,
    "experience": 0.0,
    "ingredients": [
      {
        "item": "minecraft:water_bucket"
      }
    ],
    "recipe_book_tab": "misc",
    "result": {
      "item": "spelunkery:salt",
      "count": 8
    }
  });

  event.custom({
    "type": "farmersdelight:cooking",
    "cookingtime": 200,
    "experience": 0.0,
    "ingredients": [
      {
        "item": "minecraft:potion"
      }
    ],
    "recipe_book_tab": "misc",
    "result": {
      "item": "spelunkery:salt",
      "count": 4
    }
  });

  event.custom({
    "type": "farmersdelight:cutting",
    "ingredients": [
      {
        "item": "mynethersdelight:hoglin_hide"
      }
    ],
    "result": [
      {
        "count": 4,
        "item": "irons_spellbooks:hogskin"
      },
      {
        "chance": 0.5,
        "count": 2,
        "item": "irons_spellbooks:hogskin"
      }
    ],
    "tool": {
      "tag": "forge:tools/knives"
    }
  });

  event.custom({
    "type": "farmersdelight:cutting",
    "ingredients": [
      {
        "item": 'minecraft:pumpkin'
      }
    ],
    "result": [
      {
        "count": 9,
        "item": 'farmersdelight:pumpkin_slice'
      }
    ],
    "tool": {
      "tag": "forge:tools/knives"
    }
  });

});
