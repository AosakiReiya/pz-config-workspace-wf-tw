ServerEvents.recipes(event => {

  // grease ball
  event.remove({ id: 'spartanweaponry:grease_ball' })

  event.custom(
    {
      "type": "hexerei:mixingcauldron",
      "liquid": {
        "fluid": "hexerei:tallow_fluid"
      },
      "ingredients": [
        {
          "tag": "c:seeds"
        },
        {
          "tag": "c:seeds"
        },
        {
          "tag": "c:seeds"
        },
        {
          "tag": "c:seeds"
        },
        {
          "tag": "c:seeds"
        },
        {
          "tag": "c:seeds"
        },
        {
          "tag": "c:seeds"
        },
        {
          "tag": "c:seeds"
        }
      ],
      "output": {
        "item": "kubejs:grease_ball",
        "count": 8
      },
      "liquidOutput": {
        "fluid": "hexerei:tallow_fluid"
      },
      "fluidLevelsConsumed": 2000
    })

  event.shapeless(
    Item.of('spartanweaponry:weapon_oil', 3, '{Oil:{Effect:"spartanweaponry:none"}}'), [
    'kubejs:grease_ball',
    'minecraft:glass_bottle',
    'minecraft:glass_bottle',
    'minecraft:glass_bottle'
  ])

  // weapon oil
  //brewing
  event.custom({
    "type": "hexerei:fluid_mixing",
    "input": {
      "fluid": "minecraft:water"
    },
    "ingredients": [
      { "item": "kubejs:grease_ball" }
    ],
    "output": {
      "fluid": "kubejs:weapon_oil_base"
    },
    "heatRequirement": "heated"
  });

  //emptying
  event.custom({
    "type": "hexerei:cauldron_emptying",
    "input": {
      "item": "minecraft:glass_bottle"
    },
    "fluid": {
      "fluid": "kubejs:weapon_oil_base",
      "amount": 500
    },
    "output": {
      "item": "spartanweaponry:weapon_oil",
      "count": 1
    }
  });

  //filling
  event.custom({
    "type": "hexerei:cauldron_filling",
    "input": {
      "item": "spartanweaponry:weapon_oil",
      "count": 1
    },
    "output": {
      "item": "minecraft:glass_bottle",
      "count": 1
    },
    "fluid": {
      "fluid": "kubejs:weapon_oil_base",
      "amount": 500
    }
  });

  // hallowed oil
  //brewing
  event.custom({
    "type": "hexerei:fluid_mixing",
    "input": {
      "fluid": "kubejs:weapon_oil_base"
    },
    "ingredients": [
      { "item": "minecraft:glistering_melon_slice" }
    ],
    "output": {
      "fluid": "kubejs:hallowed_oil"
    },
    "heatRequirement": "heated"
  });

  //emptying
  event.custom({
    "type": "hexerei:cauldron_emptying",
    "input": {
      "item": "minecraft:glass_bottle"
    },
    "fluid": {
      "fluid": "kubejs:hallowed_oil",
      "amount": 500
    },
    "output": {
      "item": "spartanweaponry:weapon_oil",
      "nbt": "{Oil: {Effect: \"spartanweaponry:undead\"}}",
      "count": 1
    }
  });

  // arthro oil
  //brewing
  event.custom({
    "type": "hexerei:fluid_mixing",
    "input": {
      "fluid": "kubejs:weapon_oil_base"
    },
    "ingredients": [
      { "item": "windswept:lavender" }
    ],
    "output": {
      "fluid": "kubejs:arthro_oil"
    },
    "heatRequirement": "heated"
  });

  //emptying
  event.custom({
    "type": "hexerei:cauldron_emptying",
    "input": {
      "item": "minecraft:glass_bottle"
    },
    "fluid": {
      "fluid": "kubejs:arthro_oil",
      "amount": 500
    },
    "output": {
      "item": "spartanweaponry:weapon_oil",
      "nbt": "{Oil: {Effect: \"spartanweaponry:arthropod\"}}",
      "count": 1
    }
  });

  // cryotic oil
  //brewing
  event.custom({
    "type": "hexerei:fluid_mixing",
    "input": {
      "fluid": "kubejs:weapon_oil_base"
    },
    "ingredients": [
      { "item": "minecraft:packed_ice" }
    ],
    "output": {
      "fluid": "kubejs:cryotic_oil"
    },
    "heatRequirement": "heated"
  });

  //emptying
  event.custom({
    "type": "hexerei:cauldron_emptying",
    "input": {
      "item": "minecraft:glass_bottle"
    },
    "fluid": {
      "fluid": "kubejs:cryotic_oil",
      "amount": 500
    },
    "output": {
      "item": "spartanweaponry:weapon_oil",
      "nbt": "{Oil: {Effect: \"spartanweaponry:cryotic\"}}",
      "count": 1
    }
  });

  // necrotic oil
  //brewing
  event.custom({
    "type": "hexerei:fluid_mixing",
    "input": {
      "fluid": "kubejs:weapon_oil_base"
    },
    "ingredients": [
      { "item": "spelunkery:saltpeter" }
    ],
    "output": {
      "fluid": "kubejs:necrotic_oil"
    },
    "heatRequirement": "heated"
  });

  //emptying
  event.custom({
    "type": "hexerei:cauldron_emptying",
    "input": {
      "item": "minecraft:glass_bottle"
    },
    "fluid": {
      "fluid": "kubejs:necrotic_oil",
      "amount": 500
    },
    "output": {
      "item": "spartanweaponry:weapon_oil",
      "nbt": "{Oil: {Effect: \"spartanweaponry:necrotic\"}}",
      "count": 1
    }
  });

  // creeper oil
  //brewing
  event.custom({
    "type": "hexerei:fluid_mixing",
    "input": {
      "fluid": "kubejs:weapon_oil_base"
    },
    "ingredients": [
      { "item": "minecraft:copper_ingot" }
    ],
    "output": {
      "fluid": "kubejs:creeper_oil"
    },
    "heatRequirement": "heated"
  });

  //emptying
  event.custom({
    "type": "hexerei:cauldron_emptying",
    "input": {
      "item": "minecraft:glass_bottle"
    },
    "fluid": {
      "fluid": "kubejs:creeper_oil",
      "amount": 500
    },
    "output": {
      "item": "spartanweaponry:weapon_oil",
      "nbt": "{Oil: {Effect: \"spartanweaponry:creeper\"}}",
      "count": 1
    }
  });

  // aquatic oil
  //brewing
  event.custom({
    "type": "hexerei:fluid_mixing",
    "input": {
      "fluid": "kubejs:weapon_oil_base"
    },
    "ingredients": [
      { "item": "minecraft:iron_ingot" }
    ],
    "output": {
      "fluid": "kubejs:aquatic_oil"
    },
    "heatRequirement": "heated"
  });

  //emptying
  event.custom({
    "type": "hexerei:cauldron_emptying",
    "input": {
      "item": "minecraft:glass_bottle"
    },
    "fluid": {
      "fluid": "kubejs:aquatic_oil",
      "amount": 500
    },
    "output": {
      "item": "spartanweaponry:weapon_oil",
      "nbt": "{Oil: {Effect: \"spartanweaponry:aquatic\"}}",
      "count": 1
    }
  });

  // ender oil
  //brewing
  event.custom({
    "type": "hexerei:fluid_mixing",
    "input": {
      "fluid": "kubejs:weapon_oil_base"
    },
    "ingredients": [
      { "item": "hearthandharvest:water_crate" }
    ],
    "output": {
      "fluid": "kubejs:ender_oil"
    },
    "heatRequirement": "heated"
  });

  //emptying
  event.custom({
    "type": "hexerei:cauldron_emptying",
    "input": {
      "item": "minecraft:glass_bottle"
    },
    "fluid": {
      "fluid": "kubejs:ender_oil",
      "amount": 500
    },
    "output": {
      "item": "spartanweaponry:weapon_oil",
      "nbt": "{Oil: {Effect: \"spartanweaponry:ender\"}}",
      "count": 1
    }
  });

  // wither oil
  //brewing
  event.custom({
    "type": "hexerei:fluid_mixing",
    "input": {
      "fluid": "kubejs:weapon_oil_base"
    },
    "ingredients": [
      { "item": "minecraft:wither_rose" }
    ],
    "output": {
      "fluid": "kubejs:wither_oil"
    },
    "heatRequirement": "heated"
  });

  //emptying
  event.custom({
    "type": "hexerei:cauldron_emptying",
    "input": {
      "item": "minecraft:glass_bottle"
    },
    "fluid": {
      "fluid": "kubejs:wither_oil",
      "amount": 500
    },
    "output": {
      "item": "spartanweaponry:weapon_oil",
      "nbt": "{Oil: {Effect: \"spartanweaponry:wither\"}}",
      "count": 1
    }
  });

  // harming oil
  //brewing
  event.custom({
    "type": "hexerei:fluid_mixing",
    "input": {
      "fluid": "hexerei:potion",
      "nbt": {
        "Bottle": "REGULAR",
        "Potion": "minecraft:harming"
      }
    },
    "ingredients": [
      { "item": "kubejs:grease_ball" }
    ],
    "output": {
      "fluid": "kubejs:harming_oil"
    },
    "heatRequirement": "heated"
  });

  //emptying
  event.custom({
    "type": "hexerei:cauldron_emptying",
    "input": {
      "item": "minecraft:glass_bottle"
    },
    "fluid": {
      "fluid": "kubejs:harming_oil",
      "amount": 500
    },
    "output": {
      "item": "spartanweaponry:weapon_oil",
      "nbt": "{Oil: {Effect: \"spartanweaponry:potion\", Potion: \"minecraft:harming\"}}",
      "count": 1
    }
  });

  // poison oil
  //brewing
  event.custom({
    "type": "hexerei:fluid_mixing",
    "input": {
      "fluid": "hexerei:potion",
      "nbt": {
        "Bottle": "REGULAR",
        "Potion": "minecraft:poison"
      }
    },
    "ingredients": [
      { "item": "kubejs:grease_ball" }
    ],
    "output": {
      "fluid": "kubejs:poison_oil"
    },
    "heatRequirement": "heated"
  });

  //emptying
  event.custom({
    "type": "hexerei:cauldron_emptying",
    "input": {
      "item": "minecraft:glass_bottle"
    },
    "fluid": {
      "fluid": "kubejs:poison_oil",
      "amount": 500
    },
    "output": {
      "item": "spartanweaponry:weapon_oil",
      "nbt": "{Oil: {Effect: \"spartanweaponry:potion\", Potion: \"minecraft:poison\"}}",
      "count": 1
    }
  });

  // slowness oil
  //brewing
  event.custom({
    "type": "hexerei:fluid_mixing",
    "input": {
      "fluid": "hexerei:potion",
      "nbt": {
        "Bottle": "REGULAR",
        "Potion": "minecraft:slowness"
      }
    },
    "ingredients": [
      { "item": "kubejs:grease_ball" }
    ],
    "output": {
      "fluid": "kubejs:slowness_oil"
    },
    "heatRequirement": "heated"
  });

  //emptying
  event.custom({
    "type": "hexerei:cauldron_emptying",
    "input": {
      "item": "minecraft:glass_bottle"
    },
    "fluid": {
      "fluid": "kubejs:slowness_oil",
      "amount": 500
    },
    "output": {
      "item": "spartanweaponry:weapon_oil",
      "nbt": "{Oil: {Effect: \"spartanweaponry:potion\", Potion: \"minecraft:slowness\"}}",
      "count": 1
    }
  });

  // weakness oil
  //brewing
  event.custom({
    "type": "hexerei:fluid_mixing",
    "input": {
      "fluid": "hexerei:potion",
      "nbt": {
        "Bottle": "REGULAR",
        "Potion": "minecraft:weakness"
      }
    },
    "ingredients": [
      { "item": "kubejs:grease_ball" }
    ],
    "output": {
      "fluid": "kubejs:weakness_oil"
    },
    "heatRequirement": "heated"
  });

  //emptying
  event.custom({
    "type": "hexerei:cauldron_emptying",
    "input": {
      "item": "minecraft:glass_bottle"
    },
    "fluid": {
      "fluid": "kubejs:weakness_oil",
      "amount": 500
    },
    "output": {
      "item": "spartanweaponry:weapon_oil",
      "nbt": "{Oil: {Effect: \"spartanweaponry:potion\", Potion: \"minecraft:weakness\"}}",
      "count": 1
    }
  });

});