StartupEvents.registry("minecraft:item", e => {

    const FantasiaBattleHammers = [
        "wooden_battle_hammer",
        // "stone_battle_hammer",
        // "copper_battle_hammer",
        "iron_battle_hammer",
        "steel_battle_hammer",
        // "golden_battle_hammer",
        "diamond_battle_hammer",
        "netherite_battle_hammer"
    ]

    global.FantasiaStanceWeapons = global.FantasiaStanceWeapons.concat(
        FantasiaBattleHammers
    )

    FantasiaBattleHammers.forEach(name => {
        let material = name.replace("_battle_hammer", "")

        registerSpartanStanceWeapon(e, name, "battle_hammer", material)
    })
})