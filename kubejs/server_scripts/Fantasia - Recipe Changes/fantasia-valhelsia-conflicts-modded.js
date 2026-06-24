ServerEvents.recipes(event => {

  //Modded wood changes
  //regions_unexplored
  const regions_unexplored_planks = ['alpha', 'baobab', 'blackwood', 'blue_bioshroom', 'brimwood', 'cobalt', 'cypress', 'dead', 'eucalyptus', 'green_bioshroom', 'joshua', 'kapok', 'larch', 'magnolia', 'maple', 'mauve', 'palm', 'pine', 'pink_bioshroom', 'redwood', 'socotra', 'willow', 'yellow_bioshroom'];

  //quark
  const quark_planks = ['ancient', 'azalea', 'blossom'];

  //upgrade_aquatic
  const upgrade_aquatic_planks = ['driftwood', 'river'];

  //  loop through list of plank prefixes and do stuff
  //  regions_unexplored
  regions_unexplored_planks.forEach((regions_unexplored_planks) => {

    //  remove furniture
    event.remove({ output: `everycomp:vf/regions_unexplored/${regions_unexplored_planks}_chair` });
    event.remove({ output: `everycomp:vf/regions_unexplored/${regions_unexplored_planks}_table` });
    event.remove({ output: `everycomp:vf/regions_unexplored/${regions_unexplored_planks}_stool` });
    event.remove({ output: `everycomp:vf/regions_unexplored/${regions_unexplored_planks}_desk` });
    event.remove({ output: `everycomp:vf/regions_unexplored/${regions_unexplored_planks}_desk_drawer` });
    event.remove({ output: `everycomp:vf/regions_unexplored/hay_${regions_unexplored_planks}_chair` });

    //chair
    event.shaped(`2x everycomp:vf/regions_unexplored/${regions_unexplored_planks}_chair`, [
      'B  ',
      'AAA',
      'B B'
    ], {
      A: `regions_unexplored:${regions_unexplored_planks}_planks`,
      B: `minecraft:stick`
    });

    //table
    event.shaped(`everycomp:vf/regions_unexplored/${regions_unexplored_planks}_table`, [
      'AAA',
      'B B',
      'B B'
    ], {
      A: `regions_unexplored:${regions_unexplored_planks}_planks`,
      B: `minecraft:stick`
    });

    //stool
    event.shaped(`2x everycomp:vf/regions_unexplored/${regions_unexplored_planks}_stool`, [
      '   ',
      'AAA',
      'B B'
    ], {
      A: `regions_unexplored:${regions_unexplored_planks}_slab`,
      B: `minecraft:stick`
    });

    //desk
    event.shaped(`2x everycomp:vf/regions_unexplored/${regions_unexplored_planks}_desk`, [
      'AAA',
      'A A',
      'B B'
    ], {
      A: `regions_unexplored:${regions_unexplored_planks}_planks`,
      B: `minecraft:stick`
    });

    //drawer
    event.shaped(`2x everycomp:vf/regions_unexplored/${regions_unexplored_planks}_desk_drawer`, [
      'AAA',
      'ABA',
      'C C'
    ], {
      A: `regions_unexplored:${regions_unexplored_planks}_planks`,
      B: `regions_unexplored:${regions_unexplored_planks}_slab`,
      C: `minecraft:stick`
    });

    //hay chair
    event.shapeless(`everycomp:vf/regions_unexplored/hay_${regions_unexplored_planks}_chair`, [

      `everycomp:vf/regions_unexplored/${regions_unexplored_planks}_chair`,
      `minecraft:hay_block`

    ])

  });

  //quark
  quark_planks.forEach((quark_planks) => {

    //  remove furniture
    event.remove({ output: `everycomp:vf/quark/${quark_planks}_chair` });
    event.remove({ output: `everycomp:vf/quark/${quark_planks}_table` });
    event.remove({ output: `everycomp:vf/quark/${quark_planks}_stool` });
    event.remove({ output: `everycomp:vf/quark/${quark_planks}_desk` });
    event.remove({ output: `everycomp:vf/quark/${quark_planks}_desk_drawer` });
    event.remove({ output: `everycomp:vf/quark/hay_${quark_planks}_chair` });

    //chairs
    event.shaped(`2x everycomp:vf/quark/${quark_planks}_chair`, [
      'B  ',
      'AAA',
      'B B'
    ], {
      A: `quark:${quark_planks}_planks`,
      B: `minecraft:stick`
    });

    //tables
    event.shaped(`everycomp:vf/quark/${quark_planks}_table`, [
      'AAA',
      'B B',
      'B B'
    ], {
      A: `quark:${quark_planks}_planks`,
      B: `minecraft:stick`
    });

    //stools
    event.shaped(`2x everycomp:vf/quark/${quark_planks}_stool`, [
      '   ',
      'AAA',
      'B B'
    ], {
      A: `quark:${quark_planks}_planks_slab`,
      B: `minecraft:stick`
    });

    //desk
    event.shaped(`2x everycomp:vf/quark/${quark_planks}_desk`, [
      'AAA',
      'A A',
      'B B'
    ], {
      A: `quark:${quark_planks}_planks`,
      B: `minecraft:stick`
    });

    //drawer
    event.shaped(`2x everycomp:vf/quark/${quark_planks}_desk_drawer`, [
      'AAA',
      'ABA',
      'C C'
    ], {
      A: `quark:${quark_planks}_planks`,
      B: `quark:${quark_planks}_planks_slab`,
      C: `minecraft:stick`
    });

    //hay chair
    event.shapeless(`everycomp:vf/quark/hay_${quark_planks}_chair`, [

      `everycomp:vf/quark/${quark_planks}_chair`,
      `minecraft:hay_block`

    ])

  });

  //upgrade_aquatic
  upgrade_aquatic_planks.forEach((upgrade_aquatic_planks) => {

    //  remove furniture
    event.remove({ output: `everycomp:vf/upgrade_aquatic/${upgrade_aquatic_planks}_chair` });
    event.remove({ output: `everycomp:vf/upgrade_aquatic/${upgrade_aquatic_planks}_table` });
    event.remove({ output: `everycomp:vf/upgrade_aquatic/${upgrade_aquatic_planks}_stool` });
    event.remove({ output: `everycomp:vf/upgrade_aquatic/${upgrade_aquatic_planks}_desk` });
    event.remove({ output: `everycomp:vf/upgrade_aquatic/${upgrade_aquatic_planks}_desk_drawer` });
    event.remove({ output: `everycomp:vf/upgrade_aquatic/hay_${upgrade_aquatic_planks}_chair` });

    //chairs
    event.shaped(`2x everycomp:vf/upgrade_aquatic/${upgrade_aquatic_planks}_chair`, [
      'B  ',
      'AAA',
      'B B'
    ], {
      A: `upgrade_aquatic:${upgrade_aquatic_planks}_planks`,
      B: `minecraft:stick`
    });

    //tables
    event.shaped(`everycomp:vf/upgrade_aquatic/${upgrade_aquatic_planks}_table`, [
      'AAA',
      'B B',
      'B B'
    ], {
      A: `upgrade_aquatic:${upgrade_aquatic_planks}_planks`,
      B: `minecraft:stick`
    });

    //stools
    event.shaped(`2x everycomp:vf/upgrade_aquatic/${upgrade_aquatic_planks}_stool`, [
      '   ',
      'AAA',
      'B B'
    ], {
      A: `upgrade_aquatic:${upgrade_aquatic_planks}_slab`,
      B: `minecraft:stick`
    });

    //desk
    event.shaped(`2x everycomp:vf/upgrade_aquatic/${upgrade_aquatic_planks}_desk`, [
      'AAA',
      'A A',
      'B B'
    ], {
      A: `upgrade_aquatic:${upgrade_aquatic_planks}_planks`,
      B: `minecraft:stick`
    });

    //drawer
    event.shaped(`2x everycomp:vf/upgrade_aquatic/${upgrade_aquatic_planks}_desk_drawer`, [
      'AAA',
      'ABA',
      'C C'
    ], {
      A: `upgrade_aquatic:${upgrade_aquatic_planks}_planks`,
      B: `upgrade_aquatic:${upgrade_aquatic_planks}_slab`,
      C: `minecraft:stick`
    });

    //hay chair
    event.shapeless(`everycomp:vf/upgrade_aquatic/hay_${upgrade_aquatic_planks}_chair`, [

      `everycomp:vf/upgrade_aquatic/${upgrade_aquatic_planks}_chair`,
      `minecraft:hay_block`

    ])

  });

  //The other modded wood types (these only have one wood type to adjust)

  //chair
  function chair(output, plank_input) {

    event.remove({output: output });

    event.shaped(Item.of(output, 2), [
      'B  ',
      'AAA',
      'B B'
    ], {
      A: plank_input,
      B: 'minecraft:stick'
    })

  }
  //
  chair('everycomp:vf/mynethersdelight/powdery_chair', 'mynethersdelight:powdery_planks')
  chair('everycomp:vf/valhelsia_structures/lapidified_jungle_chair', 'valhelsia_structures:lapidified_jungle_planks')
  chair('everycomp:vf/cataclysm/chorus_chair', 'cataclysm:chorus_planks')
  chair('everycomp:vf/snifferplus/stone_pine_chair', 'snifferplus:stone_pine_planks')
  chair('everycomp:vf/spawn/rotten_chair', 'spawn:rotten_planks')
  chair('everycomp:vf/netherexp/claret_chair', 'netherexp:claret_planks')
  chair('everycomp:vf/netherexp/smokestalk_chair', 'netherexp:smokestalk_planks')
  chair('everycomp:vf/windswept/holly_chair', 'windswept:holly_planks')
  chair('everycomp:vf/windswept/chestnut_chair', 'windswept:chestnut_planks')
  chair('everycomp:vf/windswept/pine_chair', 'windswept:pine_planks')
  chair('everycomp:vf/environmental/willow_chair', 'environmental:willow_planks')
  chair('everycomp:vf/environmental/plum_chair', 'environmental:plum_planks')
  chair('everycomp:vf/environmental/wisteria_chair', 'environmental:wisteria_planks')
  chair('everycomp:vf/hexerei/willow_chair', 'hexerei:willow_planks')
  chair('everycomp:vf/hexerei/witch_hazel_chair', 'hexerei:witch_hazel_planks')
  chair('everycomp:vf/hexerei/mahogany_chair', 'hexerei:mahogany_planks')


  //table
  function table(output, plank_input) {

    event.remove({output: output });

    event.shaped(output, [
      'AAA',
      'B B',
      'B B'
    ], {
      A: plank_input,
      B: 'minecraft:stick'
    })

  }
  //
  table('everycomp:vf/mynethersdelight/powdery_table', 'mynethersdelight:powdery_planks')
  table('everycomp:vf/valhelsia_structures/lapidified_jungle_table', 'valhelsia_structures:lapidified_jungle_planks')
  table('everycomp:vf/cataclysm/chorus_table', 'cataclysm:chorus_planks')
  table('everycomp:vf/snifferplus/stone_pine_table', 'snifferplus:stone_pine_planks')
  table('everycomp:vf/spawn/rotten_table', 'spawn:rotten_planks')
  table('everycomp:vf/netherexp/claret_table', 'netherexp:claret_planks')
  table('everycomp:vf/netherexp/smokestalk_table', 'netherexp:smokestalk_planks')
  table('everycomp:vf/windswept/holly_table', 'windswept:holly_planks')
  table('everycomp:vf/windswept/chestnut_table', 'windswept:chestnut_planks')
  table('everycomp:vf/windswept/pine_table', 'windswept:pine_planks')
  table('everycomp:vf/environmental/willow_table', 'environmental:willow_planks')
  table('everycomp:vf/environmental/plum_table', 'environmental:plum_planks')
  table('everycomp:vf/environmental/wisteria_table', 'environmental:wisteria_planks')
  table('everycomp:vf/hexerei/willow_table', 'hexerei:willow_planks')
  table('everycomp:vf/hexerei/witch_hazel_table', 'hexerei:witch_hazel_planks')
  table('everycomp:vf/hexerei/mahogany_table', 'hexerei:mahogany_planks')


  //stool
  function stool(output, slab_input) {

    event.remove({output: output });

    event.shaped(Item.of(output, 2), [
      '   ',
      'AAA',
      'B B'
    ], {
      A: slab_input,
      B: 'minecraft:stick'
    })

  }
  //
  stool('everycomp:vf/mynethersdelight/powdery_stool', 'mynethersdelight:powdery_slab')
  stool('everycomp:vf/valhelsia_structures/lapidified_jungle_stool', 'valhelsia_structures:lapidified_jungle_slab')
  stool('everycomp:vf/cataclysm/chorus_stool', 'cataclysm:chorus_slab')
  stool('everycomp:vf/snifferplus/stone_pine_stool', 'snifferplus:stone_pine_slab')
  stool('everycomp:vf/spawn/rotten_stool', 'spawn:rotten_slab')
  stool('everycomp:vf/netherexp/claret_stool', 'netherexp:claret_slab')
  stool('everycomp:vf/netherexp/smokestalk_stool', 'netherexp:smokestalk_slab')
  stool('everycomp:vf/windswept/holly_stool', 'windswept:holly_slab')
  stool('everycomp:vf/windswept/chestnut_stool', 'windswept:chestnut_slab')
  stool('everycomp:vf/windswept/pine_stool', 'windswept:pine_slab')
  stool('everycomp:vf/environmental/willow_stool', 'environmental:willow_slab')
  stool('everycomp:vf/environmental/plum_stool', 'environmental:plum_slab')
  stool('everycomp:vf/environmental/wisteria_stool', 'environmental:wisteria_slab')
  stool('everycomp:vf/hexerei/willow_stool', 'hexerei:willow_planks')
  stool('everycomp:vf/hexerei/witch_hazel_stool', 'hexerei:witch_hazel_planks')
  stool('everycomp:vf/hexerei/mahogany_stool', 'hexerei:mahogany_planks')


  //desk
  function desk(output, plank_input) {

    event.remove({output: output });

    event.shaped(output, [
      'AAA',
      'A A',
      'B B'
    ], {
      A: plank_input,
      B: 'minecraft:stick'
    })

  }
  //
  desk('everycomp:vf/mynethersdelight/powdery_desk', 'mynethersdelight:powdery_planks')
  desk('everycomp:vf/valhelsia_structures/lapidified_jungle_desk', 'valhelsia_structures:lapidified_jungle_planks')
  desk('everycomp:vf/cataclysm/chorus_desk', 'cataclysm:chorus_planks')
  desk('everycomp:vf/snifferplus/stone_pine_desk', 'snifferplus:stone_pine_planks')
  desk('everycomp:vf/spawn/rotten_desk', 'spawn:rotten_planks')
  desk('everycomp:vf/netherexp/claret_desk', 'netherexp:claret_planks')
  desk('everycomp:vf/netherexp/smokestalk_desk', 'netherexp:smokestalk_planks')
  desk('everycomp:vf/windswept/holly_desk', 'windswept:holly_planks')
  desk('everycomp:vf/windswept/chestnut_desk', 'windswept:chestnut_planks')
  desk('everycomp:vf/windswept/pine_desk', 'windswept:pine_planks')
  desk('everycomp:vf/environmental/willow_desk', 'environmental:willow_planks')
  desk('everycomp:vf/environmental/plum_desk', 'environmental:plum_planks')
  desk('everycomp:vf/environmental/wisteria_desk', 'environmental:wisteria_planks')
  desk('everycomp:vf/hexerei/willow_desk', 'hexerei:willow_planks')
  desk('everycomp:vf/hexerei/witch_hazel_desk', 'hexerei:witch_hazel_planks')
  desk('everycomp:vf/hexerei/mahogany_desk', 'hexerei:mahogany_planks')


  //drawer
  function drawer(output, plank_input, slab_input) {

    event.remove({output: output });

    event.shaped(output, [
      'AAA',
      'ABA',
      'C C'
    ], {
      A: plank_input,
      B: slab_input,
      C: 'minecraft:stick'
    })

  }
  //
  drawer('everycomp:vf/mynethersdelight/powdery_desk_drawer', 'mynethersdelight:powdery_planks', 'mynethersdelight:powdery_slab')
  drawer('everycomp:vf/valhelsia_structures/lapidified_jungle_desk_drawer', 'valhelsia_structures:lapidified_jungle_planks', 'valhelsia_structures:lapidified_jungle_slab')
  drawer('everycomp:vf/cataclysm/chorus_desk_drawer', 'cataclysm:chorus_planks', 'cataclysm:chorus_slab')
  drawer('everycomp:vf/snifferplus/stone_pine_desk_drawer', 'snifferplus:stone_pine_planks', 'snifferplus:stone_pine_slab')
  drawer('everycomp:vf/spawn/rotten_desk_drawer', 'spawn:rotten_planks', 'spawn:rotten_slab')
  drawer('everycomp:vf/netherexp/claret_desk_drawer', 'netherexp:claret_planks', 'netherexp:claret_slab')
  drawer('everycomp:vf/netherexp/smokestalk_desk_drawer', 'netherexp:smokestalk_planks', 'netherexp:smokestalk_slab')
  drawer('everycomp:vf/windswept/holly_desk_drawer', 'windswept:holly_planks', 'windswept:holly_slab')
  drawer('everycomp:vf/windswept/chestnut_desk_drawer', 'windswept:chestnut_planks', 'windswept:chestnut_slab')
  drawer('everycomp:vf/windswept/pine_desk_drawer', 'windswept:pine_planks', 'windswept:pine_slab')
  drawer('everycomp:vf/environmental/willow_desk_drawer', 'environmental:willow_planks', 'environmental:willow_slab')
  drawer('everycomp:vf/environmental/plum_desk_drawer', 'environmental:plum_planks', 'environmental:plum_slab')
  drawer('everycomp:vf/environmental/wisteria_desk_drawer', 'environmental:wisteria_planks', 'environmental:wisteria_slab')
  drawer('everycomp:vf/hexerei/willow_desk_drawer', 'hexerei:willow_planks', 'hexerei:willow_slab')
  drawer('everycomp:vf/hexerei/witch_hazel_desk_drawer', 'hexerei:witch_hazel_planks', 'hexerei:witch_hazel_slab')
  drawer('everycomp:vf/hexerei/mahogany_desk_drawer', 'hexerei:mahogany_planks', 'hexerei:mahogany_slab')


  //hay chair
  function haychair(output, chair_input) {

    event.remove({output: output });

    event.shapeless(output, [

      chair_input,
      'minecraft:hay_block'

    ])

  }
  //
  haychair('everycomp:vf/mynethersdelight/hay_powdery_chair', 'everycomp:vf/mynethersdelight/powdery_chair')
  haychair('everycomp:vf/valhelsia_structures/hay_lapidified_jungle_chair', 'everycomp:vf/valhelsia_structures/lapidified_jungle_chair')
  haychair('everycomp:vf/cataclysm/hay_chorus_chair', 'everycomp:vf/cataclysm/chorus_chair')
  haychair('everycomp:vf/snifferplus/hay_stone_pine_chair', 'everycomp:vf/snifferplus/stone_pine_chair')
  haychair('everycomp:vf/spawn/hay_rotten_chair', 'everycomp:vf/spawn/rotten_chair')
  haychair('everycomp:vf/netherexp/hay_claret_chair', 'everycomp:vf/netherexp/claret_chair')
  haychair('everycomp:vf/netherexp/hay_smokestalk_chair', 'everycomp:vf/netherexp/smokestalk_chair')
  haychair('everycomp:vf/windswept/hay_holly_chair', 'everycomp:vf/windswept/holly_chair')
  haychair('everycomp:vf/windswept/hay_chestnut_chair', 'everycomp:vf/windswept/chestnut_chair')
  haychair('everycomp:vf/windswept/hay_pine_chair', 'everycomp:vf/windswept/pine_chair')
  haychair('everycomp:vf/environmental/hay_willow_chair', 'everycomp:vf/environmental/willow_chair')
  haychair('everycomp:vf/environmental/hay_plum_chair', 'everycomp:vf/environmental/plum_chair')
  haychair('everycomp:vf/environmental/hay_wisteria_chair', 'everycomp:vf/environmental/wisteria_chair')
  haychair('everycomp:vf/hexerei/hay_willow_chair', 'everycomp:vf/hexerei/willow_chair')
  haychair('everycomp:vf/hexerei/hay_witch_hazel_chair', 'everycomp:vf/hexerei/witch_hazel_chair')
  haychair('everycomp:vf/hexerei/hay_mahogany_chair', 'everycomp:vf/hexerei/mahogany_chair')

})
