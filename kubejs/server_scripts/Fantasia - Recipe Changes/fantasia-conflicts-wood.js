ServerEvents.recipes(event => {
  
//wooden grate
  event.remove({id:'eclipticseasons:block_in_wooden_grate_block'})

  event.shaped(
    Item.of('eclipticseasons:block_in_wooden_grate_block', 2), [
      'AAA',
      'A A',
      'AAA'
    ], {
      A: '#minecraft:wooden_fences'
    })


//parquets
  function parsaic(parquet_output, mosaic_input) {

    event.remove({ id: parquet_output })

    event.shaped(
      Item.of(parquet_output, 1), [
      ' A ',
      ' A ',
      '   '
    ], {
      A: mosaic_input
    })

  }
  //
  parsaic('hearth_and_home:bamboo_parquet', 'minecraft:bamboo_mosaic_slab')
  parsaic('everycomp:hnhome/mynethersdelight/powdery_parquet', 'mynethersdelight:powdery_mosaic_slab')


//item shelf
  function shelf(shelf_output, shelf_input) {
  
    event.remove({output: shelf_output });

    event.shaped(
      Item.of(shelf_output, 2), 
      [
        '   ',
        'SWS',
        '   '
      ],
      {
        W: shelf_input,
        S: 'minecraft:stick'
      }
    )
  
  }
  //
  shelf('supplementaries:item_shelf', 'fleshz:oak_wood_rack')
  shelf('suppsquared:item_shelf_spruce', 'fleshz:spruce_wood_rack')
  shelf('suppsquared:item_shelf_birch', 'fleshz:birch_wood_rack')
  shelf('suppsquared:item_shelf_jungle', 'fleshz:jungle_wood_rack')
  shelf('suppsquared:item_shelf_acacia', 'fleshz:acacia_wood_rack')
  shelf('suppsquared:item_shelf_cherry', 'fleshz:cherry_wood_rack')
  shelf('suppsquared:item_shelf_dark_oak', 'fleshz:dark_oak_wood_rack')
  shelf('suppsquared:item_shelf_mangrove', 'fleshz:mangrove_wood_rack')
  shelf('suppsquared:item_shelf_bamboo', 'fleshz:bamboo_wood_rack')
  shelf('suppsquared:netherexp/item_shelf_claret', 'everycomp:fleshz/netherexp/claret_wood_rack')
  shelf('suppsquared:mynethersdelight/item_shelf_powdery', 'everycomp:fleshz/mynethersdelight/powdery_wood_rack')
  shelf('suppsquared:quark/item_shelf_azalea', 'everycomp:fleshz/quark/azalea_wood_rack')
  shelf('suppsquared:valhelsia_structures/item_shelf_lapidified_jungle', 'everycomp:fleshz/valhelsia_structures/lapidified_jungle_wood_rack')
  shelf('suppsquared:cataclysm/item_shelf_chorus', 'everycomp:fleshz/cataclysm/chorus_wood_rack')
  shelf('suppsquared:spawn/item_shelf_rotten', 'everycomp:fleshz/spawn/rotten_wood_rack')
  shelf('suppsquared:windswept/item_shelf_holly', 'everycomp:fleshz/windswept/holly_wood_rack')
  shelf('suppsquared:windswept/item_shelf_chestnut', 'everycomp:fleshz/windswept/chestnut_wood_rack')
  shelf('suppsquared:windswept/item_shelf_pine', 'everycomp:fleshz/windswept/pine_wood_rack')
  shelf('suppsquared:snifferplus/item_shelf_stone_pine', 'everycomp:fleshz/snifferplus/stone_pine_wood_rack')
  shelf('suppsquared:environmental/item_shelf_willow', 'everycomp:fleshz/environmental/willow_wood_rack')
  shelf('suppsquared:environmental/item_shelf_plum', 'everycomp:fleshz/environmental/plum_wood_rack')
  shelf('suppsquared:environmental/item_shelf_wisteria', 'everycomp:fleshz/environmental/wisteria_wood_rack')
  shelf('suppsquared:upgrade_aquatic/item_shelf_driftwood', 'everycomp:fleshz/upgrade_aquatic/driftwood_wood_rack')
  shelf('suppsquared:upgrade_aquatic/item_shelf_river', 'everycomp:fleshz/upgrade_aquatic/river_wood_rack')
  shelf('suppsquared:regions_unexplored/item_shelf_alpha', 'everycomp:fleshz/regions_unexplored/alpha_wood_rack')
  shelf('suppsquared:regions_unexplored/item_shelf_baobab', 'everycomp:fleshz/regions_unexplored/baobab_wood_rack')
  shelf('suppsquared:regions_unexplored/item_shelf_blackwood', 'everycomp:fleshz/regions_unexplored/blackwood_wood_rack')
  shelf('suppsquared:regions_unexplored/item_shelf_blue_bioshroom', 'everycomp:fleshz/regions_unexplored/blue_bioshroom_wood_rack')
  shelf('suppsquared:regions_unexplored/item_shelf_brimwood', 'everycomp:fleshz/regions_unexplored/brimwood_wood_rack')
  shelf('suppsquared:regions_unexplored/item_shelf_cobalt', 'everycomp:fleshz/regions_unexplored/cobalt_wood_rack')
  shelf('suppsquared:regions_unexplored/item_shelf_cypress', 'everycomp:fleshz/regions_unexplored/cypress_wood_rack')
  shelf('suppsquared:regions_unexplored/item_shelf_dead', 'everycomp:fleshz/regions_unexplored/dead_wood_rack')
  shelf('suppsquared:regions_unexplored/item_shelf_eucalyptus', 'everycomp:fleshz/regions_unexplored/eucalyptus_wood_rack')
  shelf('suppsquared:regions_unexplored/item_shelf_green_bioshroom', 'everycomp:fleshz/regions_unexplored/green_bioshroom_wood_rack')
  shelf('suppsquared:regions_unexplored/item_shelf_joshua', 'everycomp:fleshz/regions_unexplored/joshua_wood_rack')
  shelf('suppsquared:regions_unexplored/item_shelf_kapok', 'everycomp:fleshz/regions_unexplored/kapok_wood_rack')
  shelf('suppsquared:regions_unexplored/item_shelf_larch', 'everycomp:fleshz/regions_unexplored/larch_wood_rack')
  shelf('suppsquared:regions_unexplored/item_shelf_magnolia', 'everycomp:fleshz/regions_unexplored/magnolia_wood_rack')
  shelf('suppsquared:regions_unexplored/item_shelf_maple', 'everycomp:fleshz/regions_unexplored/maple_wood_rack')
  shelf('suppsquared:regions_unexplored/item_shelf_mauve', 'everycomp:fleshz/regions_unexplored/mauve_wood_rack')
  shelf('suppsquared:regions_unexplored/item_shelf_palm', 'everycomp:fleshz/regions_unexplored/palm_wood_rack')
  shelf('suppsquared:regions_unexplored/item_shelf_pine', 'everycomp:fleshz/regions_unexplored/pine_wood_rack')
  shelf('suppsquared:regions_unexplored/item_shelf_pink_bioshroom', 'everycomp:fleshz/regions_unexplored/pink_bioshroom_wood_rack')
  shelf('suppsquared:regions_unexplored/item_shelf_redwood', 'everycomp:fleshz/regions_unexplored/redwood_wood_rack')
  shelf('suppsquared:regions_unexplored/item_shelf_socotra', 'everycomp:fleshz/regions_unexplored/socotra_wood_rack')
  shelf('suppsquared:regions_unexplored/item_shelf_willow', 'everycomp:fleshz/regions_unexplored/willow_wood_rack')
  shelf('suppsquared:regions_unexplored/item_shelf_yellow_bioshroom', 'everycomp:fleshz/regions_unexplored/yellow_bioshroom_wood_rack')
  shelf('suppsquared:quark/item_shelf_ancient', 'everycomp:fleshz/quark/ancient_wood_rack')
  shelf('suppsquared:quark/item_shelf_blossom', 'everycomp:fleshz/quark/blossom_wood_rack')
  shelf('suppsquared:netherexp/item_shelf_smokestalk', 'everycomp:fleshz/netherexp/smokestalk_wood_rack')


//wooden battle hammer
    event.remove({id:'spartanweaponry:wooden_battle_hammer'})

    event.shaped(
      Item.of('spartanweaponry:wooden_battle_hammer', 1), [
        'AAA',
        'BBB',
        ' C '
      ], {
        A: '#minecraft:wooden_slabs',
        B: '#minecraft:planks',
        C: 'minecraft:stick'
      }
    )

//wood trim
  function trim(trim_output, trim_input) {
  
    event.remove({output: trim_output });

    event.shaped(
      Item.of(trim_output, 2), 
      [
        ' W ',
        ' W ',
        ' W '
      ],
      {
        W: trim_input
      }
    )
  
  }
  //
  trim('bbb:oak_trim', 'quark:vertical_oak_planks')
  trim('bbb:spruce_trim', 'quark:vertical_spruce_planks')
  trim('bbb:birch_trim', 'quark:vertical_birch_planks')
  trim('bbb:jungle_trim', 'quark:vertical_jungle_planks')
  trim('bbb:acacia_trim', 'quark:vertical_acacia_planks')
  trim('bbb:dark_oak_trim', 'quark:vertical_dark_oak_planks')
  trim('bbb:mangrove_trim', 'quark:vertical_mangrove_planks')
  trim('bbb:cherry_trim', 'quark:vertical_cherry_planks')
  trim('bbb:bamboo_trim', 'quark:vertical_bamboo_planks')
  trim('bbb:crimson_trim', 'quark:vertical_crimson_planks')
  trim('bbb:warped_trim', 'quark:vertical_warped_planks')
  trim('everycomp:bbb/netherexp/claret_trim', 'everycomp:q/netherexp/vertical_claret_planks')
  trim('everycomp:bbb/mynethersdelight/powdery_trim', 'everycomp:q/mynethersdelight/vertical_powdery_planks')
  trim('everycomp:bbb/quark/azalea_trim', 'quark:vertical_azalea_planks')
  trim('everycomp:bbb/valhelsia_structures/lapidified_jungle_trim', 'everycomp:q/valhelsia_structures/vertical_lapidified_jungle_planks')
  trim('everycomp:bbb/cataclysm/chorus_trim', 'everycomp:q/cataclysm/vertical_chorus_planks')
  trim('everycomp:bbb/spawn/rotten_trim', 'everycomp:q/spawn/vertical_rotten_planks')
  trim('everycomp:bbb/netherexp/smokestalk_trim', 'everycomp:q/netherexp/vertical_smokestalk_planks')
  trim('everycomp:bbb/windswept/holly_trim', 'everycomp:q/windswept/vertical_holly_planks')
  trim('everycomp:bbb/windswept/chestnut_trim', 'everycomp:q/windswept/vertical_chestnut_planks')
  trim('everycomp:bbb/windswept/pine_trim', 'everycomp:q/windswept/vertical_pine_planks')
  trim('everycomp:bbb/snifferplus/stone_pine_trim', 'everycomp:q/snifferplus/vertical_stone_pine_planks')
  trim('everycomp:bbb/environmental/willow_trim', 'everycomp:q/environmental/vertical_willow_planks')
  trim('everycomp:bbb/environmental/plum_trim', 'everycomp:q/environmental/vertical_plum_planks')
  trim('everycomp:bbb/environmental/wisteria_trim', 'everycomp:q/environmental/vertical_wisteria_planks')
  trim('everycomp:bbb/upgrade_aquatic/driftwood_trim', 'everycomp:q/upgrade_aquatic/vertical_driftwood_planks')
  trim('everycomp:bbb/upgrade_aquatic/river_trim', 'everycomp:q/upgrade_aquatic/vertical_river_planks')
  trim('everycomp:bbb/regions_unexplored/alpha_trim', 'everycomp:q/regions_unexplored/vertical_alpha_planks')
  trim('everycomp:bbb/regions_unexplored/baobab_trim', 'everycomp:q/regions_unexplored/vertical_baobab_planks')
  trim('everycomp:bbb/regions_unexplored/blackwood_trim', 'everycomp:q/regions_unexplored/vertical_blackwood_planks')
  trim('everycomp:bbb/regions_unexplored/blue_bioshroom_trim', 'everycomp:q/regions_unexplored/vertical_blue_bioshroom_planks')
  trim('everycomp:bbb/regions_unexplored/brimwood_trim', 'everycomp:q/regions_unexplored/vertical_brimwood_planks')
  trim('everycomp:bbb/regions_unexplored/cobalt_trim', 'everycomp:q/regions_unexplored/vertical_cobalt_planks')
  trim('everycomp:bbb/regions_unexplored/cypress_trim', 'everycomp:q/regions_unexplored/vertical_cypress_planks')
  trim('everycomp:bbb/regions_unexplored/dead_trim', 'everycomp:q/regions_unexplored/vertical_dead_planks')
  trim('everycomp:bbb/regions_unexplored/eucalyptus_trim', 'everycomp:q/regions_unexplored/vertical_eucalyptus_planks')
  trim('everycomp:bbb/regions_unexplored/green_bioshroom_trim', 'everycomp:q/regions_unexplored/vertical_green_bioshroom_planks')
  trim('everycomp:bbb/regions_unexplored/joshua_trim', 'everycomp:q/regions_unexplored/vertical_joshua_planks')
  trim('everycomp:bbb/regions_unexplored/kapok_trim', 'everycomp:q/regions_unexplored/vertical_kapok_planks')
  trim('everycomp:bbb/regions_unexplored/larch_trim', 'everycomp:q/regions_unexplored/vertical_larch_planks')
  trim('everycomp:bbb/regions_unexplored/magnolia_trim', 'everycomp:q/regions_unexplored/vertical_magnolia_planks')
  trim('everycomp:bbb/regions_unexplored/maple_trim', 'everycomp:q/regions_unexplored/vertical_maple_planks')
  trim('everycomp:bbb/regions_unexplored/mauve_trim', 'everycomp:q/regions_unexplored/vertical_mauve_planks')
  trim('everycomp:bbb/regions_unexplored/palm_trim', 'everycomp:q/regions_unexplored/vertical_palm_planks')
  trim('everycomp:bbb/regions_unexplored/pine_trim', 'everycomp:q/regions_unexplored/vertical_pine_planks')
  trim('everycomp:bbb/regions_unexplored/pink_bioshroom_trim', 'everycomp:q/regions_unexplored/vertical_pink_bioshroom_planks')
  trim('everycomp:bbb/regions_unexplored/redwood_trim', 'everycomp:q/regions_unexplored/vertical_redwood_planks')
  trim('everycomp:bbb/regions_unexplored/socotra_trim', 'everycomp:q/regions_unexplored/vertical_socotra_planks')
  trim('everycomp:bbb/regions_unexplored/willow_trim', 'everycomp:q/regions_unexplored/vertical_willow_planks')
  trim('everycomp:bbb/regions_unexplored/yellow_bioshroom_trim', 'everycomp:q/regions_unexplored/vertical_yellow_bioshroom_planks')
  trim('everycomp:bbb/quark/ancient_trim', 'quark:vertical_ancient_planks')
  trim('everycomp:bbb/quark/blossom_trim', 'quark:vertical_blossom_planks')

})