ServerEvents.recipes(event => {
//-------------------------------------------------------------
//N-mage Smithing Template

    event.custom({
    "type": "overgeared:forging",
    "hammering": 8,
    "has_quality": false,
    "has_polishing": false,
    "category": "equipment",
    "key": {
        "A": {
        "item": "minecraft:netherite_scrap"
        },
        "B": {
        "item": "irons_spellbooks:mana_upgrade_orb"
        },
        "C": {
        "item": "irons_spellbooks:mithril_ingot"
        },
        "D": {
        "item": "irons_spellbooks:arcane_ingot"
        }
    },
    "pattern": [
        "AAA",
        "ABA",
        "DCD"
    ],
    "result": {
        "item": `kubejs:netherite_mage_smithing_template`
    },
    "show_notification": true
    });

//-------------------------------------------------------------
//Pyrium Upgrade Template
    event.custom({
    "type": "overgeared:forging",
    "hammering": 8,
    "has_quality": false,
    "has_polishing": false,
    "category": "equipment",
    "key": {
        "A": {
        "item": "irons_spellbooks:upgrade_orb"
        },
        "B": {
        "item": "irons_spellbooks:mithril_weave"
        },
        "C": {
        "item": "irons_spellbooks:pyrium_ingot"
        }
    }, 
    "pattern": [
        "ABA",
        "BCB",
        "ABA"
    ],
    "result": {
        "item": `kubejs:pyrium_upgrade`
    },
    "show_notification": true
});

//-------------------------------------------------------------
//Mithril weave

    event.custom({
    "type": "overgeared:forging",
    "hammering": 7,
    "has_quality": false,
    "has_polishing": false,
    "category": "equipment",
    "key": {
        "A": {
        "item": "irons_spellbooks:mithril_ingot"
        }
    },
    "pattern": [
        " A ",
        "AAA",
        " A "
    ],
    "result": {
        "item": `irons_spellbooks:mithril_weave`
    },
    "show_notification": true
    });

//-------------------------------------------------------------
//Mithril ingot
event.custom({
        "type": "miningmaster:forging_recipe",
        "gems": [
            { "item": "irons_spellbooks:mithril_scrap" },
            { "item": "irons_spellbooks:mithril_scrap" },
            { "item": "irons_spellbooks:mithril_scrap" },
            { "item": "irons_spellbooks:mithril_scrap" },
            { "item": "irons_spellbooks:cinder_essence" },
            { "item": "irons_spellbooks:arcane_ingot" },
            { "item": "irons_spellbooks:arcane_ingot" },
            { "item": "irons_spellbooks:arcane_ingot" },
            { "item": "irons_spellbooks:arcane_ingot" }
        ],
        "catalyst": { "item": "minecraft:diamond"},
        "result": { "item": "irons_spellbooks:mithril_ingot", "count": 1 }
    })
//-------------------------------------------------------------
//Pyrium armors
event.smithing(
        'irons_spellbooks:paladin_chestplate',
        'kubejs:pyrium_upgrade',
        'irons_spellbooks:priest_chestplate',
        'irons_spellbooks:divine_soulshard'
    );
event.smithing(
        'irons_spellbooks:infernal_sorcerer_chestplate',
        'kubejs:pyrium_upgrade',
        'irons_spellbooks:pyromancer_chestplate',
        'irons_spellbooks:divine_soulshard'
    )
event.smithing(
        'irons_spellbooks:speed_boots',
        'kubejs:pyrium_upgrade',
        'irons_spellbooks:archevoker_boots',
        'irons_spellbooks:divine_soulshard'
    );
})