ServerEvents.recipes(event => {

  let logsvanilla = [
    "acacia",
    "birch",
    "cherry",
    "dark_oak",
    "jungle",
    "mangrove",
    "oak",
    "spruce"
  ];

  logsvanilla.forEach(type => {

    let result = `valhelsia_structures:${type}_post`
    let result_stripped = `valhelsia_structures:stripped_${type}_post`
    let result_cut = `valhelsia_structures:cut_${type}_post`
    let result_cut_stripped = `valhelsia_structures:cut_stripped_${type}_post`

    if (Item.exists(result)) {
      event.stonecutting(
        Item.of(`valhelsia_structures:${type}_post`, 4),
        `#minecraft:${type}_logs`
      )
      event.shaped(
        Item.of(result, 4),
        [
          'AB',
          'A '
        ],
        {
          A: `minecraft:${type}_log`,
          B: '#minecraft:axes'
        }
      ).damageIngredient("#minecraft:axes", 1);
    }

    if (Item.exists(result_stripped)) {
      event.shaped(
        Item.of(result_stripped, 4),
        [
          'AB',
          'A '
        ],
        {
          A: `minecraft:stripped_${type}_log`,
          B: '#minecraft:axes'
        }
      ).damageIngredient("#minecraft:axes", 1);
    }

    if (Item.exists(result_cut)) {
      event.shaped(
        Item.of(result_cut, 4), // arg 1: output
        [
          `valhelsia_structures:${type}_post`,
          '#minecraft:axes'
        ]
      ).damageIngredient("#minecraft:axes", 1);
    }

    if (Item.exists(result_cut_stripped)) {
      event.shaped(
        Item.of(result_cut_stripped, 4), // arg 1: output
        [
          `valhelsia_structures:stripped_${type}_post`,
          '#minecraft:axes'
        ]
      ).damageIngredient("#minecraft:axes", 1);
    }

  });

  let stemsvanilla = [
    "crimson",
    "warped"
  ];

  stemsvanilla.forEach(type => {

    let result = `valhelsia_structures:${type}_post`
    let result_stripped = `valhelsia_structures:stripped_${type}_post`
    let result_cut = `valhelsia_structures:cut_${type}_post`
    let result_cut_stripped = `valhelsia_structures:cut_stripped_${type}_post`

    if (Item.exists(result)) {
      event.stonecutting(
        Item.of(`valhelsia_structures:${type}_post`, 4),
        `#minecraft:${type}_stems`
      )
      event.shaped(
        Item.of(result, 4),
        [
          'AB',
          'A '
        ],
        {
          A: `minecraft:${type}_stem`,
          B: '#minecraft:axes'
        }
      ).damageIngredient("#minecraft:axes", 1);
    }

    if (Item.exists(result_stripped)) {
      event.shaped(
        Item.of(result_stripped, 4),
        [
          'AB',
          'A '
        ],
        {
          A: `minecraft:stripped_${type}_stem`,
          B: '#minecraft:axes'
        }
      ).damageIngredient("#minecraft:axes", 1);
    }

    if (Item.exists(result_cut)) {
      event.shaped(
        Item.of(result_cut, 4), // arg 1: output
        [
          `valhelsia_structures:${type}_post`,
          '#minecraft:axes'
        ]
      ).damageIngredient("#minecraft:axes", 1);
    }

    if (Item.exists(result_cut_stripped)) {
      event.shaped(
        Item.of(result_cut_stripped, 4), // arg 1: output
        [
          `valhelsia_structures:stripped_${type}_post`,
          '#minecraft:axes'
        ]
      ).damageIngredient("#minecraft:axes", 1);
    }

  });

  let logsRU = [
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

  logsRU.forEach(type => {
    let result = `everycomp:vs/regions_unexplored/${type}_post`;
    let result_stripped = `everycomp:vs/regions_unexplored/stripped_${type}_post`;
    let result_cut = `everycomp:vs/regions_unexplored/cut_${type}_post`;
    let result_cut_stripped = `everycomp:vs/regions_unexplored/cut_stripped_${type}_post`;

    if (Item.exists(result)) {
      event.stonecutting(
        Item.of(`everycomp:vs/regions_unexplored/${type}_post`, 4),
        `#regions_unexplored:${type}_logs`
      )
      event.shaped(
        Item.of(result, 4),
        [
          'AB',
          'A '
        ],
        {
          A: `regions_unexplored:${type}_log`,
          B: '#minecraft:axes'
        }
      ).damageIngredient("#minecraft:axes", 1);
    }

    if (Item.exists(result_stripped)) {
      event.shaped(
        Item.of(result_stripped, 4),
        [
          'AB',
          'A '
        ],
        {
          A: `regions_unexplored:stripped_${type}_log`,
          B: '#minecraft:axes'
        }
      ).damageIngredient("#minecraft:axes", 1);
    }

    if (Item.exists(result_cut)) {
      event.shaped(
        Item.of(result_cut, 4),
        [
          result,
          '#minecraft:axes'
        ]
      ).damageIngredient("#minecraft:axes", 1);
    }

    if (Item.exists(result_cut_stripped)) {
      event.shaped(
        Item.of(result_cut_stripped, 4),
        [
          result_stripped,
          '#minecraft:axes'
        ]
      ).damageIngredient("#minecraft:axes", 1);
    }
  });
})