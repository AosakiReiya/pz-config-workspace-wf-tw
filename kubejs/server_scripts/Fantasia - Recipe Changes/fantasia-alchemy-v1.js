ServerEvents.recipes(event => {

  //awkward pot

  event.custom({
    "type": "hexerei:fluid_mixing",
    "input": {
      "fluid": "minecraft:water"
    },
    "ingredients": [
      {
        "item": "medieval_healing:raw_herbal_mix"
      },
      {
        "item": "medieval_healing:raw_herbal_mix"
      },
      {
        "item": "medieval_healing:raw_herbal_mix"
      },
      {
        "item": "medieval_healing:raw_herbal_mix"
      }
    ],
    "output": {
      "fluid": "hexerei:potion",
      "nbt": {
        "Bottle": "REGULAR",
        "Potion": "minecraft:awkward"
      }
    },
    "heatRequirement": "heated"
  });

  // arcane solution

  event.custom({
    "type": "hexerei:pestle_and_mortar",
    "ingredients": [
      {
        "item": "irons_spellbooks:arcane_essence"
      },
      [
        { item: "minecraft:amethyst_shard" }, { item: "minecraft:lapis_lazuli" }
      ],
      [
        { item: "hexerei:dried_sage" }, { item: "hexerei:dried_mugwort_flowers" }, { item: "hexerei:dried_mugwort_leaves" }, { item: "hexerei:dried_yellow_dock_flowers" }, { item: "hexerei:dried_yellow_dock_leaves" }
      ]
    ],
    "output": {
      "item": "kubejs:arcane_mix",
      "count": 1
    },
    "grindingTime": 200
  });

  event.custom({
    "type": "hexerei:fluid_mixing",
    "input": {
      "fluid": "hexerei:potion",
      "nbt": {
        "Bottle": "REGULAR",
        "Potion": "irons_spellbooks:instant_mana_two"
      }
    },
    "ingredients": [
      {
        "item": "kubejs:arcane_mix"
      }
    ],
    "output": {
      "fluid": "kubejs:solution_arcane_fluid"
    },
    "heatRequirement": "heated"
  });

  event.custom({
    "type": "hexerei:cauldron_emptying",
    "input": {
      "item": "minecraft:glass_bottle"
    },
    "fluid": {
      "fluid": "kubejs:solution_arcane_fluid",
      "amount": 500
    },
    "output": {
      "item": "kubejs:solution_arcane",
      "count": 1
    }
  });

  // nature solution

  event.custom({
    "type": "hexerei:pestle_and_mortar",
    "ingredients": [
      {
        "item": "minecraft:lapis_lazuli"
      },
      [
        { item: "minecraft:pufferfish" }, { item: "minecraft:fermented_spider_eye" }, { item: "mowziesmobs:naga_fang" }, { item: "alexsmobs:komodo_spit" }
      ],
      [
        { item: "hexerei:dried_belladonna_flowers" }, { item: "hexerei:dried_mandrake_flowers" }, { item: "windswept:holly_berries" }, { item: "minecraft:poisonous_potato" }
      ]
    ],
    "output": {
      "item": "kubejs:nature_mix",
      "count": 1
    },
    "grindingTime": 200
  });

  event.custom({
    "type": "hexerei:fluid_mixing",
    "input": {
      "fluid": "kubejs:solution_arcane_fluid"
    },
    "ingredients": [
      {
        "item": "kubejs:nature_mix"
      }
    ],
    "output": {
      "fluid": "kubejs:solution_nature_fluid"
    },
    "heatRequirement": "heated"
  });

  event.custom({
    "type": "hexerei:cauldron_emptying",
    "input": {
      "item": "minecraft:glass_bottle"
    },
    "fluid": {
      "fluid": "kubejs:solution_nature_fluid",
      "amount": 500
    },
    "output": {
      "item": "kubejs:solution_nature",
      "count": 1
    }
  });

  // fire solution

  event.custom({
    "type": "hexerei:pestle_and_mortar",
    "ingredients": [
      {
        "item": "minecraft:quartz"
      },
      [
        { item: "minecraft:blaze_rod" }, { item: "cataclysm:dying_ember" }, { item: "tide:magma_mackerel" }, { item: "tide:blazing_swordfish" }
      ],
      [
        { item: "minecraft:blaze_powder" }, { item: "mynethersdelight:bullet_pepper" }, { item: "minecraft:fire_charge" }, { item: "spelunkery:sulfur" }
      ]
    ],
    "output": {
      "item": "kubejs:fire_mix",
      "count": 1
    },
    "grindingTime": 200
  });

  event.custom({
    "type": "hexerei:fluid_mixing",
    "input": {
      "fluid": "kubejs:solution_arcane_fluid"
    },
    "ingredients": [
      {
        "item": "kubejs:fire_mix"
      }
    ],
    "output": {
      "fluid": "kubejs:solution_fire_fluid"
    },
    "heatRequirement": "heated"
  });

  event.custom({
    "type": "hexerei:cauldron_emptying",
    "input": {
      "item": "minecraft:glass_bottle"
    },
    "fluid": {
      "fluid": "kubejs:solution_fire_fluid",
      "amount": 500
    },
    "output": {
      "item": "kubejs:solution_fire",
      "count": 1
    }
  });

  // ice solution

  event.custom({
    "type": "hexerei:pestle_and_mortar",
    "ingredients": [
      {
        "item": "minecraft:lapis_lazuli"
      },
      [
        { item: "windswept:snowdrop" }, { item: "windswept:frozen_branch" }, { item: "irons_spellbooks:frozen_bone" }, { item: "alexsmobs:froststalker_horn" }
      ],
      [
        { item: "windswept:wild_berries" }, { item: "windswept:icicles" }, { item: "regions_unexplored:duskmelon_slice" }
      ]
    ],
    "output": {
      "item": "kubejs:ice_mix",
      "count": 1
    },
    "grindingTime": 200
  });

  event.custom({
    "type": "hexerei:fluid_mixing",
    "input": {
      "fluid": "kubejs:solution_arcane_fluid"
    },
    "ingredients": [
      {
        "item": "kubejs:ice_mix"
      }
    ],
    "output": {
      "fluid": "kubejs:solution_ice_fluid"
    },
    "heatRequirement": "heated"
  });

  event.custom({
    "type": "hexerei:cauldron_emptying",
    "input": {
      "item": "minecraft:glass_bottle"
    },
    "fluid": {
      "fluid": "kubejs:solution_ice_fluid",
      "amount": 500
    },
    "output": {
      "item": "kubejs:solution_ice",
      "count": 1
    }
  });

  // lightning solution

  event.custom({
    "type": "hexerei:pestle_and_mortar",
    "ingredients": [
      {
        "item": "galosphere:allurite_shard"
      },
      [
        { item: "tide:cave_eel" }, { item: "irons_spellbooks:lightning_bottle" }, { item: "spelunkery:raw_magnetite" }, { item: "quark:bottled_cloud" }
      ],
      [
        { item: "spelunkery:copper_nugget" }, { item: "numismatic-overhaul:bronze_coin" }, { item: "hexerei:mugwort_leaves" }, { item: "hexerei:yellow_dock_leaves" }
      ]
    ],
    "output": {
      "item": "kubejs:lightning_mix",
      "count": 1
    },
    "grindingTime": 200
  });

  event.custom({
    "type": "hexerei:fluid_mixing",
    "input": {
      "fluid": "kubejs:solution_arcane_fluid"
    },
    "ingredients": [
      {
        "item": "kubejs:lightning_mix"
      }
    ],
    "output": {
      "fluid": "kubejs:solution_lightning_fluid"
    },
    "heatRequirement": "heated"
  });

  event.custom({
    "type": "hexerei:cauldron_emptying",
    "input": {
      "item": "minecraft:glass_bottle"
    },
    "fluid": {
      "fluid": "kubejs:solution_lightning_fluid",
      "amount": 500
    },
    "output": {
      "item": "kubejs:solution_lightning",
      "count": 1
    }
  });

  // ender solution

  event.custom({
    "type": "hexerei:pestle_and_mortar",
    "ingredients": [
      {
        "item": "galosphere:allurite_shard"
      },
      {
        "item": "minecraft:ender_eye"
      },
      {
        "item": "minecraft:ender_pearl"
      }
    ],
    "output": {
      "item": "kubejs:ender_mix",
      "count": 1
    },
    "grindingTime": 200
  });

  event.custom({
    "type": "hexerei:fluid_mixing",
    "input": {
      "fluid": "kubejs:solution_arcane_fluid"
    },
    "ingredients": [
      {
        "item": "kubejs:ender_mix"
      }
    ],
    "output": {
      "fluid": "kubejs:solution_ender_fluid"
    },
    "heatRequirement": "heated"
  });

  event.custom({
    "type": "hexerei:cauldron_emptying",
    "input": {
      "item": "minecraft:glass_bottle"
    },
    "fluid": {
      "fluid": "kubejs:solution_ender_fluid",
      "amount": 500
    },
    "output": {
      "item": "kubejs:solution_ender",
      "count": 1
    }
  });

  // holy mix

  event.custom({
    "type": "hexerei:pestle_and_mortar",
    "ingredients": [
      {
        "item": "galosphere:allurite_shard"
      },
      [
        { item: "galosphere:golden_lichen_cordyceps" }, { item: "galosphere:lumiere_shard" }, { item: "miningmaster:divine_beryl" }, { item: "irons_spellbooks:divine_pearl" }
      ],
      [
        { item: "mca:rose_gold_dust" }, { item: "spelunkery:diamond_shard" }, { item: "minecraft:golden_apple" }, { item: "spelunkery:salt" }
      ]
    ],
    "output": {
      "item": "kubejs:holy_mix",
      "count": 1
    },
    "grindingTime": 200
  });

  event.custom({
    "type": "hexerei:fluid_mixing",
    "input": {
      "fluid": "kubejs:solution_arcane_fluid"
    },
    "ingredients": [
      {
        "item": "kubejs:holy_mix"
      }
    ],
    "output": {
      "fluid": "kubejs:solution_holy_fluid"
    },
    "heatRequirement": "heated"
  });

  event.custom({
    "type": "hexerei:cauldron_emptying",
    "input": {
      "item": "minecraft:glass_bottle"
    },
    "fluid": {
      "fluid": "kubejs:solution_holy_fluid",
      "amount": 500
    },
    "output": {
      "item": "kubejs:solution_holy",
      "count": 1
    }
  });

  // protection mix

  event.custom({
    "type": "hexerei:pestle_and_mortar",
    "ingredients": [
      {
        "item": "galosphere:allurite_shard"
      },
      [
        { item: "miningmaster:unbreaking_iolite" }, { item: "irons_spellbooks:permafrost_shard" }, { item: "irons_spellbooks:mithril_scrap" }, { item: "kubejs:diamond_alloy_blend" }
      ],
      [
        { item: "magistuarmory:steel_ring" }, { item: "overgeared:steel_nugget" }, { item: "numismatic-overhaul:silver_coin" }, { item: "galosphere:silver_nugget" }
      ]
    ],
    "output": {
      "item": "kubejs:protection_mix",
      "count": 1
    },
    "grindingTime": 200
  });

  event.custom({
    "type": "hexerei:fluid_mixing",
    "input": {
      "fluid": "kubejs:solution_arcane_fluid"
    },
    "ingredients": [
      {
        "item": "kubejs:protection_mix"
      }
    ],
    "output": {
      "fluid": "kubejs:solution_protection_fluid"
    },
    "heatRequirement": "heated"
  });

  event.custom({
    "type": "hexerei:cauldron_emptying",
    "input": {
      "item": "minecraft:glass_bottle"
    },
    "fluid": {
      "fluid": "kubejs:solution_protection_fluid",
      "amount": 500
    },
    "output": {
      "item": "kubejs:solution_protection",
      "count": 1
    }
  });

  // recovery mix

  event.custom({
    "type": "hexerei:pestle_and_mortar",
    "ingredients": [
      {
        "item": "minecraft:lapis_lazuli"
      },
      [
        { item: "irons_spellbooks:ice_venom_vial" }, { item: "galosphere:allurite_cluster" }, { item: "quark:white_corundum_cluster" }, { item: "hexerei:selenite_shard" }
      ],
      [
        { item: "hexerei:sage" }, { item: "spawn:sunflower" }, { item: "hearthandharvest:raspberry" }, { item: "windswept:yellow_rose" }
      ]
    ],
    "output": {
      "item": "kubejs:recovery_mix",
      "count": 1
    },
    "grindingTime": 200
  });

  event.custom({
    "type": "hexerei:fluid_mixing",
    "input": {
      "fluid": "kubejs:solution_arcane_fluid"
    },
    "ingredients": [
      {
        "item": "kubejs:recovery_mix"
      }
    ],
    "output": {
      "fluid": "kubejs:solution_cooldown_fluid"
    },
    "heatRequirement": "heated"
  });

  event.custom({
    "type": "hexerei:cauldron_emptying",
    "input": {
      "item": "minecraft:glass_bottle"
    },
    "fluid": {
      "fluid": "kubejs:solution_cooldown_fluid",
      "amount": 500
    },
    "output": {
      "item": "kubejs:solution_cooldown",
      "count": 1
    }
  });

  // evoker mix

  event.custom({
    "type": "hexerei:pestle_and_mortar",
    "ingredients": [
      {
        "item": "irons_spellbooks:arcane_essence"
      },
      [
        { item: "minecraft:totem_of_undying" }, { item: "minecraft:experience_bottle" }, { item: "takesapillage:ravager_horn" }, { item: "spartanweaponry:illager_head" }
      ],
      [
        { item: "spelunkery:emerald_shard" }, { item: "galosphere:silver_nugget" }, { item: "minecraft:gold_nugget" }, { item: "cataclysm:black_steel_nugget" }
      ]
    ],
    "output": {
      "item": "kubejs:evocation_mix",
      "count": 1
    },
    "grindingTime": 200
  });

  event.custom({
    "type": "hexerei:fluid_mixing",
    "input": {
      "fluid": "kubejs:solution_arcane_fluid"
    },
    "ingredients": [
      {
        "item": "kubejs:evocation_mix"
      }
    ],
    "output": {
      "fluid": "kubejs:solution_evocation_fluid"
    },
    "heatRequirement": "heated"
  });

  event.custom({
    "type": "hexerei:cauldron_emptying",
    "input": {
      "item": "minecraft:glass_bottle"
    },
    "fluid": {
      "fluid": "kubejs:solution_evocation_fluid",
      "amount": 500
    },
    "output": {
      "item": "kubejs:solution_evocation",
      "count": 1
    }
  });

  // blood mix

  event.custom({
    "type": "hexerei:pestle_and_mortar",
    "ingredients": [
      {
        "item": "irons_spellbooks:arcane_essence"
      },
      [
        { item: "species:ghoul_tongue" }, { item: "irons_spellbooks:bloody_vellum" }, { item: "alexsmobs:blood_sac" }, { item: "minecraft:zombie_head" }
      ],
      [
        { item: "minecraft:rotten_flesh" }, { item: "netherexp:wraithing_flesh" }
      ]
    ],
    "output": {
      "item": "kubejs:blood_mix",
      "count": 1
    },
    "grindingTime": 200
  });

  event.custom({
    "type": "hexerei:fluid_mixing",
    "input": {
      "fluid": "kubejs:solution_arcane_fluid"
    },
    "ingredients": [
      {
        "item": "kubejs:blood_mix"
      }
    ],
    "output": {
      "fluid": "kubejs:solution_blood_fluid"
    },
    "heatRequirement": "heated"
  });

  event.custom({
    "type": "hexerei:cauldron_emptying",
    "input": {
      "item": "minecraft:glass_bottle"
    },
    "fluid": {
      "fluid": "kubejs:solution_blood_fluid",
      "amount": 500
    },
    "output": {
      "item": "kubejs:solution_blood",
      "count": 1
    }
  });

})