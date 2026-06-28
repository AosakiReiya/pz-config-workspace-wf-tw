ItemEvents.modification(event => {

    let swftKnives = [
        'farmersdelight:flint_knife',
        'farmersdelight:golden_knife',
        'farmersdelight:iron_knife',
        'farmersdelight:diamond_knife',
        'kubejs:steel_knife',
        'mowziesmobs:naga_fang_dagger',
        'cataclysm:athame'
    ]

    swftKnives.forEach(knives => {
        event.modify(knives, item => {
            item.attackSpeed = -2.8
        })
    })

    event.modify("simplest_hammers:stone_hammer", item => {
        item.digSpeed = 1
    })

    event.modify("simplest_hammers:iron_hammer", item => {
        item.digSpeed = 1.5
    })

    let hoes =
        [
            "minecraft:wooden_hoe",
            "minecraft:stone_hoe",
            "overgeared:copper_hoe",
            "minecraft:iron_hoe",
            "minecraft:diamond_hoe",
            "minecraft:netherite_hoe",
            "overgeared:steel_hoe",
            "cataclysm:black_steel_hoe"
        ]

    hoes.forEach(hoeTypes => {
        event.modify(hoeTypes, item => {
            item.attackSpeed = -2.8
        })
    })

    let swords =
        [
            "minecraft:wooden_sword",
            "minecraft:stone_sword",
            "overgeared:copper_sword",
            "minecraft:iron_sword",
            "minecraft:golden_sword",
            "minecraft:diamond_sword",
            "minecraft:netherite_sword",
            "overgeared:steel_sword",
            "cataclysm:black_steel_sword"
        ]

    swords.forEach(swordTypes => {
        event.modify(swordTypes, item => {
            item.attackSpeed = -2.5
        })
    })


    event.modify('mca:scythe', item => {
        item.attackSpeed = -3.0
    })

});