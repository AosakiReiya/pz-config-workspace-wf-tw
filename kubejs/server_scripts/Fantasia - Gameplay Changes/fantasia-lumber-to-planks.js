ServerEvents.recipes(event => {

  let aquaticlogs = [
    "driftwood",
    "river"
  ];

  aquaticlogs.forEach(type => {

    event.shapeless(
      Item.of(`everycomp:vs/upgrade_aquatic/${type}_post`, 4),
      [
        `everycomp:vs/upgrade_aquatic/bundled_${type}_posts`
      ]
    )

    event.shapeless(
      Item.of(`everycomp:vs/upgrade_aquatic/stripped_${type}_post`, 4),
      [
        `everycomp:vs/upgrade_aquatic/bundled_stripped_${type}_posts`
      ]
    )

    event.shapeless(
      Item.of(`upgrade_aquatic:${type}_planks`, 2),
      [
        `everycomp:vs/upgrade_aquatic/${type}_post`,
        '#minecraft:axes'
      ]
    ).damageIngredient("#minecraft:axes", 1);

    event.shapeless(
      Item.of(`upgrade_aquatic:${type}_planks`, 2),
      [
        `everycomp:vs/upgrade_aquatic/stripped_${type}_post`,
        '#minecraft:axes'
      ]
    ).damageIngredient("#minecraft:axes", 1);

  });

  let vanlogs = [
    "acacia",
    "birch",
    "dark_oak",
    "jungle",
    "mangrove",
    "oak",
    "spruce",
    "crimson",
    "warped"
  ];

  vanlogs.forEach(type => {

    event.shapeless(
      Item.of(`valhelsia_structures:${type}_post`, 4),
      [
        `valhelsia_structures:bundled_${type}_posts`
      ]
    )

    event.shapeless(
      Item.of(`minecraft:${type}_planks`, 2),
      [
        `valhelsia_structures:${type}_post`,
        '#minecraft:axes'
      ]
    ).damageIngredient("#minecraft:axes", 1);

  });

  let envlogs = [
    "wisteria",
    "plum"
  ];

  envlogs.forEach(type => {

    event.shapeless(
      Item.of(`everycomp:vs/environmental/${type}_post`, 4),
      [
        `everycomp:vs/environmental/bundled_${type}_posts`
      ]
    )

    event.shapeless(
      Item.of(`everycomp:vs/environmental/stripped_${type}_post`, 4),
      [
        `everycomp:vs/environmental/bundled_stripped_${type}_posts`
      ]
    )

    event.shapeless(
      Item.of(`environmental:${type}_planks`, 2),
      [
        `everycomp:vs/environmental/${type}_post`,
        '#minecraft:axes'
      ]
    ).damageIngredient("#minecraft:axes", 1);

    event.shapeless(
      Item.of(`environmental:${type}_planks`, 2),
      [
        `everycomp:vs/environmental/stripped_${type}_post`,
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

    event.shapeless(
      Item.of(`everycomp:vs/hexerei/${type}_post`, 4),
      [
        `everycomp:vs/hexerei/bundled_${type}_posts`
      ]
    )

    event.shapeless(
      Item.of(`everycomp:vs/hexerei/stripped_${type}_post`, 4),
      [
        `everycomp:vs/hexerei/bundled_stripped_${type}_posts`
      ]
    )

    event.shapeless(
      Item.of(`hexerei:${type}_planks`, 2),
      [
        `everycomp:vs/hexerei/${type}_post`,
        '#minecraft:axes'
      ]
    ).damageIngredient("#minecraft:axes", 1);

    event.shapeless(
      Item.of(`hexerei:${type}_planks`, 2),
      [
        `everycomp:vs/hexerei/stripped_${type}_post`,
        '#minecraft:axes'
      ]
    ).damageIngredient("#minecraft:axes", 1);

  });

  let windlogs = [
    "holly",
    "chestnut",
    "pine"
  ];

  windlogs.forEach(type => {

    event.shapeless(
      Item.of(`everycomp:vs/windswept/${type}_post`, 4),
      [
        `everycomp:vs/windswept/bundled_${type}_posts`
      ]
    )

    event.shapeless(
      Item.of(`everycomp:vs/windswept/stripped_${type}_post`, 4),
      [
        `everycomp:vs/windswept/bundled_stripped_${type}_posts`
      ]
    )

    event.shapeless(
      Item.of(`windswept:${type}_planks`, 2),
      [
        `everycomp:vs/windswept/${type}_post`,
        '#minecraft:axes'
      ]
    ).damageIngredient("#minecraft:axes", 1);

    event.shapeless(
      Item.of(`windswept:${type}_planks`, 2),
      [
        `everycomp:vs/windswept/stripped_${type}_post`,
        '#minecraft:axes'
      ]
    ).damageIngredient("#minecraft:axes", 1);

  });

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

    event.shapeless(
      Item.of(`everycomp:vs/regions_unexplored/${type}_post`, 4),
      [
        `everycomp:vs/regions_unexplored/bundled_${type}_posts`
      ]
    )

    event.shapeless(
      Item.of(`everycomp:vs/regions_unexplored/stripped_${type}_post`, 4),
      [
        `everycomp:vs/regions_unexplored/bundled_stripped_${type}_posts`
      ]
    )

    event.shapeless(
      Item.of(`regions_unexplored:${type}_planks`, 2),
      [
        `everycomp:vs/regions_unexplored/${type}_post`,
        '#minecraft:axes'
      ]
    ).damageIngredient("#minecraft:axes", 1);

    event.shapeless(
      Item.of(`regions_unexplored:${type}_planks`, 2),
      [
        `everycomp:vs/regions_unexplored/stripped_${type}_post`,
        '#minecraft:axes'
      ]
    ).damageIngredient("#minecraft:axes", 1);

  });
})