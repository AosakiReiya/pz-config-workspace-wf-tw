StartupEvents.registry("minecraft:item", e => {

    const FantasiaBattleAxes = [
        "wooden_battleaxe",
        // "stone_battleaxe",
        // "copper_battleaxe",
        "iron_battleaxe",
        "steel_battleaxe",
        // "golden_battleaxe",
        "diamond_battleaxe",
        "netherite_battleaxe"
    ]

    global.FantasiaStanceWeapons = global.FantasiaStanceWeapons.concat(
        FantasiaBattleAxes
    )

    FantasiaBattleAxes.forEach(name => {
        let material = name.replace("_battleaxe", "")

        registerSpartanStanceWeapon(e, name, "battleaxe", material)
    })
})