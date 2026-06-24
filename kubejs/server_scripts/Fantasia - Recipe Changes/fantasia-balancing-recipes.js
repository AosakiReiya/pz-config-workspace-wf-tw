ServerEvents.recipes(event => {

  event.custom({
    "type": "overgeared:forging",
    "hammering": 12,
    "has_quality": false,
    "has_polishing": false,
    "need_quenching": false,
    "category": "misc",
    "pattern": [
      "SOS",
      "ILI",
      "SIS"
    ],
    "key": {
      "S": {
        "item": "overgeared:steel_plate"
      },
      "I": {
        "item": "kubejs:diamond_ingot"
      },
      "O": {
        "item": "minecraft:copper_block"
      },
      "L": {
        "item": "cataclysm:lava_power_cell"
      }
    },
    "result": {
      "item": "minecraft:copper_golem_spawn_egg"
    },
    "show_notification": true
  })

  event.shapeless(
    Item.of('minecraft:cookie', 4),
    [
      'farmersdelight:wheat_dough',
      'minecraft:cocoa_beans'
    ]
  );

  event.shapeless(
    Item.of('windswept:gingerbread_cookie', 4),
    [
      'farmersdelight:wheat_dough',
      'windswept:ginger_root'
    ]
  );

  event.shapeless(
    Item.of('farmersdelight:sweet_berry_cookie', 4),
    [
      'farmersdelight:wheat_dough',
      'minecraft:sweet_berries'
    ]
  );

  event.shapeless(
    Item.of('farmersdelight:honey_cookie', 4),
    [
      'farmersdelight:wheat_dough',
      'minecraft:honey_bottle'
    ]
  ).replaceIngredient('minecraft:honey_bottle', 'minecraft:glass_bottle');

  event.shaped(
    Item.of('minecraft:anvil', 1),
    [
      "ABA",
      " A ",
      "AAA"
    ],
    {
      A: 'minecraft:iron_ingot',
      B: 'minecraft:iron_block'
    }
  );

  event.shapeless(
    Item.of('minecraft:pumpkin', 1),
    [
      '9x farmersdelight:pumpkin_slice'
    ]
  );

  event.shapeless(
    Item.of('farmersdelight:wheat_dough', 3),
    [
      'regions_unexplored:barley',
      'regions_unexplored:barley',
      'regions_unexplored:barley',
      '#c:water_buckets'
    ]
  ).keepIngredient('minecraft:water_bucket');

  event.shapeless(
    Item.of('farmersdelight:wheat_dough', 3),
    [
      'minecraft:wheat',
      'minecraft:wheat',
      'minecraft:wheat',
      '#c:water_buckets'
    ]
  ).keepIngredient('minecraft:water_bucket');

  event.shapeless(
    Item.of('alexsmobs:mosquito_repellent_stew', 3),
    [
      'minecraft:bowl',
      'spelunkery:salt',
      'kubejs:grease_ball',
      'farmersdelight:tree_bark'
    ]
  );

  event.shaped(
    Item.of('spelunkery:flint_hammer_and_chisel', 1),
    [
      " B ",
      "AB ",
      " AB"
    ],
    {
      A: 'spartanweaponry:simple_handle',
      B: 'minecraft:copper_ingot'
    }
  );

  event.shaped(
    Item.of('minecraft:scaffolding', 6),
    [
      'IOI',
      'L L',
      'L L'
    ],
    {
      O: 'farmersdelight:canvas',
      I: '#regions_unexplored:branches',
      L: 'minecraft:stick'
    }
  );

  event.shapeless(
    Item.of('mca:staff_of_life', 1),
    [
      'mca:scythe',
      'vialofrevival:vial_of_revival'
    ]
  );

  event.shaped(
    Item.of('kubejs:mineomite_base', 1),
    [
      ' I ',
      'OUO',
      ' O '
    ],
    {
      O: 'minecraft:paper',
      I: 'minecraft:string',
      U: 'minecraft:gunpowder'
    }
  );

  event.custom({
    "type": "hexerei:fluid_mixing",
    "input": {
      "fluid": "hexerei:tallow_fluid"
    },
    "ingredients": [
      {
        "item": "spelunkery:sulfur"
      },
      {
        "item": "spelunkery:sulfur"
      },
      {
        "item": "spelunkery:sulfur"
      },
      {
        "item": "spelunkery:sulfur"
      },
      {
        "item": "spelunkery:saltpeter"
      },
      {
        "item": "spelunkery:saltpeter"
      },
      {
        "item": "spelunkery:saltpeter"
      },
      {
        "item": "spelunkery:saltpeter"
      }
    ],
    "output": {
      "fluid": "kubejs:sulfuric_liquid"
    }
  });

  event.custom({
    "type": "hexerei:dipper",
    "liquid": {
      "fluid": "kubejs:sulfuric_liquid"
    },
    "input": {
      "item": "kubejs:mineomite_base"
    },
    "output": {
      "item": "kubejs:unstable_mineomite"
    },
    "fluidLevelsConsumed": 250,
    "dippingTimeInTicks": 200,
    "dryingTimeInTicks": 100,
    "numberOfDips": 2
  });

  event.shaped(
    Item.of('spelunkery:mineomite', 1),
    [
      ' U ',
      ' W ',
      ' O '
    ],
    {
      U: 'magistuarmory:small_steel_plate',
      W: 'kubejs:unstable_mineomite',
      O: 'minecraft:redstone'
    }
  );

});
ServerEvents.tags('item', event => {
  event.remove('irons_spellbooks:school_focus', 'minecraft:emerald')
  event.remove('irons_spellbooks:school_focus', 'minecraft:poisonous_potato')
  event.remove('irons_spellbooks:school_focus', 'minecraft:ender_pearl')
  event.remove('irons_spellbooks:school_focus', 'irons_spellbooks:blood_vial')

  event.remove('irons_spellbooks:evocation_focus', 'minecraft:emerald')
  event.remove('irons_spellbooks:nature_focus', 'minecraft:poisonous_potato')
  event.remove('irons_spellbooks:ender_focus', 'minecraft:ender_pearl')
  event.remove('irons_spellbooks:blood_focus', 'irons_spellbooks:blood_vial')

  event.add('irons_spellbooks:evocation_focus', 'takesapillage:ravager_horn')
  event.add('irons_spellbooks:nature_focus', 'mowziesmobs:naga_fang')
  event.add('irons_spellbooks:ender_focus', 'minecraft:ender_eye')
  event.add('irons_spellbooks:blood_focus', 'alexsmobs:blood_sac')
  event.add('irons_spellbooks:lightning_focus', 'unusualfishmod:tendril')
})