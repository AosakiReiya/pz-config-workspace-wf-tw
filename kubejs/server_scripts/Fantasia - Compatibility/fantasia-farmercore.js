ServerEvents.compostableRecipes((event) => {

  let miscsmall = [
    'hearthandharvest:blueberries',
    'hearthandharvest:cherry',
    'hearthandharvest:raspberry',
    'hearthandharvest:red_grapes',
    'hearthandharvest:green_grapes',
    'sniffers_delight:torchflower_pistill',
    'culturaldelights:corn_dough',
    'culturaldelights:popcorn',
    'farmersdelight:wheat_dough',
    'hearthandharvest:peanut',
    'hearthandharvest:raisins',
    'hearthandharvest:sunflower_seeds'
  ]
  miscsmall.forEach(o => event.add(o, 0.3));

  let miscmed = [
    'culturaldelights:tortilla',
    'culturaldelights:smoked_cut_eggplant',
    'culturaldelights:smoked_white_eggplant',
    'culturaldelights:smoked_tomato',
    'culturaldelights:avocado_toast',
    'mynethersdelight:ghast_dough',
    'mynethersdelight:ghast_sourdough',
    'hearthandharvest:trail_mix',
    'hearthandharvest:carrot_cake_slice'
  ]
  miscmed.forEach(o => event.add(o, 0.6));

  let miscok = [
    'culturaldelights:midori_roll_slice',
    'culturaldelights:smoked_eggplant',
    'farmersdelight:kelp_roll_slice',
    'farmersdelight:cabbage_rolls',
    'mynethersdelight:toasts',
    'mynethersdelight:slices_of_bread',
    'hearthandharvest:blueberry_muffin'
  ]
  miscok.forEach(o => event.add(o, 0.8));

  let miscyes = [
    'hearthandharvest:blueberry_pie',
    'hearthandharvest:blueberry_pie_slice',
    'hearthandharvest:raspberry_pie',
    'hearthandharvest:raspberry_pie_slice',
    'hearthandharvest:grape_pie',
    'hearthandharvest:grape_pie_slice',
    'hearthandharvest:chicken_pot_pie',
    'hearthandharvest:chicken_pot_pie_slice',
    'culturaldelights:midori_roll',
    'farmersdelight:kelp_roll',
    'hearthandharvest:carrot_cake',
    'supplementaries:pancake'
  ]
  miscyes.forEach(o => event.add(o, 1));

});

ServerEvents.tags('item', event => {

  let hhseeds = [
    'hearthandharvest:blueberries',
    'hearthandharvest:cherry',
    'hearthandharvest:raspberry',
    'hearthandharvest:red_grapes',
    'hearthandharvest:green_grapes'
  ]
  hhseeds.forEach(o => event.add('quark:seed_pouch_holdable', o));

event.add(
    "c:foods/raw_meat",
    [
      'alexsdelight:raw_bison',
      'environmental:venison',
      'environmental:duck', 'alexsmobs:moose_ribs',
      'windswept:goat',
      'alexsmobs:kangaroo_meat'
    ])

});

ServerEvents.tags('block', event => {

  event.add('eclipticseasons:crops/spring_summer', 'hearthandharvest:cotton')
  event.add('eclipticseasons:crops/dry_average', 'hearthandharvest:cotton')

  event.add('eclipticseasons:crops/summer_autumn', 'culturaldelights:eggplants')
  event.add('eclipticseasons:crops/humid_humid', 'culturaldelights:eggplants')

  event.add('eclipticseasons:crops/spring_summer', 'culturaldelights:cucumbers')
  event.add('eclipticseasons:crops/humid_humid', 'culturaldelights:cucumbers')

  event.add('eclipticseasons:crops/autumn', 'culturaldelights:corn')
  event.add('eclipticseasons:crops/average_humid', 'culturaldelights:corn')

  event.add('eclipticseasons:crops/spring_summer', 'culturaldelights:avocado_pit')
  event.add('eclipticseasons:crops/arid_humid', 'culturaldelights:avocado_pit')

  event.add('eclipticseasons:crops/spring_summer', 'hearthandharvest:peanuts')
  event.add('eclipticseasons:crops/dry_average', 'hearthandharvest:peanuts')

  event.add('eclipticseasons:crops/spring_autumn', 'hearthandharvest:budding_red_grapes')
  event.add('eclipticseasons:crops/dry_average', 'hearthandharvest:budding_red_grapes')

  event.add('eclipticseasons:crops/summer_autumn', 'hearthandharvest:budding_green_grapes')
  event.add('eclipticseasons:crops/dry_average', 'hearthandharvest:budding_green_grapes')

  event.add('eclipticseasons:crops/spring_summer', 'minecraft:pitcher_crop')
  event.add('eclipticseasons:crops/average_humid', 'minecraft:pitcher_crop')

  event.add('eclipticseasons:crops/spring', 'regions_unexplored:salmonberry_bush')
  event.add('eclipticseasons:crops/humid_humid', 'regions_unexplored:salmonberry_bush')

  event.add('eclipticseasons:crops/winter', 'regions_unexplored:duskmelon')
  event.add('eclipticseasons:crops/average_humid', 'regions_unexplored:duskmelon')

  let hhberries = [
    'hearthandharvest:blueberry_bush',
    'hearthandharvest:raspberry_bush'
  ]
  hhberries.forEach(o => event.add('eclipticseasons:crops/spring_summer', o));
  hhberries.forEach(o => event.add('eclipticseasons:crops/average_humid', o));
});