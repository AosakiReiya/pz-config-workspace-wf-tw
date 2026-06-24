StartupEvents.registry("minecraft:item", e => {

    const FantasiaWarhammers = [
        "wooden_warhammer",
        // "stone_warhammer",
        // "copper_warhammer",
        "iron_warhammer",
        "steel_warhammer",
        // "golden_warhammer",
        "diamond_warhammer",
        "netherite_warhammer"
    ]

    global.FantasiaStanceWeapons = global.FantasiaStanceWeapons.concat(
        FantasiaWarhammers
    )

    FantasiaWarhammers.forEach(name => {
        let material = name.replace("_warhammer", "")
        
        registerSpartanStanceWeapon(e, name, "warhammer", material)
    })
})