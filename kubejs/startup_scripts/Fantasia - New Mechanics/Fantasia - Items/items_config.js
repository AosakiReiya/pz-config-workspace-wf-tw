const specialItemsConfig = {

    corpseCompass: {
        enabled: true,
        maxDistance: 99999,
        cooldownTicks: 10,
    },

    ermirasFavor: {
        enabled: true,
        itemUseCharges: 3,
        revivesPerUse: 1,
        maxDistance: 100,
        useDurationTicks: 30,
        ermirasFavorDuration: 72000, // 72000 = 3 minecraft days = 1 hour
        mobEffects: {
            "minecraft:water_breathing": { duration: 1200, amplifier: 0 },
            "minecraft:fire_resistance": { duration: 1200, amplifier: 0 },
            "minecraft:absorption":      { duration: 1200, amplifier: 1 },
            "minecraft:slow_falling":    { duration: 100,  amplifier: 4 }
        },
        healAmount: 1
    },

    teleportGem: {
        enabled: true,
        cooldownToHall: 10,
        cooldownToBack: 30,
        useDurationToHall: 160,
        useDurationToBack: 80,
        hallofDecimus: {
            x: 102.5,
            y: 104,
            z: 39.5,
            dimension: "fantasia_hall:decimus" // "fantasia_hall:decimus"
        },
        allowedDimensions: [
            "minecraft:overworld",
            // "minecraft:the_end",
            // "minecraft:the_nether",
            // "irons_spellbooks:pocket_dimension",
        ]
    }
}

global.specialItemsConfig = specialItemsConfig

