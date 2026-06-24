StartupEvents.registry("minecraft:item", e => {

    const materialStats = {
        wooden: {
            tier: "wood",
            durability: 59,
            one_handed_damage: 0,
            two_handed_damage: 0,
            one_handed_speed: -2.8,
            two_handed_speed: -2.4
        },
        stone: {
            tier: "stone",
            durability: 131,
            one_handed_damage: 1,
            two_handed_damage: 1,
            one_handed_speed: -2.8,
            two_handed_speed: -2.4
        },
        copper: {
            tier: "stone",
            durability: 190,
            one_handed_damage: 1,
            two_handed_damage: 1,
            one_handed_speed: -2.8,
            two_handed_speed: -2.4
        },
        iron: {
            tier: "iron",
            durability: 250,
            one_handed_damage: 2,
            two_handed_damage: 2,
            one_handed_speed: -2.8,
            two_handed_speed: -2.4
        },
        golden: {
            tier: "gold",
            durability: 32,
            one_handed_damage: 0,
            two_handed_damage: 0,
            one_handed_speed: -2.8,
            two_handed_speed: -2.4
        },
        steel: {
            tier: "iron",
            durability: 500,
            one_handed_damage: 3,
            two_handed_damage: 3,
            one_handed_speed: -2.8,
            two_handed_speed: -2.4
        },
        khopesh: {
            tier: "iron",
            durability: 750,
            one_handed_damage: 1,
            two_handed_damage: 1,
            one_handed_speed: -2.8,
            two_handed_speed: -2.6
        },
        black_steel: {
            tier: "iron",
            durability: 750,
            one_handed_damage: 2,
            two_handed_damage: 2,
            one_handed_speed: -2.8,
            two_handed_speed: -2.4
        },
        diamond: {
            tier: "diamond",
            durability: 1561,
            one_handed_damage: 3,
            two_handed_damage: 3,
            one_handed_speed: -2.8,
            two_handed_speed: -2.4
        },
        netherite: {
            tier: "netherite",
            durability: 2031,
            one_handed_damage: 4,
            two_handed_damage: 4,
            one_handed_speed: -2.8,
            two_handed_speed: -2.4
        }
    }

    const FantasiaSwords = [
        "wooden_sword",
        "stone_sword",
        "copper_sword",
        "iron_sword",
        "golden_sword",
        "steel_sword",
        "black_steel_sword",
        "khopesh",
        "diamond_sword",
        "netherite_sword"
    ]

    global.FantasiaStanceWeapons = global.FantasiaStanceWeapons.concat(
        FantasiaSwords
    )

    FantasiaSwords.forEach(name => {
        let material = name.replace("_sword", "")
        let config = materialStats[material]
        if (config) registerVanillaStanceWeapon(e, name, "sword", config)
    })
})