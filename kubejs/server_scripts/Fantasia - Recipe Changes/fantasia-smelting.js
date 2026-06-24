ServerEvents.recipes(event => {

  event.remove({ id: 'minecraft:netherite_ingot' })
  event.remove({ id: 'minecraft:netherite_scrap' })
  event.remove({ output: 'overgeared:crude_steel' })
  event.remove({ output: 'overgeared:heated_crude_steel' })
  event.remove({ output: 'overgeared:heated_silver_ingot' })

  let smeltery = [
    'minecraft:copper_ingot',
    'minecraft:gold_ingot',
    'minecraft:iron_ingot',
    'galosphere:silver_ingot',
    'minecraft:emerald',
    'minecraft:diamond',
    'minecraft:lapis_lazuli',
    'minecraft:coal',
    'minecraft:redstone',
    'mca:rose_gold_ingot',
    'minecraft:iron_nugget',
    'minecraft:gold_nugget',
    'galosphere:silver_nugget',
    'spelunkery:copper_nugget',
    'overgeared:steel_nugget',
    'cataclysm:black_steel_nugget',
    'cataclysm:ancient_metal_nugget',
    'minecraft:iron_block',
    'minecraft:gold_block',
    'minecraft:copper_block',
    'overgeared:heated_copper_ingot',
  ]
  smeltery.forEach(o => event.remove({ output: o, type: 'minecraft:smelting' }))

  let blastery = [
    'minecraft:copper_ingot',
    'minecraft:gold_ingot',
    'minecraft:iron_ingot',
    'galosphere:silver_ingot',
    'minecraft:emerald',
    'minecraft:diamond',
    'minecraft:lapis_lazuli',
    'minecraft:netherite_scrap',
    'minecraft:netherite_ingot',
    'minecraft:coal',
    'minecraft:redstone',
    'mca:rose_gold_ingot',
    'irons_spellbooks:arcane_salvage',
    'minecraft:iron_nugget',
    'minecraft:gold_nugget',
    'galosphere:silver_nugget',
    'spelunkery:copper_nugget',
    'overgeared:steel_nugget',
    'cataclysm:black_steel_nugget',
    'cataclysm:ancient_metal_nugget',
    'minecraft:iron_block',
    'minecraft:gold_block',
    'minecraft:copper_block',
    'overgeared:heated_iron_ingot',
    'overgeared:heated_copper_ingot',
    'astrological:cracked_light_jade_tiles'
  ]
  blastery.forEach(o => event.remove({ output: o, type: 'minecraft:blasting' }))

  // LOW MELTING POINT
  event.blasting('minecraft:copper_ingot', 'minecraft:raw_copper').xp(0.7).cookingTime(75)
  event.custom({
    "type": "clayworks:baking",
    "category": "material",
    "cookingtime": 150,
    "experience": 0.3,
    "ingredient": {
      "item": "minecraft:raw_copper"
    },
    "result": "minecraft:copper_ingot"
  })

  event.custom({
    "type": "clayworks:baking",
    "category": "material",
    "cookingtime": 150,
    "experience": 0.3,
    "ingredient": {
      "tag": "forge:ores/copper"
    },
    "result": "minecraft:copper_ingot"
  })

  event.blasting('minecraft:gold_ingot', 'minecraft:raw_gold').xp(0.7).cookingTime(40)
  event.custom({
    "type": "clayworks:baking",
    "category": "material",
    "cookingtime": 80,
    "experience": 0.3,
    "ingredient": {
      "item": "minecraft:raw_gold"
    },
    "result": "minecraft:gold_ingot"
  })

  event.blasting('mca:rose_gold_ingot', 'mca:rose_gold_dust').xp(0.7).cookingTime(40)
  event.custom({
    "type": "clayworks:baking",
    "category": "material",
    "cookingtime": 80,
    "experience": 0.3,
    "ingredient": {
      "item": "mca:rose_gold_dust"
    },
    "result": "mca:rose_gold_ingot"
  })

  event.custom({
    "type": "clayworks:baking",
    "category": "material",
    "cookingtime": 80,
    "experience": 0.3,
    "ingredient": {
      "tag": "forge:ores/gold"
    },
    "result": "minecraft:gold_ingot"
  })

  event.blasting('galosphere:silver_ingot', 'galosphere:raw_silver').xp(0.7).cookingTime(35)
  event.custom({
    "type": "clayworks:baking",
    "category": "material",
    "cookingtime": 70,
    "experience": 0.3,
    "ingredient": {
      "item": "galosphere:raw_silver"
    },
    "result": "galosphere:silver_ingot"
  })

  event.custom({
    "type": "clayworks:baking",
    "category": "material",
    "cookingtime": 70,
    "experience": 0.3,
    "ingredient": {
      "item": "fantasia:silver_ores"
    },
    "result": "galosphere:silver_ingot"
  })

  // HIGH MELTING POINT
  event.blasting('minecraft:iron_ingot', 'minecraft:raw_iron').xp(0.7).cookingTime(150)
  event.blasting('overgeared:heated_crude_steel', 'overgeared:crude_steel').xp(0.7).cookingTime(300)

  //// ALLOY SMELTER

  /// DEFAULT

  // COPPER

  event.custom({
    "type": "overgeared:alloy_smelting",
    "category": "misc",
    "group": "misc",
    "experience": 0.5,
    "cookingtime": 100,
    "ingredients": [
      {
        "tag": "forge:raw_materials/copper"
      }
    ],
    "result": {
      "item": "minecraft:copper_ingot",
      "count": 1
    }
  })

  event.custom({
    "type": "overgeared:alloy_smelting",
    "category": "misc",
    "group": "misc",
    "experience": 2,
    "cookingtime": 100,
    "ingredients": [
      {
        "tag": "forge:raw_materials/copper"
      },
      {
        "tag": "forge:raw_materials/copper"
      },
      {
        "tag": "forge:raw_materials/copper"
      },
      {
        "tag": "forge:raw_materials/copper"
      }
    ],
    "result": {
      "item": "minecraft:copper_ingot",
      "count": 4
    }
  })

  // SILVER

  event.custom({
    "type": "overgeared:alloy_smelting",
    "category": "misc",
    "group": "misc",
    "experience": 0.5,
    "cookingtime": 50,
    "ingredients": [
      {
        "item": "galosphere:raw_silver"
      }
    ],
    "result": {
      "item": "galosphere:silver_ingot",
      "count": 1
    }
  })

  event.custom({
    "type": "overgeared:alloy_smelting",
    "category": "misc",
    "group": "misc",
    "experience": 2,
    "cookingtime": 50,
    "ingredients": [
      {
        "item": "galosphere:raw_silver"
      },
      {
        "item": "galosphere:raw_silver"
      },
      {
        "item": "galosphere:raw_silver"
      },
      {
        "item": "galosphere:raw_silver"
      }
    ],
    "result": {
      "item": "galosphere:silver_ingot",
      "count": 4
    }
  })

  event.custom({
    "type": "overgeared:alloy_smelting",
    "category": "misc",
    "group": "misc",
    "experience": 0.5,
    "cookingtime": 200,
    "ingredients": [
      {
        "item": "overgeared:heated_silver_ingot"
      },
      {
        "item": "irons_spellbooks:arcane_essence"
      },
      {
        "item": "irons_spellbooks:arcane_essence"
      },
      {
        "item": "irons_spellbooks:arcane_essence"
      }
    ],
    "result": {
      "item": "irons_spellbooks:arcane_ingot",
      "count": 1
    }
  })

  // GOLD

  event.custom({
    "type": "overgeared:alloy_smelting",
    "category": "misc",
    "group": "misc",
    "experience": 0.5,
    "cookingtime": 50,
    "ingredients": [
      {
        "tag": "forge:raw_materials/gold"
      }
    ],
    "result": {
      "item": "minecraft:gold_ingot",
      "count": 1
    }
  })

  event.custom({
    "type": "overgeared:alloy_smelting",
    "category": "misc",
    "group": "misc",
    "experience": 2,
    "cookingtime": 50,
    "ingredients": [
      {
        "tag": "forge:raw_materials/gold"
      },
      {
        "tag": "forge:raw_materials/gold"
      },
      {
        "tag": "forge:raw_materials/gold"
      },
      {
        "tag": "forge:raw_materials/gold"
      }
    ],
    "result": {
      "item": "minecraft:gold_ingot",
      "count": 4
    }
  })

  // IRON

  event.custom({
    "type": "overgeared:alloy_smelting",
    "category": "misc",
    "group": "misc",
    "experience": 0.5,
    "cookingtime": 250,
    "ingredients": [
      {
        "tag": "forge:raw_materials/iron"
      }
    ],
    "result": {
      "item": "minecraft:iron_ingot",
      "count": 1
    }
  })

  event.custom({
    "type": "overgeared:alloy_smelting",
    "category": "misc",
    "group": "misc",
    "experience": 2,
    "cookingtime": 250,
    "ingredients": [
      {
        "tag": "forge:raw_materials/iron"
      },
      {
        "tag": "forge:raw_materials/iron"
      },
      {
        "tag": "forge:raw_materials/iron"
      },
      {
        "tag": "forge:raw_materials/iron"
      }
    ],
    "result": {
      "item": "minecraft:iron_ingot",
      "count": 4
    }
  })

  event.custom({
    "type": "overgeared:alloy_smelting",
    "category": "misc",
    "group": "misc",
    "experience": 0.5,
    "cookingtime": 250,
    "ingredients": [
      {
        "tag": "forge:ores/iron"
      }
    ],
    "result": {
      "item": "minecraft:iron_ingot",
      "count": 1
    }
  })

  event.custom({
    "type": "overgeared:alloy_smelting",
    "category": "misc",
    "group": "misc",
    "experience": 2,
    "cookingtime": 250,
    "ingredients": [
      {
        "tag": "forge:ores/iron"
      },
      {
        "tag": "forge:ores/iron"
      },
      {
        "tag": "forge:ores/iron"
      },
      {
        "tag": "forge:ores/iron"
      }
    ],
    "result": {
      "item": "minecraft:iron_ingot",
      "count": 4
    }
  })

  // STEEL

  event.custom({
    "type": "overgeared:alloy_smelting",
    "category": "misc",
    "group": "misc",
    "experience": 0.5,
    "cookingtime": 600,
    "ingredients": [
      {
        "item": "minecraft:raw_iron"
      },
      {
        "item": "minecraft:raw_iron"
      },
      {
        "item": "minecraft:raw_iron"
      },
      {
        "item": "minecraft:coal"
      }
    ],
    "result": {
      "item": "overgeared:crude_steel",
      "count": 1
    }
  })

  /// NETHER

  // COPPER

  event.custom({
    "type": "overgeared:nether_alloy_smelting",
    "category": "misc",
    "group": "misc",
    "experience": 0.5,
    "cookingtime": 50,
    "ingredients": [
      {
        "tag": "forge:raw_materials/copper"
      }
    ],
    "result": {
      "item": "minecraft:copper_ingot",
      "count": 1
    }
  })

  event.custom({
    "type": "overgeared:nether_alloy_smelting",
    "category": "misc",
    "group": "misc",
    "experience": 4.5,
    "cookingtime": 50,
    "ingredients": [
      {
        "tag": "forge:raw_materials/copper"
      },
      {
        "tag": "forge:raw_materials/copper"
      },
      {
        "tag": "forge:raw_materials/copper"
      },
      {
        "tag": "forge:raw_materials/copper"
      },
      {
        "tag": "forge:raw_materials/copper"
      },
      {
        "tag": "forge:raw_materials/copper"
      },
      {
        "tag": "forge:raw_materials/copper"
      },
      {
        "tag": "forge:raw_materials/copper"
      },
      {
        "tag": "forge:raw_materials/copper"
      }
    ],
    "result": {
      "item": "minecraft:copper_ingot",
      "count": 9
    }
  })

  // SILVER

  event.custom({
    "type": "overgeared:nether_alloy_smelting",
    "category": "misc",
    "group": "misc",
    "experience": 0.5,
    "cookingtime": 25,
    "ingredients": [
      {
        "item": "galosphere:raw_silver"
      }
    ],
    "result": {
      "item": "galosphere:silver_ingot",
      "count": 1
    }
  })

  event.custom({
    "type": "overgeared:nether_alloy_smelting",
    "category": "misc",
    "group": "misc",
    "experience": 4.5,
    "cookingtime": 25,
    "ingredients": [
      {
        "item": "galosphere:raw_silver"
      },
      {
        "item": "galosphere:raw_silver"
      },
      {
        "item": "galosphere:raw_silver"
      },
      {
        "item": "galosphere:raw_silver"
      },
      {
        "item": "galosphere:raw_silver"
      },
      {
        "item": "galosphere:raw_silver"
      },
      {
        "item": "galosphere:raw_silver"
      },
      {
        "item": "galosphere:raw_silver"
      },
      {
        "item": "galosphere:raw_silver"
      }
    ],
    "result": {
      "item": "galosphere:silver_ingot",
      "count": 9
    }
  })

  event.custom({
    "type": "overgeared:nether_alloy_smelting",
    "category": "misc",
    "group": "misc",
    "experience": 0.5,
    "cookingtime": 100,
    "ingredients": [
      {
        "item": "overgeared:heated_silver_ingot"
      },
      {
        "item": "irons_spellbooks:arcane_essence"
      },
      {
        "item": "irons_spellbooks:arcane_essence"
      },
      {
        "item": "irons_spellbooks:arcane_essence"
      }
    ],
    "result": {
      "item": "irons_spellbooks:arcane_ingot",
      "count": 1
    }
  })

  // GOLD

  event.custom({
    "type": "overgeared:nether_alloy_smelting",
    "category": "misc",
    "group": "misc",
    "experience": 0.5,
    "cookingtime": 25,
    "ingredients": [
      {
        "tag": "forge:raw_materials/gold"
      }
    ],
    "result": {
      "item": "minecraft:gold_ingot",
      "count": 1
    }
  })

  event.custom({
    "type": "overgeared:nether_alloy_smelting",
    "category": "misc",
    "group": "misc",
    "experience": 4.5,
    "cookingtime": 25,
    "ingredients": [
      {
        "tag": "forge:raw_materials/gold"
      },
      {
        "tag": "forge:raw_materials/gold"
      },
      {
        "tag": "forge:raw_materials/gold"
      },
      {
        "tag": "forge:raw_materials/gold"
      },
      {
        "tag": "forge:raw_materials/gold"
      },
      {
        "tag": "forge:raw_materials/gold"
      },
      {
        "tag": "forge:raw_materials/gold"
      },
      {
        "tag": "forge:raw_materials/gold"
      },
      {
        "tag": "forge:raw_materials/gold"
      }
    ],
    "result": {
      "item": "minecraft:gold_ingot",
      "count": 9
    }
  })

  // IRON

  event.custom({
    "type": "overgeared:nether_alloy_smelting",
    "category": "misc",
    "group": "misc",
    "experience": 0.5,
    "cookingtime": 125,
    "ingredients": [
      {
        "tag": "forge:raw_materials/iron"
      }
    ],
    "result": {
      "item": "minecraft:iron_ingot",
      "count": 1
    }
  })

  event.custom({
    "type": "overgeared:nether_alloy_smelting",
    "category": "misc",
    "group": "misc",
    "experience": 4.5,
    "cookingtime": 125,
    "ingredients": [
      {
        "tag": "forge:raw_materials/iron"
      },
      {
        "tag": "forge:raw_materials/iron"
      },
      {
        "tag": "forge:raw_materials/iron"
      },
      {
        "tag": "forge:raw_materials/iron"
      },
      {
        "tag": "forge:raw_materials/iron"
      },
      {
        "tag": "forge:raw_materials/iron"
      },
      {
        "tag": "forge:raw_materials/iron"
      },
      {
        "tag": "forge:raw_materials/iron"
      },
      {
        "tag": "forge:raw_materials/iron"
      }
    ],
    "result": {
      "item": "minecraft:iron_ingot",
      "count": 9
    }
  })

  event.custom({
    "type": "overgeared:nether_alloy_smelting",
    "category": "misc",
    "group": "misc",
    "experience": 0.5,
    "cookingtime": 125,
    "ingredients": [
      {
        "tag": "forge:ores/iron"
      }
    ],
    "result": {
      "item": "minecraft:iron_ingot",
      "count": 1
    }
  })

  event.custom({
    "type": "overgeared:nether_alloy_smelting",
    "category": "misc",
    "group": "misc",
    "experience": 4.5,
    "cookingtime": 125,
    "ingredients": [
      {
        "tag": "forge:ores/iron"
      },
      {
        "tag": "forge:ores/iron"
      },
      {
        "tag": "forge:ores/iron"
      },
      {
        "tag": "forge:ores/iron"
      },
      {
        "tag": "forge:ores/iron"
      },
      {
        "tag": "forge:ores/iron"
      },
      {
        "tag": "forge:ores/iron"
      },
      {
        "tag": "forge:ores/iron"
      },
      {
        "tag": "forge:ores/iron"
      }
    ],
    "result": {
      "item": "minecraft:iron_ingot",
      "count": 9
    }
  })

  // STEEL

  event.custom({
    "type": "overgeared:nether_alloy_smelting",
    "category": "misc",
    "group": "misc",
    "experience": 0.5,
    "cookingtime": 300,
    "ingredients": [
      {
        "item": "minecraft:raw_iron"
      },
      {
        "item": "minecraft:raw_iron"
      },
      {
        "item": "minecraft:raw_iron"
      },
      {
        "item": "minecraft:coal"
      }
    ],
    "result": {
      "item": "overgeared:crude_steel",
      "count": 1
    }
  })

  /// VERY HIGH MELTING POINT - NETHERITE

  event.custom({
    "type": "overgeared:nether_alloy_smelting",
    "category": "misc",
    "group": "misc",
    "experience": 0.5,
    "cookingtime": 600,
    "ingredients": [
      {
        "item": "minecraft:ancient_debris"
      }
    ],
    "result": {
      "item": "minecraft:netherite_scrap",
      "count": 1
    }
  })

  event.custom({
    "type": "overgeared:nether_alloy_smelting",
    "category": "misc",
    "group": "misc",
    "experience": 4.5,
    "cookingtime": 600,
    "ingredients": [
      {
        "item": "minecraft:ancient_debris"
      },
      {
        "item": "minecraft:ancient_debris"
      },
      {
        "item": "minecraft:ancient_debris"
      },
      {
        "item": "minecraft:ancient_debris"
      },
      {
        "item": "minecraft:ancient_debris"
      },
      {
        "item": "minecraft:ancient_debris"
      },
      {
        "item": "minecraft:ancient_debris"
      },
      {
        "item": "minecraft:ancient_debris"
      },
      {
        "item": "minecraft:ancient_debris"
      }
    ],
    "result": {
      "item": "minecraft:netherite_scrap",
      "count": 9
    }
  })

  event.custom({
    "type": "overgeared:nether_alloy_smelting",
    "category": "misc",
    "group": "misc",
    "experience": 0.5,
    "cookingtime": 1200,
    "ingredients": [
      {
        "item": "kubejs:netherite_alloy"
      },
      {
        "item": "minecraft:blaze_powder"
      },
      {
        "item": "minecraft:blaze_powder"
      },
      {
        "item": "minecraft:blaze_powder"
      }
    ],
    "result": {
      "item": "kubejs:unfinished_netherite_ingot",
      "count": 1
    }
  })

  event.custom({
    "type": "overgeared:nether_alloy_smelting",
    "category": "misc",
    "group": "misc",
    "experience": 0.5,
    "cookingtime": 600,
    "ingredients": [
      {
        "item": "irons_spellbooks:arcane_debris"
      }
    ],
    "result": {
      "item": "irons_spellbooks:arcane_salvage",
      "count": 1
    }
  })

  event.custom({
    "type": "overgeared:nether_alloy_smelting",
    "category": "misc",
    "group": "misc",
    "experience": 4.5,
    "cookingtime": 600,
    "ingredients": [
      {
        "item": "irons_spellbooks:arcane_debris"
      },
      {
        "item": "irons_spellbooks:arcane_debris"
      },
      {
        "item": "irons_spellbooks:arcane_debris"
      },
      {
        "item": "irons_spellbooks:arcane_debris"
      },
      {
        "item": "irons_spellbooks:arcane_debris"
      },
      {
        "item": "irons_spellbooks:arcane_debris"
      },
      {
        "item": "irons_spellbooks:arcane_debris"
      },
      {
        "item": "irons_spellbooks:arcane_debris"
      },
      {
        "item": "irons_spellbooks:arcane_debris"
      }
    ],
    "result": {
      "item": "irons_spellbooks:arcane_salvage",
      "count": 9
    }
  })

  // HEATING RECIPES
  event.blasting('overgeared:heated_iron_ingot', 'minecraft:iron_ingot').xp(0.7).cookingTime(100)

  event.custom({
    "type": "clayworks:baking",
    "category": "material",
    "cookingtime": 150,
    "experience": 0.0,
    "ingredient": {
      "item": "minecraft:copper_ingot"
    },
    "result": "overgeared:heated_copper_ingot"
  })

  event.blasting('overgeared:heated_copper_ingot', 'minecraft:copper_ingot')
    .xp(0.7)
    .cookingTime(75)

  event.custom({
    "type": "clayworks:baking",
    "category": "material",
    "cookingtime": 150,
    "experience": 0.0,
    "ingredient": {
      "item": "galosphere:silver_ingot"
    },
    "result": "overgeared:heated_silver_ingot"
  })

  event.blasting('overgeared:heated_silver_ingot', 'galosphere:silver_ingot')
    .xp(0.7)
    .cookingTime(75)

  event.custom({
    "type": "clayworks:baking",
    "category": "material",
    "cookingtime": 200,
    "experience": 0.0,
    "ingredient": {
      "item": "minecraft:iron_ingot"
    },
    "result": "overgeared:heated_iron_ingot"
  })

  event.custom({
    "type": "clayworks:baking",
    "category": "material",
    "cookingtime": 300,
    "experience": 0.0,
    "ingredient": {
      "item": "overgeared:steel_ingot"
    },
    "result": "overgeared:heated_steel_ingot"
  })

  // CLAYWORKS COMPAT

  event.custom({
    "type": "clayworks:baking",
    "category": "blocks",
    "cookingtime": 100,
    "experience": 0.1,
    "ingredient": {
      "item": "minecraft:bricks"
    },
    "result": "twigs:cracked_bricks"
  })

  event.custom({
    "type": "clayworks:baking",
    "category": "blocks",
    "cookingtime": 100,
    "experience": 0.1,
    "ingredient": {
      "item": "twigs:silt_bricks"
    },
    "result": "twigs:cracked_silt_bricks"
  })

  event.custom({
    "type": "clayworks:baking",
    "category": "blocks",
    "cookingtime": 100,
    "experience": 0.1,
    "ingredient": {
      "item": "astrological:light_jade_tiles"
    },
    "result": "astrological:cracked_light_jade_tiles"
  })

  event.custom({
    "type": "clayworks:baking",
    "category": "blocks",
    "cookingtime": 100,
    "experience": 0.1,
    "ingredient": {
      "item": "minecraft:smooth_stone"
    },
    "result": "bbb:polished_stone"
  })

  event.custom({
    "type": "clayworks:baking",
    "category": "blocks",
    "cookingtime": 100,
    "experience": 0.1,
    "ingredient": {
      "item": "quark:soul_sandstone"
    },
    "result": "quark:smooth_soul_sandstone"
  })

  event.custom({
    "type": "clayworks:baking",
    "category": "blocks",
    "cookingtime": 100,
    "experience": 0.1,
    "ingredient": {
      "item": "supplementaries:ash"
    },
    "result": "supplementaries:ash_brick"
  })

  event.custom({
    "type": "clayworks:baking",
    "category": "blocks",
    "cookingtime": 100,
    "experience": 0.1,
    "ingredient": {
      "item": "twigs:silt_ball"
    },
    "result": "twigs:silt_brick"
  })

  let polishedtwigs = [
    "calcite",
    "rhyolite",
    "bloodstone",
    "schist"
  ];

  polishedtwigs.forEach(type => {

    event.custom({
      "type": "clayworks:baking",
      "category": "blocks",
      "cookingtime": 100,
      "experience": 0.1,
      "ingredient": {
        "item": `twigs:polished_${type}_bricks`
      },
      "result": `twigs:cracked_polished_${type}_bricks`
    })
  });

  // NETHERITE ALLOYING

  event.custom({
    "type": "miningmaster:forging_recipe",
    "gems": [
      { "item": "minecraft:netherite_scrap" },
      { "item": "minecraft:netherite_scrap" },
      { "item": "minecraft:netherite_scrap" },
      { "item": "minecraft:netherite_scrap" },
      { "item": "minecraft:blaze_powder" },
      { "item": "cataclysm:black_steel_ingot" },
      { "item": "cataclysm:black_steel_ingot" },
      { "item": "cataclysm:black_steel_ingot" },
      { "item": "cataclysm:black_steel_ingot" },
    ],
    "catalyst": { "item": "minecraft:diamond" },
    "result": { "item": "kubejs:netherite_alloy" }
  })

});