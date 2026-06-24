LootJS.modifiers((event) => {
  event.addBlockLootModifier("minecraft:gravel").removeLoot("twigs:pebble");
  event.addLootTypeModifier(LootType.CHEST).removeLoot("irons_spellbooks:concentration_amulet");
  event.addLootTypeModifier(LootType.ENTITY).removeLoot("artifacts:everlasting_beef");
  event.addLootTypeModifier(LootType.ENTITY).removeLoot("artifacts:eternal_steak");
  event.addLootTypeModifier(LootType.CHEST).removeLoot("irons_spellbooks:concentration_amulet");
  event.addLootTypeModifier(LootType.ENTITY).removeLoot("galosphere:silver_nugget");
  event.addBlockLootModifier("minecraft:gravel").addAlternativesLoot(
    LootEntry.of("overgeared:knappable_rock").when((c) => c.randomChance(0.2))
  );

  event.addEntityLootModifier([
    "mowziesmobs:ferrous_wroughtnaut",
    "cataclysm:maledictus",
    "cataclysm:ignis",
    "cataclysm:the_leviathan",
    "cataclysm:ancient_remnant",
    "mowziesmobs:umvuthi",
    "mowziesmobs:frostmaw",
    "minecraft:wither",
    "cataclysm:netherite_monstrosity",
    "irons_spellbooks:fire_boss",
    "cataclysm:scylla"
  ])
    .addLoot("minecraft:echo_shard").randomChance(1)
    .addLoot("minecraft:echo_shard").randomChance(1)
    .addLoot("minecraft:echo_shard").randomChance(1)
    .addLoot("minecraft:echo_shard").randomChance(0.5)
    .addLoot("minecraft:echo_shard").randomChance(0.5);

  event.addEntityLootModifier([
    "cataclysm:aptrgangr",
    "cataclysm:clawdian",
    "cataclysm:kobolediator",
    "cataclysm:amethyst_crab"
  ])
    .addLoot("minecraft:echo_shard").randomChance(1)
    .addLoot("minecraft:echo_shard").randomChance(1)
    .addLoot("minecraft:echo_shard").randomChance(0.5);

  event.addEntityLootModifier("quark:wraith")
    .addLoot("minecraft:ghast_tear");

  event.addEntityLootModifier("netherexp:apparition")
    .addLoot("minecraft:ghast_tear")
    .addLoot("minecraft:ghast_tear");

  event.addLootTypeModifier(LootType.ENTITY).removeLoot("irons_spellbooks:blaze_spell_book");
  event.addLootTypeModifier(LootType.ENTITY).removeLoot("kubejs:zombie_claw");

  event.addLootTypeModifier(LootType.CHEST)
    .removeLoot("cataclysm:ignitium_upgrade_smithing_template")
    .removeLoot("cataclysm:cursium_upgrade_smithing_template");
  event.addLootTypeModifier(LootType.ENTITY)
    .removeLoot("cataclysm:ignitium_upgrade_smithing_template")
    .removeLoot("cataclysm:cursium_upgrade_smithing_template");

  event.addLootTypeModifier(LootType.CHEST)
    .removeLoot("artifacts:everlasting_beef")
    .removeLoot("artifacts:eternal_steak")
    .removeLoot("artifacts:onion_ring")
    .removeLoot("artifacts:whoopee_cushion")
    .removeLoot("artifacts:running_shoes")
    .removeLoot("artifacts:night_vision_goggles")
    .removeLoot("artifacts:snorkel")
    .removeLoot("artifacts:plastic_drinking_hat")
    .removeLoot("artifacts:novelty_drinking_hat")
    .removeLoot("artifacts:pickaxe_heater")
    .removeLoot("artifacts:villager_hat")
    .removeLoot("artifacts:feral_claws")
    .removeLoot("artifacts:power_glove")
    .removeLoot("artifacts:fire_gauntlet")
    .removeLoot("artifacts:vampiric_glove")
    .removeLoot("artifacts:crystal_heart")
    .removeLoot("uniqueaccessories:accessory_box")
    .removeLoot("uniqueaccessories:sun_stone")
    .removeLoot("uniqueaccessories:moon_stone")
    .removeLoot("uniqueaccessories:burning_soul")
    .removeLoot("uniqueaccessories:shiny_stone")
    .removeLoot("uniqueaccessories:ender_lens")
    .removeLoot("uniqueaccessories:golden_egg_charm")
    .removeLoot("uniqueaccessories:still_beating_heart")
    .removeLoot("uniqueaccessories:magick_quiver")
    .removeLoot("uniqueaccessories:fossil_shark_tooth")
    .removeLoot("uniqueaccessories:ninjutsu_manual")
    .removeLoot("uniqueaccessories:large_paddle")
    .removeLoot("uniqueaccessories:cursed_doll_head")
    .removeLoot("uniqueaccessories:snow_golem_doll")
    .removeLoot("uniqueaccessories:championship_belt")
    .removeLoot("uniqueaccessories:black_belt")
    .removeLoot("uniqueaccessories:life_jacket_belt")
    .removeLoot("uniqueaccessories:waist_warmer")
    .removeLoot("uniqueaccessories:master_ninja_tabi")
    .removeLoot("uniqueaccessories:tabi")
    .removeLoot("uniqueaccessories:rocket_shoes");

  event.addEntityLootModifier("cataclysm:clawdian")
    .addLoot("upgrade_aquatic:thrasher_tooth").randomChance(1)
    .addLoot("upgrade_aquatic:thrasher_tooth").randomChance(1)
    .addLoot("upgrade_aquatic:thrasher_tooth").randomChance(0.5);

  //bug meat to bugs
  event.addEntityLootModifier([
    "alexsmobs:fly",
    "alexsmobs:crimson_mosquito",
    "alexsmobs:cockroach",
    "alexsmobs:tarantula_hawk",
    "species:cliff_hanger"
  ])
    .randomChance(0.5).addLoot("minecraft:spider_eye");

  event.addEntityLootModifier("alexsmobs:centipede_head")
    .randomChance(1).addLoot("minecraft:spider_eye")
    .randomChance(1).addLoot("minecraft:spider_eye")
    .randomChance(0.5).addLoot("minecraft:spider_eye");
});