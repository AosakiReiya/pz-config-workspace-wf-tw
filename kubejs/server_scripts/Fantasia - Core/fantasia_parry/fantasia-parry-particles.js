const FantasiaParryConfig = {
    lowDamage: 4,
    mediumDamage: 8,
    highDamage: 12,
    flashTime: 8,
    lightLevel: 3,
    highlightLevel: 7,
    log: false
}


/**
 * @param {Internal.ServerPlayer} player
 * @param {DamageSource} source
 * @param {number} amount
 */
function fantasiaParryParticles(player, source, amount) {
    const config = FantasiaParryConfig
    const level = player.level

    // CHANGE THIS LOGIC TO USE THE DISTANCE BETWEEN THE ENTITY THAT ATTACKED AND THE PLAYER
    let lookAngle = player.lookAngle
    let lookDistance = 0.5;
    let lookX = player.x + lookAngle.x() * lookDistance;
    let lookY = player.y + player.eyeHeight + lookAngle.y() * lookDistance;
    let lookZ = player.z + lookAngle.z() * lookDistance

    if (config.log) {
        console.log("parry")
        console.log(amount);
    }
   
    const isVeryLowDamage = amount < config.lowDamage

    if (isVeryLowDamage) {
        level.spawnParticles('minecraft:cloud', true, lookX, lookY, lookZ, 0.1, 0.1, 0.1, 1, 0.1)
        return
    }

    const isLowDamage = amount >= config.lowDamage && amount < config.mediumDamage
    
    if (isLowDamage) {
        level.spawnParticles('minecraft:cloud', true, lookX, lookY, lookZ, 0.1, 0.1, 0.1, 1, 0.1)
        level.spawnParticles('irons_spellbooks:多媒體火花 0.3 0.3 0.3', true, lookX, lookY, lookZ, 0.0, 0.0, 0.0, 4, 0.4)
        return
    }

    const isMediumDamage = amount >= config.mediumDamage && amount < config.highDamage

    if (isMediumDamage && player.useItem.hasTag("spartanweaponry:wooden_weapons")) {
        level.spawnParticles('irons_spellbooks:多媒體火花 1 0.8 0.6', true, lookX, lookY, lookZ, 0.0, 0.0, 0.0, 8, 0.2)
        level.spawnParticles('irons_spellbooks:多媒體火花 1 0.5 0.4', true, lookX, lookY, lookZ, 0.0, 0.0, 0.0, 8, 0.3)
        // level.spawnParticles('irons_spellbooks:shockwave 1.0 1.0 1.0 1 true null', true, lookX, lookY, lookZ, 0, 0, 0, 10, 0)
        return
    }


    if (isMediumDamage) {
        level.spawnParticles('irons_spellbooks:多媒體火花 1 0.8 0.6', true, lookX, lookY, lookZ, 0.0, 0.0, 0.0, 8, 0.2)
        level.spawnParticles('irons_spellbooks:多媒體火花 1 0.5 0.4', true, lookX, lookY, lookZ, 0.0, 0.0, 0.0, 8, 0.3)
        // level.spawnParticles('irons_spellbooks:shockwave 1.0 1.0 1.0 1 true null', true, lookX, lookY, lookZ, 0, 0, 0, 10, 0)
        // fantasiaParryLight(level, config.lightLevel, config.flashTime, lookX, lookY, lookZ)
        return
    }

    const isHighDamage = amount >= config.highDamage

    if (isHighDamage && player.useItem.hasTag("spartanweaponry:wooden_weapons")) {
        level.spawnParticles('minecraft:cloud', true, lookX, lookY, lookZ, 0.1, 0.1, 0.1, 3, 0.1)
        level.spawnParticles('irons_spellbooks:多媒體火花 0.55 0.28 0.10', true, lookX, lookY, lookZ, 0.0, 0.0, 0.0, 15, 0.55)
        // level.spawnParticles('irons_spellbooks:shockwave 1.0 1.0 1.0 1 true null', true, lookX, lookY, lookZ, 0, 0, 0, 10, 0)
        return
    }

    if (isHighDamage) {

        level.spawnParticles('irons_spellbooks:多媒體火花 1 0.8 0.6', true, lookX, lookY, lookZ, 0.0, 0.0, 0.0, 14, 0.3)
        level.spawnParticles('irons_spellbooks:多媒體火花 1 0.5 0.4', true, lookX, lookY, lookZ, 0.0, 0.0, 0.0, 14, 0.4)
        // level.spawnParticles('irons_spellbooks:shockwave 1.0 1.0 1.0 2 true null', true, lookX, lookY, lookZ, 0, 0, 0, 10, 0)
        // fantasiaParryLight(level, config.highlightLevel, config.flashTime, lookX, lookY, lookZ)
        return
    }
}


/**
 * @param {Internal.Level} level
 * @param {number} lightLevel
 * @param {number} lightTime
 * @param {number} x
 * @param {number} y
 * @param {number} z
 */
function fantasiaParryLight(level, lightLevel, lightTime, x, y, z) {
    let light = level.createEntity("item");
    light.item = Item.of('minecraft:light', `{BlockStateTag:{level:${lightLevel}}}`)
    light.mergeNbt({PickupDelay: 6000, CanUpdate:0, NoGravity:1});
    light.setPos(x, y, z)
    light.persistentData.lightTime = lightTime
    level.addFreshEntity(light)
}

/*
EntityEvents.spawned("minecraft:item", e => {
    const {entity: light} = e

    const data = light.persistentData

    if (data.isProcessed) {
        light.discard()
    }

    if (!data.lightTime) return

    light.server.scheduleInTicks(data.lightTime, _ => {
        light.discard()
    })

    data.isProcessed = true
})
*/