const EnhancedGhastConfig = {
    ai: {
        detectionRange: 32,    
        disengageRange: 42,      
        scanInterval: 20,      
        followDistance: 30     
    },
   
    movement: {
        speed: 0.05,           
        verticalOffset: 2     
    },
    fireball: {
        damage: 12,
        explosionRadius: 5.0,
        velocity: 3,
    },
   
    tears: {
        cooldownSec: 10,
        chance: 1.0
    },
    fireballParry: {
        reflectedVelocity: 3,
        ghastBonusDamage: 12
    },
}

global.EnhancedGhastConfig = EnhancedGhastConfig

EntityEvents.spawned("minecraft:fireball", e => {
    const { entity, level } = e;
    const owner = entity.owner;

    if (!owner || owner.type.toString() !== "minecraft:ghast") return;
    
    owner.persistentData.ghastShotFireball = true
    owner.persistentData.fireballPos = {
        x: entity.x,
        y: entity.y,
        z: entity.z,
    }

    const target = owner.target

    if (target) {
        // ghastShotFireball(owner, target, entity, level) 
    }

    /*if (owner.persistentData.angryGhast) {
        
        owner.server.scheduleInTicks(5, () => {
            ghastShotFireball(owner, target, entity, level) 
        })

        owner.server.scheduleInTicks(10, () => {
            ghastShotFireball(owner, target, entity, level) 
        })
       
        owner.persistentData.angryGhast = false
    }*/

    e.cancel()
})

/**
 * @param {Internal.PathfinderMob} ghast
 * @param {Internal.LivingEntity} target
 * @param {Internal.Level} level
 * @returns 
 */
function ghastShotFireball(ghast, target, level) {
   
    const data = ghast.persistentData
    const prevPos = data.prevPos ? data.prevPos : [target.x, target.z]

    const fireballPos = data.fireballPos
    // console.log(data)
    
    const motionX = target.x - prevPos[0];
    const motionZ = target.z - prevPos[1];

    const velocity = EnhancedGhastConfig.fireball.velocity
    const dx = target.x - fireballPos.x;
    const dy = (target.y + target.eyeHeight / 2) - fireballPos.y;
    const dz = target.z - fireballPos.z;
    const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);

    const travelTime = distance / velocity;
    
    const limit = 0.5; 
    const mx = Math.max(Math.min(motionX, limit), -limit);
    const mz = Math.max(Math.min(motionZ, limit), -limit);

    const predictedX = target.x + (mx * travelTime);
    const predictedZ = target.z + (mz * travelTime);
    const predictedY = target.y + (target.eyeHeight / 2)

    // console.log(target.x , target.y , target.z)
    // console.log(predictedX , predictedY, predictedZ);
    
    const fDx = predictedX - fireballPos.x;
    const fDy = predictedY - fireballPos.y;
    const fDz = predictedZ - fireballPos.z;
    const fDist = Math.sqrt(fDx * fDx + fDy * fDy + fDz * fDz);

    const projectile = level.createEntity("irons_spellbooks:fireball");
    projectile.setPosition(fireballPos.x, fireballPos.y, fireballPos.z);
    
    if (fDist > 0) {
        projectile.setMotion((fDx / fDist) * velocity, (fDy / fDist) * velocity, (fDz / fDist) * velocity);
    }

    projectile.setOwner(ghast);
    projectile.setNoGravity(true);
    projectile.mergeNbt({ 
        Damage: EnhancedGhastConfig.fireball.damage, 
        ExplosionRadius: EnhancedGhastConfig.fireball.explosionRadius
    });

    projectile.persistentData.isConfigured = true
    level.addFreshEntity(projectile);
}

EntityJSEvents.addGoalSelectors("minecraft:ghast", event => {

    event.customGoal(
        'enhancedghast',
        0,
        mob => true, //&& mob.hasLineOfSight(mob.target),
        mob => true, //&& mob.hasLineOfSight(mob.target),
        true,
        mob => { },
        mob => { },
        true,
        mob => {
                
            try {
                enhancedGhast(mob)
            } catch (error) {
                console.log(error)
            }
        }
    )
})


let $LivingEntity = Java.loadClass('net.minecraft.world.entity.LivingEntity')
let $Player = Java.loadClass('net.minecraft.world.entity.player.Player')


/**
 * @param {Internal.PathfinderMob} mob
 * @returns 
 */
function ghastFindNearestTarget(mob) {
  
    const detectionRange = EnhancedGhastConfig.ai.detectionRange

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
    
    return best
}

/**
 * @param {Internal.PathfinderMob} mob
 * @returns 
 */
function enhancedGhast(mob) {
    
    let { age, target } = mob

    let data = mob.persistentData

    if (data.ghastTearsCooldown === undefined) {
        data.ghastShotFireball = false
        data.ghastTearsCooldown = 20 //180
    }
    
    if (age > data.ghastTearsCooldown) {

        if (Math.random() > -1) {
            let ghastTears = mob.level.createEntity("item");
            ghastTears.item = Item.of("minecraft:ghast_tear");
            ghastTears.setPosition(mob.x, mob.y + 1, mob.z);
            mob.level.addFreshEntity(ghastTears)
        }
        data.ghastTearsCooldown = age + EnhancedGhastConfig.tears.cooldownSec * 15
    }
    
    if (target !== null) {
        let invalid = !target.isAlive() || 
                    target.isCreative() || 
                    target.isSpectator() || 
                    mob.distanceToEntity(target) > EnhancedGhastConfig.ai.disengageRange

        if (invalid) {
            mob.setTarget(null);
            mob.setAggressive(false);
            target = null
        }
    }

    if (!target) {
        if (age % EnhancedGhastConfig.ai.scanInterval == 0) { 
            let chase = ghastFindNearestTarget(mob)
                
            if (chase != null) {
                
                // console.log(chase);
                mob.setAggressive(true)
                mob.setTarget(chase)
                target = chase
            }
        }
        if (!target) return
    }

    // if (!target || !mob.hasLineOfSight(target) || !target.eyePosition) return
    
    // if (!mob.hasLineOfSight(target) || !target.eyePosition) return

    // if (!target.eyePosition || !target.isAlive()) return

    if (!target.eyePosition) return

    if (data.ghastShotFireball) {
        ghastShotFireball(mob, target, mob.level)
        data.ghastShotFireball = false
    }

    let dist = mob.distanceToEntity(target)

    if (dist > EnhancedGhastConfig.ai.followDistance) { 
       
        let dx = target.x - mob.x;
        let verticalOffset = EnhancedGhastConfig.movement.verticalOffset
        let dy = (target.y + verticalOffset) - mob.y; 
        let dz = target.z - mob.z;

        if (dist > 0.1) {
            let speed = 0.05 

            let moveX = (dx / dist) * speed;
            let moveY = (dy / dist) * speed;
            let moveZ = (dz / dist) * speed;

            mob.addMotion(moveX, moveY, moveZ);
        }
    }

    data.prevPos = [target.x, target.z]
}