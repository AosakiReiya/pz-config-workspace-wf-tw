/* ========================================================================
=== Startup Script ===
======================================================================== */


StartupEvents.registry("minecraft:item", e => {
    const config = specialItemsConfig.ermirasFavor

    if (!config.enabled) return

    e.create("ermiras_favor", "basic")
    .finishUsing((item, level, player) => {
    
        return global.ErmirasFavorfinishUsing(item, level, player)

    })
    //.maxDamage(3)
    //.barColor(_itemstack => Color.rgba(24, 243, 4, 1))
    .displayName("艾米拉的恩賜")
    .unstackable()
    .useAnimation("spear")
    .useDuration((item, livingEntity) => config.useDurationTicks)
    .use((level, player, hand) => {
       
        return true
        // if (player.onGround()) return true

        // player.tell("It needs to be used on the floor")
        // return false

        // check if it's a free space ??
        // if it's not a free space ?? 
        // a small cooldown of 1.5 seconds ??
    })
    
})


StartupEvents.registry("entity_type", e => {
	e.create("ermiras_favor", "entityjs:nonliving")
    .onAddedToWorld(entity  => {
        entity.setNoGravity(true)
    })
    .isPushable(false)
    .updateInterval(10)
    .sized(1, 1)
    .tick(entity => {
        
        if (entity.level.isClientSide()) return

        if (entity.age % 80 === 0) {
            let {eyeHeight, level, x, y, z } = entity
            
            level.playSound(null, x, y, z, "minecraft:block.amethyst_block.hit", "players", 0.25, 1.1 )

            level.spawnParticles(`irons_spellbooks:爆波 0.1 1.0 0.1 1.5`, true, x, y, z, 0, 0, 0, 5, 0)
            level.spawnParticles(`minecraft:happy_villager`, true, x, y, z, 0.5, 0.5, 0.2, 6, 2.5)
            level.spawnParticles('irons_spellbooks:多媒體火花 0.1 1.0 0.1', true, x, y, z, 0, 0, 0, 4, 0.17)
            level.spawnParticles(`minecraft:totem_of_undying`, true, x, y, z, 0, 0.0, 0, 7, 0.35);
        }

        let ErmirasFavorDataCore = entity.persistentData.ErmirasFavorCore

        if (!ErmirasFavorDataCore) {
            // console.log("remove because data core is false!");
            entity.discard()
            return
        }

        let level = entity.level
        let server = level.server
        
       //  let {respawnDimension, respawnX, respawnY, respawnZ, ErmirasFavoruuid, ownerUuid, itemDisplayUuid} = ErmirasFavorDataCore

        let { ownerUuid, itemDisplayUuid} = ErmirasFavorDataCore

        let serverStore = server.persistentData.ErmirasFavor || {}
        let ownerData = serverStore[ownerUuid]

        if (!ownerData || ownerData.coreUuid !== entity.getStringUuid()) {

            let {eyeHeight, level, x, y, z } = entity
            let itemDisplay = level.getEntity(itemDisplayUuid)
            
            if (itemDisplay) {
                itemDisplay.discard()
            } else {
                entity.discard()
                return 
            }
            // green
            level.spawnParticles('irons_spellbooks:多媒體火花 0.1 1.0 0.1', true, x, y + eyeHeight * 0.7, z, 0, 0, 0, 10, 0.2)
            // yellow
            level.spawnParticles('irons_spellbooks:多媒體火花 1.0 1.0 0.0', true, x, y + eyeHeight * 0.7, z, 0, 0, 0, 5, 0.2)
            // brown
            level.spawnParticles('irons_spellbooks:多媒體火花 0.55 0.28 0.10', true, x, y + eyeHeight * 0.7, z, 0, 0, 0, 7, 0.2)
            entity.discard()
            return
        }

       if (entity.age >= specialItemsConfig.ermirasFavor.ermirasFavorDuration) {

            let {eyeHeight, level, x, y, z } = entity
            let itemDisplay = level.getEntity(itemDisplayUuid)
            
            // if (!itemDisplay) return 

            // green
            level.spawnParticles('irons_spellbooks:多媒體火花 0.1 1.0 0.1', true, x, y + eyeHeight * 0.7, z, 0, 0, 0, 10, 0.2)
            // yellow
            level.spawnParticles('irons_spellbooks:多媒體火花 1.0 1.0 0.0', true, x, y + eyeHeight * 0.7, z, 0, 0, 0, 5, 0.2)
            // brown
            level.spawnParticles('irons_spellbooks:多媒體火花 0.55 0.28 0.10', true, x, y + eyeHeight * 0.7, z, 0, 0, 0, 7, 0.2)

            if (server.persistentData.ErmirasFavor) delete server.persistentData.ErmirasFavor[ownerUuid]
            
            if (itemDisplay) {
                itemDisplay.discard()
            }
            entity.discard()
        }
        // Create an animation of going up and down?
    })
})

/**
 * @param {Internal.ItemStack} item
 * @param {Internal.Level} level
 * @param {Internal.Player} player
 */
global.ErmirasFavorfinishUsing = (item, level, player) => {

    const config = specialItemsConfig.ermirasFavor

    let {x, y, z} = player
    let { server } = level;

    
    level.playSound(null, x, y, z, "minecraft:block.amethyst_block.hit", "players", 3.5, 1 )
    
    let core = level.createEntity("kubejs:ermiras_favor")
	core.setPosition(x, y + 0.5, z)
    core.setNoGravity(true)
    core.setInvulnerable(true)
	core.spawn();

    let username = player.username

    let itemDisplay = level.createEntity("minecraft:item_display");
    itemDisplay.setPosition(x, y + 0.5, z);
    itemDisplay.setRotation(player.yaw, 0)
    itemDisplay.mergeNbt({
        item: { id: "kubejs:ermiras_favor", Count: 1 },
        CustomName: `{"text":"${username}", "color":"green"}`,
        // CustomName: '{"text":"Player Name", "color":"yellow"}',
        CustomNameVisible: 1,
        item_display: "fixed",
        brightness: { block: 15, sky: 15 },
    });
    itemDisplay.spawn();

    if (!level.isClientSide()) {
        
        if (!server.persistentData.ErmirasFavor) server.persistentData.ErmirasFavor = {}

        let playerUuid = player.getStringUuid()
       
        server.persistentData.ErmirasFavor[playerUuid] = {
            respawnDimension: level.dimension.toString(),
            respawnX: x,
            respawnY: y,
            respawnZ: z,
            coreUuid: core.getStringUuid(),
            itemDisplayUuid: itemDisplay.getStringUuid(),
            remainingRevives: config.revivesPerUse
        }

        core.persistentData.ErmirasFavorCore = {
            respawnDimension: level.dimension.toString(),
            respawnX: x,
            respawnY: y,
            respawnZ: z,
            ErmirasFavoruuid: core.getStringUuid(),
            ownerUuid: player.getStringUuid(),
            itemDisplayUuid: itemDisplay.getStringUuid()
        }
    }
    
    if (player.isCreative()) {
       return item
    }

    let tag = item.getOrCreateTag()

    if (!tag.contains("charges")) {
        tag.putInt("charges", config.itemUseCharges) 
    }

    let currentCharges = tag.getInt("charges") - 1
    tag.putInt("charges", currentCharges)

    // console.log(currentCharges);

    if (currentCharges <= 0) { 
        return 
    }
    return item
}