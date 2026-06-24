ServerEvents.recipes(event => {

  event.custom({
    "type": "overgeared:forging",
    "hammering": 6,
    "has_quality": false,
    "has_polishing": false,
    "category": "equipment",
    "key": {
      "#": {
        "item": "kubejs:diamond_ingot"
      }
    },
    "pattern": [
      "#"
    ],
    "result": {
      "item": "kubejs:diamond_plate"
    },
    "show_notification": true
  });

  let quickDiaTools = [
    "pickaxe",
    "axe",
    "shovel",
    "hoe"
  ]

  event.custom({
    "type": "overgeared:crafting_shapeless",
    "category": "equipment",
    "ingredients": [
      {
        "item": "kubejs:diamond_sword_blade"
      },
      {
        "item": "spartanweaponry:handle"
      }
    ],
    "result": {
      "item": "minecraft:diamond_sword"
    }
  })

  quickDiaTools.forEach(type => {

    event.custom({
      "type": "overgeared:crafting_shapeless",
      "category": "equipment",
      "ingredients": [
        {
          "item": `kubejs:diamond_${type}_head`
        },
        {
          "item": "spartanweaponry:handle"
        }
      ],
      "result": {
        "item": `minecraft:diamond_${type}`
      }
    })
  })

  event.custom({
    "type": "overgeared:crafting_shapeless",
    "category": "equipment",
    "ingredients": [
      {
        "item": "kubejs:diamond_hammer_head"
      },
      {
        "item": "spartanweaponry:handle"
      }
    ],
    "result": {
      "item": "simplest_hammers:diamond_hammer"
    }
  })

  event.custom({
    "type": "overgeared:crafting_shapeless",
    "category": "equipment",
    "ingredients": [
      {
        "item": "kubejs:diamond_cleaver_blade"
      },
      {
        "item": "spartanweaponry:handle"
      }
    ],
    "result": {
      "item": "hearthandharvest:diamond_cleaver"
    }
  })

  event.custom({
    "type": "overgeared:crafting_shapeless",
    "category": "equipment",
    "ingredients": [
      {
        "item": `kubejs:diamond_excavator_head`
      },
      {
        "item": "spartanweaponry:handle"
      }
    ],
    "result": {
      "item": "simplest_excavators:diamond_excavator"
    }
  })

  event.custom({
    "type": "overgeared:forging",
    "blueprint": "ARMOR",
    "hammering": 5,
    "has_quality": true,
    "has_polishing": false,
    "needs_quenching": false,
    "category": "equipment",
    "key": {
      "#": {
        "item": "kubejs:diamond_plate"
      }
    },
    "pattern": [
      "###",
      "# #"
    ],
    "result": {
      "item": "minecraft:diamond_helmet"
    },
    "show_notification": true
  });

  event.custom({
    "type": "overgeared:forging",
    "blueprint": "ARMOR",
    "hammering": 8,
    "has_quality": true,
    "has_polishing": false,
    "needs_quenching": false,
    "category": "equipment",
    "key": {
      "#": {
        "item": "kubejs:diamond_plate"
      }
    },
    "pattern": [
      "# #",
      "###",
      "###"
    ],
    "result": {
      "item": "minecraft:diamond_chestplate"
    },
    "show_notification": true
  });

  event.custom({
    "type": "overgeared:forging",
    "blueprint": "ARMOR",
    "hammering": 7,
    "has_quality": true,
    "has_polishing": false,
    "needs_quenching": false,
    "category": "equipment",
    "key": {
      "#": {
        "item": "kubejs:diamond_plate"
      }
    },
    "pattern": [
      "###",
      "# #",
      "# #"
    ],
    "result": {
      "item": "minecraft:diamond_leggings"
    },
    "show_notification": true
  });

  event.custom({
    "type": "overgeared:forging",
    "blueprint": "ARMOR",
    "hammering": 6,
    "has_quality": true,
    "has_polishing": false,
    "needs_quenching": false,
    "category": "equipment",
    "key": {
      "#": {
        "item": "kubejs:diamond_plate"
      }
    },
    "pattern": [
      "# #",
      "# #"
    ],
    "result": {
      "item": "minecraft:diamond_boots"
    },
    "show_notification": true
  });

  event.custom({
    "type": "overgeared:forging",
    "blueprint": "ARMOR",
    "hammering": 6,
    "has_quality": true,
    "has_polishing": false,
    "needs_quenching": false,
    "category": "equipment",
    "key": {
      "#": {
        "item": "kubejs:diamond_plate"
      },
      "i": {
        "item": "overgeared:steel_ingot"
      }
    },
    "pattern": [
      "###",
      "#i#",
      "###"
    ],
    "result": {
      "item": "shieldexp:diamond_shield"
    },
    "show_notification": true
  });

  event.custom({
    "type": "overgeared:forging",
    "blueprint": "FINER_TOOL",
    "requires_blueprint": true,
    "hammering": 6,
    "has_quality": true,
    "category": "equipment",
    "key": {
      "#": {
        "item": "kubejs:diamond_ingot"
      }
    },
    "pattern": [
      "###",
      "###",
      " # "
    ],
    "result": {
      "item": "kubejs:diamond_hammer_head"
    },
    "show_notification": true
  });

  event.custom({
    "type": "overgeared:forging",
    "blueprint": "FINER_TOOL",
    "requires_blueprint": true,
    "hammering": 6,
    "has_quality": true,
    "category": "equipment",
    "key": {
      "#": {
        "item": "kubejs:diamond_ingot"
      },
      "O": {
        "item": "kubejs:diamond_plate"
      }
    },
    "pattern": [
      "OOO",
      "OOO",
      " # "
    ],
    "result": {
      "item": "kubejs:diamond_excavator_head"
    },
    "show_notification": true
  });

  event.custom({
    "type": "overgeared:forging",
    "blueprint": "TOOL",
    "hammering": 5,
    "has_quality": true,
    "category": "equipment",
    "key": {
      "#": {
        "item": "kubejs:heated_diamond_plate"
      }
    },
    "pattern": [
      "#",
      "#"
    ],
    "result": {
      "item": "kubejs:diamond_cleaver_blade"
    },
    "show_notification": true
  });

});