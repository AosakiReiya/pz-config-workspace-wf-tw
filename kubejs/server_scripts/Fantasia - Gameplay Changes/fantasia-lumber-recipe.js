ServerEvents.recipes(event => {

  let aquaticlogs = [
    "driftwood",
    "river"
  ];

  aquaticlogs.forEach(type => {

    event.shaped(
      Item.of(`everycomp:vs/upgrade_aquatic/${type}_post`, 4),
      [
        'AB',
        'A '
      ],
      {
        A: `upgrade_aquatic:${type}_log`,
        B: '#minecraft:axes'
      }
    );

    event.shaped(
      Item.of(`everycomp:vs/upgrade_aquatic/stripped_${type}_post`, 4),
      [
        'AB',
        'A '
      ],
      {
        A: `upgrade_aquatic:stripped_${type}_log`,
        B: '#minecraft:axes'
      }
    );

  });

  let envlogs = [
    "wisteria",
    "plum"
  ];

  envlogs.forEach(type => {

    event.shaped(
      Item.of(`everycomp:vs/environmental/${type}_post`, 4),
      [
        'AB',
        'A '
      ],
      {
        A: `environmental:${type}_log`,
        B: '#minecraft:axes'
      }
    );

    event.shaped(
      Item.of(`everycomp:vs/environmental/stripped_${type}_post`, 4),
      [
        'AB',
        'A '
      ],
      {
        A: `environmental:stripped_${type}_log`,
        B: '#minecraft:axes'
      }
    );

  });

  let hexlogs = [
    "mahogany",
    "willow",
    "witch_hazel"
  ];

  hexlogs.forEach(type => {

    event.shaped(
      Item.of(`everycomp:vs/hexerei/${type}_post`, 4),
      [
        'AB',
        'A '
      ],
      {
        A: `hexerei:${type}_log`,
        B: '#minecraft:axes'
      }
    );

    event.shaped(
      Item.of(`everycomp:vs/hexerei/stripped_${type}_post`, 4),
      [
        'AB',
        'A '
      ],
      {
        A: `hexerei:stripped_${type}_log`,
        B: '#minecraft:axes'
      }
    );

  });

  let windlogs = [
    "holly",
    "chestnut",
    "pine"
  ];

  windlogs.forEach(type => {

    event.shaped(
      Item.of(`everycomp:vs/windswept/${type}_post`, 4),
      [
        'AB',
        'A '
      ],
      {
        A: `windswept:${type}_log`,
        B: '#minecraft:axes'
      }
    );

    event.shaped(
      Item.of(`everycomp:vs/windswept/stripped_${type}_post`, 4),
      [
        'AB',
        'A '
      ],
      {
        A: `windswept:stripped_${type}_log`,
        B: '#minecraft:axes'
      }
    );

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

    event.shaped(
      Item.of(`everycomp:vs/regions_unexplored/${type}_post`, 4),
      [
        'AB',
        'A '
      ],
      {
        A: `regions_unexplored:${type}_log`,
        B: '#minecraft:axes'
      }
    );

    event.shaped(
      Item.of(`everycomp:vs/regions_unexplored/stripped_${type}_post`, 4),
      [
        'AB',
        'A '
      ],
      {
        A: `regions_unexplored:stripped_${type}_log`,
        B: '#minecraft:axes'
      }
    );

  });
})