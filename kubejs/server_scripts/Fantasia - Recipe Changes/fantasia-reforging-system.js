ServerEvents.recipes(event => {

  let copperWeapons = [
    "overgeared:copper_sword_blade"
  ]

  let copperTools = [
    "overgeared:copper_pickaxe_head", "overgeared:copper_axe_head", "overgeared:copper_shovel_head", "overgeared:copper_hoe_head"
  ]

  let ironWeapons = [
    "overgeared:iron_sword_blade", "kubejs:iron_spearhead", "kubejs:iron_longsword_blade", "kubejs:iron_blade", "kubejs:iron_curved_blade", "kubejs:iron_greatsword_blade", "kubejs:iron_battle_hammer_head", "kubejs:iron_battleaxe_head", "kubejs:iron_flanged_mace_head", "kubejs:iron_halberd_head", "kubejs:iron_warhammer_head"
  ]


  let ironTools = [
    "overgeared:iron_pickaxe_head", "overgeared:iron_axe_head", "overgeared:iron_shovel_head", "overgeared:iron_hoe_head", "kubejs:iron_hammer_head", "kubejs:iron_excavator_head", "kubejs:iron_cleaver_blade"
  ]

  let steelWeapons = [
    "overgeared:steel_sword_blade", "kubejs:steel_spearhead", "kubejs:steel_curved_blade", "kubejs:steel_longsword_blade", "kubejs:steel_greatsword_blade", "kubejs:steel_battle_hammer_head", "kubejs:steel_battleaxe_head", "kubejs:steel_flanged_mace_head", "kubejs:steel_halberd_head", "kubejs:steel_warhammer_head", "kubejs:steel_blade"
  ]

  let steelTools = [
    "overgeared:steel_pickaxe_head", "overgeared:steel_axe_head", "overgeared:steel_shovel_head", "overgeared:steel_hoe_head", "kubejs:steel_hammer_head", "kubejs:steel_excavator_head", "kubejs:steel_cleaver_blade"
  ]

  let diaWeapons = [
    "kubejs:diamond_sword_blade", "kubejs:diamond_cleaver_blade", "kubejs:diamond_spearhead", "kubejs:diamond_curved_blade", "kubejs:diamond_longsword_blade", "kubejs:diamond_greatsword_blade", "kubejs:diamond_battle_hammer_head", "kubejs:diamond_battleaxe_head", "kubejs:diamond_flanged_mace_head", 'kubejs:diamond_halberd_head', 'kubejs:diamond_warhammer_head', 'kubejs:diamond_blade'
  ]

  let diaTools = [
    "kubejs:diamond_pickaxe_head", "kubejs:diamond_axe_head", "kubejs:diamond_shovel_head", "kubejs:diamond_hoe_head", "kubejs:diamond_hammer_head", "kubejs:diamond_excavator_head"
  ]

  let toolType = [
    "pickaxe",
    "axe",
    "shovel",
    "hoe"
  ]

  let bladeType = [
    "longsword",
    "greatsword"
  ]

  let weapType = [
    "battleaxe",
    "battle_hammer",
    "flanged_mace",
    "halberd",
    "warhammer"
  ]

  let miscTiers = [
    "iron",
    "steel",
    "diamond"
  ]

  /// disassembling

  // vanilla

  toolType.forEach(tool => {

    event.custom({
      "type": "overgeared:crafting_shapeless",
      "category": "equipment",
      "ingredients": [
        {
          "item": `overgeared:copper_${tool}`
        },
        {
          "tag": "overgeared:tongs",
          "remainder": true,
          "durability_decrease": 1
        }
      ],
      "result": {
        "item": `overgeared:copper_${tool}_head`
      }
    });

    event.custom({
      "type": "overgeared:crafting_shapeless",
      "category": "equipment",
      "ingredients": [
        {
          "item": `minecraft:iron_${tool}`
        },
        {
          "tag": "overgeared:tongs",
          "remainder": true,
          "durability_decrease": 1
        }
      ],
      "result": {
        "item": `overgeared:iron_${tool}_head`
      }
    });

    event.custom({
      "type": "overgeared:crafting_shapeless",
      "category": "equipment",
      "ingredients": [
        {
          "item": `overgeared:steel_${tool}`
        },
        {
          "tag": "overgeared:tongs",
          "remainder": true,
          "durability_decrease": 1
        }
      ],
      "result": {
        "item": `overgeared:steel_${tool}_head`
      }
    });
  })

  event.custom({
    "type": "overgeared:crafting_shapeless",
    "category": "equipment",
    "ingredients": [
      {
        "item": "overgeared:copper_sword"
      },
      {
        "tag": "overgeared:tongs",
        "remainder": true,
        "durability_decrease": 1
      }
    ],
    "result": {
      "item": "overgeared:copper_sword_blade"
    }
  });

  event.custom({
    "type": "overgeared:crafting_shapeless",
    "category": "equipment",
    "ingredients": [
      {
        "item": "minecraft:iron_sword"
      },
      {
        "tag": "overgeared:tongs",
        "remainder": true,
        "durability_decrease": 1
      }
    ],
    "result": {
      "item": "overgeared:iron_sword_blade"
    }
  });

  event.custom({
    "type": "overgeared:crafting_shapeless",
    "category": "equipment",
    "ingredients": [
      {
        "item": "overgeared:steel_sword"
      },
      {
        "tag": "overgeared:tongs",
        "remainder": true,
        "durability_decrease": 1
      }
    ],
    "result": {
      "item": "overgeared:steel_sword_blade"
    }
  });

  toolType.forEach(tool => {

    event.custom({
      "type": "overgeared:crafting_shapeless",
      "category": "equipment",
      "ingredients": [
        {
          "item": `minecraft:diamond_${tool}`
        },
        {
          "tag": "overgeared:tongs",
          "remainder": true,
          "durability_decrease": 1
        }
      ],
      "result": {
        "item": `kubejs:diamond_${tool}_head`
      }
    });
  })

  event.custom({
    "type": "overgeared:crafting_shapeless",
    "category": "equipment",
    "ingredients": [
      {
        "item": "minecraft:diamond_sword"
      },
      {
        "tag": "overgeared:tongs",
        "remainder": true,
        "durability_decrease": 1
      }
    ],
    "result": {
      "item": "kubejs:diamond_sword_blade"
    }
  });

  // weapons

  bladeType.forEach(blade => {

    event.custom({
      "type": "overgeared:crafting_shapeless",
      "category": "equipment",
      "ingredients": [
        {
          "item": `spartanweaponry:iron_${blade}`
        },
        {
          "tag": "overgeared:tongs",
          "remainder": true,
          "durability_decrease": 1
        }
      ],
      "result": {
        "item": `kubejs:iron_${blade}_blade`
      }
    });

    event.custom({
      "type": "overgeared:crafting_shapeless",
      "category": "equipment",
      "ingredients": [
        {
          "item": `spartanweaponry:steel_${blade}`
        },
        {
          "tag": "overgeared:tongs",
          "remainder": true,
          "durability_decrease": 1
        }
      ],
      "result": {
        "item": `kubejs:steel_${blade}_blade`
      }
    });

    event.custom({
      "type": "overgeared:crafting_shapeless",
      "category": "equipment",
      "ingredients": [
        {
          "item": `spartanweaponry:diamond_${blade}`
        },
        {
          "tag": "overgeared:tongs",
          "remainder": true,
          "durability_decrease": 1
        }
      ],
      "result": {
        "item": `kubejs:diamond_${blade}_blade`
      }
    });

  })

  miscTiers.forEach(tier => {

    event.custom({
      "type": "overgeared:crafting_shapeless",
      "category": "equipment",
      "ingredients": [
        {
          "item": `spartanweaponry:${tier}_rapier`
        },
        {
          "tag": "overgeared:tongs",
          "remainder": true,
          "durability_decrease": 1
        }
      ],
      "result": {
        "item": `kubejs:${tier}_sword_blade`
      }
    });

    event.custom({
      "type": "overgeared:crafting_shapeless",
      "category": "equipment",
      "ingredients": [
        {
          "item": `spartanweaponry:${tier}_saber`
        },
        {
          "tag": "overgeared:tongs",
          "remainder": true,
          "durability_decrease": 1
        }
      ],
      "result": {
        "item": `kubejs:${tier}_curved_blade`
      }
    });

    event.custom({
      "type": "overgeared:crafting_shapeless",
      "category": "equipment",
      "ingredients": [
        {
          "item": `spartanweaponry:${tier}_katana`
        },
        {
          "tag": "overgeared:tongs",
          "remainder": true,
          "durability_decrease": 1
        }
      ],
      "result": {
        "item": `kubejs:${tier}_curved_blade`
      }
    });

    event.custom({
      "type": "overgeared:crafting_shapeless",
      "category": "equipment",
      "ingredients": [
        {
          "item": `spartanweaponry:${tier}_glaive`
        },
        {
          "tag": "overgeared:tongs",
          "remainder": true,
          "durability_decrease": 1
        }
      ],
      "result": {
        "item": `kubejs:${tier}_curved_blade`
      }
    });

    event.custom({
      "type": "overgeared:crafting_shapeless",
      "category": "equipment",
      "ingredients": [
        {
          "item": `spartanweaponry:${tier}_scythe`
        },
        {
          "tag": "overgeared:tongs",
          "remainder": true,
          "durability_decrease": 1
        }
      ],
      "result": {
        "item": `kubejs:${tier}_curved_blade`
      }
    });

    event.custom({
      "type": "overgeared:crafting_shapeless",
      "category": "equipment",
      "ingredients": [
        {
          "item": `hearthandharvest:${tier}_cleaver`
        },
        {
          "tag": "overgeared:tongs",
          "remainder": true,
          "durability_decrease": 1
        }
      ],
      "result": {
        "item": `kubejs:${tier}_cleaver_blade`
      }
    });

    event.custom({
      "type": "overgeared:crafting_shapeless",
      "category": "equipment",
      "ingredients": [
        {
          "item": `kubejs:${tier}_cleaver`
        },
        {
          "tag": "overgeared:tongs",
          "remainder": true,
          "durability_decrease": 1
        }
      ],
      "result": {
        "item": `kubejs:${tier}_cleaver_blade`
      }
    });

    event.custom({
      "type": "overgeared:crafting_shapeless",
      "category": "equipment",
      "ingredients": [
        {
          "item": `farmersdelight:${tier}_knife`
        },
        {
          "tag": "overgeared:tongs",
          "remainder": true,
          "durability_decrease": 1
        }
      ],
      "result": {
        "item": `kubejs:${tier}_blade`
      }
    });

    event.custom({
      "type": "overgeared:crafting_shapeless",
      "category": "equipment",
      "ingredients": [
        {
          "item": `kubejs:${tier}_knife`
        },
        {
          "tag": "overgeared:tongs",
          "remainder": true,
          "durability_decrease": 1
        }
      ],
      "result": {
        "item": `kubejs:${tier}_blade`
      }
    });

    event.custom({
      "type": "overgeared:crafting_shapeless",
      "category": "equipment",
      "ingredients": [
        {
          "item": `spartanweaponry:${tier}_throwing_knife`
        },
        {
          "tag": "overgeared:tongs",
          "remainder": true,
          "durability_decrease": 1
        }
      ],
      "result": {
        "item": `kubejs:${tier}_blade`
      }
    });

    event.custom({
      "type": "overgeared:crafting_shapeless",
      "category": "equipment",
      "ingredients": [
        {
          "item": `spartanweaponry:${tier}_dagger`
        },
        {
          "tag": "overgeared:tongs",
          "remainder": true,
          "durability_decrease": 1
        }
      ],
      "result": {
        "item": `kubejs:${tier}_blade`
      }
    });

    event.custom({
      "type": "overgeared:crafting_shapeless",
      "category": "equipment",
      "ingredients": [
        {
          "item": `spartanweaponry:${tier}_parrying_dagger`
        },
        {
          "tag": "overgeared:tongs",
          "remainder": true,
          "durability_decrease": 1
        }
      ],
      "result": {
        "item": `kubejs:${tier}_blade`
      }
    });

    event.custom({
      "type": "overgeared:crafting_shapeless",
      "category": "equipment",
      "ingredients": [
        {
          "item": `spartanweaponry:${tier}_tomahawk`
        },
        {
          "tag": "overgeared:tongs",
          "remainder": true,
          "durability_decrease": 1
        }
      ],
      "result": {
        "item": `overgeared:${tier}_axe_head`
      }
    });

    event.custom({
      "type": "overgeared:crafting_shapeless",
      "category": "equipment",
      "ingredients": [
        {
          "item": `spartanweaponry:${tier}_tomahawk`
        },
        {
          "tag": "overgeared:tongs",
          "remainder": true,
          "durability_decrease": 1
        }
      ],
      "result": {
        "item": `kubejs:${tier}_axe_head`
      }
    });

    event.custom({
      "type": "overgeared:crafting_shapeless",
      "category": "equipment",
      "ingredients": [
        {
          "item": `spartanweaponry:${tier}_spear`
        },
        {
          "tag": "overgeared:tongs",
          "remainder": true,
          "durability_decrease": 1
        }
      ],
      "result": {
        "item": `kubejs:${tier}_spearhead`
      }
    });

    event.custom({
      "type": "overgeared:crafting_shapeless",
      "category": "equipment",
      "ingredients": [
        {
          "item": `spartanweaponry:${tier}_pike`
        },
        {
          "tag": "overgeared:tongs",
          "remainder": true,
          "durability_decrease": 1
        }
      ],
      "result": {
        "item": `kubejs:${tier}_spearhead`
      }
    });

    event.custom({
      "type": "overgeared:crafting_shapeless",
      "category": "equipment",
      "ingredients": [
        {
          "item": `spartanweaponry:${tier}_lance`
        },
        {
          "tag": "overgeared:tongs",
          "remainder": true,
          "durability_decrease": 1
        }
      ],
      "result": {
        "item": `kubejs:${tier}_spearhead`
      }
    });

    event.custom({
      "type": "overgeared:crafting_shapeless",
      "category": "equipment",
      "ingredients": [
        {
          "item": `spartanweaponry:${tier}_javelin`
        },
        {
          "tag": "overgeared:tongs",
          "remainder": true,
          "durability_decrease": 1
        }
      ],
      "result": {
        "item": `kubejs:${tier}_spearhead`
      }
    });

  })

  weapType.forEach(swep => {

    event.custom({
      "type": "overgeared:crafting_shapeless",
      "category": "equipment",
      "ingredients": [
        {
          "item": `spartanweaponry:iron_${swep}`
        },
        {
          "tag": "overgeared:tongs",
          "remainder": true,
          "durability_decrease": 1
        }
      ],
      "result": {
        "item": `kubejs:iron_${swep}_head`
      }
    });

    event.custom({
      "type": "overgeared:crafting_shapeless",
      "category": "equipment",
      "ingredients": [
        {
          "item": `spartanweaponry:steel_${swep}`
        },
        {
          "tag": "overgeared:tongs",
          "remainder": true,
          "durability_decrease": 1
        }
      ],
      "result": {
        "item": `kubejs:steel_${swep}_head`
      }
    });

    event.custom({
      "type": "overgeared:crafting_shapeless",
      "category": "equipment",
      "ingredients": [
        {
          "item": `spartanweaponry:diamond_${swep}`
        },
        {
          "tag": "overgeared:tongs",
          "remainder": true,
          "durability_decrease": 1
        }
      ],
      "result": {
        "item": `kubejs:diamond_${swep}_head`
      }
    });

  })


  // reheating

  copperWeapons.forEach(copper => {
    event.custom({
      "type": "overgeared:nbt_add_campfire_cooking",
      "ingredient": {
        "item": `${copper}`
      },
      "result": {
        "item": `${copper}`
      },
      "experience": 0,
      "cookingtime": 250,
      "nbt": {
        "Heated": true
      }
    });
  })

  copperTools.forEach(copper => {
    event.custom({
      "type": "overgeared:nbt_add_campfire_cooking",
      "ingredient": {
        "item": `${copper}`
      },
      "result": {
        "item": `${copper}`
      },
      "experience": 0,
      "cookingtime": 250,
      "nbt": {
        "Heated": true
      }
    });
  })

  ironWeapons.forEach(iron => {
    event.custom({
      "type": "overgeared:nbt_add_campfire_cooking",
      "ingredient": {
        "item": `${iron}`
      },
      "result": {
        "item": `${iron}`
      },
      "experience": 0,
      "cookingtime": 350,
      "nbt": {
        "Heated": true
      }
    });
  })

  ironTools.forEach(iron => {
    event.custom({
      "type": "overgeared:nbt_add_campfire_cooking",
      "ingredient": {
        "item": `${iron}`
      },
      "result": {
        "item": `${iron}`
      },
      "experience": 0,
      "cookingtime": 350,
      "nbt": {
        "Heated": true
      }
    });
  })

  steelWeapons.forEach(steel => {
    event.custom({
      "type": "overgeared:nbt_add_campfire_cooking",
      "ingredient": {
        "item": `${steel}`
      },
      "result": {
        "item": `${steel}`
      },
      "experience": 0,
      "cookingtime": 500,
      "nbt": {
        "Heated": true
      }
    });
  })

  steelTools.forEach(steel => {
    event.custom({
      "type": "overgeared:nbt_add_campfire_cooking",
      "ingredient": {
        "item": `${steel}`
      },
      "result": {
        "item": `${steel}`
      },
      "experience": 0,
      "cookingtime": 500,
      "nbt": {
        "Heated": true
      }
    });
  })

  diaWeapons.forEach(diamond => {
    event.custom({
      "type": "overgeared:nbt_add_campfire_cooking",
      "ingredient": {
        "item": `${diamond}`
      },
      "result": {
        "item": `${diamond}`
      },
      "experience": 0,
      "cookingtime": 800,
      "nbt": {
        "Heated": true
      }
    });
  })

  diaTools.forEach(diamond => {
    event.custom({
      "type": "overgeared:nbt_add_campfire_cooking",
      "ingredient": {
        "item": `${diamond}`
      },
      "result": {
        "item": `${diamond}`
      },
      "experience": 0,
      "cookingtime": 800,
      "nbt": {
        "Heated": true
      }
    });
  })

  // reforging

  copperWeapons.forEach(copper => {
    event.custom({
      "type": "overgeared:forging",
      "category": "equipment",
      "blueprint": "WEAPON",
      "hammering": 3,
      "has_quality": true,
      "has_polishing": true,
      "need_quenching": true,
      "key": {
        "X": {
          "item": `${copper}`,
          "requires_heated": true,
        },
        "#": {
          "item": "overgeared:heated_copper_ingot"
        }
      },
      "pattern": [
        "X",
        "#"
      ],
      "result": {
        "item": `${copper}`
      },
      "show_notification": true
    });
  })

  copperTools.forEach(copper => {
    event.custom({
      "type": "overgeared:forging",
      "category": "equipment",
      "blueprint": "TOOL",
      "hammering": 3,
      "has_quality": true,
      "has_polishing": true,
      "need_quenching": true,
      "key": {
        "X": {
          "item": `${copper}`,
          "requires_heated": true,
        },
        "#": {
          "item": "overgeared:heated_copper_ingot"
        }
      },
      "pattern": [
        "X",
        "#"
      ],
      "result": {
        "item": `${copper}`
      },
      "show_notification": true
    });
  })

  ironWeapons.forEach(iron => {
    event.custom({
      "type": "overgeared:forging",
      "category": "equipment",
      "blueprint": "WEAPON",
      "hammering": 4,
      "has_quality": true,
      "has_polishing": true,
      "need_quenching": true,
      "key": {
        "X": {
          "item": `${iron}`,
          "requires_heated": true,
        },
        "#": {
          "item": "overgeared:heated_iron_ingot"
        }
      },
      "pattern": [
        "X",
        "#"
      ],
      "result": {
        "item": `${iron}`
      },
      "show_notification": true
    });
  })

  ironTools.forEach(iron => {
    event.custom({
      "type": "overgeared:forging",
      "category": "equipment",
      "blueprint": "TOOL",
      "hammering": 4,
      "has_quality": true,
      "has_polishing": true,
      "need_quenching": true,
      "key": {
        "X": {
          "item": `${iron}`,
          "requires_heated": true,
        },
        "#": {
          "item": "overgeared:heated_iron_ingot"
        }
      },
      "pattern": [
        "X",
        "#"
      ],
      "result": {
        "item": `${iron}`
      },
      "show_notification": true
    });
  })

  steelWeapons.forEach(steel => {
    event.custom({
      "type": "overgeared:forging",
      "category": "equipment",
      "blueprint": "FINER_WEAPON",
      "requires_blueprint": true,
      "hammering": 5,
      "has_quality": true,
      "has_polishing": true,
      "need_quenching": true,
      "key": {
        "X": {
          "item": `${steel}`,
          "requires_heated": true,
        },
        "#": {
          "item": "overgeared:heated_steel_ingot"
        }
      },
      "pattern": [
        "X",
        "#"
      ],
      "result": {
        "item": `${steel}`
      },
      "show_notification": true
    });
  })

  steelTools.forEach(steel => {
    event.custom({
      "type": "overgeared:forging",
      "category": "equipment",
      "blueprint": "FINER_TOOL",
      "requires_blueprint": true,
      "hammering": 5,
      "has_quality": true,
      "has_polishing": true,
      "need_quenching": true,
      "key": {
        "X": {
          "item": `${steel}`,
          "requires_heated": true,
        },
        "#": {
          "item": "overgeared:heated_steel_ingot"
        }
      },
      "pattern": [
        "X",
        "#"
      ],
      "result": {
        "item": `${steel}`
      },
      "show_notification": true
    });
  })

  diaWeapons.forEach(diamond => {
    event.custom({
      "type": "overgeared:forging",
      "category": "equipment",
      "blueprint": "FINER_WEAPON",
      "requires_blueprint": true,
      "hammering": 6,
      "has_quality": true,
      "has_polishing": true,
      "need_quenching": true,
      "key": {
        "X": {
          "item": `${diamond}`,
          "requires_heated": true,
        },
        "#": {
          "item": "kubejs:heated_diamond_ingot"
        }
      },
      "pattern": [
        "X",
        "#"
      ],
      "result": {
        "item": `${diamond}`
      },
      "show_notification": true
    });
  })

  diaTools.forEach(diamond => {
    event.custom({
      "type": "overgeared:forging",
      "category": "equipment",
      "blueprint": "FINER_TOOL",
      "requires_blueprint": true,
      "hammering": 6,
      "has_quality": true,
      "has_polishing": true,
      "need_quenching": true,
      "key": {
        "X": {
          "item": `${diamond}`,
          "requires_heated": true,
        },
        "#": {
          "item": "kubejs:heated_diamond_ingot"
        }
      },
      "pattern": [
        "X",
        "#"
      ],
      "result": {
        "item": `${diamond}`
      },
      "show_notification": true
    });
  })

});