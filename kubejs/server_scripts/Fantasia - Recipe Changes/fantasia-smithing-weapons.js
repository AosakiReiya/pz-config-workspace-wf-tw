ServerEvents.recipes(event => {

  let spartanWeaps = [
    'spartanweaponry:stone_longsword',
    'spartanweaponry:stone_katana',
    'spartanweaponry:stone_saber',
    'spartanweaponry:stone_rapier',
    'spartanweaponry:stone_greatsword',
    'spartanweaponry:stone_dagger',
    'spartanweaponry:stone_javelin',
    'spartanweaponry:stone_throwing_knife',
    'spartanweaponry:stone_tomahawk',
    'spartanweaponry:stone_battle_hammer',
    'spartanweaponry:stone_warhammer',
    'spartanweaponry:stone_spear',
    'spartanweaponry:stone_halberd',
    'spartanweaponry:stone_pike',
    'spartanweaponry:stone_lance',
    'spartanweaponry:stone_battleaxe',
    'spartanweaponry:stone_flanged_mace',
    'spartanweaponry:stone_glaive',
    'spartanweaponry:stone_scythe',
    'spartanweaponry:stone_parrying_dagger',
    'spartanweaponry:iron_longsword',
    'spartanweaponry:iron_katana',
    'spartanweaponry:iron_saber',
    'spartanweaponry:iron_rapier',
    'spartanweaponry:iron_greatsword',
    'spartanweaponry:iron_dagger',
    'spartanweaponry:iron_javelin',
    'spartanweaponry:iron_throwing_knife',
    'spartanweaponry:iron_tomahawk',
    'spartanweaponry:iron_battle_hammer',
    'spartanweaponry:iron_warhammer',
    'spartanweaponry:iron_spear',
    'spartanweaponry:iron_halberd',
    'spartanweaponry:iron_pike',
    'spartanweaponry:iron_lance',
    'spartanweaponry:iron_battleaxe',
    'spartanweaponry:iron_flanged_mace',
    'spartanweaponry:iron_glaive',
    'spartanweaponry:iron_scythe',
    'spartanweaponry:iron_parrying_dagger',
    'spartanweaponry:steel_longsword',
    'spartanweaponry:steel_katana',
    'spartanweaponry:steel_saber',
    'spartanweaponry:steel_rapier',
    'spartanweaponry:steel_greatsword',
    'spartanweaponry:steel_dagger',
    'spartanweaponry:steel_javelin',
    'spartanweaponry:steel_throwing_knife',
    'spartanweaponry:steel_tomahawk',
    'spartanweaponry:steel_battle_hammer',
    'spartanweaponry:steel_warhammer',
    'spartanweaponry:steel_spear',
    'spartanweaponry:steel_halberd',
    'spartanweaponry:steel_pike',
    'spartanweaponry:steel_lance',
    'spartanweaponry:steel_battleaxe',
    'spartanweaponry:steel_flanged_mace',
    'spartanweaponry:steel_glaive',
    'spartanweaponry:steel_scythe',
    'spartanweaponry:steel_parrying_dagger',
    'spartanweaponry:golden_longsword',
    'spartanweaponry:golden_katana',
    'spartanweaponry:golden_saber',
    'spartanweaponry:golden_rapier',
    'spartanweaponry:golden_greatsword',
    'spartanweaponry:golden_dagger',
    'spartanweaponry:golden_javelin',
    'spartanweaponry:golden_throwing_knife',
    'spartanweaponry:golden_tomahawk',
    'spartanweaponry:golden_battle_hammer',
    'spartanweaponry:golden_warhammer',
    'spartanweaponry:golden_spear',
    'spartanweaponry:golden_halberd',
    'spartanweaponry:golden_pike',
    'spartanweaponry:golden_lance',
    'spartanweaponry:golden_battleaxe',
    'spartanweaponry:golden_flanged_mace',
    'spartanweaponry:golden_glaive',
    'spartanweaponry:golden_scythe',
    'spartanweaponry:golden_parrying_dagger',
    'spartanweaponry:diamond_longsword',
    'spartanweaponry:diamond_katana',
    'spartanweaponry:diamond_saber',
    'spartanweaponry:diamond_rapier',
    'spartanweaponry:diamond_greatsword',
    'spartanweaponry:diamond_dagger',
    'spartanweaponry:diamond_javelin',
    'spartanweaponry:diamond_throwing_knife',
    'spartanweaponry:diamond_tomahawk',
    'spartanweaponry:diamond_battle_hammer',
    'spartanweaponry:diamond_warhammer',
    'spartanweaponry:diamond_spear',
    'spartanweaponry:diamond_halberd',
    'spartanweaponry:diamond_pike',
    'spartanweaponry:diamond_lance',
    'spartanweaponry:diamond_battleaxe',
    'spartanweaponry:diamond_flanged_mace',
    'spartanweaponry:diamond_glaive',
    'spartanweaponry:diamond_scythe',
    'spartanweaponry:diamond_parrying_dagger',
  ];
  spartanWeaps.forEach(o => event.remove({ output: o }));

  // SPECIAL

  let cataclysmgear = [
    'cataclysm:gauntlet_of_guard', 'cataclysm:gauntlet_of_bulwark', 'cataclysm:gauntlet_of_maelstrom',
    'cataclysm:meat_shredder', 'cataclysm:laser_gatling', 'cataclysm:wither_assault_shoulder_weapon',
    'cataclysm:void_assault_shoulder_weapon', 'cataclysm:bone_reptile_chestplate', 'cataclysm:ignitium_helmet',
    'cataclysm:ignitium_elytra_chestplate', 'cataclysm:ignitium_chestplate', 'cataclysm:ignitium_leggings',
    'cataclysm:ignitium_boots', 'cataclysm:cursium_helmet', 'cataclysm:cursium_chestplate', 'cataclysm:cursium_leggings',
    'cataclysm:cursium_boots', 'cataclysm:bloom_stone_pauldrons', 'cataclysm:meat_shredder', 'cataclysm:gauntlet_of_guard',
    'cataclysm:black_steel_sword', 'cataclysm:black_steel_pickaxe', 'cataclysm:black_steel_axe', 'cataclysm:black_steel_shovel', 'cataclysm:black_steel_hoe'
  ]
  cataclysmgear.forEach(o => event.remove({ output: o }));

  // BLACK STEEL

  event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "ARMOR",
    "hammering": 7,
    "has_quality": true,
    "has_polishing": false,
    "key": {
      "#": {
        "item": "cataclysm:black_steel_nugget"
      },
      "X": {
        "item": "cataclysm:black_steel_ingot"
      },
      "Z": {
        "tag": "minecraft:planks"
      }
    },
    "pattern": [
      "#Z#",
      "ZXZ",
      "#Z#"
    ],
    "result": {
      "item": "cataclysm:black_steel_targe"
    },
    "show_notification": true
  });

  event.smithing(
    'magistuarmoryaddon:silvered_dark_bellows_maximilian_helmet',
    'magistuarmory:darkening_template',
    'magistuarmoryaddon:bellows_maximilian_helmet',
    'galosphere:silver_ingot'
  );

  event.smithing(
    'magistuarmoryaddon:silvered_dark_half_armor',
    'magistuarmory:darkening_template',
    'magistuarmory:halfarmor_chestplate',
    'galosphere:silver_ingot'
  );

  event.smithing(
    'magistuarmoryaddon:dark_gilded_parade_burgonet',
    'magistuarmory:darkening_template',
    'magistuarmoryaddon:embosed_parade_burgonet',
    'minecraft:gold_ingot'
  );

  event.smithing(
    'magistuarmoryaddon:dark_gilded_parade_chestplate',
    'magistuarmory:darkening_template',
    'magistuarmoryaddon:embosed_parade_chestplate',
    'minecraft:gold_ingot'
  );

  event.smithing(
    'magistuarmoryaddon:dark_gilded_parade_boots',
    'magistuarmory:darkening_template',
    'magistuarmoryaddon:embosed_parade_boots',
    'minecraft:gold_ingot'
  );

  // IRON & STEEL
  let ironsteel = [
    "iron",
    "steel",
    "diamond"
  ];

  ironsteel.forEach(type => {

    // VANILLA

    event.custom({
      "type": "overgeared:crafting_shapeless",
      "category": "equipment",
      "ingredients": [
        {
          "item": `overgeared:${type}_sword_blade`
        },
        {
          "item": "spartanweaponry:handle"
        }
      ],
      "result": {
        "item": `minecraft:${type}_sword`
      }
    })

    event.custom({
      "type": "overgeared:crafting_shapeless",
      "category": "equipment",
      "ingredients": [
        {
          "item": `overgeared:${type}_sword_blade`
        },
        {
          "item": "spartanweaponry:handle"
        }
      ],
      "result": {
        "item": `overgeared:${type}_sword`
      }
    })

    // DAGGER
    event.custom({
      "type": "overgeared:crafting_shapeless",
      "category": "equipment",
      "ingredients": [
        {
          "item": `kubejs:${type}_blade`
        },
        {
          "item": "spartanweaponry:handle"
        }
      ],
      "result": {
        "item": `spartanweaponry:${type}_dagger`
      }
    })
    // LONGSWORD
    event.custom({
      "type": "overgeared:crafting_shapeless",
      "category": "equipment",
      "ingredients": [
        {
          "item": `kubejs:${type}_longsword_blade`
        },
        {
          "item": "spartanweaponry:handle"
        }
      ],
      "result": {
        "item": `spartanweaponry:${type}_longsword`
      }
    })
    // KATANA
    event.custom({
      "type": "overgeared:crafting_shapeless",
      "category": "equipment",
      "ingredients": [
        {
          "item": `kubejs:${type}_curved_blade`
        },
        {
          "item": "magistuarmory:leather_strip"
        },
        {
          "item": "spartanweaponry:handle"
        }
      ],
      "result": {
        "item": `spartanweaponry:${type}_katana`
      }
    })
    // SABER
    event.custom({
      "type": "overgeared:crafting_shapeless",
      "category": "equipment",
      "ingredients": [
        {
          "item": `kubejs:${type}_curved_blade`
        },
        {
          "item": "spartanweaponry:handle"
        }
      ],
      "result": {
        "item": `spartanweaponry:${type}_saber`
      }
    })
    // GREATSWORD
    event.custom({
      "type": "overgeared:crafting_shapeless",
      "category": "equipment",
      "ingredients": [
        {
          "item": `kubejs:${type}_greatsword_blade`
        },
        {
          "item": "spartanweaponry:handle"
        }
      ],
      "result": {
        "item": `spartanweaponry:${type}_greatsword`
      }
    })
    // BATTLE HAMMER
    event.custom({
      "type": "overgeared:crafting_shapeless",
      "category": "equipment",
      "ingredients": [
        {
          "item": `kubejs:${type}_battle_hammer_head`
        },
        {
          "item": "spartanweaponry:handle"
        }
      ],
      "result": {
        "item": `spartanweaponry:${type}_battle_hammer`
      }
    })
    // WARHAMMER
    event.custom({
      "type": "overgeared:crafting_shapeless",
      "category": "equipment",
      "ingredients": [
        {
          "item": `kubejs:${type}_warhammer_head`
        },
        {
          "item": "spartanweaponry:handle"
        }
      ],
      "result": {
        "item": `spartanweaponry:${type}_warhammer`
      }
    })
    // SPEAR
    event.custom({
      "type": "overgeared:crafting_shapeless",
      "category": "equipment",
      "ingredients": [
        {
          "item": `kubejs:${type}_spearhead`
        },
        {
          "item": "spartanweaponry:pole"
        }
      ],
      "result": {
        "item": `spartanweaponry:${type}_spear`
      }
    })
    // HALBERD
    event.custom({
      "type": "overgeared:crafting_shapeless",
      "category": "equipment",
      "ingredients": [
        {
          "item": `kubejs:${type}_halberd_head`
        },
        {
          "item": "spartanweaponry:pole"
        }
      ],
      "result": {
        "item": `spartanweaponry:${type}_halberd`
      }
    })
    // PIKE
    event.custom({
      "type": "overgeared:crafting_shapeless",
      "category": "equipment",
      "ingredients": [
        {
          "item": `kubejs:${type}_spearhead`
        },
        {
          "item": "spartanweaponry:handle"
        },
        {
          "item": "spartanweaponry:pole"
        }
      ],
      "result": {
        "item": `spartanweaponry:${type}_pike`
      }
    })
    // THROWING KNIFE
    event.custom({
      "type": "overgeared:crafting_shapeless",
      "category": "equipment",
      "ingredients": [
        {
          "item": `kubejs:${type}_blade`
        },
        {
          "item": "magistuarmory:leather_strip"
        },
        {
          "item": "spartanweaponry:handle"
        }
      ],
      "result": {
        "item": `spartanweaponry:${type}_throwing_knife`
      }
    })
    // TOMAHAWK
    event.custom({
      "type": "overgeared:crafting_shapeless",
      "category": "equipment",
      "ingredients": [
        {
          "item": `overgeared:${type}_axe_head`
        },
        {
          "item": "magistuarmory:leather_strip"
        },
        {
          "item": "spartanweaponry:handle"
        }
      ],
      "result": {
        "item": `spartanweaponry:${type}_tomahawk`
      }
    })
    event.custom({
      "type": "overgeared:crafting_shapeless",
      "category": "equipment",
      "ingredients": [
        {
          "item": `kubejs:${type}_axe_head`
        },
        {
          "item": "magistuarmory:leather_strip"
        },
        {
          "item": "spartanweaponry:handle"
        }
      ],
      "result": {
        "item": `spartanweaponry:${type}_tomahawk`
      }
    })
    // JAVELIN
    event.custom({
      "type": "overgeared:crafting_shapeless",
      "category": "equipment",
      "ingredients": [
        {
          "item": `kubejs:${type}_spearhead`
        },
        {
          "item": "magistuarmory:leather_strip"
        },
        {
          "item": "spartanweaponry:pole"
        }
      ],
      "result": {
        "item": `spartanweaponry:${type}_javelin`
      }
    })
    // BATTLEAXE
    event.custom({
      "type": "overgeared:crafting_shapeless",
      "category": "equipment",
      "ingredients": [
        {
          "item": `kubejs:${type}_battleaxe_head`
        },
        {
          "item": "spartanweaponry:handle"
        }
      ],
      "result": {
        "item": `spartanweaponry:${type}_battleaxe`
      }
    })
    // FLANGED MACE
    event.custom({
      "type": "overgeared:crafting_shapeless",
      "category": "equipment",
      "ingredients": [
        {
          "item": `kubejs:${type}_flanged_mace_head`
        },
        {
          "item": "spartanweaponry:handle"
        }
      ],
      "result": {
        "item": `spartanweaponry:${type}_flanged_mace`
      }
    })
    // GLAIVE
    event.custom({
      "type": "overgeared:crafting_shapeless",
      "category": "equipment",
      "ingredients": [
        {
          "item": `kubejs:${type}_curved_blade`
        },
        {
          "item": "spartanweaponry:pole"
        }
      ],
      "result": {
        "item": `spartanweaponry:${type}_glaive`
      }
    })
    // SCYTHE
    event.custom({
      "type": "overgeared:crafting_shapeless",
      "category": "equipment",
      "ingredients": [
        {
          "item": `kubejs:${type}_curved_blade`
        },
        {
          "item": "magistuarmory:leather_strip"
        },
        {
          "item": "spartanweaponry:pole"
        }
      ],
      "result": {
        "item": `spartanweaponry:${type}_scythe`
      }
    })
    // PARRYING DAGGER
    event.custom({
      "type": "overgeared:crafting_shapeless",
      "category": "equipment",
      "ingredients": [
        {
          "item": `kubejs:${type}_blade`
        },
        {
          "tag": `forge:ingots/${type}`
        },
        {
          "item": "spartanweaponry:handle"
        }
      ],
      "result": {
        "item": `spartanweaponry:${type}_parrying_dagger`
      }
    })
    // RAPIER
    event.custom({
      "type": "overgeared:crafting_shapeless",
      "category": "equipment",
      "ingredients": [
        {
          "item": `overgeared:${type}_sword_blade`
        },
        {
          "tag": `forge:ingots/${type}`
        },
        {
          "item": "spartanweaponry:handle"
        }
      ],
      "result": {
        "item": `spartanweaponry:${type}_rapier`
      }
    })
    event.custom({
      "type": "overgeared:crafting_shapeless",
      "category": "equipment",
      "ingredients": [
        {
          "item": `kubejs:${type}_sword_blade`
        },
        {
          "tag": `forge:ingots/${type}`
        },
        {
          "item": "spartanweaponry:handle"
        }
      ],
      "result": {
        "item": `spartanweaponry:${type}_rapier`
      }
    })
    // LANCE
    event.custom({
      "type": "overgeared:crafting_shapeless",
      "category": "equipment",
      "ingredients": [
        {
          "item": `kubejs:${type}_spearhead`
        },
        {
          "tag": `forge:ingots/${type}`
        },
        {
          "item": "spartanweaponry:pole"
        }
      ],
      "result": {
        "item": `spartanweaponry:${type}_lance`
      }
    })
  });

  event.custom({
    "type": "overgeared:forging",
    "blueprint": "WEAPON",
    "hammering": 5,
    "has_quality": true,
    "has_polishing": false,
    "need_quenching": false,
    "category": "equipment",
    "pattern": [
      "IF",
      "is"
    ],
    "key": {
      "I": {
        "item": "minecraft:iron_ingot"
      },
      "i": {
        "item": "minecraft:iron_nugget"
      },
      "F": {
        "item": "minecraft:flint_and_steel"
      },
      "s": {
        "item": "spartanweaponry:handle"
      }
    },
    "result": {
      "item": "musketmod:pistol"
    },
    "show_notification": true
  })

  event.custom({
    "type": "overgeared:forging",
    "blueprint": "WEAPON",
    "hammering": 6,
    "has_quality": true,
    "has_polishing": false,
    "need_quenching": false,
    "category": "equipment",
    "pattern": [
      "I  ",
      " IF",
      " iP"
    ],
    "key": {
      "I": {
        "item": "minecraft:iron_ingot"
      },
      "i": {
        "item": "minecraft:iron_nugget"
      },
      "F": {
        "item": "minecraft:flint_and_steel"
      },
      "P": {
        "tag": "minecraft:planks"
      }
    },
    "result": {
      "item": "musketmod:musket"
    },
    "show_notification": true
  })

  event.custom({
    "type": "overgeared:forging",
    "blueprint": "WEAPON",
    "hammering": 7,
    "has_polishing": false,
    "has_quality": true,
    "need_quenching": false,
    "category": "equipment",
    "pattern": [
      "C  ",
      " CF",
      " iP"
    ],
    "key": {
      "C": {
        "item": "minecraft:copper_ingot"
      },
      "i": {
        "item": "minecraft:iron_nugget"
      },
      "F": {
        "item": "minecraft:flint_and_steel"
      },
      "P": {
        "tag": "minecraft:planks"
      }
    },
    "result": {
      "item": "musketmod:blunderbuss"
    },
    "show_notification": true
  })
});