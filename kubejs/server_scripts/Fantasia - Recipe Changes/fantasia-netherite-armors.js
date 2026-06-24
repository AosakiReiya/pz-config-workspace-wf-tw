ServerEvents.recipes(event => {

  event.custom({
    "type": "overgeared:forging",
    "blueprint": "INFERNAL_EQUIPMENT",
    "requires_blueprint": true,
    "hammering": 7,
    "has_quality": true,
    "has_polishing": false,
    "category": "equipment",
    "key": {
      "#": {
        "item": "minecraft:netherite_ingot"
      },
      "Y": {
        "item": "magistuarmory:barbute"
      },
      "V": {
        "item": "minecraft:netherite_upgrade_smithing_template"
      }
    },
    "pattern": [
      "#Y#",
      " V "
    ],
    "result": {
      "item": "minecraft:netherite_helmet"
    },
    "show_notification": true
  });

  event.custom({
    "type": "overgeared:forging",
    "blueprint": "INFERNAL_EQUIPMENT",
    "requires_blueprint": true,
    "hammering": 9,
    "has_quality": true,
    "has_polishing": false,
    "category": "equipment",
    "key": {
      "#": {
        "item": "minecraft:netherite_ingot"
      },
      "Y": {
        "item": "magistuarmory:halfarmor_chestplate"
      },
      "V": {
        "item": "minecraft:netherite_upgrade_smithing_template"
      }
    },
    "pattern": [
      "#Y#",
      "#V#"
    ],
    "result": {
      "item": "minecraft:netherite_chestplate"
    },
    "show_notification": true
  });

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
        "item": "magistuarmory:knight_leggings"
      },
      "V": {
        "item": "minecraft:netherite_upgrade_smithing_template"
      }
    },
    "pattern": [
      "#Y#",
      "#V#"
    ],
    "result": {
      "item": "minecraft:netherite_leggings"
    },
    "show_notification": true
  });

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
        "item": "magistuarmory:knight_boots"
      },
      "V": {
        "item": "minecraft:netherite_upgrade_smithing_template"
      }
    },
    "pattern": [
      "#Y#",
      " V "
    ],
    "result": {
      "item": "minecraft:netherite_boots"
    },
    "show_notification": true
  })

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
        "item": "shieldexp:iron_shield"
      },
      "V": {
        "item": "minecraft:netherite_upgrade_smithing_template"
      }
    },
    "pattern": [
      "#Y#",
      "#V#",
      " # "
    ],
    "result": {
      "item": "shieldexp:netherite_shield"
    },
    "show_notification": true
  });

})