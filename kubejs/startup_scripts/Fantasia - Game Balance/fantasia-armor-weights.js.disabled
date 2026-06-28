//This all goes in startup_scripts

let $Attributes = Java.loadClass('net.minecraft.world.entity.ai.attributes.Attributes')
let $AttributeModifier = Java.loadClass('net.minecraft.world.entity.ai.attributes.AttributeModifier')

ForgeEvents.onEvent('net.minecraftforge.event.ItemAttributeModifierEvent', event => {

    let lightHelms = [
        'slavicarmory:erikhonka',
        'slavicarmory:gilded_erikhonka',
        'slavicarmory:late_phrygian_helmet',
        'slavicarmory:gilded_late_phrygian_helmet',
        'slavicarmory:varangian_guard_helmet',
        'slavicarmory:gilded_shater_helmet',
        'slavicarmory:shater_helmet',
        'slavicarmory:gilded_raikovec_helmet',
        'slavicarmory:raikovec_helmet',
        'slavicarmory:gilded_nikolskoe_helmet',
        'slavicarmory:nikolskoe_helmet',
        'slavicarmory:gilded_andreevski_helmet',
        'slavicarmory:andreevski_helmet',
        'slavicarmory:varangian_helmet',
        'slavicarmory:gilded_eastern_kettlehat',
        'slavicarmory:eastern_kettlehat',
        'slavicarmory:gilded_gnezdovo_helmet',
        'slavicarmory:gnezdovo_helmet',
        'slavicarmory:ozernoe_helmet',
        'slavicarmory:gilded_tagancha_helmet',
        'slavicarmory:tagancha_helmet',
        'slavicarmory:bulgar_helmet',
        'slavicarmory:rus_chainmail_coif',
        'magistuarmory:face_helmet',
        'magistuarmory:norman_helmet',
        'magistuarmoryaddon:cuman_helmet',
        'magistuarmoryaddon:gilded_chainmail_coif',
        'magistuarmoryaddon:morion',
        'magistuarmoryaddon:visored_kettlehat',
        'magistuarmoryaddon:cervelliere',
        'magistuarmoryaddon:closed_barbute',
        'magistuarmoryaddon:early_greathelm',
        'magistuarmoryaddon:lobster_tailed_helmet',
        'magistuarmoryaddon:chapel',
        'magistuarmoryaddon:tablet_helmet',
        'magistuarmoryaddon:burgundian_kettlehat',
        'magistuarmoryaddon:scale_helmet',
        'magistuarmoryaddon:light_burgonet',
        'magistuarmoryaddon:late_burgonet',
        'magistuarmoryaddon:sturmhaube',
        'magistuarmoryaddon:late_kettlehat',
        'magistuarmoryaddon:cabasset',
        'magistuarmoryaddon:gilded_cabasset',
        'magistuarmoryaddon:early_cabasset',
        'magistuarmoryaddon:dark_early_cabasset',
        'magistuarmoryaddon:gilded_early_cabasset',
        'magistuarmoryaddon:sallet_without_visor',
        'magistuarmoryaddon:light_cuman_helmet',
        'magistuarmory:chainmail_helmet',
        'magistuarmory:kettlehat',
        'magistuarmory:barbute',
        'magistuarmory:greathelm',
        'magistuarmory:shishak',
        'magistuarmory:cuirassier_helmet',
        'magistuarmoryaddon:dark_crusader_helmet',
        'magistuarmoryaddon:saracen_helmet',
        'magistuarmoryaddon:sturmhaube',
        'magistuarmoryaddon:mamluk_helmet',
        'minecraft:chainmail_helmet',
        'galosphere:sterling_helmet',
        'minecraft:golden_helmet',
        'overgeared:copper_helmet',
        'irons_spellbooks:pumpkin_helmet',
        'irons_spellbooks:pyromancer_helmet',
        'irons_spellbooks:electromancer_helmet',
        'irons_spellbooks:archevoker_helmet',
        'irons_spellbooks:cultist_helmet',
        'irons_spellbooks:cryomancer_helmet',
        'irons_spellbooks:priest_helmet',
        'irons_spellbooks:plagued_helmet',
        'magistuarmoryaddon:kulah_khud'

    ];

    let lightChest = [
        'slavicarmory:byzantine_lamellar_chestplate',
        'slavicarmory:gilded_byzantine_lamellar_chestplate',
        'slavicarmory:byzantine_scale_chestplate',
        'slavicarmory:gilded_byzantine_scale_chestplate',
        'slavicarmory:yushman_chestplate',
        'slavicarmory:gilded_yushman_chestplate',
        'slavicarmory:rus_chainmail_chestplate',
        'slavicarmory:bahteretz_chestplate',
        'slavicarmory:gilded_bahteretz_chestplate',
        'slavicarmory:kuyak_chestplate',
        'slavicarmory:kuyak_breastplate',
        'slavicarmory:lamellar_mail_chestplate',
        'slavicarmory:gilded_lamellar_mail_chestplate',
        'slavicarmory:rus_scale_chestplate',
        'slavicarmory:gilded_rus_scale_chestplate',
        'magistuarmoryaddon:dark_crusader_chestplate',
        'magistuarmoryaddon:saracen_chestplate',
        'magistuarmoryaddon:xiii_century_knight_chestplate',
        'magistuarmoryaddon:gallowglass_chestplate',
        'magistuarmoryaddon:coat_of_plates_chestplate',
        'magistuarmory:chainmail_chestplate',
        'magistuarmory:platemail_chestplate',
        'magistuarmory:crusader_chestplate',
        'magistuarmory:brigandine_chestplate',
        'magistuarmory:cuirassier_chestplate',
        'magistuarmory:lamellar_chestplate',
        'magistuarmoryaddon:gilded_chainmail_chestplate',
        'minecraft:chainmail_chestplate',
        'galosphere:sterling_chestplate',
        'minecraft:golden_chestplate',
        'overgeared:copper_chestplate',
        'irons_spellbooks:pumpkin_chestplate',
        'irons_spellbooks:pyromancer_chestplate',
        'irons_spellbooks:electromancer_chestplate',
        'irons_spellbooks:archevoker_chestplate',
        'irons_spellbooks:cultist_chestplate',
        'irons_spellbooks:cryomancer_chestplate',
        'irons_spellbooks:priest_chestplate',
        'irons_spellbooks:plagued_chestplate'

    ]

    let lightLegs = [
        'slavicarmory:rus_chainmail_leggings',
        'magistuarmoryaddon:dark_crusader_leggings',
        'magistuarmoryaddon:xiii_century_knight_leggings',
        'magistuarmoryaddon:gallowglass_leggings',
        'magistuarmoryaddon:gilded_chainmail_leggings',
        'magistuarmory:chainmail_leggings',
        'magistuarmory:platemail_leggings',
        'magistuarmory:crusader_leggings',
        'minecraft:chainmail_leggings',
        'galosphere:sterling_leggings',
        'minecraft:golden_leggings',
        'overgeared:copper_leggings',
        'irons_spellbooks:pumpkin_leggings',
        'irons_spellbooks:pyromancer_leggings',
        'irons_spellbooks:electromancer_leggings',
        'irons_spellbooks:archevoker_leggings',
        'irons_spellbooks:cultist_leggings',
        'irons_spellbooks:cryomancer_leggings',
        'irons_spellbooks:priest_leggings',
        'irons_spellbooks:plagued_leggings'

    ]

    global.medHelms = [
        'magistuarmoryaddon:dark_knight_helmet',
        'magistuarmoryaddon:dark_gothic_helmet',
        'magistuarmoryaddon:dark_maximilian_helmet',
        'magistuarmoryaddon:dark_grand_bascinet',
        'magistuarmoryaddon:savoyard_helmet',
        'magistuarmoryaddon:milanese_armet',
        'magistuarmoryaddon:british_armet',
        'magistuarmoryaddon:sallet_without_neck_protection',
        'magistuarmoryaddon:bellows_maximilian_helmet',
        'magistuarmoryaddon:cuman_captain_helmet',
        'magistuarmoryaddon:klappvisor_bascinet',
        'magistuarmoryaddon:late_bascinet',
        'magistuarmoryaddon:late_greathelm',
        'magistuarmoryaddon:closed_burgonet',
        'magistuarmoryaddon:devilish_grotesque_maximilian_helmet',
        'magistuarmoryaddon:facial_grotesque_maximilian_helmet',
        'magistuarmoryaddon:dark_gilded_greenwich_armet',
        'magistuarmoryaddon:dark_greenwich_armet',
        'magistuarmoryaddon:late_sallet',
        'magistuarmoryaddon:dark_late_sallet',
        'magistuarmoryaddon:silvered_dark_bellows_maximilian_helmet',
        'magistuarmoryaddon:silvered_dark_maximilian_helmet',
        'magistuarmoryaddon:gilded_grand_bascinet',
        'magistuarmoryaddon:gilded_exquisite_maximilian_helmet',
        'magistuarmoryaddon:gilded_maximilian_helmet',
        'magistuarmoryaddon:gilded_dark_sallet',
        'magistuarmoryaddon:gilded_sallet',
        'magistuarmoryaddon:lion_helmet',
        'magistuarmoryaddon:maximilian_burgonet',
        'magistuarmoryaddon:opened_sallet',
        'magistuarmoryaddon:two_eye_slits_sallet',
        'magistuarmoryaddon:german_bascinet',
        'magistuarmory:armet',
        'magistuarmory:sallet',
        'magistuarmoryaddon:grilled_helmet',
        'magistuarmoryaddon:gilded_greenwich_armet',
        'magistuarmoryaddon:greenwich_armet',
        'magistuarmoryaddon:sugarloaf_helmet',
        'magistuarmoryaddon:gilded_sugarloaf_helmet',
        'magistuarmoryaddon:patrician_tuher_helmet',
        'magistuarmoryaddon:close_helmet',
        'magistuarmoryaddon:exquisite_maximilian_helmet',
        'magistuarmoryaddon:embosed_parade_burgonet',
        'magistuarmoryaddon:dark_gilded_parade_burgonet',
        'magistuarmoryaddon:darkblued_greenwich_armet',
        'magistuarmoryaddon:darkblued_armet',
        'magistuarmoryaddon:darkblued_maximilian_helmet',
        'magistuarmoryaddon:darkblued_sallet',
        'magistuarmoryaddon:engraved_close_helmet',
        'magistuarmoryaddon:fox_grotesque_maximilian_helmet',
        'magistuarmoryaddon:fully_gilded_armet',
        'magistuarmoryaddon:fully_gilded_grand_bascinet',
        'magistuarmoryaddon:fully_gilded_greenwich_armet',
        'magistuarmoryaddon:fully_gilded_grilled_helmet',
        'magistuarmoryaddon:fully_gilded_maximilian_helmet',
        'magistuarmoryaddon:fully_gilded_milanese_armet',
        'magistuarmoryaddon:fully_gilded_sallet',
        'magistuarmoryaddon:gilded_close_helmet',
        'magistuarmoryaddon:gilded_darkblued_greenwich_armet',
        'magistuarmoryaddon:gilded_dark_close_helmet',
        'magistuarmoryaddon:gilded_fox_grotesque_maximilian_helmet',
        'magistuarmoryaddon:gilded_grilled_helmet',
        'magistuarmory:maximilian_helmet',
        'magistuarmory:ceremonialarmet',
        'magistuarmory:bascinet',
        'magistuarmory:grand_bascinet',
        'magistuarmoryaddon:bicoque',
        'epicknights_open_helms:open_milanese_helmet',
        'epicknights_open_helms:open_glided_milanese_helmet',
        'epicknights_open_helms:open_bicoque_helmet',
        'epicknights_open_helms:open_german_bascinet_helmet',
        'epicknights_open_helms:open_sugarloaf_helmet',
        'epicknights_open_helms:open_glided_sugarloaf_helmet',
        'epicknights_open_helms:open_savoyard_helmet',
        'epicknights_open_helms:open_british_armet_helmet',
        'epicknights_open_helms:open_grand_bascinet_helmet',
        'epicknights_open_helms:open_armet_helmet',
        'epicknights_open_helms:open_ceremonial_armet_helmet',
        'epicknights_open_helms:open_dark_armet_helmet',
        'epicknights_open_helms:open_fully_glided_armet_helmet',
        'epicknights_open_helms:open_close_helm_helmet',
        'epicknights_open_helms:open_glided_close_helm_helmet',
        'epicknights_open_helms:open_glided_dark_helm_helmet',
        'epicknights_open_helms:open_engraved_close_helm_helmet',
        'epicknights_open_helms:open_sallet_without_neck_helmet',
        'epicknights_open_helms:open_glided_sallet_helmet',
        'epicknights_open_helms:open_dark_sallet_helmet',
        'epicknights_open_helms:open_glided_dark_sallet_helmet',
        'epicknights_open_helms:open_blued_sallet_helmet',
        'epicknights_open_helms:open_fully_glided_sallet_helmet',
        'epicknights_open_helms:open_two_eye_sallet_helmet',
        'epicknights_open_helms:open_late_sallet_helmet',
        'epicknights_open_helms:open_late_dark_sallet_helmet',
        'epicknights_open_helms:open_greenwich_helmet',
        'epicknights_open_helms:open_glided_greenwich_helmet',
        'epicknights_open_helms:open_dark_greenwich_helmet',
        'epicknights_open_helms:open_gilded_dark_greenwich_helmet',
        'epicknights_open_helms:open_blue_greenwich_helmet',
        'epicknights_open_helms:open_glided_blue_greenwich_helmet',
        'epicknights_open_helms:open_fully_glided_greenwich_helmet',
        'epicknights_open_helms:open_klappvisor_helmet',
        'epicknights_open_helms:open_bascinet_helmet',
        'epicknights_open_helms:open_latebascinet_helmet',
        'epicknights_open_helms:open_glided_grand_bascinet_helmet',
        'epicknights_open_helms:open_fully_glided_grand_bascinet_helmet',
        'epicknights_open_helms:open_dark_grand_bascinet_helmet',
        'epicknights_open_helms:open_maximilian_helmet_helmet',
        'epicknights_open_helms:open_glided_maximilian_helmet',
        'epicknights_open_helms:open_dark_maximilian_helmet',
        'epicknights_open_helms:open_silvered_maximilian_helmet',
        'epicknights_open_helms:open_blued_maximilian_helmet',
        'epicknights_open_helms:open_fully_glided_maximilian_helmet',
        'epicknights_open_helms:open_bellows_maximilian_helmet',
        'epicknights_open_helms:open_silvered_dark_bellows_maximilian_helmet',
        'epicknights_open_helms:open_fox_grotesque_maximilian_helmet',
        'epicknights_open_helms:open_glided_fox_grotesque_maximilian_helmet',
        'epicknights_open_helms:exquisite_maximilian_helmet_helmet',
        'epicknights_open_helms:gilded_exquiste_maximilian_helmet',
        'epicknights_open_helms:open_burgonet_maximilian_helmet',
        'epicknights_open_helms:open_patrician_helmet',
        'epicknights_open_helms:facial_grotesque_maximillian_helmet',
        'epicknights_open_helms:open_devilish_grotesque_maximilian_helmet',
        'minecraft:iron_helmet',
        'savage_and_ravage:griefer_helmet',
        'minecraft:diamond_helmet',
        'irons_spellbooks:netherite_mage_helmet',
        'irons_spellbooks:shadowwalker_helmet',
        'cataclysm:bone_reptile_helmet',
        'cataclysm:monstrous_helm',
        'cataclysm:cursium_helmet'
    ]

    global.medChest = [
        'magistuarmoryaddon:articulated_chestplate',
        'magistuarmoryaddon:darkblued_gothic_chestplate',
        'magistuarmoryaddon:darkblued_greenwich_chestplate',
        'magistuarmoryaddon:darkblued_kastenbrust_chestplate',
        'magistuarmoryaddon:darkblued_knight_chestplate',
        'magistuarmoryaddon:darkblued_maximilian_chestplate',
        'magistuarmoryaddon:engraved_chestplate',
        'magistuarmoryaddon:fully_gilded_articulated_chestplate',
        'magistuarmoryaddon:fully_gilded_gothic_chestplate',
        'magistuarmoryaddon:dark_knight_chestplate',
        'magistuarmoryaddon:dark_maximilian_chestplate',
        'magistuarmoryaddon:dark_kastenbrust_chestplate',
        'magistuarmoryaddon:dark_gothic_chestplate',
        'magistuarmoryaddon:pikeman_chestplate',
        'magistuarmoryaddon:avant_chestplate',
        'magistuarmoryaddon:mirror_chestplate',
        'magistuarmoryaddon:heavy_cuirassier_chestplate',
        'magistuarmoryaddon:dark_heavy_cuirassier_chestplate',
        'magistuarmoryaddon:dark_gilded_greenwich_chestplate',
        'magistuarmoryaddon:dark_greenwich_chestplate',
        'magistuarmoryaddon:steel_puff_and_slash_chestplate',
        'magistuarmoryaddon:gilded_steel_puff_and_slash_chestplate',
        'magistuarmoryaddon:ceremonial_kastenbrust_chestplate',
        'magistuarmoryaddon:gilded_xivcenturyknight_chestplate',
        'magistuarmoryaddon:english_knight_chestplate',
        'magistuarmoryaddon:gilded_maximilian_chestplate',
        'magistuarmoryaddon:gilded_dark_gothic_chestplate',
        'magistuarmoryaddon:proto_maximilian_chestplate',
        'magistuarmoryaddon:gilded_gothic_chestplate',
        'magistuarmoryaddon:greenwich_chestplate',
        'magistuarmoryaddon:dark_proto_maximilian_chestplate',
        'magistuarmoryaddon:heavy_brigandine_chestplate',
        'magistuarmoryaddon:gilded_heavy_brigandine_chestplate',
        'magistuarmoryaddon:dark_heavy_brigandine_chestplate',
        'magistuarmoryaddon:embosed_parade_chestplate',
        'magistuarmoryaddon:dark_gilded_parade_chestplate',
        'magistuarmoryaddon:fully_gilded_greenwich_chestplate',
        'magistuarmoryaddon:fully_gilded_kastenbrust_chestplate',
        'magistuarmoryaddon:fully_gilded_knight_chestplate',
        'magistuarmoryaddon:fully_gilded_maximilian_chestplate',
        'magistuarmoryaddon:gilded_darkblued_greenwich_chestplate',
        'magistuarmoryaddon:splint_chestplate',
        'magistuarmoryaddon:alla_tedesca_chestplate',
        'magistuarmoryaddon:peascod_chestplate',
        'magistuarmoryaddon:gilded_peascod_chestplate',
        'magistuarmoryaddon:dark_peascod_chestplate',
        'magistuarmoryaddon:gilded_dark_peascod_chestplate',
        'magistuarmory:knight_chestplate',
        'magistuarmory:gothic_chestplate',
        'magistuarmory:maximilian_chestplate',
        'magistuarmory:ceremonial_chestplate',
        'magistuarmory:xivcenturyknight_chestplate',
        'magistuarmory:wingedhussar_chestplate',
        'magistuarmory:kastenbrust_chestplate',
        'magistuarmoryaddon:gilded_half_armor',
        'magistuarmoryaddon:silvered_dark_half_armor',
        'magistuarmory:halfarmor_chestplate',
        'slavicarmory:rus_heavy_lamellar_chestplate',
        'slavicarmory:gilded_rus_heavy_lamellar_chestplate',
        'magistuarmoryaddon:gilded_greenwich_chestplate',
        'magistuarmoryaddon:silvered_dark_maximilian_chestplate',
        'minecraft:iron_chestplate',
        'savage_and_ravage:griefer_chestplate',
        'minecraft:diamond_chestplate',
        'irons_spellbooks:netherite_mage_chestplate',
        'irons_spellbooks:shadowwalker_chestplate',
        'cataclysm:bone_reptile_chestplate',
        'cataclysm:cursium_chestplate'
    ]

    global.medLegs = [
        'magistuarmoryaddon:dark_knight_leggings',
        'magistuarmoryaddon:dark_gothic_leggings',
        'magistuarmoryaddon:dark_maximilian_leggings',
        'magistuarmoryaddon:dark_kastenbrust_leggings',
        'magistuarmoryaddon:avant_leggings',
        'magistuarmoryaddon:heavy_brigandine_leggings',
        'magistuarmoryaddon:gilded_heavy_brigandine_leggings',
        'magistuarmoryaddon:dark_heavy_brigandine_leggings',
        'magistuarmoryaddon:darkblued_gothic_leggings',
        'magistuarmoryaddon:darkblued_kastenbrust_leggings',
        'magistuarmoryaddon:darkblued_knight_leggings',
        'magistuarmoryaddon:darkblued_maximilian_leggings',
        'magistuarmoryaddon:fully_gilded_gothic_leggings',
        'magistuarmoryaddon:fully_gilded_kastenbrust_leggings',
        'magistuarmoryaddon:fully_gilded_knight_leggings',
        'magistuarmoryaddon:fully_gilded_maximilian_leggings',
        'magistuarmoryaddon:splint_leggings',
        'magistuarmory:knight_leggings',
        'magistuarmory:gothic_leggings',
        'magistuarmory:maximilian_leggings',
        'magistuarmory:kastenbrust_leggings',
        'magistuarmory:xivcenturyknight_leggings',
        'minecraft:iron_leggings',
        'savage_and_ravage:griefer_leggings',
        'minecraft:diamond_leggings',
        'irons_spellbooks:netherite_mage_leggings',
        'irons_spellbooks:shadowwalker_leggings',
        'cataclysm:cursium_leggings'
    ]

    global.medBoots = [
        'magistuarmoryaddon:dark_heavy_brigandine_boots',
        'magistuarmoryaddon:embosed_parade_boots',
        'magistuarmoryaddon:dark_gilded_parade_boots',
        'magistuarmoryaddon:darkblued_gothic_boots',
        'magistuarmoryaddon:darkblued_kastenbrust_boots',
        'magistuarmoryaddon:darkblued_knight_boots',
        'magistuarmoryaddon:darkblued_maximilian_boots',
        'magistuarmoryaddon:fully_gilded_gothic_boots',
        'magistuarmoryaddon:fully_gilded_greenwich_boots',
        'slavicarmory:rus_heavy_lamellar_boots',
        'slavicarmory:gilded_rus_heavy_lamellar_boots',
        'magistuarmoryaddon:dark_knight_boots',
        'magistuarmoryaddon:dark_gothic_boots',
        'magistuarmoryaddon:dark_maximilian_boots',
        'magistuarmoryaddon:dark_kastenbrust_boots',
        'magistuarmoryaddon:pikeman_boots',
        'magistuarmoryaddon:avant_boots',
        'magistuarmoryaddon:heavy_cuirassier_boots',
        'magistuarmoryaddon:dark_heavy_cuirassier_boots',
        'magistuarmoryaddon:dark_gilded_greenwich_boots',
        'magistuarmoryaddon:dark_greenwich_boots',
        'magistuarmoryaddon:steel_puff_and_slash_boots',
        'magistuarmoryaddon:gilded_steel_puff_and_slash_boots',
        'magistuarmoryaddon:silvered_dark_maximilian_boots',
        'magistuarmoryaddon:ceremonial_kastenbrust_boots',
        'magistuarmoryaddon:gilded_xivcenturyknight_boots',
        'magistuarmoryaddon:english_knight_boots',
        'magistuarmoryaddon:gilded_maximilian_boots',
        'magistuarmoryaddon:gilded_dark_gothic_boots',
        'magistuarmoryaddon:gilded_gothic_boots',
        'magistuarmoryaddon:gilded_greenwich_boots',
        'magistuarmoryaddon:greenwich_boots',
        'magistuarmoryaddon:proto_maximilian_boots',
        'magistuarmoryaddon:dark_proto_maximilian_boots',
        'magistuarmoryaddon:heavy_brigandine_boots',
        'magistuarmoryaddon:gilded_heavy_brigandine_boots',
        'magistuarmoryaddon:fully_gilded_kastenbrust_boots',
        'magistuarmoryaddon:fully_gilded_knight_boots',
        'magistuarmoryaddon:fully_gilded_maximilian_boots',
        'magistuarmoryaddon:gilded_darkblued_greenwich_boots',
        'magistuarmoryaddon:splint_boots',
        'magistuarmoryaddon:alla_tedesca_boots',
        'magistuarmory:knight_boots',
        'magistuarmory:gothic_boots',
        'magistuarmory:ceremonial_boots',
        'magistuarmory:xivcenturyknight_boots',
        'magistuarmory:kastenbrust_boots',
        'magistuarmory:maximilian_boots',
        'minecraft:iron_boots',
        'savage_and_ravage:griefer_boots',
        'minecraft:diamond_boots',
        'irons_spellbooks:netherite_mage_boots',
        'irons_spellbooks:shadowwalker_boots',
        'cataclysm:cursium_boots'
    ]

    global.heavyHelms = [
        'minecraft:netherite_helmet',
        'cataclysm:ignitium_helmet',
        'magistuarmory:stechhelm'
    ]

    global.heavyChest = [
        'minecraft:netherite_chestplate',
        'cataclysm:ignitium_chestplate',
        'cataclysm:bloom_stone_pauldrons',
        'magistuarmory:jousting_chestplate'
    ]

    global.heavyLegs = [
        'minecraft:netherite_leggings',
        'cataclysm:ignitium_leggings',
        'magistuarmory:jousting_leggings'

    ]

    global.heavyBoots = [
        'minecraft:netherite_boots',
        'cataclysm:ignitium_boots',
        'magistuarmory:jousting_boots'
    ]

    let wornItem = event.itemStack;
    let slot = event.slotType;

    // HELMETS

    if ((slot === 'head') && lightHelms.includes(wornItem.id)) {
        event.addModifier(
            "combatroll:distance",
            new $AttributeModifier(
                UUID.fromString('6201f4bc-a91a-4035-b1ca-f7728a0d98c9'),
                '翻滾距離修正',
                -0.1,
                'addition'
            )
        );
        event.addModifier(
            "combatroll:recharge",
            new $AttributeModifier(
                UUID.fromString('16cd4132-d949-48be-ba59-e8103d5b9644'),
                '翻滾冷卻修正',
                -0.5,
                'addition'
            )
        );
    }

    if ((slot === 'head') && global.medHelms.includes(wornItem.id)) {
        event.addModifier(
            "combatroll:distance",
            new $AttributeModifier(
                UUID.fromString('e60b1da9-160b-4eb0-8f15-7c49b34a6349'),
                '翻滾距離修正',
                -0.2,
                'addition'
            )
        );
        event.addModifier(
            "combatroll:recharge",
            new $AttributeModifier(
                UUID.fromString('5f3b0771-6b9f-4954-af91-67e16eae55d0'),
                '翻滾冷卻修正',
                -1,
                'addition'
            )
        );
    }

    if ((slot === 'head') && global.heavyHelms.includes(wornItem.id)) {
        event.addModifier(
            "combatroll:distance",
            new $AttributeModifier(
                UUID.fromString('2390106e-aa23-4a61-8cf9-2e6d4cc6ab6f'),
                '翻滾距離修正',
                -0.25,
                'addition'
            )
        );
        event.addModifier(
            "combatroll:recharge",
            new $AttributeModifier(
                UUID.fromString('5275d6ea-5580-4cf6-b8ae-e17b442d1127'),
                '翻滾冷卻修正',
                -1.5,
                'addition'
            )
        );
    }

    // CHESTPLATES

    if ((slot === 'chest') && lightChest.includes(wornItem.id)) {
        event.addModifier(
            "combatroll:distance",
            new $AttributeModifier(
                UUID.fromString('c3675e1f-3db7-4cf6-92a6-55a297e1792d'),
                '翻滾距離修正',
                -0.3,
                'addition'
            )
        );
        event.addModifier(
            "combatroll:recharge",
            new $AttributeModifier(
                UUID.fromString('dd538237-4ad5-488e-acc0-d38da5f6a6f9'),
                '翻滾冷卻修正',
                -1,
                'addition'
            )
        );
    }

    if ((slot === 'chest') && global.medChest.includes(wornItem.id)) {
        event.addModifier(
            "combatroll:distance",
            new $AttributeModifier(
                UUID.fromString('0453da59-f2fe-49f2-8b51-c2db2b73ae02'),
                '翻滾距離修正',
                -0.4,
                'addition'
            )
        );
        event.addModifier(
            "combatroll:recharge",
            new $AttributeModifier(
                UUID.fromString('a023d953-8aa7-4f64-aa0f-ddfb449626c8'),
                '翻滾冷卻修正',
                -2,
                'addition'
            )
        );
    }

    if ((slot === 'chest') && global.heavyChest.includes(wornItem.id)) {
        event.addModifier(
            "combatroll:distance",
            new $AttributeModifier(
                UUID.fromString('153eb407-bbdf-4089-b688-5cac8d9327df'),
                '翻滾距離修正',
                -0.45,
                'addition'
            )
        );
        event.addModifier(
            "combatroll:recharge",
            new $AttributeModifier(
                UUID.fromString('3da0642e-a99c-4431-8e47-928d9b6b45ec'),
                '翻滾冷卻修正',
                -2.5,
                'addition'
            )
        );
    }

    // LEGGINGS

    if ((slot === 'legs') && lightLegs.includes(wornItem.id)) {
        event.addModifier(
            "combatroll:distance",
            new $AttributeModifier(
                UUID.fromString('93f0c56a-2864-4397-a0b9-5d1a660ba060'),
                '翻滾距離修正',
                -0.1,
                'addition'
            )
        );
        event.addModifier(
            "combatroll:recharge",
            new $AttributeModifier(
                UUID.fromString('c469cd9f-fc1d-40b4-bafe-0cf719f34c26'),
                '翻滾冷卻修正',
                -0.5,
                'addition'
            )
        );
    }

    if ((slot === 'legs') && global.medLegs.includes(wornItem.id)) {
        event.addModifier(
            "combatroll:distance",
            new $AttributeModifier(
                UUID.fromString('e4c90286-6b93-421f-814d-8ca650e8c65a'),
                '翻滾距離修正',
                -0.3,
                'addition'
            )
        );
        event.addModifier(
            "combatroll:recharge",
            new $AttributeModifier(
                UUID.fromString('434a3671-7fa1-4c68-93d3-2b1e6cd76a37'),
                '翻滾冷卻修正',
                -1,
                'addition'
            )
        );
    }

    if ((slot === 'legs') && global.heavyLegs.includes(wornItem.id)) {
        event.addModifier(
            "combatroll:distance",
            new $AttributeModifier(
                UUID.fromString('f1b96388-9884-4a5e-8ee9-d5d06668f2b0'),
                '翻滾距離修正',
                -0.35,
                'addition'
            )
        );
        event.addModifier(
            "combatroll:recharge",
            new $AttributeModifier(
                UUID.fromString('30ecae92-b219-4ae3-acb8-921ec4a5d3e3'),
                '翻滾冷卻修正',
                -1.5,
                'addition'
            )
        );
    }

    // BOOTS

    if ((slot === 'feet') && global.medBoots.includes(wornItem.id)) {
        event.addModifier(
            "combatroll:distance",
            new $AttributeModifier(
                UUID.fromString('91f419fc-e7de-4308-abcf-6c6e734ce22b'),
                '翻滾距離修正',
                -0.1,
                'addition'
            )
        );
        event.addModifier(
            "combatroll:recharge",
            new $AttributeModifier(
                UUID.fromString('6069f759-1f32-43b7-8bb9-a4d054b293f1'),
                '翻滾冷卻修正',
                -1,
                'addition'
            )
        );
    }

    if ((slot === 'feet') && global.heavyBoots.includes(wornItem.id)) {
        event.addModifier(
            "combatroll:distance",
            new $AttributeModifier(
                UUID.fromString('90d5bed9-028a-4998-866c-131981772cbd'),
                '翻滾距離修正',
                -0.2,
                'addition'
            )
        );
        event.addModifier(
            "combatroll:recharge",
            new $AttributeModifier(
                UUID.fromString('9c21e92f-3774-4160-be12-dd40daa46aed'),
                '翻滾冷卻修正',
                -1.5,
                'addition'
            )
        );
    }

});