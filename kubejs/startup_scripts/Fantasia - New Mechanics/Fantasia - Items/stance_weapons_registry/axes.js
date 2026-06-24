StartupEvents.registry("minecraft:item", e => {

    const materialStats = {
        wooden: {
            tier: "wood",
            durability: 59,
            one_handed_damage: 0,
            two_handed_damage: 0,
            one_handed_speed: -2.8,
            two_handed_speed: -3.2
        },
        stone: {
            tier: "stone",
            durability: 131,
            one_handed_damage: 2,
            two_handed_damage: 2,
            one_handed_speed: -2.8,
            two_handed_speed: -3.0
        },
        copper: {
            tier: "stone",
            durability: 190,
            one_handed_damage: 0,
            two_handed_damage: 0,
            one_handed_speed: -2.8,
            two_handed_speed: -3.0
        },
        iron: {
            tier: "iron",
            durability: 250,
            one_handed_damage: 2,
            two_handed_damage: 2,
            one_handed_speed: -2.8,
            two_handed_speed: -3.0
        },
        golden: {
            tier: "gold",
            durability: 32,
            one_handed_damage: 0,
            two_handed_damage: 0,
            one_handed_speed: -2.8,
            two_handed_speed: -3.0
        },
        steel: {
            tier: "iron",
            durability: 500,
            one_handed_damage: 2,
            two_handed_damage: 2,
            one_handed_speed: -2.8,
            two_handed_speed: -3.0
        },
        black_steel: {
            tier: "iron",
            durability: 750,
            one_handed_damage: 2,
            two_handed_damage: 2,
            one_handed_speed: -2.8,
            two_handed_speed: -3.1
        },
        diamond: {
            tier: "diamond",
            durability: 1561,
            one_handed_damage: 2,
            two_handed_damage: 2,
            one_handed_speed: -2.8,
            two_handed_speed: -3.0
        },
        netherite: {
            tier: "netherite",
            durability: 2031,
            one_handed_damage: 3,
            two_handed_damage: 3,
            one_handed_speed: -2.8,
            two_handed_speed: -3.0
        }
    }

    const FantasiaAxes = [
        "wooden_axe",
        "stone_axe",
        "copper_axe",
        "iron_axe",
        "steel_axe",
        "golden_axe",
        "black_steel_axe",
        "diamond_axe",
        "netherite_axe"
    ]
   
    global.FantasiaStanceWeapons = global.FantasiaStanceWeapons.concat(
        FantasiaAxes
    )

    FantasiaAxes.forEach(name => {
        let material = name.replace("_axe", "")
        let config = materialStats[material]
        if (config) registerVanillaStanceWeapon(e, name, "axe", config)
    })
})