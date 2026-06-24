ServerEvents.recipes(event => {

// remove recipes
  event.remove({id: "tide:bait"});
  event.remove({id: "tide:magnetic_bait"});
  event.remove({id: "tide:stone_fishing_rod"});
  event.remove({id: "tide:iron_rod_smithing"});
  event.remove({id: "tide:gold_rod_smithing"});
  event.remove({id: "tide:crystal_rod_smithing"});
  event.remove({id: "tide:diamond_rod_smithing"});
  event.remove({id: "tide:netherite_rod_smithing"});
  event.remove({id: "tide:midas_rod_smithing"});
  
// recipe replacements

//baits
//bait
  event.shapeless(
    Item.of('tide:bait', 4),
    [
      [
        { item: "minecraft:rotten_flesh" }, { tag: "forge:raw_fishes" }, { item: "kubejs:bug_meat_slice" }
      ],
      { tag: 'forge:grain' },
	  [
        { item: "minecraft:bone_meal" }, { tag: "forge:eggs" }
      ],
    ]
  );

//magnetic bait
  event.shaped(
	Item.of('tide:magnetic_bait', 8),
	[ 'BBB',
	  'CBC', 
	  ' M '],
	{
	  B: 'tide:bait',
	  C: 'spelunkery:cinnabar',
	  M: 'spelunkery:raw_magnetite'
	}
  );
  
// fishing rods
// copper fishing rod
  event.custom({
    "type": "overgeared:forging",
    "blueprint": "TOOL",
    "hammering": 3,
	"has_polishing": false,
    "has_quality": true,
    "need_quenching": false,
    "category": "equipment",
    "pattern": [
      "  I",
      " IS",
      "W S"
    ],
    "key": {
      "I": {
        "item": "minecraft:copper_ingot"
      },
      "S": {
        "item": "minecraft:string"
      },
	  "W": {
        "item": "minecraft:stick"
      }
    },
    "result": {
      "item": "tide:stone_fishing_rod"
    },
    "show_notification": true,
	"tier": "stone"
  });
  
// silver fishing rod
  event.custom({
    "type": "overgeared:forging",
    "blueprint": "TOOL",
    "hammering": 3,
	"has_polishing": false,
    "has_quality": true,
    "need_quenching": false,
    "category": "equipment",
    "pattern": [
      "  I",
      " IS",
      "W S"
    ],
    "key": {
      "I": {
        "item": "galosphere:silver_ingot"
      },
      "S": {
        "item": "minecraft:string"
      },
	  "W": {
        "item": "minecraft:stick"
      }
    },
    "result": {
      "item": "tide:golden_fishing_rod"
    },
    "show_notification": true
  });

// steel fishing rod
  event.custom({
    "type": "overgeared:forging",
    "blueprint": "TOOL",
    "hammering": 3,
	"has_polishing": false,
    "has_quality": true,
    "need_quenching": false,
    "category": "equipment",
    "pattern": [
      "  I",
      " IS",
      "W S"
    ],
    "key": {
      "I": {
        "item": "overgeared:steel_ingot"
      },
      "S": {
        "item": "minecraft:string"
      },
	  "W": {
        "item": "minecraft:stick"
      }
    },
    "result": {
      "item": "tide:iron_fishing_rod"
    },
    "show_notification": true
  });


// crystal fishing rod
  event.shaped(
	Item.of('tide:crystal_fishing_rod', 1),
	[ ' A ',
	  'ARA', 
	  ' A '],
	{
	  R: 'minecraft:fishing_rod',
	  A: 'minecraft:amethyst_shard'
	}
  );
  
// diamond fishing rod
  event.custom({
    "type": "overgeared:forging",
    "blueprint": "TOOL",
    "hammering": 6,
	"has_polishing": false,
    "has_quality": true,
    "need_quenching": false,
    "category": "equipment",
    "pattern": [
      "  D",
      " DS",
      "W S"
    ],
    "key": {
      "D": {
        "item": "kubejs:diamond_ingot"
      },
      "S": {
        "item": "minecraft:string"
      },
	  "W": {
        "item": "minecraft:stick"
      }
    },
    "result": {
      "item": "tide:diamond_fishing_rod"
    },
    "show_notification": true
  });
  
// netherite fishing rod
  event.custom({
    "type": "overgeared:forging",
    "blueprint": "TOOL",
    "hammering": 6,
	"has_polishing": false,
    "has_quality": true,
    "need_quenching": false,
    "category": "equipment",
    "pattern": [
      " I ",
      " R ",
      " U "
    ],
    "key": {
      "I": {
        "item": "minecraft:netherite_ingot"
      },
      "R": {
        "item": "tide:iron_fishing_rod"
      },
	  "U": {
        "item": "minecraft:netherite_upgrade_smithing_template"
      }
    },
    "result": {
      "item": "tide:netherite_fishing_rod"
    },
    "show_notification": true
  });

// midas fishing rod
  event.custom({
    "type": "overgeared:forging",
    "blueprint": "TOOL",
    "hammering": 8,
	"has_polishing": false,
    "has_quality": true,
    "need_quenching": false,
    "category": "equipment",
    "pattern": [
      " F ",
      "ARA",
      " G "
    ],
    "key": {
      "R": {
        "item": "tide:golden_fishing_rod"
      },
      "F": {
        "item": "tide:midas_fish"
      },
	  "A": {
        "item": "irons_spellbooks:arcane_ingot"
      },
	  "G": {
        "item": "minecraft:gold_ingot"
      }
    },
    "result": {
      "item": "tide:midas_fishing_rod"
    },
    "show_notification": true
  });
  
//
//fish bag
  event.shaped(
	Item.of('kubejs:fish_bag', 1),
	[ 'FFF',
	  'FFF', 
	  'FFF'],
	{
	  F: { tag: "fantasia:common_fish" }
	}
  );
  
//fish pack
  event.shapeless(
    Item.of('kubejs:fish_pack', 1),
    [
      { tag: "fantasia:uncommon_fish" },
      { tag: "fantasia:uncommon_fish" },
      { tag: "fantasia:uncommon_fish" },
	  { tag: "fantasia:uncommon_fish" },
    ]
  );

})

/// Fish Tags
ServerEvents.tags('item', event => {

  event.removeAllTagsFrom('tide:sailfish')

  event.removeAll('tide:bait_plants')

  event.add("fantasia:baits",
    [
    'tide:bait',
    'tide:lucky_bait',
    'tide:magnetic_bait',
    'spawn:clam_meat',
    'tide:crystal_shrimp',
    'tide:incandescent_larva',
    'alexsmobs:maggot',
    'alexsmobs:lobster_tail',
    'alexsmobs:mosquito_larva',
    'regions_unexplored:salmonberry'
  ]);
	
	event.add("fantasia:common_fish",
    [
	  'spawn:herring',
    'minecraft:salmon',
	  'minecraft:cod',
	  'minecraft:tropical_fish',
	  'upgrade_aquatic:perch',
	  'tide:yellow_perch',
	  'tide:rainbow_trout',
	  'tide:largemouth_bass',
	  'tide:brook_trout',
	  'tide:white_crappie',
	  'tide:black_crappie',
	  'tide:carp',
	  'tide:smallmouth_bass',
	  'tide:pike',
	  'tide:bluegill',
	  'tide:mackerel',
	  'tide:tuna',
	  'tide:red_snapper',
	  'tide:ocean_perch',
	  'tide:snook',
	  'tide:anchovy',
	  'tide:flounder',
	  'tide:cave_eel',
	  'tide:deep_grouper',
	  'tide:cave_crawler',
	  'tide:shadow_snapper',
	  'tide:magma_mackerel',
	  'tide:ember_koi',
	  'tide:ash_perch',
	  'culturaldelights:squid',
	  'culturaldelights:glow_squid'
	]);
	
	event.add("fantasia:uncommon_fish",
    [
	  'tide:guppy',
	  'minecraft:pufferfish',
	  'upgrade_aquatic:pike',
	  'upgrade_aquatic:lionfish',
	  'environmental:koi',
	  'alexsmobs:flying_fish',
	  'alexsmobs:blobfish',
	  'spawn:angler_fish',
	  'tide:walleye',
	  'tide:catfish',
	  'tide:angelfish',
	  'tide:glowfish',
	  'tide:anglerfish',
	  'tide:abyss_angler',
	  'tide:iron_tetra',
	  'tide:dripstone_darter',
	  'tide:lapis_lanternfish',
	  'tide:crystal_shrimp',
	  'tide:obsidian_pike',
	  'tide:volcano_tuna'
	]);

})