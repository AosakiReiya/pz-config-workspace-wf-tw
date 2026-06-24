ServerEvents.recipes(event => {

    event.custom({
        "type": "miningmaster:forging_recipe",
        "gems": [
            { "item": "irons_spellbooks:arcane_essence" },
            { "item": "irons_spellbooks:arcane_essence" },
            { "item": "irons_spellbooks:arcane_essence" },
            { "item": "irons_spellbooks:arcane_essence" },
            { "item": "irons_spellbooks:arcane_essence" },
            { "item": "irons_spellbooks:arcane_essence" },
            { "item": "irons_spellbooks:arcane_essence" },
            { "item": "irons_spellbooks:arcane_essence" },
            { "item": "irons_spellbooks:arcane_essence" },
        ],
        "catalyst": { "item": "minecraft:diamond" },
        "result": { "item": "kubejs:diamond_alloy_blend", "count": 4 }
    })

    event.custom({
        "type": "overgeared:forging",
        "category": "MISC",
        "hammering": 8,
        "has_quality": false,
        "needs_minigame": false,
        "has_polishing": false,
        "need_quenching": false,
        "key": {
            "#": {
                "item": "kubejs:diamond_alloy_blend"
            },
            "&": {
                "item": "irons_spellbooks:divine_pearl"
            }
        },
        "pattern": [
            "#",
            "&"
        ],
        "result": {
            "item": "kubejs:diamond_alloy"
        },
        "show_notification": true
    })

    event.blasting('kubejs:heated_diamond_alloy', 'kubejs:diamond_alloy').xp(0.7).cookingTime(350)
    event.blasting('kubejs:heated_diamond_ingot', 'kubejs:diamond_ingot').xp(0.7).cookingTime(350)

    event.custom({
        "type": "overgeared:forging",
        "category": "MISC",
        "hammering": 6,
        "has_quality": false,
        "needs_minigame": false,
        "has_polishing": false,
        "need_quenching": false,
        "key": {
            "#": {
                "item": "kubejs:heated_diamond_alloy"
            }
        },
        "pattern": [
            "#"
        ],
        "result": {
            "item": "kubejs:diamond_ingot"
        },
        "show_notification": true
    })

    event.custom({
        "type": "overgeared:cooling",
        "input": {
            "item": "kubejs:heated_diamond_alloy"
        },
        "output": {
            "item": "kubejs:diamond_alloy"
        }
    })

    event.custom({
        "type": "overgeared:cooling",
        "input": {
            "item": "kubejs:heated_diamond_ingot"
        },
        "output": {
            "item": "kubejs:diamond_ingot"
        }
    })

});
