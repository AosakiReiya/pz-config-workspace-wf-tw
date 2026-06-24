ServerEvents.recipes(event => {

    event.custom({
        "type": "overgeared:forging",
        "category": "misc",
        "hammering": 4,
        "has_quality": false,
        "has_polishing": false,
        "need_quenching": false,
        "pattern": [
            "#"
        ],
        "key": {
            "#": {
                "item": "kubejs:teleport_gem"
            }
        },
        "result": {
            "item": "kubejs:solitarius_shard",
            "count": 4
        },
        "show_notification": true
    })

    // SOLITARIUS

    event.custom({
        "type": "miningmaster:forging_recipe",
        "gems": [
            { "item": "kubejs:solitarius_shard" },
            { "item": "spelunkery:portal_fluid_bottle" },
            { "item": "minecraft:lapis_lazuli" }
        ],
        "catalyst": { "item": "minecraft:diamond" },
        "result": { "item": "kubejs:teleport_gem", "count": 1 }
    })

    // ICE SAPPHIRE

    event.custom({
        "type": "miningmaster:forging_recipe",
        "gems": [
            { "item": "minecraft:snowball" },
            { "item": "windswept:frozen_flesh" },
            { "item": "minecraft:blue_ice" },
            { "item": "irons_spellbooks:frozen_bone" }
        ],
        "catalyst": { "item": "minecraft:diamond" },
        "result": { "item": "miningmaster:ice_sapphire", "count": 1 }
    })

    // SPIRIT GARNET

    event.custom({
        "type": "miningmaster:forging_recipe",
        "gems": [
            { "item": "quark:soul_bead" },
            { "item": "netherexp:wraithing_flesh" },
            { "item": "minecraft:nether_wart" },
            { "item": "minecraft:ghast_tear" }
        ],
        "catalyst": { "item": "minecraft:diamond" },
        "result": { "item": "miningmaster:spirit_garnet", "count": 1 }
    })

    // DIVINE BERYL

    event.custom({
        "type": "miningmaster:forging_recipe",
        "gems": [
            { "item": "irons_spellbooks:divine_pearl" },
            { "item": "kubejs:diamond_alloy_blend" },
            { "item": "minecraft:bone" },
            { "item": "irons_spellbooks:blood_vial" }
        ],
        "catalyst": { "item": "minecraft:emerald" },
        "result": { "item": "miningmaster:divine_beryl", "count": 1 }
    })

    // POWER PYRITE

    event.custom({
        "type": "miningmaster:forging_recipe",
        "gems": [
            { "item": "species:werefang" },
            { "item": "alexsmobs:bone_serpent_tooth" },
            { "item": "alexsmobs:gazelle_horn" },
            { "item": "alexsmobs:froststalker_horn" }
        ],
        "catalyst": { "item": "minecraft:diamond" },
        "result": { "item": "miningmaster:power_pyrite", "count": 1 }
    })

    // UNBREAKING IOLITE

    event.custom({
        "type": "miningmaster:forging_recipe",
        "gems": [
            { "item": "minecraft:obsidian" },
            { "item": "minecraft:quartz" },
            { "item": "minecraft:emerald" },
            { "item": "alexsmobs:rocky_shell" }
        ],
        "catalyst": { "item": "minecraft:diamond" },
        "result": { "item": "miningmaster:unbreaking_iolite", "count": 1 }
    })

    // FIRE RUBY

    event.custom({
        "type": "miningmaster:forging_recipe",
        "gems": [
            { "item": "minecraft:fire_charge" },
            { "item": "minecraft:blaze_powder" },
            { "item": "minecraft:magma_cream" },
            { "item": "mynethersdelight:bullet_pepper" }
        ],
        "catalyst": { "item": "kubejs:heated_diamond_alloy" },
        "result": { "item": "miningmaster:fire_ruby", "count": 1 }
    })

    // HASTE PERIDOT

    event.custom({
        "type": "miningmaster:forging_recipe",
        "gems": [
            { "item": "alexsmobs:roadrunner_feather" },
            { "item": "galosphere:lumiere_shard" },
            { "item": "cataclysm:ancient_metal_ingot" },
            { "item": "minecraft:gold_ingot" }
        ],
        "catalyst": { "item": "minecraft:diamond" },
        "result": { "item": "miningmaster:haste_peridot", "count": 1 }
    })

    // LUCKY CITRINE

    event.custom({
        "type": "miningmaster:forging_recipe",
        "gems": [
            { "item": "regions_unexplored:clover" },
            { "item": "minecraft:rabbit_foot" },
            { "item": "mca:rose_gold_ingot" },
            { "item": "numismatic-overhaul:silver_coin" }
        ],
        "catalyst": { "item": "minecraft:diamond" },
        "result": { "item": "miningmaster:lucky_citrine", "count": 1 }
    })

    // AIR MALACHITE

    event.custom({
        "type": "miningmaster:forging_recipe",
        "gems": [
            { "item": "alexsmobs:flying_fish" },
            { "item": "minecraft:ender_pearl" },
            { "item": "supplementaries:feather_block" },
            { "item": "alexsmobs:cockroach_wing" }
        ],
        "catalyst": { "item": "minecraft:diamond" },
        "result": { "item": "miningmaster:air_malachite", "count": 1 }
    })

});