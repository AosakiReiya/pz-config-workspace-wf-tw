/* ========================================================================
=== Server Script ===
======================================================================== */

const ermirasFavorConfig = global.specialItemsConfig.ermirasFavor

EntityEvents.death("minecraft:player", e => {
    

    let {level, player}= e

    let {x, y, z, eyeHeight, server} = player;
    
    if (player.useItem.id === "kubejs:ermiras_favor") {
        player.releaseUsingItem()
    }

    let playerUuid = player.getStringUuid()
    let store = server.persistentData.ErmirasFavor || {}
    let data = store[playerUuid]
    if (!data) return

    data.remainingRevives -= 1

    let revivesLeft = data.remainingRevives.toFixed(0)

    server.persistentData.ErmirasFavor[playerUuid] = data 

    if (level.dimension.toString() !== data.respawnDimension) {
        if (data.remainingRevives > 0) {

            let text = Text.translate("message.kubejs.ermiras_favor.failed_too_far", revivesLeft).red()
            player.tell(text)

        } else {

            delete server.persistentData.ErmirasFavor[playerUuid]
            player.tell(Text.translate("message.kubejs.ermiras_favor.exhausted_too_far").red())
        }
        return
    }

    // Check distance only in X and Z.
    let dx = player.x - data.respawnX
    let dz = player.z - data.respawnZ
    let distSq = dx * dx + dz * dz

    // 10 blocks = 100
    // 15 blocks = 225
    // 30 blocks = 900
    // 100 blocks = 10000
    
    let range = ermirasFavorConfig.maxDistance

    if (distSq > (range * range)) {
        if (data.remainingRevives > 0) {

            let text = Text.translate("message.kubejs.ermiras_favor.failed_too_far", revivesLeft).red()
            player.tell(text)
            
        } else {
            
            delete server.persistentData.ErmirasFavor[playerUuid]
            player.tell(Text.translate("message.kubejs.ermiras_favor.exhausted_too_far").red())
        }

        return
    }
    
    // fix the bug of not being able to teleport
    player.unRide()

    let { respawnDimension, respawnX, respawnY, respawnZ, coreUuid, itemDisplayUuid } = data

    level.spawnParticles(`minecraft:happy_villager`, true, x, y + eyeHeight * 0.7, z, 0.5, 0.5, 0.2, 10, 2.5)

    for (let h of [1.05, 0.6, 0.15]) {
        level.spawnParticles(`irons_spellbooks:爆波 0.1 1.0 0.1 1.2`,true, x, y + eyeHeight * h, z, 0, 0, 0, 5, 0);
    }

    player.setHealth(ermirasFavorConfig.healAmount)

    let effects = player.potionEffects

    for (let id in ermirasFavorConfig.mobEffects) {
        let effect = ermirasFavorConfig.mobEffects[id]

        effects.add(id, effect.duration, effect.amplifier, false, true)
    }

    level.playSound(null, x, y, z, "entity.enderman.teleport", "players", 2, 1 )
    player.teleportTo(respawnDimension, respawnX, respawnY, respawnZ, player.yaw, player.pitch )
       
    server.scheduleInTicks(3, () => {

        level.playSound(null, respawnX, respawnY, respawnZ, "minecraft:item.totem.use", "players", 3.5, 2 )
        level.spawnParticles(`minecraft:happy_villager`, true, respawnX, respawnY + eyeHeight * 0.7, respawnZ, 0.5, 0.5, 0.2, 10, 2.5)
        
        for (let h of [1.05, 0.6, 0.15]) {
            level.spawnParticles(`irons_spellbooks:blastwave 0.1 1.0 0.1 1.2`,
                true, respawnX, respawnY + eyeHeight * h, respawnZ, 0, 0, 0, 5, 0
            );
        }
    })
    
    if (data.remainingRevives > 0) {
        let text = Text.translate("message.kubejs.ermiras_favor.activated", revivesLeft).green()
        player.setStatusMessage(text)
    } else {
        delete server.persistentData.ErmirasFavor[playerUuid]
        player.setStatusMessage(Text.translate("message.kubejs.ermiras_favor.exhausted").green())
    }

    player.sendData("ErmirasFavorActivation")
    e.cancel()
})