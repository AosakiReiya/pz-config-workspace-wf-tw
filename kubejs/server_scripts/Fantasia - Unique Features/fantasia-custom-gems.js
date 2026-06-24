ServerEvents.recipes(event => {

    /*

    rectifying moonstone + kinetic opal = (alluring sunstone) - leeching, reeling
    kinetic opal + spider kunzite = (nimble spinel) - launch, longfooted
    unbreaking iolite + heart rhodonite = (rectifying moonstone) - reforming
    dive aquamarine + diamond = (tranquil pearl) - obedience, alleviating
    divine beryl + power pyrite = (scornful bloodstone) - misanthropy, prospector
    heart rhodonite + power pyrite = (vengeful onyx) - death wish

    */

    // ECHO SHARD

    event.custom({
        "type": "miningmaster:gem_smithing_recipe",
        "blacklist": {
            "tag": "miningmaster:gem_enchanting_blacklist"
        },
        "gem": {
            "item": "minecraft:echo_shard"
        },
        "enchantments": [
            "soulbound:soulbound"
        ]
    })

    // ALLURING SUNSTONE

    event.custom({
        "type": "miningmaster:forging_recipe",
        "gems": [
            { "item": "miningmaster:kinetic_opal" }
        ],
        "catalyst": { "item": "kubejs:rectifying_moonstone" },
        "result": { "item": "kubejs:alluring_sunstone", "count": 1 }
    })

    event.custom({
        "type": "miningmaster:gem_smithing_recipe",
        "blacklist": {
            "tag": "miningmaster:gem_enchanting_blacklist"
        },
        "gem": {
            "item": "kubejs:alluring_sunstone"
        },
        "enchantments": [
            "miningmaster:leeching",
            "allurement:reeling"
        ]
    })

    // NIMBLE SPINEL

    event.custom({
        "type": "miningmaster:forging_recipe",
        "gems": [
            { "item": "miningmaster:kinetic_opal" }
        ],
        "catalyst": { "item": "miningmaster:spider_kunzite" },
        "result": { "item": "kubejs:nimble_spinel", "count": 1 }
    })

    event.custom({
        "type": "miningmaster:gem_smithing_recipe",
        "blacklist": {
            "tag": "miningmaster:gem_enchanting_blacklist"
        },
        "gem": {
            "item": "kubejs:nimble_spinel"
        },
        "enchantments": [
            "allurement:launch",
            "combatroll:acrobat"
        ]
    })

    // RECTIFYING MOONSTONE

    event.custom({
        "type": "miningmaster:forging_recipe",
        "gems": [
            { "item": "miningmaster:unbreaking_iolite" }
        ],
        "catalyst": { "item": "miningmaster:heart_rhodonite" },
        "result": { "item": "kubejs:rectifying_moonstone", "count": 1 }
    })

    event.custom({
        "type": "miningmaster:gem_smithing_recipe",
        "blacklist": {
            "tag": "miningmaster:gem_enchanting_blacklist"
        },
        "gem": {
            "item": "kubejs:rectifying_moonstone"
        },
        "enchantments": [
            "allurement:reforming"
        ]
    })

    // SCORNFUL BLOODSTONE

    event.custom({
        "type": "miningmaster:forging_recipe",
        "gems": [
            { "item": "miningmaster:divine_beryl" }
        ],
        "catalyst": { "item": "miningmaster:power_pyrite" },
        "result": { "item": "kubejs:scornful_bloodstone", "count": 1 }
    })

    event.custom({
        "type": "miningmaster:gem_smithing_recipe",
        "blacklist": {
            "tag": "miningmaster:gem_enchanting_blacklist"
        },
        "gem": {
            "item": "kubejs:scornful_bloodstone"
        },
        "enchantments": [
            "majruszsenchantments:misanthropy"
        ]
    })

    // TRANQUIL PEARL

    event.custom({
        "type": "miningmaster:forging_recipe",
        "gems": [
            { "item": "minecraft:diamond" }
        ],
        "catalyst": { "item": "miningmaster:dive_aquamarine" },
        "result": { "item": "kubejs:tranquil_pearl", "count": 1 }
    })

    event.custom({
        "type": "miningmaster:gem_smithing_recipe",
        "blacklist": {
            "tag": "miningmaster:gem_enchanting_blacklist"
        },
        "gem": {
            "item": "kubejs:tranquil_pearl"
        },
        "enchantments": [
            "allurement:obedience",
            "allurement:alleviating"
        ]
    })

    // VENGEFUL ONYX

    event.custom({
        "type": "miningmaster:forging_recipe",
        "gems": [
            { "item": "miningmaster:heart_rhodonite" }
        ],
        "catalyst": { "item": "miningmaster:power_pyrite" },
        "result": { "item": "kubejs:vengeful_onyx", "count": 1 }
    })

    event.custom({
        "type": "miningmaster:gem_smithing_recipe",
        "blacklist": {
            "tag": "miningmaster:gem_enchanting_blacklist"
        },
        "gem": {
            "item": "kubejs:vengeful_onyx"
        },
        "enchantments": [
            "majruszsenchantments:death_wish"
        ]
    })

});
