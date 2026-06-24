ServerEvents.recipes(event => {

  event.custom({
    "type": "overgeared:cooling",
    "input": {
      "item": "overgeared:heated_crude_steel"
    },
    "output": {
      "item": "overgeared:crude_steel"
    }
  })

  event.blasting('7x spelunkery:raw_iron_nugget', '#fantasia:iron_tools_1').xp(0.7).cookingTime(300)

  event.blasting('12x spelunkery:raw_iron_nugget', '#fantasia:iron_tools_2').xp(0.7).cookingTime(300)

  event.blasting('16x spelunkery:raw_iron_nugget', '#fantasia:iron_tools_3').xp(0.7).cookingTime(300)

  event.blasting('25x spelunkery:raw_iron_nugget', '#fantasia:iron_tools_4').xp(0.7).cookingTime(300)

  event.blasting('42x spelunkery:raw_iron_nugget', '#fantasia:iron_shields_5').xp(0.7).cookingTime(300)

  event.blasting('64x spelunkery:raw_iron_nugget', '#fantasia:iron_shields_8').xp(0.7).cookingTime(300)

  event.blasting('2x minecraft:raw_iron', '#fantasia:iron_armors_1').xp(0.7).cookingTime(300)

  event.blasting('4x minecraft:raw_iron', '#fantasia:iron_armors_2').xp(0.7).cookingTime(300)

  event.blasting('7x overgeared:steel_nugget', '#fantasia:steel_tools_1').xp(0.7).cookingTime(300)

  event.blasting('12x overgeared:steel_nugget', '#fantasia:steel_tools_2').xp(0.7).cookingTime(300)

  event.blasting('16x overgeared:steel_nugget', '#fantasia:steel_tools_3').xp(0.7).cookingTime(300)

  event.blasting('25x overgeared:steel_nugget', '#fantasia:steel_tools_4').xp(0.7).cookingTime(300)

  event.blasting('42x overgeared:steel_nugget', '#fantasia:steel_shields_5').xp(0.7).cookingTime(300)

  event.blasting('64x overgeared:steel_nugget', '#fantasia:steel_shields_8').xp(0.7).cookingTime(300)

  event.blasting('11x overgeared:steel_nugget', '#fantasia:steel_armor_lighter').xp(0.7).cookingTime(300)

  event.blasting('21x overgeared:steel_nugget', '#fantasia:steel_armor_light').xp(0.7).cookingTime(300)

  event.blasting('39x overgeared:steel_nugget', '#fantasia:steel_armor_heavy').xp(0.7).cookingTime(300)

})

ServerEvents.tags('item', event => {
  event.add('fantasia:iron_tools_1', [
    'spartanweaponry:iron_dagger',
    'spartanweaponry:iron_pike',
    'spartanweaponry:iron_lance',
    'spartanweaponry:iron_spear',
    'spartanweaponry:iron_javelin',
    'farmersdelight:iron_knife',
    'spartanweaponry:iron_parrying_dagger',
    'spartanweaponry:iron_throwing_knife',
    'minecraft:iron_shovel'
  ]);
  event.add('fantasia:iron_tools_2', [
    'spartanweaponry:iron_katana',
    'spartanweaponry:iron_saber',
    'spartanweaponry:iron_glaive',
    'spartanweaponry:iron_scythe',
    'minecraft:iron_sword',
    'spartanweaponry:iron_rapier',
    'hearthandharvest:iron_cleaver'
  ]);
  event.add('fantasia:iron_tools_3', [
    'spartanweaponry:iron_longsword',
    'spartanweaponry:iron_battleaxe',
    'spartanweaponry:iron_flanged_mace',
    'spartanweaponry:iron_halberd',
    'spartanweaponry:iron_warhammer',
    'minecraft:iron_pickaxe',
    'minecraft:iron_axe',
    "spartanweaponry:iron_tomahawk"
  ]);
  event.add('fantasia:iron_tools_4', [
    'spartanweaponry:iron_greatsword',
    'spartanweaponry:iron_battle_hammer',
    'spartanweaponry:iron_greatsword',
    'simplest_hammers:iron_hammer',
    'simplest_excavators:iron_excavator'
  ]);
  event.add('fantasia:iron_shields_5', ["magistuarmory:iron_buckler", "magistuarmory:iron_target"]);
  event.add('fantasia:iron_shields_8', ["magistuarmory:iron_rondache", "shieldexp:iron_shield"]);
  event.add('fantasia:iron_armors_1', [
    'minecraft:iron_boots',
    'minecraft:iron_helmet'
  ]);
  event.add('fantasia:iron_armors_2', [
    'minecraft:iron_chestplate',
    'minecraft:iron_leggings'
  ]);
  event.add('fantasia:steel_tools_1', [
    'spartanweaponry:steel_dagger',
    'spartanweaponry:steel_pike',
    'spartanweaponry:steel_lance',
    'spartanweaponry:steel_spear',
    'spartanweaponry:steel_javelin',
    'kubejs:steel_knife',
    'spartanweaponry:steel_parrying_dagger',
    'spartanweaponry:steel_throwing_knife',
    'overgeared:steel_shovel'
  ]);
  event.add('fantasia:steel_tools_2', [
    'spartanweaponry:steel_katana',
    'spartanweaponry:steel_saber',
    'spartanweaponry:steel_glaive',
    'spartanweaponry:steel_scythe',
    'overgeared:steel_sword',
    'spartanweaponry:steel_rapier',
    'kubejs:steel_cleaver'
  ]);
  event.add('fantasia:steel_tools_3', [
    'spartanweaponry:steel_longsword',
    'spartanweaponry:steel_battleaxe',
    'spartanweaponry:steel_flanged_mace',
    'spartanweaponry:steel_halberd',
    'spartanweaponry:steel_warhammer',
    'overgeared:steel_pickaxe',
    'overgeared:steel_axe',
    "spartanweaponry:steel_tomahawk"
  ]);
  event.add('fantasia:steel_tools_4', [
    'spartanweaponry:steel_greatsword',
    'spartanweaponry:steel_battle_hammer',
    'spartanweaponry:steel_greatsword',
    'kubejs:steel_hammer',
    'kubejs:steel_excavator'
  ]);
  event.add('fantasia:steel_shields_5', ["magistuarmory:steel_buckler", "magistuarmory:steel_target"]);
  event.add('fantasia:steel_shields_8', ["magistuarmory:steel_rondache"]);
  event.add('fantasia:steel_armor_lighter', [
    "magistuarmory:chainmail_chestplate",
    "magistuarmory:chainmail_helmet",
    "magistuarmory:chainmail_horse_armor",
    "magistuarmory:chainmail_leggings",
    "magistuarmory:brigandine_chestplate",
    "magistuarmory:crusader_chestplate",
    "magistuarmory:platemail_chestplate",
    "magistuarmory:platemail_leggings",
    "magistuarmory:norman_helmet",
    "magistuarmoryaddon:gallowglass_chestplate",
    "magistuarmoryaddon:gallowglass_leggings",
    "magistuarmoryaddon:mirror_chestplate",
    "magistuarmoryaddon:saracen_chestplate",
    "magistuarmoryaddon:saracen_helmet",
    "slavicarmory:rus_chainmail_chestplate",
    "slavicarmory:rus_chainmail_coif",
    "slavicarmory:rus_chainmail_leggings",
    "slavicarmory:rus_heavy_lamellar_boots",
    "slavicarmory:rus_heavy_lamellar_chestplate",
    "slavicarmory:rus_scale_boots",
    "slavicarmory:rus_scale_chestplate",
    "magistuarmory:lamellar_chestplate",
    "magistuarmory:xivcenturyknight_leggings",
    "magistuarmory:maximilian_boots",
    "magistuarmory:knight_boots",
    "magistuarmory:gothic_boots",
    "magistuarmoryaddon:alla_tedesca_boots",
    "magistuarmoryaddon:avant_boots",
    "magistuarmory:kastenbrust_boots",
    "magistuarmoryaddon:english_knight_boots",
    "magistuarmoryaddon:embosed_parade_boots",
    "magistuarmoryaddon:greenwich_boots",
    "magistuarmoryaddon:heavy_brigandine_boots",
    "magistuarmoryaddon:proto_maximilian_boots",
    "magistuarmoryaddon:steel_puff_and_slash_boots",
    "magistuarmoryaddon:chapel",
    "magistuarmoryaddon:kulah_khud",
    "magistuarmoryaddon:mamluk_helmet",
    "magistuarmoryaddon:scale_helmet",
    "slavicarmory:byzantine_scale_chestplate",
    "magistuarmoryaddon:xiii_century_knight_leggings",
    "slavicarmory:bahteretz_chestplate",
    "slavicarmory:byzantine_lamellar_chestplate",
    "slavicarmory:kuyak_breastplate",
    "slavicarmory:kuyak_chestplate",
    "slavicarmory:lamellar_mail_chestplate",
    "slavicarmory:yushman_chestplate",
    "magistuarmoryaddon:splint_leggings"
  ]);
  event.add('fantasia:steel_armor_light', [
    "magistuarmory:armet",
    "magistuarmory:barbute",
    "magistuarmory:barding",
    "magistuarmory:bascinet",
    "magistuarmory:cuirassier_helmet",
    "magistuarmory:face_helmet",
    "magistuarmory:grand_bascinet",
    "magistuarmory:greathelm",
    "magistuarmory:kettlehat",
    "magistuarmory:maximilian_helmet",
    "magistuarmory:sallet",
    "magistuarmory:shishak",
    "magistuarmory:xivcenturyknight_chestplate",
    "magistuarmoryaddon:bellows_maximilian_helmet",
    "magistuarmoryaddon:bicoque",
    "magistuarmoryaddon:british_armet",
    "magistuarmoryaddon:burgundian_kettlehat",
    "magistuarmoryaddon:cabasset",
    "magistuarmoryaddon:cervelliere",
    "magistuarmoryaddon:close_helmet",
    "magistuarmoryaddon:closed_barbute",
    "magistuarmoryaddon:closed_burgonet",
    "magistuarmoryaddon:cuman_captain_helmet",
    "magistuarmoryaddon:cuman_helmet",
    "magistuarmoryaddon:devilish_grotesque_maximilian_helmet",
    "magistuarmoryaddon:early_cabasset",
    "magistuarmoryaddon:early_greathelm",
    "magistuarmoryaddon:embosed_parade_burgonet",
    "magistuarmoryaddon:engraved_close_helmet",
    "magistuarmoryaddon:exquisite_maximilian_helmet",
    "magistuarmoryaddon:facial_grotesque_maximilian_helmet",
    "magistuarmoryaddon:fox_grotesque_maximilian_helmet",
    "magistuarmoryaddon:german_bascinet",
    "magistuarmoryaddon:greenwich_armet",
    "magistuarmoryaddon:greenwich_chestplate",
    "magistuarmoryaddon:grilled_helmet",
    "magistuarmoryaddon:heavy_brigandine_leggings",
    "magistuarmoryaddon:klappvisor_bascinet",
    "magistuarmoryaddon:late_bascinet",
    "magistuarmoryaddon:late_burgonet",
    "magistuarmoryaddon:late_greathelm",
    "magistuarmoryaddon:late_kettlehat",
    "magistuarmoryaddon:late_sallet",
    "magistuarmoryaddon:lobster_tailed_helmet",
    "magistuarmoryaddon:maximilian_burgonet",
    "magistuarmoryaddon:milanese_armet",
    "magistuarmoryaddon:morion",
    "magistuarmoryaddon:opened_sallet",
    "magistuarmoryaddon:patrician_tuher_helmet",
    "magistuarmoryaddon:sallet_without_neck_protection",
    "magistuarmoryaddon:sallet_without_visor",
    "magistuarmoryaddon:savoyard_helmet",
    "magistuarmoryaddon:sturmhaube",
    "magistuarmoryaddon:sugarloaf_helmet",
    "magistuarmoryaddon:tablet_helmet",
    "magistuarmoryaddon:two_eye_slits_sallet",
    "magistuarmoryaddon:visored_kettlehat",
    "magistuarmoryaddon:xiii_century_knight_chestplate",
    "slavicarmory:andreevski_helmet",
    "slavicarmory:bulgar_helmet",
    "slavicarmory:eastern_kettlehat",
    "slavicarmory:erikhonka",
    "slavicarmory:gnezdovo_helmet",
    "slavicarmory:late_phrygian_helmet",
    "slavicarmory:nikolskoe_helmet",
    "slavicarmory:ozernoe_helmet",
    "slavicarmory:raikovec_helmet",
    "slavicarmory:shater_helmet",
    "slavicarmory:tagancha_helmet",
    "slavicarmory:varangian_guard_helmet",
    "slavicarmory:varangian_helmet",
  ]);
  event.add('fantasia:steel_armor_heavy', [
    "magistuarmory:cuirassier_chestplate",
    "magistuarmory:gothic_chestplate",
    "magistuarmory:gothic_leggings",
    "magistuarmory:halfarmor_chestplate",
    "magistuarmory:kastenbrust_chestplate",
    "magistuarmory:kastenbrust_leggings",
    "magistuarmory:knight_chestplate",
    "magistuarmory:knight_leggings",
    "magistuarmory:maximilian_leggings",
    "magistuarmory:maximilian_chestplate",
    "magistuarmory:wingedhussar_chestplate",
    "magistuarmoryaddon:alla_tedesca_chestplate",
    "magistuarmoryaddon:articulated_chestplate",
    "magistuarmoryaddon:avant_chestplate",
    "magistuarmoryaddon:avant_leggings",
    "magistuarmoryaddon:coat_of_plates_chestplate",
    "magistuarmoryaddon:embosed_parade_chestplate",
    "magistuarmoryaddon:english_knight_chestplate",
    "magistuarmoryaddon:engraved_chestplate",
    "magistuarmoryaddon:heavy_brigandine_chestplate",
    "magistuarmoryaddon:heavy_cuirassier_chestplate",
    "magistuarmoryaddon:peascod_chestplate",
    "magistuarmoryaddon:pikeman_chestplate",
    "magistuarmoryaddon:proto_maximilian_chestplate",
    "magistuarmoryaddon:splint_chestplate",
    "magistuarmoryaddon:steel_puff_and_slash_chestplate"
  ]);
})