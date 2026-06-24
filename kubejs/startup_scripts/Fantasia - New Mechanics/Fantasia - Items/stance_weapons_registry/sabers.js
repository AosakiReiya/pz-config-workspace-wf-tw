StartupEvents.registry("minecraft:item", e => {

    const FantasiaSabers = [
        "wooden_saber",
        //"stone_saber",
        // "copper_saber",
        "iron_saber",
        "steel_saber",
        "golden_saber",
        "diamond_saber",
        "netherite_saber"
    ]

    global.FantasiaStanceWeapons = global.FantasiaStanceWeapons.concat(
        FantasiaSabers
    )

    FantasiaSabers.forEach(name => {
        let material = name.replace("_saber", "")
        
        registerSpartanStanceWeapon(e, name, "saber", material)
    })
})