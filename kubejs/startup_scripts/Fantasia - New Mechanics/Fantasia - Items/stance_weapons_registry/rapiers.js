StartupEvents.registry("minecraft:item", e => {

    const FantasiaRapiers = [
        "wooden_rapier",
        //"stone_rapier",
        // "copper_rapier",
        "iron_rapier",
        "steel_rapier",
        // "golden_rapier",
        "diamond_rapier",
        "netherite_rapier"
    ]

    global.FantasiaStanceWeapons = global.FantasiaStanceWeapons.concat(
        FantasiaRapiers
    )

    FantasiaRapiers.forEach(name => {
        let material = name.replace("_rapier", "")

        registerSpartanStanceWeapon(e, name, "rapier", material)
    })
})