/* ========================================================================
=== Server Script ===

Credits: Liopyu (Discord ID: 696035922030100561)
YouTube: https://www.youtube.com/@liopyu
Original script: https://discord.com/channels/303440391124942858/1401612835150237818/1403165392645656738

Very Important Notes:
- Use "age" for Minecraft 1.20.1 
- Use "tickCount" for Minecraft 1.21.1
======================================================================== */

let $IronsSpellbooksUtils = Java.loadClass("io.redspace.ironsspellbooks.api.util.Utils")

// /summon cataclysm:koboleton ~ ~ ~ {HandItems:[{id:"spartanweaponry:netherite_greatsword",Count:1b},{}]}
// /tp @s 5000 100 5000
// /kubejs reload server_scripts
// /effect give @s minecraft:resistance infinite 255
// /kill @e[type=!minecraft:player]
// /data get entity @e[type=!minecraft:player,limit=1,sort=nearest]
// /kill @e[type=customnpcs:customnpc]
// /summon irons_spellbooks:lightning_strike


// CONFIG
const deathBossesImmuneDamageTypes = ["fall", "inFire", "lava", "lightningBolt", "onFire"]


const ofyddUndodgeableDamageTypes = ["magic",]


const SIOR_CONFIG = {
    GENERAL: {
        actionCooldownSeconds: 2,
        minDistToStayAway: 8,
        maxDistToStayAway: 12,
    },
    CHARGE: {
        chargeCooldownSeconds: 5,
        chargeStrength: 3,
        minDist: 0,
        maxDist: 50,
    },
    STOMP: {
        baseCooldownSeconds: 12,
        damage: 8,
        maxSteps: 20,
        minDist: 0,
        maxDist: 15,
    },
    SECOND_PHASE: {
        cooldownMultiplier: 0.5,
        movementSpeedMultiplier: 1.2
    }
}


const OFYDD_CONFIG = {
    GENERAL: {
        actionCooldownSeconds: 2,  
    },
    DODGE: {
        dodgeCooldownSeconds: 5,
        dodgeMaxDist: 3.5
    },
    LIGHTNING_LANCE: {
        cooldownSeconds: 12,
        velocity: 2.0,
        lead: 15.0,
        chargeTimeSeconds: 2.5,
        predictionLimit: 10.5,
        damage: 8,
        minDist: 0,
        maxDist: 50
    },
    LIGHTNING_STRIKE: {
        cooldownSeconds: 8,
        lead: 15.0,
        predictionLimit: 4.5,
        damage: 10,
        minDist: 0,
        maxDist: 50
    },
    SECOND_PHASE: {
        lanceBurstCount: 3,      
        ticksBetweenLances: 10,   
        movementSpeedMultiplier: 1.2,
        lifeStealBase: 0.25
    }
}


let $LivingEntity = Java.loadClass('net.minecraft.world.entity.LivingEntity')
let $UUID = Java.loadClass('java.util.UUID')
let $Vec3 = Java.loadClass("net.minecraft.world.phys.Vec3");


EntityJSEvents.addGoalSelectors("customnpcs:customnpc", event => {
    let entity = event.entity

    if (!entity.server) {
        // console.log("Server not ready for entity")
        return
    }

    if (event.entity.name.getString() !== "Siôr, The Executioner") return

    event.entity.server.scheduleInTicks(20, () => {
        event.customGoal(
            'bossgoaltest1',
            0,
            mob => true, // mob.target != null && mob.hasLineOfSight(mob.target),
            mob => true, // mob.target != null && mob.hasLineOfSight(mob.target),
            true,
            mob => { },
            mob => { },
            true,
            mob => {
                
                try {
                    siorGoal(mob)
                } catch (error) {
                    console.log(error)
                }
            }
        )
    })
})

/**
 * 
 * @param {Internal.PathfinderMob} mob
 * @returns 
 */

function siorGoal(mob) {
    let { age, target, server } = mob

    let data = mob.persistentData

    if (!data.siorBuff) {
        if (data.deathBossesLinked) {
            let UUID = mob.stringUuid
            let partnerUUID = server.persistentData.bossPartner && server.persistentData.bossPartner[UUID]
            
            if (partnerUUID && server.persistentData.bossDead[partnerUUID]) {
                console.log("Dead ally detected, time to buff");

                mob.level.spawnParticles("irons_spellbooks:electricity ", true, mob.x, mob.y + mob.eyeHeight * 0.5, mob.z, 0, 0, 0, 100, 0.25)
                mob.level.spawnParticles("irons_spellbooks:爆波 0 0.8 1 5.0", true, mob.x, mob.y, mob.z, 0, 0, 0, 10, 0)
                
                lightningBolt(mob)

                let maxHealth = mob.getMaxHealth()
                mob.setHealth(maxHealth)
                siorBuff(mob)

                data.siorBuff = true
            }
        }
    }

    if (!target || !mob.hasLineOfSight(target) || !target.eyePosition) return
    
    mob.lookAt("eyes", target.eyePosition)

    let dist = target.distanceToEntity(mob)
 
    if (dist >= SIOR_CONFIG.GENERAL.minDistToStayAway && dist <= SIOR_CONFIG.GENERAL.maxDistToStayAway) {
        mob.getNavigation().stop()
    }

    if (data.stompCooldown === undefined) {
        data.actionCooldown = 0
        data.stompCooldown = 0
        data.chargeCooldown = 0
    }
    
    if (age < data.actionCooldown) return
    
        // CHARGE
    if (dist >= SIOR_CONFIG.CHARGE.minDist && dist <= SIOR_CONFIG.CHARGE.maxDist && age >= data.chargeCooldown) {
        mob.level.spawnParticles("cloud", true, mob.x, mob.y + mob.eyeHeight * 0.3, mob.z, 0.5, 0.5, 0.5, 18, 0.1);
        let chargeStrength = SIOR_CONFIG.CHARGE.chargeStrength
        let lookAngle = mob.getLookAngle()
        mob.addMotion(lookAngle.x() * chargeStrength, lookAngle.y() * chargeStrength, lookAngle.z() * chargeStrength)
        data.actionCooldown = age + SIOR_CONFIG.GENERAL.actionCooldownSeconds * 20
        data.chargeCooldown = age + SIOR_CONFIG.CHARGE.chargeCooldownSeconds * 20
    }

    // STOMP
    if (dist >= SIOR_CONFIG.STOMP.minDist && dist <= SIOR_CONFIG.STOMP.maxDist && age >= data.stompCooldown) {
        
        siorStomp(mob, mob.x, mob.y, mob.z, SIOR_CONFIG.STOMP.damage, SIOR_CONFIG.STOMP.maxSteps);
        
        let stompBaseCooldown = 20 * SIOR_CONFIG.STOMP.baseCooldownSeconds
        if (data.siorBuff) {
            stompBaseCooldown *= SIOR_CONFIG.SECOND_PHASE.cooldownMultiplier
        }

        data.actionCooldown = age + SIOR_CONFIG.GENERAL.actionCooldownSeconds * 20
        data.stompCooldown = age + stompBaseCooldown
    }
}
    

function siorStomp(mob, x, y, z, damage, maxSteps) {
    let stompAOE = mob.level.createEntity("irons_spellbooks:stomp_aoe");
    stompAOE.setPosition(x, y, z);
    stompAOE.setOwner(mob)
    stompAOE.setRotation(mob.yaw, 0.0)
    stompAOE.mergeNbt({ 
        Damage: damage,
        maxSteps: maxSteps
    })
    stompAOE.spawn();
}


function siorBuff(mob) {
    
    let movementSpeed = mob.getAttribute("minecraft:generic.movement_speed")
    // console.log("trying to increase movespeed")
                    
    if (movementSpeed) {
        // console.log("successfully increased movespeed")
        movementSpeed.baseValue = movementSpeed.baseValue * SIOR_CONFIG.SECOND_PHASE.movementSpeedMultiplier
    }
}


EntityJSEvents.addGoalSelectors("customnpcs:customnpc", event => {
    let entity = event.entity
 
    if (!entity.server) {
        // console.log("Server not ready for entity")
        return
    }

    if (entity.name.getString() !== "Ofydd, The Judge") return
   
    entity.server.scheduleInTicks(20, () => {
        event.customGoal(
            'bossgoaltest2',
            0,
            mob => true, // mob.target != null && mob.hasLineOfSight(mob.target),
            mob => true, // mob.target != null && mob.hasLineOfSight(mob.target),
            true,
            mob => { },
            mob => { },
            true,
            mob => {
                
                try {
                    ofyddGoal(mob)
                } catch (error) {
                    console.log(error)
                }
            }
        )
    })
})

/**
 * 
 * @param {Internal.PathfinderMob} mob
 * @returns 
 */

function ofyddGoal(mob) {
    
    let { age, target, server } = mob

    let data = mob.persistentData

    if (!data.ofyddBuff) {
        if (data.deathBossesLinked) {
            let UUID = mob.stringUuid
            let partnerUUID = server.persistentData.bossPartner && server.persistentData.bossPartner[UUID]

            if (partnerUUID && server.persistentData.bossDead[partnerUUID]) {
                console.log("Dead ally detected, time to buff");

                mob.level.spawnParticles("irons_spellbooks:electricity ", true, mob.x, mob.y + mob.eyeHeight * 0.5, mob.z, 0, 0, 0, 100, 0.25)
                mob.level.spawnParticles("irons_spellbooks:爆波 0 0.8 1 5.0", true, mob.x, mob.y, mob.z, 0, 0, 0, 10, 0)
                
                lightningBolt(mob)

                let maxHealth = mob.getMaxHealth()
                mob.setHealth(maxHealth)
                ofyddBuff(mob)

                data.ofyddBuff = true
            }
        }
    }

    if (data.ofyddBuff) {
        mob.level.spawnParticles("irons_spellbooks:electricity", true, mob.x, mob.y + mob.eyeHeight * 1.0, mob.z, 0.1, 0.1, 0.1, 1, 0.05)
        mob.level.spawnParticles("irons_spellbooks:electricity", true, mob.x, mob.y + mob.eyeHeight * 0.5, mob.z, 0.1, 0.1, 0.1, 1, 0.05)
        mob.level.spawnParticles("irons_spellbooks:electricity", true, mob.x, mob.y + mob.eyeHeight * 0.1, mob.z, 0.1, 0.1, 0.1, 1, 0.05)
    }

    // should I remove the !mob.hasLineOfSight(target)?
    // Restores gravity when the target is lost
    if (!target || !mob.hasLineOfSight(target) || !target.eyePosition) {
        if (data.isChargingLance) {
            data.isChargingLance = false;
            mob.setNoGravity(false);
        }
        return
    }

    mob.lookAt("eyes", target.eyePosition)

    let dist = target.distanceToEntity(mob)

    if (data.ofyddSpellACooldown === undefined) {
        data.ofyddSpellACooldown = 100
        data.ofyddSpellBCooldown = 0
        data.dodgeCooldown = 0
        // data.ofyddStrikeCount = 0
        data.isChargingLance = false
        data.lanceTimer = 0
        data.actionCooldown = 0
    }

    if (data.ofyddStrikeCount === undefined) data.ofyddStrikeCount = 0

    let prevPos = data.prevPos ?? [target.x, target.z]
    let motionX = target.x - prevPos[0]
    let motionZ = target.z - prevPos[1]
    data.prevPos = [target.x, target.z]

    if (data.isChargingLance) {
        data.lanceTimer++
        mob.getNavigation().stop()

        if (data.lanceTimer % 5 === 0) {
            // mob.level.spawnParticles("irons_spellbooks:blastwave 0 0.8 1 1.0", true, mob.x, mob.y, mob.z, 0, 0, 0, 10, 0)
            mob.level.spawnParticles('irons_spellbooks:多媒體火花 0.0 1.0 1.0', true, mob.x, mob.y + mob.eyeHeight * 0.5, mob.z, 0.0, 0.0, 0.0, 1, 0.5)
            mob.level.spawnParticles("irons_spellbooks:electricity", true, mob.x, mob.y + mob.eyeHeight * 0.5, mob.z, 0.5, 0.5, 0.5, 3, 0.1)
            mob.level.spawnParticles("minecraft:large_smoke", true, mob.x, mob.y + mob.eyeHeight * 0.5, mob.z, 0.5, 0.5, 0.5, 3, 0.1)
            // mob.level.spawnParticles("cataclysm:ring_0 0 0 0.0 0.8 1.0 1.0 20 30 false", true, mob.x, mob.y + mob.eyeHeight, mob.z, 0.0, 0.0, 0.0, 1, 0.0)
        }
        
        if (data.lanceTimer >= OFYDD_CONFIG.LIGHTNING_LANCE.chargeTimeSeconds * 20) {
           
            if (data.lanceShotsFired === undefined) data.lanceShotsFired = 0
            let totalShots = data.ofyddBuff ? OFYDD_CONFIG.SECOND_PHASE.lanceBurstCount : 1
            let burstDelay = OFYDD_CONFIG.SECOND_PHASE.ticksBetweenLances
            
            if ((data.lanceTimer - OFYDD_CONFIG.LIGHTNING_LANCE.chargeTimeSeconds * 20) % burstDelay === 0) {
                
                let predictedPos;

                if (data.lanceShotsFired + 1 === totalShots && data.ofyddBuff) {
                    predictedPos = new $Vec3(
                        target.x,
                        target.y + (target.eyeHeight ?? 1.6),
                        target.z
                    )
                } else {
                    let travelTime = dist / OFYDD_CONFIG.LIGHTNING_LANCE.velocity
                    let lancePrevLimit = OFYDD_CONFIG.LIGHTNING_STRIKE.predictionLimit
                    let lancePrevX = ofyddClampPrediction(motionX, lancePrevLimit)
                    let lancePrevZ = ofyddClampPrediction(motionZ, lancePrevLimit)
                    predictedPos = new $Vec3(
                        target.x + lancePrevX * travelTime,
                        target.y + (target.eyeHeight ?? 1.6), 
                        target.z + lancePrevZ * travelTime
                    )
                }
                
                mob.lookAt("eyes", predictedPos)

                ofyddLightningLance(mob, OFYDD_CONFIG.LIGHTNING_LANCE.velocity, OFYDD_CONFIG.LIGHTNING_LANCE.damage)
                data.lanceShotsFired++
            }

            if (data.lanceShotsFired >= totalShots) {
                data.ofyddSpellACooldown = age + 20 * OFYDD_CONFIG.LIGHTNING_LANCE.cooldownSeconds
                data.actionCooldown = age + 20 * OFYDD_CONFIG.GENERAL.actionCooldownSeconds
                
                data.isChargingLance = false
                data.lanceTimer = 0
                data.lanceShotsFired = 0
                mob.setNoGravity(false)
            }
        }
        return
    }

    if (age < data.actionCooldown) return;

    if (!data.isChargingLance && dist >= OFYDD_CONFIG.LIGHTNING_LANCE.minDist && 
        dist < OFYDD_CONFIG.LIGHTNING_LANCE.maxDist && age >= data.ofyddSpellACooldown &&
        data.ofyddStrikeCount === 0) {
        mob.potionEffects.add("levitation", 20, 1, false, true)
        mob.setNoGravity(true)

        lightningBolt(mob)

        data.isChargingLance = true;
        data.lanceTimer = 0
        return
    }

    if (dist >= OFYDD_CONFIG.LIGHTNING_STRIKE.minDist && 
        dist <= OFYDD_CONFIG.LIGHTNING_STRIKE.maxDist && age >= data.ofyddSpellBCooldown) {

        let strikeLead = OFYDD_CONFIG.LIGHTNING_STRIKE.lead
        let strikePrevLimit = OFYDD_CONFIG.LIGHTNING_STRIKE.predictionLimit
        let strikePrevX = ofyddClampPrediction(motionX * strikeLead, strikePrevLimit)
        let strikePrevZ = ofyddClampPrediction(motionZ * strikeLead, strikePrevLimit)
        let strikeDmg = OFYDD_CONFIG.LIGHTNING_STRIKE.damage

        if (data.ofyddStrikeCount === undefined) data.ofyddStrikeCount = 0
        if (data.ofyddStrikeCount >= 5) data.ofyddStrikeCount = 0;

        data.ofyddStrikeCount++
      
        let fx = target.x + strikePrevX // target.x + 4
        let fy = target.y; // keep original Y position
        let fz = target.z + strikePrevZ

        if (!data.ofyddBuff) {
            if (data.ofyddStrikeCount === 4) {
                // 3x1
                castLightningPattern(mob, fx, fy, fz, [0, 5.5, -5.5], [0], strikeDmg)
            } else if (data.ofyddStrikeCount === 5) {
                // 1x3
                castLightningPattern(mob, fx, fy, fz, [0], [0, 5.5, -5.5], strikeDmg)
                data.ofyddStrikeCount = 0
            } else {
                // 1x1
                castLightningPattern(mob, fx, fy, fz, [0], [0], strikeDmg)
            }
        } else {
            
            if (data.ofyddStrikeCount === 4) {
                // cross pattern
                castLightningPattern(mob, fx, fy, fz, [0, 5.5, -5.5], [0, 5.5, -5.5], strikeDmg, false)
            } else if (data.ofyddStrikeCount === 5) {
                // 3x3 pattern
                castLightningPattern(mob, fx, fy, fz, [0, 5.5, -5.5], [0, 5.5, -5.5], strikeDmg, true)
                data.ofyddStrikeCount = 0
            } else {
                // 1x1
                castLightningPattern(mob,fx, fy, fz, [0], [0], strikeDmg)
            }
        }

        data.ofyddSpellBCooldown = age + 20 * OFYDD_CONFIG.LIGHTNING_STRIKE.cooldownSeconds
        data.actionCooldown = age + 20 * OFYDD_CONFIG.GENERAL.actionCooldownSeconds
    }
}

/**
 * 
 * @param {Internal.PathfinderMob} mob
 * @returns 
 */
function ofyddLightningLance(mob, velocity, damage) {
    let lookAngle = mob.getLookAngle()
    let LightningLance = mob.level.createEntity("irons_spellbooks:lightning_lance");
    LightningLance.setPosition(mob.x, mob.y + mob.eyeHeight * 1.1, mob.z);
    LightningLance.setOwner(mob);
    LightningLance.setMotion(lookAngle.x() * velocity, lookAngle.y() * velocity, lookAngle.z() * velocity);
    LightningLance.mergeNbt({ Damage: damage });
    LightningLance.setNoGravity(true);
    LightningLance.spawn();
}


function ofyddClampPrediction(val, limit) {
    return Math.max(-limit, Math.min(limit, val));
}


function ofyddRadialOffset(limit, angleRad) {
    return [
        Math.cos(angleRad) * limit,
        Math.sin(angleRad) * limit
    ]
}


function ofyddLightningStrike(mob, x, y, z, damage) {
    let lightningStrike = mob.level.createEntity("irons_spellbooks:lightning_strike");
    lightningStrike.setPosition(x, y, z);
    lightningStrike.setOwner(mob);
    lightningStrike.mergeNbt({ Damage: damage });
    lightningStrike.spawn();
}


function castLightningPattern(mob, baseX, baseY, baseZ, offsetsX, offsetsZ, damage, allowDiagonals) {
    if (allowDiagonals === undefined) allowDiagonals = true;

    let yaw = mob.yaw * 3.141592653589793 / 180;

    for (let ox of offsetsX) {
        for (let oz of offsetsZ) {

            if (!allowDiagonals && ox !== 0 && oz !== 0) continue;

            let rx = ox * Math.cos(yaw) - oz * Math.sin(yaw);
            let rz = ox * Math.sin(yaw) + oz * Math.cos(yaw);

            ofyddLightningStrike( mob, baseX + rx, baseY, baseZ + rz, damage
            )
        }
    }
}


function ofyddBuff(mob) {
    let movementSpeed = mob.getAttribute("minecraft:generic.movement_speed")
    let lifeSteal = mob.getAttribute("attributeslib:life_steal")
    // console.log("trying to increase movespeed")
    // console.log("Trying to add life steal");
                    
    if (movementSpeed) {
        // console.log("successfully increased movespeed");
        movementSpeed.baseValue =  movementSpeed.baseValue * OFYDD_CONFIG.SECOND_PHASE.movementSpeedMultiplier
    }

    if (lifeSteal) {
        // console.log("Life steal successfully add");
        lifeSteal.baseValue = OFYDD_CONFIG.SECOND_PHASE.lifeStealBase
    }
}


function lightningBolt(mob) {
    let lightningBolt = mob.level.createEntity("minecraft:lightning_bolt")
    lightningBolt.setPosition(mob.x, mob.y, mob.z)
    lightningBolt.spawn()
}


ServerEvents.unloaded(e => {
    let {server} = e
    // console.log("removing server.persistentData.cloneList")
    delete server.persistentData.cloneList
})


EntityEvents.death("customnpcs:customnpc", e => {
    let { entity, server } = e

    // console.log("death event test")
    
    let data = server.persistentData
    if (!data.cloneList) return

    let uuid = entity.stringUUID
    
   // Convert ListTag => JS Array
    let list = []

    for (let i = 0; i < data.cloneList.size(); i++) {
        let entry = data.cloneList.get(i)
        if (entry.uuid !== uuid) {
            list.push(entry)
        }
    }

    // Save back
    data.cloneList = list
})


EntityEvents.death("customnpcs:customnpc", e => {
    let { entity, server } = e

    if (!entity.persistentData.deathBossesLinked) return

    let uuid = entity.stringUuid
    let partnerUUID = server.persistentData.bossPartner[uuid]
    if (!partnerUUID) return // no partner

    // mark this death
    server.persistentData.bossDead[uuid] = true

    // check if the partner had already died
    if (server.persistentData.bossDead[partnerUUID]) {
        // second death => remove the bond
        delete server.persistentData.bossPartner[uuid]
        delete server.persistentData.bossPartner[partnerUUID]
        delete server.persistentData.bossDead[uuid]
        delete server.persistentData.bossDead[partnerUUID]
        console.log("second death, partner eliminated")
    } else {
        console.log("first death, partner still alive")
    }
})

EntityEvents.spawned("customnpcs:customnpc", e => {
    let { entity, level, server } = e
    
    if (entity.name.getString() !== "Ofydd, The Judge" && entity.name.getString() !== "Siôr, The Executioner") return

    let data = server.persistentData
    if (!data.cloneList) data.cloneList = []

    let list = data.cloneList

    // Check if UUID is already in the list
    let exists = false
    for (let i = 0; i < list.size(); i++) {
        if (list.get(i).uuid === entity.stringUUID) {
            exists = true
            console.log("UUID already exists in cloneList")
            break
        }
    }

    if (!exists) {
        list.push({
            uuid: entity.stringUUID,
            dimension: entity.level.dimension.toString()
        })
    }

    if (entity.name.getString() !== "Ofydd, The Judge") return

    if (!entity.persistentData.deathBossesLinked) {
        attemptLink(entity, level, server, [0, 3, 7])
    } else {
       console.log("entity already linked")
    }
})

function attemptLink(entity, level, server, delays) {
    let area = entity.boundingBox.inflate(7)

    for (let ticks of delays) {
        entity.server.scheduleInTicks(ticks, () => {
            if (entity.persistentData.deathBossesLinked) return console.log("entity already linked");

            let target = level.getEntitiesOfClass($LivingEntity, area)
                            .find(target => target.type === "customnpcs:customnpc" && 
                                !target.persistentData.deathBossesLinked &&
                                target.name.getString() === "Siôr, The Executioner")

            if (target) {
                linkEntities(entity, target, server)
            }
        })
    }
}


function linkEntities(entity, target, server) {
    console.log("entity found, starting bond")
    entity.persistentData.deathBossesLinked = true
    target.persistentData.deathBossesLinked = true
    if (!server.persistentData.bossPartner) server.persistentData.bossPartner = {}
    if (!server.persistentData.bossDead) server.persistentData.bossDead = {}

    server.persistentData.bossPartner[entity.stringUuid] = target.stringUuid
    server.persistentData.bossPartner[target.stringUuid] = entity.stringUuid

    server.persistentData.bossDead[entity.stringUuid] = false
    server.persistentData.bossDead[target.stringUuid] = false
}


ServerEvents.tick(event => {
    let server = event.server
    
    if (server.tickCount % 40 !== 0) return // 2 seconds

    // console.log("server tick test")
    
    let data = server.persistentData
    if (!data.cloneList) return

    // Convert ListTag => JS Array
    let list = []
    for (let i = 0; i < data.cloneList.size(); i++) {
        list.push(data.cloneList.get(i))
    }
    
    // console.log(`list: ${list}`)
    if (!list) return

    for (let i = 0; i < list.length; i++) {
        let entry = list[i]

        let level = server.getLevel(entry.dimension)
        if (!level) continue

        let entity = level.getEntity(entry.uuid)
        if (!entity || !entity.isAlive()) {
            // console.log("entity not found")
            list.splice(i--, 1)
            continue
        }

        // console.log("Entity Goals")
        let hasCustomGoal = false
        entity.goalSelector.availableGoals.forEach(g => {
            let goal = g.getGoal()
            let goalClassName = goal.getClass().getName()
            // console.log("- " + goalClassName)

            if (goalClassName === "net.liopyu.entityjs.util.ai.CustomGoal") {
                hasCustomGoal = true
            }
        })

        // remove and respawn the entity if the customgoal is missing
        if (!hasCustomGoal) {
            server.scheduleInTicks(2, () => {
                console.log("entity without CustomGoal detected, respawning...")

                let nbt = entity.nbt
                let copyEntity = level.createEntity("customnpcs:customnpc")
                copyEntity.setNbt(nbt)

                // reset cooldowns
                copyEntity.persistentData.actionCooldown = 0
                copyEntity.persistentData.stompCooldown = 0
                copyEntity.persistentData.chargeCooldown = 0
                copyEntity.persistentData.ofyddSpellACooldown = 100
                copyEntity.persistentData.ofyddSpellBCooldown = 0
                copyEntity.persistentData.dodgeCooldown = 0
                if (entity.persistentData.ofyddBuff) {
                    ofyddBuff(copyEntity)
                }
                if (entity.persistentData.siorBuff) {
                    siorBuff(copyEntity)
                }
                entity.discard()
                level.addFreshEntity(copyEntity)
            })
        }
    }

    // Save back
    data.cloneList = list
})


EntityEvents.hurt("customnpcs:customnpc", e => {

   let { entity: mob, source } = e

    if (mob.name.getString() !== "Ofydd, The Judge" && mob.name.getString() !== "Siôr, The Executioner") return
    
    if (deathBossesImmuneDamageTypes.includes(source.type().msgId())) {
        return e.cancel()
    }

    if (mob.name.getString() !== "Ofydd, The Judge") return

    if (mob.persistentData.isChargingLance) return
    
    if (ofyddUndodgeableDamageTypes.includes(source.type().msgId())) return

    let data = mob.persistentData
    if (data.dodgeCooldown === undefined) {
        data.dodgeCooldown = 0;
    }

    console.log(data.dodgeCooldown);
    console.log(mob.age);
    
    if (mob.age >= data.dodgeCooldown) {
        let {x, y, z, eyeHeight, level, server} = mob

        data.dodgeCooldown = mob.age + OFYDD_CONFIG.DODGE.dodgeCooldownSeconds * 20

        level.spawnParticles("irons_spellbooks:electricity ", true, mob.x, mob.y + mob.eyeHeight * 0.5, mob.z, 0, 0, 0, 50, 0.25)

        for (let h of [1.05, 0.6, 0.15]) {
            level.spawnParticles(`irons_spellbooks:爆波 0.0 0.8 1.0 1.0`,true, x, y + eyeHeight * h, z, 0, 0, 0, 5, 0);
        }
        
        let hitResult = $IronsSpellbooksUtils.raycastForEntity(level, mob, OFYDD_CONFIG.DODGE.dodgeMaxDist, true, 0.15)
        let hitPos = hitResult.getLocation()
        let oddX = mob.x
        let oddY = mob.y + eyeHeight * 0.5
        let oddZ = mob.z

        server.scheduleInTicks(1, () => {

            mob.teleportTo(hitPos.x(), hitPos.y(), hitPos.z())
            level.spawnParticles(`irons_spellbooks:zap ${oddX} ${oddY} ${oddZ}`, true, mob.x, mob.y + mob.eyeHeight * 0.5, mob.z, 0, 0, 0, 3, 0.0)
            level.spawnParticles("irons_spellbooks:electricity", true, mob.x, mob.y + mob.eyeHeight * 0.5, mob.z, 0, 0, 0, 50, 0.25)

            for (let h of [1.05, 0.6, 0.15]) {
                level.spawnParticles(`irons_spellbooks:blastwave 0.0 0.8 1.0 1.0`,true, mob.x, mob.y + eyeHeight * h, mob.z, 0, 0, 0, 5, 0);
            }
        })
     
        return e.cancel()
    }
})

/*
EntityEvents.hurt("spider", e => {
   let { entity, source } = e

    
    console.log(source.type().msgId());
    if (source.type().msgId() !== "npc") return

    console.log(source.causingEntity.name.getString());
    
    // if (entity.name.getString() !== "Ofydd, The Judge" && entity.name.getString() !== "Siôr, The Executioner") return
})
*/