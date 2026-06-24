ServerEvents.tags('item', event => {
    //Blood Focus
    event.add('irons_spellbooks:blood_focus',
        'alexsmobs:blood_sac',
        'irons_spellbooks:bloody_vellum',
        'species:ghoul_tongue',
        'minecraft:player_head',
        'minecraft:zombie_head',
        'spartanweaponry:husk_head',
        'spartanweaponry:piglin_head',
        'spartanweaponry:zombified_piglin_head',
        'spartanweaponry:drowned_head',
        'spartanweaponry:illager_head',
        'spartanweaponry:witch_head'
        );

    //Recovery
    event.add('fantasia:cooldown_ingredients',
        'windswept:lupine',
        'alexsmobs:mungal_spores',
        'minecraft:phantom_membrane',
        'minecraft:popped_chorus_fruit',
        'endrem:witch_pupil'
    );
    
    //Ender Focus
    event.add('irons_spellbooks:ender_focus',
        'alexsmobs:capsid',
        'tide:enderfin',
        'minecraft:ender_eye',
        'tide:ender_glider',
        'tide:endergazer'
    );

    //Evocation Focus
    event.add('irons_spellbooks:evocation_focus',
        'species:werefang',
        'savage_and_ravage:creeper_spores',
        'minecraft:goat_horn',
        'takesapillage:ravager_horn',
        'quark:soul_bead'
    );

    //Fire Focus
    event.add('irons_spellbooks:fire_focus',
        'minecraft:blaze_rod',
        'tide:magma_mackerel',
        'tide:blazing_swordfish',
        'alexsmobs:bone_serpent_tooth',
        'cataclysm:dying_ember'
    );

    //Holy Focus
    event.add('irons_spellbooks:holy_focus',
        'mynethersdelight:golden_egg',
        'galosphere:lumiere_shard',
        'galosphere:golden_lichen_cordyceps',
        'miningmaster:divine_beryl', 
    )

    //Ice Focus
    event.add('irons_spellbooks:ice_focus',
        'windswept:white_rose',
        'windswept:snowdrop',
        'alexsmobs:froststalker_horn',
        'windswept:frozen_branch'
    );

    //Nature Focus
    event.add('irons_spellbooks:nature_focus',
        'minecraft:pufferfish',
        'minecraft:lily_of_the_valley',
        'minecraft:fermented_spider_eye',
        'alexsmobs:komodo_spit'
    );

    //Protection Ingredients
    event.add('fantasia:protection_ingredients',
        'irons_spellbooks:mithril_weave',
        'alexsmobs:hemolymph_sac',
        'alexsmobs:warped_muscle'
    );

    //lightning Focus
    event.add('irons_spellbooks:lightning_focus',
        'quark:bottled_cloud',
        'spelunkery:raw_magnetite',
        'alexsmobs:flying_fish',
        'tide:cave_eel'
    );

});