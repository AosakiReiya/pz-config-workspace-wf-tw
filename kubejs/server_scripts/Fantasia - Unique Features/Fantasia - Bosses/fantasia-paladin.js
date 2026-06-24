const CITADEL_KEEPER_AGGRO_CONFIG = {
    detectionRange: 16,
    scanInterval: 20,
}


EntityJSEvents.addGoalSelectors("irons_spellbooks:citadel_keeper", event => {
    event.customGoal(
        'targetfix',
        0,
        mob => true, 
        mob => true,
        true,
        mob => { },
        mob => { },
        true,
        mob => {
                
            try {
                citadelKeeperTargetFix(mob)
            } catch (error) {
                console.log(error)
            }
        }
    )
})


let $Player = Java.loadClass('net.minecraft.world.entity.player.Player')

/**
 * @param {Internal.PathfinderMob} mob
 */
function citadelKeeperFindNearestTarget(mob) {
  
    const detectionRange = CITADEL_KEEPER_AGGRO_CONFIG.detectionRange
    
    let aabb = mob.boundingBox.inflate(detectionRange)
    let list = mob.level.getEntitiesOfClass($Player, aabb) 

    let best = null
    let bestDistSq = detectionRange * detectionRange

    for (let i = 0; i < list.length; i++) {
        let entity = list[i]

        if (!entity.isAlive() || entity.isCreative() || entity.isSpectator()) continue
        if (entity.uuid === mob.uuid || entity.isAlliedTo(mob.team)) continue

        let dx = mob.x - entity.x
        let dy = mob.y - entity.y
        let dz = mob.z - entity.z
        let distSq = dx * dx + dy * dy + dz * dz

        if (distSq < bestDistSq) {

            best = entity
            bestDistSq = distSq
            
        }
    }
    
    if (best) // console.log(best);
    return best
}


/**
 * @param {Internal.PathfinderMob} mob
 */
function citadelKeeperTargetFix(mob) {
    let {age, target} = mob
    
    if (!target) {
        if (age % CITADEL_KEEPER_AGGRO_CONFIG.scanInterval == 0) { 
            
            let chase = citadelKeeperFindNearestTarget(mob)
                
            if (chase != null) {

                mob.setAggressive(true)
                mob.setTarget(chase)
            }
        }
    }
}
