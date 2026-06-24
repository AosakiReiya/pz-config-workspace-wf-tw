ServerEvents.recipes(event => {

  //ARCANE
  event.shapeless(
    Item.of('kubejs:arcane_thread', 2),
    [
      'irons_spellbooks:magic_cloth',
      'minecraft:stick',
      'minecraft:stick',
      '#forge:tools/knives'
    ]
  )
    .damageIngredient('#forge:tools/knives');

  event.shaped(
    Item.of('spelunkery:obsidian_hammer_and_chisel', 1),
    [
      ' F ',
      'SF ',
      ' SF'
    ],
    { F: 'minecraft:diamond', S: 'minecraft:stick' }
  )

  event.shaped(
    Item.of('irons_spellbooks:divine_pearl', 1),
    [
      'ABA',
      'BCB',
      'ABA'
    ],
    { A: 'mca:rose_gold_ingot', B: 'minecraft:amethyst_shard', C: 'minecraft:quartz' }
  )
  //magic tools

  event.shapeless(
    Item.of('irons_spellbooks:fire_rune', 1),
    [
      'kubejs:solution_fire',
      'spelunkery:obsidian_hammer_and_chisel',
      'irons_spellbooks:blank_rune',
      'irons_spellbooks:arcane_essence'
    ]
  )
    .damageIngredient('spelunkery:obsidian_hammer_and_chisel')
    .replaceIngredient('kubejs:solution_fire', 'minecraft:glass_bottle');
  event.shapeless(
    Item.of('irons_spellbooks:ice_rune', 1),
    [
      'kubejs:solution_ice',
      'spelunkery:obsidian_hammer_and_chisel',
      'irons_spellbooks:blank_rune',
      'irons_spellbooks:arcane_essence'
    ]
  )
    .damageIngredient('spelunkery:obsidian_hammer_and_chisel')
    .replaceIngredient('kubejs:solution_ice', 'minecraft:glass_bottle');
  event.shapeless(
    Item.of('irons_spellbooks:lightning_rune', 1),
    [
      'kubejs:solution_lightning',
      'spelunkery:obsidian_hammer_and_chisel',
      'irons_spellbooks:blank_rune',
      'irons_spellbooks:arcane_essence'
    ]
  )
    .damageIngredient('spelunkery:obsidian_hammer_and_chisel')
    .replaceIngredient('kubejs:solution_lightning', 'minecraft:glass_bottle');
  event.shapeless(
    Item.of('irons_spellbooks:ender_rune', 1),
    [
      'kubejs:solution_ender',
      'spelunkery:obsidian_hammer_and_chisel',
      'irons_spellbooks:blank_rune',
      'irons_spellbooks:arcane_essence'
    ]
  )
    .damageIngredient('spelunkery:obsidian_hammer_and_chisel')
    .replaceIngredient('kubejs:solution_ender', 'minecraft:glass_bottle');
  event.shapeless(
    Item.of('irons_spellbooks:holy_rune', 1),
    [
      'kubejs:solution_holy',
      'spelunkery:obsidian_hammer_and_chisel',
      'irons_spellbooks:blank_rune',
      'irons_spellbooks:arcane_essence'
    ]
  )
    .damageIngredient('spelunkery:obsidian_hammer_and_chisel')
    .replaceIngredient('kubejs:solution_holy', 'minecraft:glass_bottle');
  event.shapeless(
    Item.of('irons_spellbooks:blood_rune', 1),
    [
      'kubejs:solution_blood',
      'spelunkery:obsidian_hammer_and_chisel',
      'irons_spellbooks:blank_rune',
      'irons_spellbooks:arcane_essence'
    ]
  )
    .damageIngredient('spelunkery:obsidian_hammer_and_chisel')
    .replaceIngredient('kubejs:solution_blood', 'minecraft:glass_bottle');
  event.shapeless(
    Item.of('irons_spellbooks:evocation_rune', 1),
    [
      'kubejs:solution_evocation',
      'spelunkery:obsidian_hammer_and_chisel',
      'irons_spellbooks:blank_rune',
      'irons_spellbooks:arcane_essence'
    ]
  )
    .damageIngredient('spelunkery:obsidian_hammer_and_chisel')
    .replaceIngredient('kubejs:solution_evocation', 'minecraft:glass_bottle');
  event.shapeless(
    Item.of('irons_spellbooks:arcane_rune', 1),
    [
      'kubejs:solution_arcane',
      'spelunkery:obsidian_hammer_and_chisel',
      'irons_spellbooks:blank_rune',
      'irons_spellbooks:arcane_essence'
    ]
  )
    .damageIngredient('spelunkery:obsidian_hammer_and_chisel')
    .replaceIngredient('kubejs:solution_arcane', 'minecraft:glass_bottle');
  event.shapeless(
    Item.of('irons_spellbooks:cooldown_rune', 1),
    [
      'kubejs:solution_cooldown',
      'spelunkery:obsidian_hammer_and_chisel',
      'irons_spellbooks:blank_rune',
      'irons_spellbooks:arcane_essence'
    ]
  )
    .damageIngredient('spelunkery:obsidian_hammer_and_chisel')
    .replaceIngredient('kubejs:solution_cooldown', 'minecraft:glass_bottle')
    ;
  event.shapeless(
    Item.of('irons_spellbooks:protection_rune', 1),
    [
      'kubejs:solution_protection',
      'spelunkery:obsidian_hammer_and_chisel',
      'irons_spellbooks:blank_rune',
      'irons_spellbooks:arcane_essence'
    ]
  )
    .damageIngredient('spelunkery:obsidian_hammer_and_chisel')
    .replaceIngredient('kubejs:solution_protection', 'minecraft:glass_bottle')
    ;
  event.shapeless(
    Item.of('irons_spellbooks:nature_rune', 1),
    [
      'kubejs:solution_nature',
      'spelunkery:obsidian_hammer_and_chisel',
      'irons_spellbooks:blank_rune',
      'irons_spellbooks:arcane_essence'
    ]
  )
    .damageIngredient('spelunkery:obsidian_hammer_and_chisel')
    .replaceIngredient('kubejs:solution_nature', 'minecraft:glass_bottle')
    ;
  event.shapeless(
    Item.of('cataclysm:dying_ember', 4),
    [
      'cataclysm:burning_ashes'
    ]
  );
  //RUNES
  event.remove({ id: 'irons_spellbooks:divine_pearl' })
  event.remove({ id: 'spelunkery:obsidian_hammer_and_chisel' });
  event.remove({ id: 'irons_spellbooks:fire_rune' });
  event.remove({ id: 'irons_spellbooks:ice_rune' });
  event.remove({ id: 'irons_spellbooks:lightning_rune' });
  event.remove({ id: 'irons_spellbooks:ender_rune' });
  event.remove({ id: 'irons_spellbooks:holy_rune' });
  event.remove({ id: 'irons_spellbooks:blood_rune' });
  event.remove({ id: 'irons_spellbooks:evocation_rune' });
  event.remove({ id: 'irons_spellbooks:arcane_rune' });
  event.remove({ id: 'irons_spellbooks:cooldown_rune' });
  event.remove({ id: 'irons_spellbooks:protection_rune' });
  event.remove({ id: 'irons_spellbooks:nature_rune' });
  event.remove({ id: 'irons_spellbooks:wandering_magician_helmet' });
  event.remove({ id: 'irons_spellbooks:wandering_magician_chestplate' });
  event.remove({ id: 'irons_spellbooks:wandering_magician_leggings' });
  event.remove({ id: 'irons_spellbooks:wandering_magician_boots' });
  event.remove({ id: 'irons_spellbooks:magic_cloth' });
  event.remove({ id: 'irons_spellbooks:pyromancer_helmet' });
  event.remove({ id: 'irons_spellbooks:pyromancer_chestplate' });
  event.remove({ id: 'irons_spellbooks:pyromancer_leggings' });
  event.remove({ id: 'irons_spellbooks:pyromancer_boots' });
  event.remove({ id: 'irons_spellbooks:electromancer_helmet' });
  event.remove({ id: 'irons_spellbooks:electromancer_chestplate' });
  event.remove({ id: 'irons_spellbooks:electromancer_leggings' });
  event.remove({ id: 'irons_spellbooks:electromancer_boots' });
  event.remove({ id: 'irons_spellbooks:archevoker_helmet' });
  event.remove({ id: 'irons_spellbooks:archevoker_chestplate' });
  event.remove({ id: 'irons_spellbooks:archevoker_leggings' });
  event.remove({ id: 'irons_spellbooks:archevoker_boots' });
  event.remove({ id: 'irons_spellbooks:cultist_helmet' });
  event.remove({ id: 'irons_spellbooks:cultist_chestplate' });
  event.remove({ id: 'irons_spellbooks:cultist_leggings' });
  event.remove({ id: 'irons_spellbooks:cultist_boots' });
  event.remove({ id: 'irons_spellbooks:cryomancer_helmet' });
  event.remove({ id: 'irons_spellbooks:cryomancer_chestplate' });
  event.remove({ id: 'irons_spellbooks:cryomancer_leggings' });
  event.remove({ id: 'irons_spellbooks:cryomancer_boots' });
  event.remove({ id: 'irons_spellbooks:shadowwalker_helmet' });
  event.remove({ id: 'irons_spellbooks:shadowwalker_chestplate' });
  event.remove({ id: 'irons_spellbooks:shadowwalker_leggings' });
  event.remove({ id: 'irons_spellbooks:shadowwalker_boots' });
  event.remove({ id: 'irons_spellbooks:priest_helmet' });
  event.remove({ id: 'irons_spellbooks:priest_chestplate' });
  event.remove({ id: 'irons_spellbooks:priest_leggings' });
  event.remove({ id: 'irons_spellbooks:priest_boots' });
  event.remove({ id: 'irons_spellbooks:plagued_helmet' });
  event.remove({ id: 'irons_spellbooks:plagued_chestplate' });
  event.remove({ id: 'irons_spellbooks:plagued_leggings' });
  event.remove({ id: 'irons_spellbooks:plagued_boots' });
  event.remove({ id: 'irons_spellbooks:arcane_ingot' });
  event.remove({ id: 'irons_spellbooks:copper_spell_book' });
  event.remove({ id: 'irons_spellbooks:iron_spell_book' });
  event.remove({ id: 'irons_spellbooks:golden_spell_book' });
  event.remove({ id: 'irons_spellbooks:netherite_spell_book' });
  event.remove({ id: 'irons_spellbooks:netherite_mage_chestplate' });
  event.remove({ id: 'irons_spellbooks:netherite_mage_helmet' });
  event.remove({ id: 'irons_spellbooks:netherite_mage_leggings' });
  event.remove({ id: 'irons_spellbooks:netherite_mage_boots' });
  //RECIPE REmoval
  event.custom({
    "type": "clayworks:baking",
    "category": "material",
    "cookingtime": 70,
    "experience": 0.3,
    "ingredient": {
      "item": "galosphere:silver_ingot"
    },
    "result": "kubejs:heated_silver_ingot"
  })
  //HEATEDSILVER
  event.shaped(
    Item.of('irons_spellbooks:copper_spell_book', 1),
    ['ABC',
      'DDD',
      'ABC'],
    {
      A: 'minecraft:string', B: 'minecraft:copper_ingot', C: 'farmersdelight:canvas', D: 'minecraft:paper'
    });
  event.shaped(
    Item.of('irons_spellbooks:copper_spell_book', 1),
    ['ABC',
      'DDD',
      'ABC'],
    {
      A: 'minecraft:string', B: 'minecraft:copper_ingot', C: 'minecraft:leather', D: 'minecraft:paper'
    });

  event.shaped(
    Item.of('irons_spellbooks:iron_spell_book', 1),
    ['ABC',
      'DDD',
      'ABC'],
    { A: 'galosphere:silver_ingot', B: 'minecraft:leather', C: 'galosphere:silver_nugget', D: 'minecraft:paper' });

  event.shaped(
    Item.of('irons_spellbooks:gold_spell_book', 1),
    ['ABC',
      'DDD',
      'ABC'],
    {
      A: 'mca:rose_gold_ingot', B: 'irons_spellbooks:hogskin', D: 'minecraft:paper', C: 'minecraft:gold_nugget'
    });

  event.shaped(
    Item.of('irons_spellbooks:netherite_spell_book', 1),
    [' B ',
      'ACD',
      ' B '],
    {
      B: 'minecraft:netherite_ingot', C: 'irons_spellbooks:ruined_book', D: 'irons_spellbooks:arcane_rune', A: 'irons_spellbooks:cooldown_rune'
    });
});
//MISC
