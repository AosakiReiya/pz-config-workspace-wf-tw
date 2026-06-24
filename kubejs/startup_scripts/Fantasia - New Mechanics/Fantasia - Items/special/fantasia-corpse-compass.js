StartupEvents.registry("item", e => {
    const config = specialItemsConfig.corpseCompass

    if (!config.enabled) return
    
    e.create("corpse_compass")
    .tag("spelunkery:keep_on_death")
    .maxStackSize(1)
    .use((level, player, hand) => {

        if (level.isClientSide()) return true

        if (global.onCorpseCompassUse) {
            global.onCorpseCompassUse(level, player, hand)
        }

        return true
    })
})


// let CompassItemPropertyFunction = Java.loadClass("net.minecraft.client.renderer.item.CompassItemPropertyFunction")

ItemEvents.modelProperties(e => {
    e.register("kubejs:corpse_compass", "angle", (stack, level, entity) => {

        let world = level ? level : (entity ? entity.level : null)
       
        if (!world) return 0.0;

        let nbt = stack.nbt;
        if (nbt && nbt.contains('targetX')) {
            let targetDim = nbt.getString('targetDim')

            let currentDim = world.dimension.toString();

            if (targetDim !== "" && targetDim !== currentDim) {
                return (world.time % 80) / 80.0;
            }

            let tx = nbt.getInt('targetX');
            let tz = nbt.getInt('targetZ');

            let posX = entity ? entity.x : (stack.frame ? stack.frame.x : 0);
            let posZ = entity ? entity.z : (stack.frame ? stack.frame.z : 0);
            let rotation = entity ? entity.yaw : (stack.frame ? stack.frame.rotation : 0);

            let angleToTarget = Math.atan2(tz - posZ, tx - posX) / (JavaMath.PI * 2);
            let playerRotation = rotation / 360.0;
            
            let finalAngle = angleToTarget - playerRotation + 0.25;

            return (finalAngle % 1.0 + 1.0) % 1.0;
        }

        return (world.time % 80) / 80.0;
    });
});

StartupEvents.registry("entity_type", e => {
    e.create("corpse_core", "entityjs:nonliving")
    .onAddedToWorld(entity => {
        entity.setNoGravity(false)
    })
    .isPushable(true)
    .updateInterval(10)
    .sized(0.5, 0.5)
    .tick(entity => {
        if (entity.level.isClientSide()) return

        if (entity.age % 20 !== 0) return

        let corpseUuidStr = entity.persistentData.corpseUuid 
        let corpseEntity = entity.level.getEntity(corpseUuidStr)
        let server = entity.server
        
        let activeList = server.persistentData.corpseList || []
        let emptyList = server.persistentData.emptyCorpseList || []

        if (!corpseEntity) {

            // if (entity.age % 20 !== 0) return

            let entry = activeList.find(c => c.uuid === corpseUuidStr) || emptyList.find(c => c.uuid === corpseUuidStr)

            if (entry && entry.dim !== entity.level.dimension.toString()) {
                console.log(`Corpse ${corpseUuidStr} changed dimension. Removing old tracker`)
                entity.discard()
                return
            }

            let fails = (entity.persistentData.failToTrackCorpse || 0) + 1
            entity.persistentData.failToTrackCorpse = fails

            if (fails >= 100) { 
                server.persistentData.corpseList = activeList.filter(c => c.uuid !== corpseUuidStr)
                server.persistentData.emptyCorpseList = emptyList.filter(c => c.uuid !== corpseUuidStr)
                entity.discard()
                return
            }
        } else {

            entity.setPosition(corpseEntity.x, corpseEntity.y, corpseEntity.z)

            // if (entity.age % 20 !== 0) return
            
            entity.persistentData.failToTrackCorpse = 0

            let nbt = corpseEntity.nbt
            let deathTag = nbt.getCompound("Death")
            let isMainEmpty = deathTag.getList("MainInventory", 10).isEmpty()
            let isArmorEmpty = deathTag.getList("ArmorInventory", 10).isEmpty()
            let isOffHandEmpty = deathTag.getList("OffHandInventory", 10).isEmpty()
            let isNowEmpty = isMainEmpty && isArmorEmpty && isOffHandEmpty

            let wasEmpty = entity.persistentData.isCurrentlyEmpty || false

            if (!wasEmpty && isNowEmpty) {
                let entry = activeList.find(c => c.uuid === corpseUuidStr)
                if (entry) {

                    activeList = activeList.filter(c => c.uuid !== corpseUuidStr)
                    emptyList.push(entry)
                    
                    server.persistentData.corpseList = activeList
                    server.persistentData.emptyCorpseList = emptyList
                    entity.persistentData.isCurrentlyEmpty = true
                    // console.log(`Corpse ${corpseUuidStr} moved to empty corpses list`)
                }
            } 
            else if (wasEmpty && !isNowEmpty) {
                let entry = emptyList.find(c => c.uuid === corpseUuidStr)
                if (entry) {
                    
                    emptyList = emptyList.filter(c => c.uuid !== corpseUuidStr)
                    activeList.push(entry)
                    
                    server.persistentData.emptyCorpseList = emptyList
                    server.persistentData.corpseList = activeList
                    entity.persistentData.isCurrentlyEmpty = false
                    // console.log(`Corpse ${corpseUuidStr} removed from emptyCorpseList and added to corpseList`)
                }
            }

            if (entity.persistentData.isCurrentlyEmpty) {
                server.persistentData.emptyCorpseList = emptyList.map(c => {
                    if (c.uuid === corpseUuidStr) {
                        return {
                            uuid: c.uuid,
                            name: c.name,
                            x: corpseEntity.x,
                            y: corpseEntity.y,
                            z: corpseEntity.z,
                            dim: entity.level.dimension.toString()
                        }
                    }
                    return c
                })
            } else {
                server.persistentData.corpseList = activeList.map(c => {
                    if (c.uuid === corpseUuidStr) {
                        return {
                            uuid: c.uuid,
                            name: c.name,
                            x: corpseEntity.x,
                            y: corpseEntity.y,
                            z: corpseEntity.z,
                            dim: entity.level.dimension.toString()
                        }
                    }
                    return c
                })
            }
        }
    })
})


/**
 * 
 * @param {Internal.Level} level 
 * @param {Player} player 
 * @param {Internal.InteractionHand} hand
 */
global.onCorpseCompassUse = (level, player, hand) => {
    const config = specialItemsConfig.corpseCompass;
    let server = level.server;
    let item = player.getItemInHand(hand);

    player.addItemCooldown("kubejs:corpse_compass", config.cooldownTicks);
    
    let corpseList = server.persistentData.corpseList || [];

    if (corpseList.length === 0) {
        clearCorpseCompassNBT(item);
        player.setStatusMessage(Text.translatable("message.kubejs.corpse_compass.no_corpse").red());
        return;
    }

    let closestCorpse = null;
    let minDist = config.maxDistance;
    let anyInDimension = false;

    corpseList.forEach(corpse => {
        if (corpse.dim === level.dimension.toString()) {
            anyInDimension = true
           
            let dx = player.x - corpse.x;
            let dy = player.y - corpse.y;
            let dz = player.z - corpse.z;
            let distance = Math.sqrt(dx*dx + dy*dy + dz*dz);

            if (distance < minDist) {
                minDist = distance;
                closestCorpse = corpse;
            }
        }
    });

    if (closestCorpse) {        
        player.setStatusMessage(
            Text.translatable(
                "message.kubejs.corpse_compass.found",
                Math.floor(closestCorpse.x).toFixed(0),
                Math.floor(closestCorpse.y).toFixed(0),
                Math.floor(closestCorpse.z).toFixed(0)
            )
        );
        
        if (item.id === "kubejs:corpse_compass") {
            item.getOrCreateTag().putInt('targetX', Math.floor(closestCorpse.x));
            item.getOrCreateTag().putInt('targetY', Math.floor(closestCorpse.y));
            item.getOrCreateTag().putInt('targetZ', Math.floor(closestCorpse.z));
            item.getOrCreateTag().putString('targetDim', level.dimension.toString());
            item.getOrCreateTag().putString('targetName', closestCorpse.name);
        }
    } else {
        clearCorpseCompassNBT(item);
        
        if (!anyInDimension) {
            player.setStatusMessage(Text.translatable("message.kubejs.corpse_compass.no_corpse_dimension").red());
        } else {
            player.setStatusMessage(Text.translatable("message.kubejs.corpse_compass.no_corpse").red());
        }
    }

    /*player.sendData("corpse_compass_use", {
        hand: hand.toString(),
        nbt: item.nbt
    })*/
}


function clearCorpseCompassNBT(item) {
    if (item.nbt && item.nbt.contains('targetX')) {
        item.nbt.remove('targetX');
        item.nbt.remove('targetY');
        item.nbt.remove('targetZ');
        item.nbt.remove('targetDim');
        item.nbt.remove('targetName')
    }
}