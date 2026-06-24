ServerEvents.tags("item", e => {

    global.FantasiaStanceWeapons.forEach(name => {

        // const one = `kubejs:${name}_one_handed`;
        const one = `spartanweaponry:${name}`;
        const two = `kubejs:${name}_two_handed`;

        e.add("fantasia:stance_one_handed", one);
        // e.add("fantasia:stance_two_handed", two);

        e.add("swordblockingmechanics:can_perform_sword_blocking", one);
        // e.add("swordblockingmechanics:can_perform_sword_blocking", two);
    })


     const cataclysmWeapons = [
        "cataclysm:khopesh",
        "cataclysm:black_steel_axe",
        "cataclysm:black_steel_sword",
    ]

    const minecraftWeapons = [
        "minecraft:wooden_axe",
        "minecraft:stone_axe",
        "minecraft:iron_axe",
        "minecraft:golden_axe",
        "minecraft:diamond_axe",
        "minecraft:netherite_axe",
        "minecraft:wooden_sword",
        "minecraft:stone_sword",
        "minecraft:iron_sword",
        "minecraft:golden_sword",
        "minecraft:diamond_sword",
        "minecraft:netherite_sword"
    ]

    const overgearedWeapons = [
        "overgeared:copper_axe",
        "overgeared:steel_axe",
        "overgeared:copper_sword",
        "overgeared:steel_sword",
    ]

    cataclysmWeapons.forEach(name => {
        let kubejsSword = name.replace("cataclysm:", "kubejs:") + "_two_handed"

        e.add("fantasia:stance_one_handed", name);

        e.add("fantasia:stance_two_handed", kubejsSword)

        e.add("fantasia:cataclysm_weapons", kubejsSword)
    })


    minecraftWeapons.forEach(name => {
        let kubejsSword = name.replace("minecraft:", "kubejs:") + "_two_handed"

        e.add("fantasia:stance_one_handed", name);

        e.add("fantasia:stance_two_handed", kubejsSword)

        e.add("fantasia:minecraft_weapons", kubejsSword)
    })


    overgearedWeapons.forEach(name => {
        let kubejsSword = name.replace("overgeared:", "kubejs:") + "_two_handed"

        e.add("fantasia:stance_one_handed", name);

        e.add("fantasia:stance_two_handed", kubejsSword)

        e.add("fantasia:overgeared_weapons", kubejsSword)
    })
})