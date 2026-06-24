StartupEvents.registry("minecraft:item", e => {

    const FantasiaFlangedMaces = [
        "wooden_flanged_mace",
        // "stone_flanged_mace",
        // "copper_flanged_mace",
        "iron_flanged_mace",
        "steel_flanged_mace",
        // "golden_flanged_mace",
        "diamond_flanged_mace",
        "netherite_flanged_mace"
    ]

    global.FantasiaStanceWeapons = global.FantasiaStanceWeapons.concat(
        FantasiaFlangedMaces
    )

    FantasiaFlangedMaces.forEach(name => {
        let material = name.replace("_flanged_mace", "")
        
        registerSpartanStanceWeapon(e, name, "flanged_mace", material)
    })
})