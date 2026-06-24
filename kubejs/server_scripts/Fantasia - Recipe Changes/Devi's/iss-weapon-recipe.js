ServerEvents.recipes(event => {
  //Boreal Blade

  event.custom({
    "type": "overgeared:forging",
    "blueprint": "WEAPON",
    "hammering": 8,
    "has_quality": true,
    "has_polishing": true,
    "need_quenching": false,
    "category": "equipment",
    "key": {
      "#": {
        "item": "irons_spellbooks:mithril_ingot"
      },
      "@": {
        "item": "minecraft:blue_ice"
      },
      "$": {
        "item": "irons_spellbooks:weapon_parts"
      },
      "%": {
        "item": "irons_spellbooks:ice_venom_vial"
      }
    },
    "pattern": [
      " @#",
      "%#@",
      "$% "
    ],
    "result": {
      "item": `irons_spellbooks:boreal_blade`
    },
    "show_notification": true
  });

  //SpellBreaker
  event.custom({
    "type": "overgeared:forging",
    "blueprint": "WEAPON",
    "hammering": 8,
    "has_quality": true,
    "has_polishing": true,
    "need_quenching": false,
    "category": "equipment",
    "key": {
      "#": {
        "item": "irons_spellbooks:mithril_ingot"
      },
      "@": {
        "item": "minecraft:ender_eye"
      },
      "$": {
        "item": "irons_spellbooks:weapon_parts"
      }
    },
    "pattern": [
      " # ",
      "@#@",
      " $ "
    ],
    "result": {
      "item": `irons_spellbooks:spellbreaker`
    },
    "show_notification": true
  });
  //-------------------------------------------------------------

  //Weapon Parts
  event.custom({
    "type": "overgeared:forging",
    "blueprint": "WEAPON",
    "hammering": 5,
    "has_quality": false,
    "has_polishing": false,
    "need_quenching": false,
    "category": "equipment",
    "key": {
      "#": {
        "item": "irons_spellbooks:mithril_ingot"
      },
      "@": {
        "item": "irons_spellbooks:arcane_ingot"
      }
    },
    "pattern": [
      "   ",
      "@#@",
      " # "
    ],
    "result": {
      "item": `irons_spellbooks:weapon_parts`
    },
    "show_notification": true
  });
  //-------------------------------------------------------------

  //Ring of Recovery
  event.custom({
    "type": "overgeared:forging",
    "hammering": 8,
    "has_quality": false,
    "has_polishing": false,
    "need_quenching": false,
    "category": "equipment",
    "key": {
      "#": {
        "item": "irons_spellbooks:mithril_ingot"
      },
      "@": {
        "item": "minecraft:copper_ingot"
      }
    },
    "pattern": [
      " @ ",
      "@#@",
      " @ "
    ],
    "result": {
      "item": `irons_spellbooks:cooldown_ring`
    },
    "show_notification": true
  });
  //-------------------------------------------------------------

  //Affinity Ring
  event.custom({
    "type": "overgeared:forging",
    "hammering": 8,
    "has_quality": false,
    "has_polishing": false,
    "need_quenching": false,
    "category": "equipment",
    "key": {
      "@": {
        "item": "irons_spellbooks:mithril_scrap"
      }
    },
    "pattern": [
      " @ ",
      "@ @",
      " @ "
    ],
    "result": {
      "item": `irons_spellbooks:affinity_ring`
    },
    "show_notification": true
  });
  //-------------------------------------------------------------

  //Visibility Ring
  event.smithing(
    'irons_spellbooks:visibility_ring',
    'minecraft:gold_nugget',
    'irons_spellbooks:affinity_ring',
    'minecraft:spyglass'
  );
  //---------------------------------------------------------

  //Pyrium Staff
  event.smithing(
    'irons_spellbooks:pyrium_staff',
    'kubejs:pyrium_upgrade',
    'irons_spellbooks:artificer_cane',
    'irons_spellbooks:pyrium_ingot'
  );
})
