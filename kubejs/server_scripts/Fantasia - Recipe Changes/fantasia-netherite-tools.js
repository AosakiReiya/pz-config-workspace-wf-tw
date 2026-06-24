ServerEvents.recipes(event => {

  event.custom({
    "type": "overgeared:forging",
    "hammering": 10,
    "has_quality": false,
    "has_polishing": false,
    "category": "equipment",
    "key": {
      "#": {
        "item": "kubejs:unfinished_netherite_ingot"
      }
    },
    "pattern": [
      "#"
    ],
    "result": {
      "item": `minecraft:netherite_ingot`
    },
    "show_notification": true
  });

  event.custom({
    "type": "overgeared:forging",
    "hammering": 8,
    "has_quality": false,
    "category": "equipment",
    "key": {
      "#": {
        "item": "minecraft:netherite_scrap"
      },
      "O": {
        "item": "quark:soul_bead"
      },
      "V": {
        "item": "minecraft:diamond"
      },
      "B": {
        "item": "cataclysm:black_steel_ingot"
      }
    },
    "pattern": [
      "###",
      "#O#",
      "BVB"
    ],
    "result": {
      "item": "minecraft:netherite_upgrade_smithing_template"
    },
    "show_notification": true
  });

  let vanillasteel = [
    "pickaxe",
    "axe"
  ];

  vanillasteel.forEach(type => {

    event.remove({ output: `minecraft:netherite_${type}` })

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
          "item": `overgeared:steel_${type}`
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
        "item": `minecraft:netherite_${type}`
      },
      "show_notification": true
    })
  });

  let smallvanilla = [
    "shovel",
    "hoe"
  ];

  smallvanilla.forEach(type => {

    event.remove({ output: `minecraft:netherite_${type}` })

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
          "item": `overgeared:steel_${type}`
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
        "item": `minecraft:netherite_${type}`
      },
      "show_notification": true
    })
  });
})