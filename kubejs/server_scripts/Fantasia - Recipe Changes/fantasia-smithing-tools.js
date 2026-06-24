ServerEvents.recipes(event => {

  event.shaped(
    Item.of('kubejs:smithing_glove', 1), // arg 1: output
    [
      'A',
      'B'
    ],
    {
      A: 'minecraft:leather',
      B: 'magistuarmory:leather_strip'
    }
  );

  event.shapeless(
    Item.of('kubejs:primitive_tongs', 1),
    [
      'minecraft:stick',
      'minecraft:stick'
    ]
  );

  // STONE
  let stoneTools = [
    'minecraft:stone_pickaxe', 'minecraft:stone_axe', 'minecraft:stone_shovel', 'minecraft:stone_hoe',
    'minecraft:stone_sword',
  ];
  stoneTools.forEach(o => event.remove({ output: o }))

  event.custom({
    "type": "overgeared:rock_knapping",
    "pattern": [
      " xx",
      " xx",
      "x  "
    ],
    "ingredient": {
      "item": "overgeared:knappable_rock"
    },
    "result": {
      "item": "kubejs:stone_tip"
    },
    "show_notification": true
  });

  event.custom({
    "type": "overgeared:rock_knapping",
    "pattern": [
      "xxx",
      "xxx",
      " x "
    ],
    "ingredient": {
      "item": "overgeared:knappable_rock"
    },
    "result": {
      "item": "kubejs:stone_hammer_head"
    },
    "show_notification": true
  });

  event.custom({
    "type": "overgeared:forging",
    "blueprint": "TOOL",
    "hammering": 4,
    "has_quality": true,
    "need_quenching": false,
    "category": "equipment",
    "key": {
      "#": {
        "item": "minecraft:iron_ingot"
      }
    },
    "pattern": [
      "###",
      "###",
      " # "
    ],
    "result": {
      "item": "kubejs:iron_hammer_head"
    },
    "show_notification": true
  });

  event.custom({
    "type": "overgeared:forging",
    "blueprint": "TOOL",
    "hammering": 5,
    "has_quality": true,
    "need_quenching": false,
    "category": "equipment",
    "key": {
      "#": {
        "item": "overgeared:steel_ingot"
      }
    },
    "pattern": [
      "###",
      "###",
      " # "
    ],
    "result": {
      "item": "kubejs:steel_hammer_head"
    },
    "show_notification": true
  });

  event.custom({
    "type": "overgeared:forging",
    "blueprint": "TOOL",
    "hammering": 4,
    "has_quality": true,
    "need_quenching": false,
    "category": "equipment",
    "key": {
      "#": {
        "item": "minecraft:iron_ingot"
      },
      "O": {
        "item": "overgeared:iron_plate"
      }
    },
    "pattern": [
      "OOO",
      "OOO",
      " # "
    ],
    "result": {
      "item": "kubejs:iron_excavator_head"
    },
    "show_notification": true
  });

  event.custom({
    "type": "overgeared:forging",
    "blueprint": "FINER_TOOL",
    "requires_blueprint": true,
    "hammering": 5,
    "has_quality": true,
    "need_quenching": false,
    "category": "equipment",
    "key": {
      "#": {
        "item": "overgeared:steel_ingot"
      },
      "O": {
        "item": "overgeared:steel_plate"
      }
    },
    "pattern": [
      "OOO",
      "OOO",
      " # "
    ],
    "result": {
      "item": "kubejs:steel_excavator_head"
    },
    "show_notification": true
  });

  event.custom({
    "type": "overgeared:crafting_shapeless",
    "category": "equipment",
    "ingredients": [
      {
        "item": `kubejs:stone_hammer_head`
      },
      {
        "item": "spartanweaponry:simple_handle"
      }
    ],
    "result": {
      "item": "simplest_hammers:stone_hammer"
    }
  });

  event.custom({
    "type": "overgeared:crafting_shapeless",
    "category": "equipment",
    "ingredients": [
      {
        "item": `overgeared:stone_hammer_head`
      },
      {
        "item": "spartanweaponry:simple_handle"
      }
    ],
    "result": {
      "item": "kubejs:stone_smithing_hammer"
    }
  });

  event.custom({
    "type": "overgeared:crafting_shapeless",
    "category": "equipment",
    "ingredients": [
      {
        "item": `overgeared:copper_hammer_head`
      },
      {
        "item": "spartanweaponry:simple_handle"
      }
    ],
    "result": {
      "item": "overgeared:copper_smithing_hammer"
    }
  });

  event.custom({
    "type": "overgeared:crafting_shapeless",
    "category": "equipment",
    "ingredients": [
      {
        "item": `kubejs:iron_hammer_head`
      },
      {
        "item": "spartanweaponry:handle"
      }
    ],
    "result": {
      "item": "simplest_hammers:iron_hammer"
    }
  });

  event.custom({
    "type": "overgeared:crafting_shapeless",
    "category": "equipment",
    "ingredients": [
      {
        "item": `kubejs:steel_hammer_head`
      },
      {
        "item": "spartanweaponry:handle"
      }
    ],
    "result": {
      "item": "kubejs:steel_hammer"
    }
  });

  event.custom({
    "type": "overgeared:crafting_shapeless",
    "category": "equipment",
    "ingredients": [
      {
        "item": `overgeared:steel_hammer_head`
      },
      {
        "item": "spartanweaponry:handle"
      }
    ],
    "result": {
      "item": "overgeared:smithing_hammer"
    }
  });

  event.custom({
    "type": "overgeared:crafting_shapeless",
    "category": "equipment",
    "ingredients": [
      {
        "item": `kubejs:iron_excavator_head`
      },
      {
        "item": "spartanweaponry:handle"
      }
    ],
    "result": {
      "item": "simplest_excavators:iron_excavator"
    }
  });

  event.custom({
    "type": "overgeared:crafting_shapeless",
    "category": "equipment",
    "ingredients": [
      {
        "item": `kubejs:steel_excavator_head`
      },
      {
        "item": "spartanweaponry:handle"
      }
    ],
    "result": {
      "item": "kubejs:steel_excavator"
    }
  });

  event.custom({
    "type": "overgeared:forging",
    "blueprint": "TOOL",
    "hammering": 5,
    "has_quality": true,
    "category": "equipment",
    "key": {
      "#": {
        "item": "kubejs:heated_iron_plate"
      }
    },
    "pattern": [
      "#",
      "#"
    ],
    "result": {
      "item": "kubejs:iron_cleaver_blade"
    },
    "show_notification": true
  });

  event.custom({
    "type": "overgeared:crafting_shapeless",
    "category": "equipment",
    "ingredients": [
      {
        "item": `kubejs:iron_cleaver_blade`
      },
      {
        "item": "spartanweaponry:handle"
      }
    ],
    "result": {
      "item": "hearthandharvest:iron_cleaver"
    }
  });

  event.custom({
    "type": "overgeared:forging",
    "blueprint": "FINER_TOOL",
    "hammering": 6,
    "has_quality": true,
    "category": "equipment",
    "key": {
      "#": {
        "item": "kubejs:heated_steel_plate"
      }
    },
    "pattern": [
      "#",
      "#"
    ],
    "result": {
      "item": "kubejs:steel_cleaver_blade"
    },
    "show_notification": true
  });

  event.custom({
    "type": "overgeared:crafting_shapeless",
    "category": "equipment",
    "ingredients": [
      {
        "item": `kubejs:steel_cleaver_blade`
      },
      {
        "item": "spartanweaponry:handle"
      }
    ],
    "result": {
      "item": "kubejs:steel_cleaver"
    }
  });

  event.shapeless(
    Item.of('spartanweaponry:stone_javelin', 1), // arg 1: output
    [
      'kubejs:stone_tip',
      'spartanweaponry:simple_pole'
    ]
  );
  event.shapeless(
    Item.of('spartanweaponry:stone_dagger', 1), // arg 1: output
    [
      'kubejs:stone_tip',
      'spartanweaponry:simple_handle'
    ]
  );
  event.shapeless(
    Item.of('minecraft:stone_sword', 1), // arg 1: output
    [
      'overgeared:stone_sword_blade',
      'spartanweaponry:simple_handle'
    ]
  );
  event.shapeless(
    Item.of('minecraft:stone_pickaxe', 1), // arg 1: output
    [
      'overgeared:stone_pickaxe_head',
      'spartanweaponry:simple_handle'
    ]
  );
  event.shapeless(
    Item.of('minecraft:stone_axe', 1), // arg 1: output
    [
      'overgeared:stone_axe_head',
      'spartanweaponry:simple_handle'
    ]
  );
  event.shapeless(
    Item.of('minecraft:stone_shovel', 1), // arg 1: output
    [
      'overgeared:stone_shovel_head',
      'spartanweaponry:simple_handle'
    ]
  );
  event.shapeless(
    Item.of('minecraft:stone_hoe', 1), // arg 1: output
    [
      'overgeared:stone_hoe_head',
      'spartanweaponry:simple_handle'
    ]
  );

  // VANILLA
  let vanillaTools = [
    'minecraft:iron_sword', 'minecraft:iron_pickaxe', 'minecraft:iron_axe', 'minecraft:iron_shovel', 'minecraft:iron_hoe',
    'minecraft:diamond_sword', 'minecraft:diamond_pickaxe', 'minecraft:diamond_axe', 'minecraft:diamond_shovel', 'minecraft:diamond_hoe',
    'minecraft:golden_sword', 'minecraft:golden_pickaxe', 'minecraft:golden_axe', 'minecraft:golden_shovel', 'minecraft:golden_hoe',
    'overgeared:steel_sword', 'overgeared:steel_pickaxe', 'overgeared:steel_axe', 'overgeared:steel_shovel', 'overgeared:steel_hoe',
    'minecraft:diamond_helmet', 'minecraft:diamond_chestplate', 'minecraft:diamond_leggings', 'minecraft:diamond_boots', 'shieldexp:diamond_shield', 'farmersdelight:diamond_knife',
    'farmersdelight:netherite_knife', 'farmersdelight:golden_knife', 'farmersdelight:iron_knife', 'minecraft:wooden_sword', 'minecraft:wooden_pickaxe', 'minecraft:wooden_axe', 'minecraft:wooden_shovel',
    'minecraft:wooden_hoe', 'overgeared:golden_sword_blade', 'overgeared:golden_pickaxe_head', 'overgeared:golden_axe_head', 'overgeared:golden_shovel_head', 'overgeared:golden_hoe_head', 'minecraft:golden_helmet',
    'minecraft:golden_chestplate', 'minecraft:golden_leggings', 'minecraft:golden_boots'
  ]
  vanillaTools.forEach(o => event.remove({ output: o }))

  let blacksteelsmith = [
    'sword',
    'pickaxe',
    'axe',
    'shovel',
    'hoe'
  ]
  blacksteelsmith.forEach(type =>

    event.custom({
      "type": "minecraft:smithing_transform",
      "result": {
        "item": `cataclysm:black_steel_${type}`
      },
      "addition": {
        "item": "cataclysm:black_steel_ingot"
      },
      "base": {
        "item": `overgeared:steel_${type}`
      },
      "template": {
        "item": "cataclysm:black_steel_nugget"
      }
    })
  );

  // ROCK

  event.shapeless(
    Item.of('overgeared:knappable_rock', 4), // arg 1: output
    [
      '#quark:stone_tool_materials',
      'spelunkery:flint_hammer_and_chisel'
    ]
  ).damageIngredient("spelunkery:flint_hammer_and_chisel", 1);

  // HANDLES

  event.shapeless(
    Item.of('spartanweaponry:simple_handle', 1), // arg 1: output
    [
      'minecraft:stick',
      'farmersdelight:straw'
    ]
  ),
    event.shapeless(
      Item.of('spartanweaponry:handle', 1), // arg 1: output
      [
        'minecraft:stick',
        'magistuarmory:leather_strip'
      ]
    ),
    event.shapeless(
      Item.of('spartanweaponry:simple_pole', 1), // arg 1: output
      [
        'minecraft:stick',
        'minecraft:stick',
        'minecraft:stick',
        'farmersdelight:straw'
      ]
    ),
    event.shapeless(
      Item.of('spartanweaponry:pole', 1), // arg 1: output
      [
        'minecraft:stick',
        'minecraft:stick',
        'minecraft:stick',
        'magistuarmory:leather_strip'
      ]
    );

  event.custom({
    "type": "overgeared:crafting_shapeless",
    "category": "equipment",
    "ingredients": [
      {
        "item": `kubejs:iron_blade`
      },
      {
        "item": "spartanweaponry:simple_handle"
      }
    ],
    "result": {
      "item": `farmersdelight:iron_knife`
    }
  });

  event.custom({
    "type": "overgeared:crafting_shapeless",
    "category": "equipment",
    "ingredients": [
      {
        "item": `kubejs:steel_blade`
      },
      {
        "item": "spartanweaponry:simple_handle"
      }
    ],
    "result": {
      "item": `kubejs:steel_knife`
    }
  });

  // IRON & STEEL
  let ironsteel = [
    "iron",
    "steel"
  ];

  ironsteel.forEach(type => {

    event.custom({
      "type": "overgeared:crafting_shapeless",
      "category": "equipment",
      "ingredients": [
        {
          "item": `overgeared:${type}_pickaxe_head`
        },
        {
          "item": "spartanweaponry:handle"
        }
      ],
      "result": {
        "item": `minecraft:${type}_pickaxe`
      }
    })

    event.custom({
      "type": "overgeared:crafting_shapeless",
      "category": "equipment",
      "ingredients": [
        {
          "item": `overgeared:${type}_pickaxe_head`
        },
        {
          "item": "spartanweaponry:handle"
        }
      ],
      "result": {
        "item": `overgeared:${type}_pickaxe`
      }
    })

    event.custom({
      "type": "overgeared:crafting_shapeless",
      "category": "equipment",
      "ingredients": [
        {
          "item": `overgeared:${type}_axe_head`
        },
        {
          "item": "spartanweaponry:handle"
        }
      ],
      "result": {
        "item": `minecraft:${type}_axe`
      }
    })

    event.custom({
      "type": "overgeared:crafting_shapeless",
      "category": "equipment",
      "ingredients": [
        {
          "item": `overgeared:${type}_axe_head`
        },
        {
          "item": "spartanweaponry:handle"
        }
      ],
      "result": {
        "item": `overgeared:${type}_axe`
      }
    })

    event.custom({
      "type": "overgeared:crafting_shapeless",
      "category": "equipment",
      "ingredients": [
        {
          "item": `overgeared:${type}_shovel_head`
        },
        {
          "item": "spartanweaponry:handle"
        }
      ],
      "result": {
        "item": `minecraft:${type}_shovel`
      }
    })

    event.custom({
      "type": "overgeared:crafting_shapeless",
      "category": "equipment",
      "ingredients": [
        {
          "item": `overgeared:${type}_shovel_head`
        },
        {
          "item": "spartanweaponry:handle"
        }
      ],
      "result": {
        "item": `overgeared:${type}_shovel`
      }
    })

    event.custom({
      "type": "overgeared:crafting_shapeless",
      "category": "equipment",
      "ingredients": [
        {
          "item": `overgeared:${type}_hoe_head`
        },
        {
          "item": "spartanweaponry:handle"
        }
      ],
      "result": {
        "item": `minecraft:${type}_hoe`
      }
    })

    event.custom({
      "type": "overgeared:crafting_shapeless",
      "category": "equipment",
      "ingredients": [
        {
          "item": `overgeared:${type}_hoe_head`
        },
        {
          "item": "spartanweaponry:handle"
        }
      ],
      "result": {
        "item": `overgeared:${type}_hoe`
      }
    })
  });
});

ServerEvents.tags('item', event => {
  event.remove('forge:ingots/steel', 'magistuarmory:steel_ingot')
  event.remove('overgeared:tool_parts', ['overgeared:golden_sword_blade', 'overgeared:golden_pickaxe_head', 'overgeared:golden_axe_head', 'overgeared:golden_shovel_head', 'overgeared:golden_hoe_head'])
  event.add('overgeared:tool_parts', ['kubejs:stone_tip', 'kubejs:iron_spearhead', 'kubejs:iron_curved_blade', 'kubejs:iron_longsword_blade', 'kubejs:iron_blade', 'kubejs:iron_greatsword_blade', 'kubejs:iron_battle_hammer_head', 'kubejs:iron_battleaxe_head', 'kubejs:iron_flanged_mace_head', 'kubejs:iron_halberd_head', 'kubejs:iron_warhammer_head', 'kubejs:steel_spearhead', 'kubejs:steel_curved_blade', 'kubejs:steel_longsword_blade', 'kubejs:steel_greatsword_blade', 'kubejs:steel_battle_hammer_head', 'kubejs:steel_battleaxe_head', 'kubejs:steel_flanged_mace_head', 'kubejs:steel_halberd_head', 'kubejs:steel_warhammer_head', 'kubejs:steel_blade']),
    event.remove('alloy_smelter:alloy_smelter_blocks_tier3', 'minecraft:end_stone_bricks'),
    event.remove('alloy_smelter:forge_controller', 'alloy_smelter:forge_controller_tier3'),
    event.remove('forge:nuggets/copper', 'overgeared:copper_nugget'),
    event.remove('miningmaster:catalysts', ['miningmaster:fire_ruby_sword', 'miningmaster:ice_sapphire_sword', 'miningmaster:spirit_garnet_sword', 'miningmaster:lucky_citrine_sword', 'miningmaster:power_pyrite_sword', 'miningmaster:ultima_sword', 'miningmaster:haste_peridot_axe', 'miningmaster:power_pyrite_axe', 'miningmaster:kinetic_opal_axe', 'miningmaster:haste_peridot_pickaxe', 'miningmaster:lucky_citrine_pickaxe', 'miningmaster:unbreaking_iolite_pickaxe', 'miningmaster:ultima_pickaxe', 'miningmaster:air_malachite_bow', 'miningmaster:paragon_helmet', 'miningmaster:paragon_chestplate', 'miningmaster:paragon_leggings', 'miningmaster:paragon_boots']),
    event.add('overgeared:tongs', ['kubejs:smithing_glove', 'kubejs:primitive_tongs'])
});