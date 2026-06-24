ServerEvents.recipes(event => {

  event.custom({
    "type": "overgeared:forging",
    "blueprint": "INFERNAL_EQUIPMENT",
    "requires_blueprint": true,
    "hammering": 8,
    "has_quality": true,
    "has_polishing": false,
    "category": "equipment",
    "key": {
      "#": {
        "item": "minecraft:netherite_ingot"
      },
      "Y": {
        "item": `overgeared:steel_sword`
      },
      "T": {
        "item": "minecraft:netherite_upgrade_smithing_template"
      }
    },
    "pattern": [
      "#Y#",
      " T "
    ],
    "result": {
      "item": `minecraft:netherite_sword`
    },
    "show_notification": true
  });

  let athenian = [
    "dagger",
    "parrying_dagger",
    "tomahawk",
    "throwing_knife",
    "boomerang",
    "spear",
    "pike",
    "javelin"
  ];

  athenian.forEach(type => {

    event.remove({ output: `spartanweaponry:netherite_${type}` })

    event.custom({
      "type": "overgeared:forging",
      "blueprint": "INFERNAL_EQUIPMENT",
      "requires_blueprint": true,
      "hammering": 6,
      "has_quality": true,
      "has_polishing": false,
      "category": "equipment",
      "key": {
        "#": {
          "item": "minecraft:netherite_ingot"
        },
        "Y": {
          "item": `spartanweaponry:steel_${type}`
        },
        "T": {
          "item": "minecraft:netherite_upgrade_smithing_template"
        }
      },
      "pattern": [
        "#",
        "Y",
        "T"
      ],
      "result": {
        "item": `spartanweaponry:netherite_${type}`
      },
      "show_notification": true
    })
  });

  let spartan = [
    "longsword",
    "katana",
    "saber",
    "rapier",
    "warhammer",
    "flanged_mace",
    "lance",
    "glaive",
    "scythe"
  ];

  spartan.forEach(type => {

    // VANILLA

    event.remove({ output: `spartanweaponry:netherite_${type}` })

    event.custom({
      "type": "overgeared:forging",
      "blueprint": "INFERNAL_EQUIPMENT",
      "requires_blueprint": true,
      "hammering": 8,
      "has_quality": true,
      "has_polishing": false,
      "category": "equipment",
      "key": {
        "#": {
          "item": "minecraft:netherite_ingot"
        },
        "Y": {
          "item": `spartanweaponry:steel_${type}`
        },
        "T": {
          "item": "minecraft:netherite_upgrade_smithing_template"
        }
      },
      "pattern": [
        "#Y#",
        " T "
      ],
      "result": {
        "item": `spartanweaponry:netherite_${type}`
      },
      "show_notification": true
    })
  });

  let alexandrian = [
    "greatsword",
    "battle_hammer",
    "halberd",
    "battleaxe"
  ];

  alexandrian.forEach(type => {

    // VANILLA

    event.remove({ output: `spartanweaponry:netherite_${type}` })

    event.custom({
      "type": "overgeared:forging",
      "blueprint": "INFERNAL_EQUIPMENT",
      "requires_blueprint": true,
      "hammering": 9,
      "has_polishing": false,
      "has_quality": true,
      "category": "equipment",
      "key": {
        "#": {
          "item": "minecraft:netherite_ingot"
        },
        "Y": {
          "item": `spartanweaponry:steel_${type}`
        },
        "T": {
          "item": "minecraft:netherite_upgrade_smithing_template"
        }
      },
      "pattern": [
        " # ",
        "#Y#",
        " T "
      ],
      "result": {
        "item": `spartanweaponry:netherite_${type}`
      },
      "show_notification": true
    })
  });
})