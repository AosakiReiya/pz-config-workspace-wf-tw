StartupEvents.registry("minecraft:item", e => {

    const FantasiaLongswords = [
        "wooden_longsword",
        // "stone_longsword",
        // "copper_longsword",
        "iron_longsword",
        "steel_longsword",
        "golden_longsword",
        "diamond_longsword",
        "netherite_longsword"
    ]

    global.FantasiaStanceWeapons = global.FantasiaStanceWeapons.concat(
        FantasiaLongswords
    )

    FantasiaLongswords.forEach(name => {
        let material = name.replace("_longsword", "")

        registerSpartanStanceWeapon(e, name, "longsword", material)
    })
})