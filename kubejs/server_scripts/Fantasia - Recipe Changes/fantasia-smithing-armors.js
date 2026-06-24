ServerEvents.recipes(event => {

  event.shaped(
    Item.of('kubejs:armor_upgrade_template', 4),
    [
      'III',
      'IOI',
      'ILI'
    ],
    {
      O: 'overgeared:steel_nugget',
      I: 'overgeared:steel_plate',
      L: 'overgeared:steel_ingot'
    }
  );

  let armors = [
    'magistuarmoryaddon:maximilian_burgonet',
    'magistuarmory:maximilian_helmet',
    'magistuarmoryaddon:exquisite_maximilian_helmet',
    'magistuarmoryaddon:fox_grotesque_maximilian_helmet',
    'magistuarmoryaddon:bellows_maximilian_helmet',
    'magistuarmoryaddon:facial_grotesque_maximilian_helmet',
    'magistuarmoryaddon:devilish_grotesque_maximilian_helmet',
    'magistuarmoryaddon:proto_maximilian_chestplate',
    'magistuarmoryaddon:proto_maximilian_boots',
    'magistuarmory:maximilian_chestplate',
    'magistuarmory:maximilian_leggings',
    'magistuarmory:maximilian_boots',
    'magistuarmory:maximilian_leggings',
    'magistuarmory:maximilian_boots'
  ]

  armors.forEach((output) => event.remove({ output: output }));

  /*

  [Item.of('magistuarmoryaddon:dark_knight_helmet', '{Damage:0}'), Item.of('magistuarmoryaddon:dark_gothic_helmet', '{Damage:0}'), Item.of('magistuarmoryaddon:darkblued_armet', '{Damage:0}'), Item.of('magistuarmoryaddon:darkblued_sallet', '{Damage:0}'), 'magistuarmory:darkening_template']

  */

  // fixed recipes

  event.smithing(
    'magistuarmoryaddon:darkblued_armet',
    'magistuarmory:darkening_template',
    'magistuarmoryaddon:dark_knight_helmet',
    'minecraft:lapis_lazuli'
  )

  event.smithing(
    'magistuarmoryaddon:darkblued_sallet',
    'magistuarmory:darkening_template',
    'magistuarmoryaddon:dark_gothic_helmet',
    'minecraft:lapis_lazuli'
  )

  event.custom({
    "type": "overgeared:forging",
    "blueprint": "PLATED_ARMOR",
    "requires_blueprint": true,
    "hammering": 7,
    "has_polishing": false,
    "has_quality": true,
    "need_quenching": false,
    "pattern": [
      "aaa",
      "bcb",
      "bab"
    ],
    "key": {
      "a": {
        "item": "overgeared:steel_nugget"
      },
      "b": {
        "item": "overgeared:steel_ingot"
      },
      "c": {
        "item": "magistuarmory:halfarmor_chestplate"
      }
    },
    "result": {
      "item": "magistuarmoryaddon:steel_puff_and_slash_chestplate",
      "count": 1
    },
    "show_notification": true
  })

  /*

  items lol

  ['overgeared:steel_nugget', 'overgeared:steel_plate']

  */

  // maximilian helms

  event.custom({
    "type": "overgeared:forging",
    "blueprint": "ARMOR",
    "hammering": 5,
    "has_polishing": false,
    "has_quality": true,
    "pattern": [
      "aaa",
      "bcb",
      "bab"
    ],
    "key": {
      "a": {
        "item": "overgeared:steel_plate"
      },
      "b": {
        "item": "overgeared:steel_ingot"
      },
      "c": {
        "item": "magistuarmory:cuirassier_helmet"
      }
    },
    "result": {
      "item": "magistuarmoryaddon:maximilian_burgonet",
      "count": 1
    },
    "show_notification": true
  })

  event.smithing(
    'magistuarmory:maximilian_helmet',
    'kubejs:armor_upgrade_template',
    'magistuarmory:armet',
    'overgeared:steel_plate'
  )

  event.smithing(
    'magistuarmoryaddon:exquisite_maximilian_helmet',
    'kubejs:armor_upgrade_template',
    'magistuarmory:maximilian_helmet',
    'overgeared:steel_plate'
  )

  event.smithing(
    'magistuarmoryaddon:bellows_maximilian_helmet',
    'kubejs:armor_upgrade_template',
    'magistuarmoryaddon:exquisite_maximilian_helmet',
    'overgeared:steel_plate'
  )

  event.smithing(
    'magistuarmoryaddon:fox_grotesque_maximilian_helmet',
    'kubejs:armor_upgrade_template',
    'magistuarmoryaddon:exquisite_maximilian_helmet',
    'overgeared:steel_ingot'
  )

  event.smithing(
    'magistuarmoryaddon:facial_grotesque_maximilian_helmet',
    'kubejs:armor_upgrade_template',
    'magistuarmoryaddon:fox_grotesque_maximilian_helmet',
    'overgeared:steel_ingot'
  )

  event.smithing(
    'magistuarmoryaddon:devilish_grotesque_maximilian_helmet',
    'kubejs:armor_upgrade_template',
    'magistuarmoryaddon:facial_grotesque_maximilian_helmet',
    'overgeared:steel_ingot'
  )

  // maximilian

  event.smithing(
    'magistuarmoryaddon:proto_maximilian_chestplate',
    'kubejs:armor_upgrade_template',
    'magistuarmory:knight_chestplate',
    'overgeared:steel_plate'
  )

  event.smithing(
    'magistuarmory:maximilian_chestplate',
    'kubejs:armor_upgrade_template',
    'magistuarmoryaddon:proto_maximilian_chestplate',
    'overgeared:steel_plate'
  )

  event.smithing(
    'magistuarmory:maximilian_leggings',
    'kubejs:armor_upgrade_template',
    'magistuarmory:knight_leggings',
    'overgeared:steel_plate'
  )

  event.smithing(
    'magistuarmoryaddon:proto_maximilian_boots',
    'kubejs:armor_upgrade_template',
    'magistuarmory:knight_boots',
    'overgeared:steel_plate'
  )

  event.smithing(
    'magistuarmory:maximilian_boots',
    'kubejs:armor_upgrade_template',
    'magistuarmoryaddon:proto_maximilian_boots',
    'overgeared:steel_plate'
  )

  event.custom({
    "type": "overgeared:forging",
    "hammering": 5,
    "has_quality": false,
    "need_quenching": false,
    "category": "equipment",
    "key": {
      "#": {
        "item": "galosphere:silver_ingot"
      },
      "O": {
        "item": "minecraft:leather_horse_armor"
      }
    },
    "pattern": [
      "  #",
      "###",
      "#O#"
    ],
    "result": {
      "item": "galosphere:sterling_horse_armor"
    },
    "show_notification": true
  })

  event.custom({
    "type": "overgeared:forging",
    "hammering": 5,
    "has_quality": false,
    "need_quenching": false,
    "category": "equipment",
    "key": {
      "#": {
        "item": "magistuarmory:steel_chainmail"
      },
      "O": {
        "item": "minecraft:leather_horse_armor"
      }
    },
    "pattern": [
      "  #",
      "###",
      "#O#"
    ],
    "result": {
      "item": "magistuarmory:chainmail_horse_armor"
    },
    "show_notification": true
  })

  event.custom({
    "type": "overgeared:forging",
    "hammering": 6,
    "has_quality": false,
    "need_quenching": false,
    "category": "equipment",
    "key": {
      "#": {
        "item": "minecraft:iron_ingot"
      },
      "O": {
        "item": "minecraft:leather_horse_armor"
      }
    },
    "pattern": [
      "  #",
      "###",
      "#O#"
    ],
    "result": {
      "item": "minecraft:iron_horse_armor"
    },
    "show_notification": true
  })

  event.custom({
    "type": "overgeared:forging",
    "hammering": 8,
    "has_quality": false,
    "need_quenching": false,
    "category": "equipment",
    "key": {
      "#": {
        "item": "overgeared:steel_ingot"
      },
      "O": {
        "item": "minecraft:leather_horse_armor"
      }
    },
    "pattern": [
      "  #",
      "###",
      "#O#"
    ],
    "result": {
      "item": "magistuarmory:barding"
    },
    "show_notification": true
  })

  event.custom({
    "type": "overgeared:forging",
    "hammering": 10,
    "has_quality": false,
    "need_quenching": false,
    "category": "equipment",
    "key": {
      "#": {
        "item": "kubejs:diamond_ingot"
      },
      "O": {
        "item": "minecraft:leather_horse_armor"
      }
    },
    "pattern": [
      "  #",
      "###",
      "#O#"
    ],
    "result": {
      "item": "minecraft:diamond_horse_armor"
    },
    "show_notification": true
  })

});

ServerEvents.tags('item', event => {
  event.add('magistuarmory:woolen_fabric', 'magistuarmory:woolen_fabric')
});