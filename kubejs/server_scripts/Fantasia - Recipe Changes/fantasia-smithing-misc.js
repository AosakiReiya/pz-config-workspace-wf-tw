ServerEvents.recipes(event => {
    event.custom({
        "type": "overgeared:forging",
        "category": "MISC",
        "hammering": 7,
        "has_quality": true,
        "needs_minigame": true,
        "has_polishing": false,
        "pattern": [
            "#",
            "#"
        ],
        "key": {
            "#": {
                "item": "kubejs:unfinished_netherite_ingot"
            }
        },
        "result": {
            "item": "kubejs:netherite_plates"
        },
        "show_notification": true
    });

    event.custom({
        "type": "overgeared:forging",
        "blueprint": "TOOL",
        "hammering": 3,
        "has_quality": true,
        "need_quenching": false,
        "category": "equipment",
        "key": {
            "#": {
                "item": "minecraft:iron_ingot"
            }
        },
        "pattern": [
            "#",
            "#"
        ],
        "result": {
            "item": "kubejs:file_head"
        },
        "show_notification": true
    });

    event.custom({
        "type": "overgeared:forging",
        "hammering": 4,
        "has_quality": false,
        "category": "MISC",
        "key": {
            "#": {
                "item": "overgeared:steel_nugget"
            }
        },
        "pattern": [
            "#",
            "#"
        ],
        "result": {
            "item": "magistuarmory:small_steel_plate",
            "count": 3
        },
        "show_notification": true
    });

    event.custom({
        "type": "overgeared:forging",
        "category": "MISC",
        "hammering": 6,
        "has_quality": false,
        "has_polishing": false,
        "need_quenching": false,
        "pattern": [
            "# #",
            " # "
        ],
        "key": {
            "#": {
                "item": "minecraft:gold_ingot"
            }
        },
        "result": {
            "item": "spartanweaponry:medium_quiver_brace"
        },
        "show_notification": true
    });

    event.custom({
        "type": "overgeared:forging",
        "category": "MISC",
        "hammering": 6,
        "has_quality": false,
        "has_polishing": false,
        "need_quenching": false,
        "pattern": [
            "# #",
            " # "
        ],
        "key": {
            "#": {
                "item": "overgeared:steel_ingot"
            }
        },
        "result": {
            "item": "spartanweaponry:large_quiver_brace"
        },
        "show_notification": true
    });

    event.custom({
        "type": "overgeared:forging",
        "category": "MISC",
        "hammering": 4,
        "has_quality": false,
        "has_polishing": false,
        "need_quenching": false,
        "pattern": [
            "#",
            "O"
        ],
        "key": {
            "#": {
                "item": "spartanweaponry:small_arrow_quiver"
            },
            "O": {
                "item": "spartanweaponry:medium_quiver_brace"
            }
        },
        "result": {
            "item": "spartanweaponry:medium_arrow_quiver"
        },
        "show_notification": true
    });

    event.custom({
        "type": "overgeared:forging",
        "category": "MISC",
        "hammering": 4,
        "has_quality": false,
        "has_polishing": false,
        "need_quenching": false,
        "pattern": [
            "#",
            "O"
        ],
        "key": {
            "#": {
                "item": "spartanweaponry:medium_arrow_quiver"
            },
            "O": {
                "item": "spartanweaponry:large_quiver_brace"
            }
        },
        "result": {
            "item": "spartanweaponry:large_arrow_quiver"
        },
        "show_notification": true
    });

    event.smithing(
        'magistuarmory:crusader_chestplate',
        'magistuarmory:crusader_cross_pattern',
        'magistuarmory:platemail_chestplate',
        'magistuarmoryaddon:tunic'
    );

    event.shapeless(
        Item.of('magistuarmory:crusader_cross_pattern'),
        [
            'magistuarmoryaddon:silver_cross_necklace_decoration',
            'minecraft:paper'
        ]
    );
});