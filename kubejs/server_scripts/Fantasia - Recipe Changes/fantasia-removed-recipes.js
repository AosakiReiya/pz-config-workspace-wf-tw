ServerEvents.recipes((event) => {

  event.remove({ id: "minecraft:repair_item" });
  event.remove({ output: 'minecraft:bread', type: 'minecraft:crafting_shaped' });
  event.remove({ output: 'spelunkery:salt_bucket', type: 'minecraft:crafting_shaped' });

  let baby = [
    'mca:baby_boy',
    'mca:baby_girl',
    'mca:sirben_baby_boy',
    'mca:sirben_baby_girl'
  ]

  let isscauldron = [
    "irons_spellbooks:alchemist_cauldron_brew",
    "irons_spellbooks:alchemist_cauldron_empty",
    "irons_spellbooks:alchemist_cauldron_fill",
  ]

  isscauldron.forEach(coldron => {
    event.remove({ type: coldron });
  })

  baby.forEach(inp => {
    event.remove({ input: inp });
  })

  event.remove({ output: 'minecraft:stick', input: '#regions_unexplored:branches' });

  let removedTypes = [
    "valhelsia_structures:axe_crafting"
  ];
  let removedIDs = [
    "alexsmobs:mosquito_repellent_stew",
    "supplementaries:sack",
    "minecraft:map",
    "supplementaries:lunch_basket",
    "farmersdelight:straw_bale",
    "farmersdelight:straw",
    "hearth_and_home:thatch",
    "minecraft:torch",
    "minecraft:campfire",
    "minecraft:flint_and_steel",
    "incubation:fried_egg",
    "magistuarmory:leather_strip",
    "minecraft:pumpkin_pie",
    "upgrade_aquatic:mulberry_pie",
    "minecraft:bundle",
    "irons_spellbooks:divine_pearl",
    "minecraft:recovery_compass",
    "netherchested:nether_chest",
    "farmersdelight:cutting/pumpkin_slice_alt",
    "farmersdelight:cutting/pumpkin"
  ];

  let removedInputs = [];
  let removedOutputs = [
    "mynethersdelight:boiled_egg",
    "minecraft:shears",
    "alexsmobs:rocky_chestplate",
    "quark:seed_pouch",
    "clayworks:kiln",
    "minecraft:netherite_upgrade_smithing_template",
    "minecraft:netherite_helmet",
    "minecraft:netherite_chestplate",
    "minecraft:netherite_leggings",
    "minecraft:netherite_boots",
    "minecraft:netherite_sword",
    "minecraft:netherite_pickaxe",
    "minecraft:netherite_axe",
    "minecraft:netherite_shovel",
    "minecraft:netherite_hoe",
    "spartanweaponry:netherite_dagger",
    "spartanweaponry:netherite_parrying_dagger",
    "spartanweaponry:netherite_longsword",
    "spartanweaponry:netherite_katana",
    "spartanweaponry:netherite_saber",
    "spartanweaponry:netherite_rapier",
    "spartanweaponry:netherite_greatsword",
    "spartanweaponry:netherite_battle_hammer",
    "spartanweaponry:netherite_warhammer",
    "spartanweaponry:netherite_spear",
    "spartanweaponry:netherite_halberd",
    "spartanweaponry:netherite_pike",
    "spartanweaponry:netherite_lance",
    "spartanweaponry:netherite_throwing_knife",
    "spartanweaponry:netherite_tomahawk",
    "spartanweaponry:netherite_javelin",
    "spartanweaponry:netherite_boomerang",
    "spartanweaponry:netherite_battleaxe",
    "spartanweaponry:netherite_flanged_mace",
    "spartanweaponry:netherite_glaive",
    "spartanweaponry:netherite_scythe",
    "shieldexp:netherite_shield",
    "spartanweaponry:simple_handle",
    "spartanweaponry:handle",
    "spartanweaponry:pole",
    "spartanweaponry:simple_pole",
    "overgeared:crude_steel",
    "overgeared:heated_crude_steel",
    "spelunkery:rope_ladder",
    "spelunkery:wooden_channel",
    "spelunkery:stone_channel",
    "everycomp:q/traversable_leaves/dev_hedge",
    "everycomp:q/traversable_leaves/dev_leaf_carpet",
    "irons_spellbooks:mana_ring",
    "irons_spellbooks:cast_time_ring",
    "irons_spellbooks:emerald_stoneplate_ring",
    "irons_spellbooks:fireward_ring",
    "irons_spellbooks:frostward_ring",
    "irons_spellbooks:poisonward_ring",
    "irons_spellbooks:amethyst_rapier",
    "irons_spellbooks:pumpkin_helmet",
    "irons_spellbooks:pumpkin_chestplate",
    "irons_spellbooks:pumpkin_leggings",
    "irons_spellbooks:pumpkin_boots",
    "hearthandharvest:iron_cleaver",
    "hearthandharvest:diamond_cleaver",
    "hearthandharvest:netherite_cleaver",
    "hearthandharvest:golden_cleaver",
    "simplest_hammers:stone_hammer",
    "simplest_hammers:iron_hammer",
    "simplest_hammers:diamond_hammer",
    "overgeared:copper_smithing_hammer",
    "overgeared:smithing_hammer",
    "magistuarmory:steel_plate",
    "magistuarmory:steel_ingot",
    "lilis_lucky_lures:fish_trap",
    "supplementaries:slice_map",
    "spelunkery:magnetic_compass",
    "sewingkit:file",
    "mowziesmobs:spear",
    "simplest_excavators:iron_excavator",
    "simplest_excavators:diamond_excavator",
    "spelunkery:flint_hammer_and_chisel",
    "mca:staff_of_life",
    "vialofrevival:vial_of_revival",
    "minecraft:scaffolding",
    "minecraft:potion",
    "musketmod:musket",
    "musketmod:blunderbuss",
    "musketmod:pistol",
    "tide:enchanted_pocket_watch",
    "minecraft:pumpkin",
    'windswept:spicy_snow_cone',
    'windswept:sweet_snow_cone',
    'windswept:minty_snow_cone',
    'windswept_delights:melon_snow_cone',
    'windswept_delights:chocolate_snow_cone',
    'windswept_delights:snow_cone',
    'windswept_delights:wild_berry_popsicle',
    'mynethersdelight:tear_popsicle',
    'farmersdelight:melon_popsicle',
    'windswept:lavender_tea',
    'windswept:ginger_tea',
    'minecraft:cookie',
    'windswept:gingerbread_cookie',
    'farmersrespite:green_tea_cookie',
    'farmersdelight:sweet_berry_cookie',
    'farmersdelight:honey_cookie',
    "hearthandharvest:oak_half_cabinet",
    "hearthandharvest:spruce_half_cabinet",
    "hearthandharvest:birch_half_cabinet",
    "hearthandharvest:jungle_half_cabinet",
    "hearthandharvest:acacia_half_cabinet",
    "hearthandharvest:dark_oak_half_cabinet",
    "hearthandharvest:mangrove_half_cabinet",
    "hearthandharvest:cherry_half_cabinet",
    "hearthandharvest:bamboo_half_cabinet",
    "hearthandharvest:crimson_half_cabinet",
    "hearthandharvest:warped_half_cabinet",
    "irons_spellbooks:mana_upgrade_orb",
    "spartanweaponry:medium_arrow_quiver",
    "spartanweaponry:large_arrow_quiver",
    "spartanweaponry:medium_quiver_brace",
    "spartanweaponry:large_quiver_brace",
    "galosphere:sterling_horse_armor",
    "minecraft:diamond_horse_armor",
    "silly_oddities:netherite_horse_armor",
    "suppsquared:copper_lantern",
    "medieval_healing:herbal_tonic",
    "spelunkery:mineomite"
  ];

  let removedMods = [
    "coinsje"
  ];

  removedTypes.forEach((type) => event.remove({ type: type }));
  removedIDs.forEach((id) => event.remove({ id: id }));
  removedInputs.forEach((input) => event.remove({ input: input }));
  removedOutputs.forEach((output) => event.remove({ output: output }));
  removedMods.forEach((mod) => event.remove({ mod: mod }));
});