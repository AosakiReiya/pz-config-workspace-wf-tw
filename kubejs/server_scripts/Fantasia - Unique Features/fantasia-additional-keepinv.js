ServerEvents.tags('item', event => {
  
  event.add('spelunkery:keep_on_death', '#reliable_requiem:retained_on_death');

  event.add('forge:armor', ['cataclysm:bone_reptile_helmet','cataclysm:bone_reptile_chestplate','cataclysm:ignitium_helmet','cataclysm:ignitium_chestplate','cataclysm:ignitium_leggings','cataclysm:ignitium_boots','cataclysm:cursium_helmet','cataclysm:cursium_chestplate','cataclysm:cursium_leggings','cataclysm:cursium_boots','cataclysm:monstrous_helm','cataclysm:bloom_stone_pauldrons', "mowziesmobs:umvuthana_mask_fury", "mowziesmobs:umvuthana_mask_fear", "mowziesmobs:umvuthana_mask_rage", "mowziesmobs:umvuthana_mask_bliss", "mowziesmobs:umvuthana_mask_misery", "mowziesmobs:umvuthana_mask_faith", "mowziesmobs:sol_visage", "mowziesmobs:wrought_helmet"])

  event.add('forge:armor', ['#irons_spellbooks:armors/helmets', '#irons_spellbooks:armors/chestplates', '#irons_spellbooks:armors/leggings', '#irons_spellbooks:armors/boots', "galosphere:sterling_helmet", "galosphere:sterling_chestplate", "galosphere:sterling_leggings", "galosphere:sterling_boots"])

  event.add('reliable_requiem:retained_on_death', ['#forge:weapons', '#forge:tools', '#forge:armor', '#forge:armors', '#fantasia:casters', '#overgeared:smithing_hammers', '#forge:shields', '#forge:excavators', 'savage_and_ravage:cleaver_of_beheading', 'savage_and_ravage:conch_of_conjuring', 'musketmod:musket', 'musketmod:blunderbuss', 'musketmod:pistol', 'simplest_hammers:stone_hammer', 'simplest_hammers:iron_hammer', 'simplest_hammers:diamond_hammer', '#curios:spellbook'])
  
  event.add('reliable_requiem:retained_on_death', ['cataclysm:bulwark_of_the_flame', 'cataclysm:gauntlet_of_guard', 'cataclysm:the_incinerator', 'cataclysm:cursed_bow', 'cataclysm:wrath_of_the_desert', 'cataclysm:soul_render', 'cataclysm:the_annihilator', 'cataclysm:the_immolator', 'cataclysm:ceraunus', 'cataclysm:tidal_claws', 'kubejs:wrought_axe', "minecraft:recovery_compass", "kubejs:corpse_compass"])

});