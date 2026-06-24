StartupEvents.registry("minecraft:item", e => {

    const FantasiaGreatswords = [
        "wooden_greatsword",
        // "stone_greatsword",
        // "copper_greatsword",
        "iron_greatsword",
        "steel_greatsword",
        "golden_greatsword",
        "diamond_greatsword",
        "netherite_greatsword"
    ]

    global.FantasiaStanceWeapons = global.FantasiaStanceWeapons.concat(
        FantasiaGreatswords
    )

    FantasiaGreatswords.forEach(name => {
        let material = name.replace("_greatsword", "")
        
        registerSpartanStanceWeapon(e, name, "greatsword", material)
    })
})
