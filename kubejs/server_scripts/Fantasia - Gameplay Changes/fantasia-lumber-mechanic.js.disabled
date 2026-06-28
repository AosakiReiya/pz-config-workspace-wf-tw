ServerEvents.recipes(event => {

  event.remove({ output: 'minecraft:stick', type: 'minecraft:crafting_shaped' })
  event.remove({ output: 'minecraft:stick', input: 'quark:stick_block' })
  event.remove({ output: 'quark:stick_block' })

  event.shapeless(
    Item.of(`quark:stick_block`, 1), // arg 1: output
    [
      '8x minecraft:stick'
    ]
  )

  event.shapeless(
    Item.of(`minecraft:stick`, 8), // arg 1: output
    [
      'quark:stick_block'
    ]
  )

  let quarklogs = [
    "ancient",
    "azalea",
    "blossom"
  ];

  quarklogs.forEach(type => {
    event.remove({ output: `quark:${type}_planks`, type: 'minecraft:crafting_shapeless' })
    event.stonecutting(
      Item.of(`quark:${type}_planks`, 4),
      `#quark:${type}_logs`
    )
    event.shapeless(
      Item.of(`quark:${type}_planks`, 4), // arg 1: output
      [
        `#quark:${type}_logs`,
        '#minecraft:axes'
      ]
    ).damageIngredient("#minecraft:axes", 1);
  });

  let aquaticlogs = [
    "driftwood",
    "river"
  ];

  aquaticlogs.forEach(type => {
    event.remove({ output: `upgrade_aquatic:${type}_planks`, type: 'minecraft:crafting_shapeless' })
    event.stonecutting(
      Item.of(`upgrade_aquatic:${type}_planks`, 4),
      `#upgrade_aquatic:${type}_logs`
    )
    event.shapeless(
      Item.of(`upgrade_aquatic:${type}_planks`, 4), // arg 1: output
      [
        `#upgrade_aquatic:${type}_logs`,
        '#minecraft:axes'
      ]
    ).damageIngredient("#minecraft:axes", 1);
  });

  let vanlogs = [
    "acacia",
    "birch",
    "cherry",
    "dark_oak",
    "jungle",
    "mangrove",
    "oak",
    "spruce"
  ];

  vanlogs.forEach(type => {
    'valhelsia_structures:oak_post'
    event.remove({ output: `minecraft:${type}_planks`, type: 'minecraft:crafting_shapeless' })
    event.stonecutting(
      Item.of(`minecraft:${type}_planks`, 4),
      `#minecraft:${type}_logs`
    )
    event.shapeless(
      Item.of(`minecraft:${type}_planks`, 4), // arg 1: output
      [
        `#minecraft:${type}_logs`,
        '#minecraft:axes'
      ]
    ).damageIngredient("#minecraft:axes", 1);

  });

  let vanistems = [
    "crimson",
    "warped"
  ];

  vanistems.forEach(type => {
    event.remove({ output: `minecraft:${type}_planks`, type: 'minecraft:crafting_shapeless' })
    event.stonecutting(
      Item.of(`minecraft:${type}_planks`, 4),
      `#minecraft:${type}_stems`
    )
    event.shapeless(
      Item.of(`minecraft:${type}_planks`, 4), // arg 1: output
      [
        `#minecraft:${type}_stems`,
        '#minecraft:axes'
      ]
    ).damageIngredient("#minecraft:axes", 1);
  });

  let envlogs = [
    "willow",
    "wisteria",
    "plum"
  ];

  envlogs.forEach(type => {
    event.remove({ output: `environmental:${type}_planks`, type: 'minecraft:crafting_shapeless' })
    event.stonecutting(
      Item.of(`environmental:${type}_planks`, 4),
      `#environmental:${type}_logs`
    )
    event.shapeless(
      Item.of(`environmental:${type}_planks`, 4), // arg 1: output
      [
        `#environmental:${type}_logs`,
        '#minecraft:axes'
      ]
    ).damageIngredient("#minecraft:axes", 1);
  });

  let hexlogs = [
    "mahogany",
    "willow",
    "witch_hazel"
  ];

  hexlogs.forEach(type => {
    event.remove({ output: `hexerei:${type}_planks`, type: 'minecraft:crafting_shapeless' })
    event.stonecutting(
      Item.of(`hexerei:${type}_planks`, 4),
      `#hexerei:${type}_logs`
    )
    event.shapeless(
      Item.of(`hexerei:${type}_planks`, 4), // arg 1: output
      [
        `hexerei:${type}_log`,
        '#minecraft:axes'
      ]
    ).damageIngredient("#minecraft:axes", 1);
    event.shapeless(
      Item.of(`hexerei:${type}_planks`, 4), // arg 1: output
      [
        `hexerei:stripped_${type}_log`,
        '#minecraft:axes'
      ]
    ).damageIngredient("#minecraft:axes", 1);
  })

  let windlogs = [
    "holly",
    "chestnut",
    "pine"
  ];

  windlogs.forEach(type => {
    event.remove({ output: `windswept:${type}_planks`, type: 'minecraft:crafting_shapeless' })
    event.stonecutting(
      Item.of(`windswept:${type}_planks`, 4),
      `#windswept:${type}_logs`
    )
    event.shapeless(
      Item.of(`windswept:${type}_planks`, 4), // arg 1: output
      [
        `#windswept:${type}_logs`,
        '#minecraft:axes'
      ]
    ).damageIngredient("#minecraft:axes", 1);
  });

  event.remove({ output: `snifferplus:stone_pine_planks`, type: 'minecraft:crafting_shapeless' })
  event.stonecutting(
    Item.of(`snifferplus:stone_pine_planks`, 4),
    `#snifferplus:stone_pine_logs`
  )
  event.shapeless(
    Item.of(`snifferplus:stone_pine_planks`, 4), // arg 1: output
    [
      `#snifferplus:stone_pine_logs`,
      '#minecraft:axes'
    ]
  ).damageIngredient("#minecraft:axes", 1);

  let rulogs = [
    "baobab",
    "blackwood",
    "brimwood",
    "cobalt",
    "cypress",
    "dead",
    "eucalyptus",
    "joshua",
    "kapok",
    "larch",
    "maple",
    "mauve",
    "palm",
    "pine",
    "redwood",
    "socotra",
    "willow"
  ];

  rulogs.forEach(type => {
    event.remove({ output: `regions_unexplored:${type}_planks`, type: 'minecraft:crafting_shapeless' })
    event.stonecutting(
      Item.of(`regions_unexplored:${type}_planks`, 4),
      `#regions_unexplored:${type}_logs`
    )
    event.shapeless(
      Item.of(`regions_unexplored:${type}_planks`, 4), // arg 1: output
      [
        `#regions_unexplored:${type}_logs`,
        '#minecraft:axes'
      ]
    ).damageIngredient("#minecraft:axes", 1);
  });

  event.remove({ output: 'regions_unexplored:magnolia_planks', type: 'minecraft:crafting_shapeless' })
  event.remove({ output: 'regions_unexplored:alpha_planks', type: 'minecraft:crafting_shapeless' })

  event.shapeless(
    Item.of('regions_unexplored:magnolia_planks', 1), // arg 1: output
    [
      'everycomp:q/regions_unexplored/vertical_magnolia_planks'
    ]
  )

  event.shapeless(
    Item.of('regions_unexplored:magnolia_planks', 4), // arg 1: output
    [
      '#regions_unexplored:magnolia_logs_item',
      '#minecraft:axes'
    ]
  ).damageIngredient("#minecraft:axes", 1);

  event.shapeless(
    Item.of('regions_unexplored:alpha_planks', 1), // arg 1: output
    [
      'everycomp:q/regions_unexplored/vertical_alpha_planks'
    ]
  )

  event.shapeless(
    Item.of('regions_unexplored:alpha_planks', 4), // arg 1: output
    [
      'regions_unexplored:alpha_log',
      '#minecraft:axes'
    ]
  ).damageIngredient("#minecraft:axes", 1);
})