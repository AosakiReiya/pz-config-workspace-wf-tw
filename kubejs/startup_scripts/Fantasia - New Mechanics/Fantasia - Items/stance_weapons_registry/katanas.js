StartupEvents.registry("minecraft:item", e => {

    const FantasiaKatanas = [
        "wooden_katana",
        // "stone_katana",
        // "copper_katana",
        "iron_katana",
        "steel_katana",
        // "golden_katana",
        "diamond_katana",
        "netherite_katana"
    ]

    global.FantasiaStanceWeapons = global.FantasiaStanceWeapons.concat(
        FantasiaKatanas
    )

    FantasiaKatanas.forEach(name => {
        let material = name.replace("_katana", "")
        
        registerSpartanStanceWeapon(e, name, "katana", material)
    })
})