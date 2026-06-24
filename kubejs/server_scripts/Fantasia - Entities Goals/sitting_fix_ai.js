const SittingFixGoalConfig = {
    standardAI: {
        updateInterval: 20,

        mobs: [
            "minecraft:creeper",
            "minecraft:spider",
            "minecraft:cave_spider",
            "minecraft:slime",
            "minecraft:magma_cube",
            "minecraft:endermite",
            "minecraft:enderman",
        ]
        .concat(
            draugrFaction, 
            koboletonFaction, 
            illagerFaction, 
            undeadFaction
        )
    },

    advancedAI: {        
        updateInterval: 20,
        minTimeInChairSec: 30, 
        maxTimeInChairSec: 60,
        alertUpdateInterval: 20,
        sitMemoryDurationSec: 20, 
        chairTimeMemoryFactor: 0.2,
        
        mobs: [
            "customnpcs:customnpc"
        ]
        .concat(
            piglinFaction, 
            villagerFaction,
            animalFaction
        ),
        debugMode: false
    }
}


SittingFixGoalConfig.standardAI.mobs.forEach(mobId => {
    EntityJSEvents.addGoalSelectors(mobId, event => {
        event.customGoal(
            "sitting_fix_goal",
            0, 
            mob => true, // mob.target != null,
            mob => true, // mob.target != null,
            true,
            mob => { },
            mob => { },
            true,
            mob => {
                try {
                    sittingFixStandardAIGoal(mob)
                } catch (error) {
                    console.log(error)
                }
            }
        )
    })
})


/**
 * @param {Internal.PathfinderMob} mob
 */
function sittingFixStandardAIGoal(mob) {
    const config = SittingFixGoalConfig.standardAI

    if (mob.level.time % config.updateInterval != 0) return

    ejectMobFromSeat(mob)
}

// Disabling goal due to suspected memory leak!!!
/*SittingFixGoalConfig.advancedAI.mobs.forEach(mobId => {
    

    EntityJSEvents.addGoalSelectors(mobId, event => {
        event.customGoal(
            "sitting_fix_goal",
            0, 
            mob => true, // mob.target != null,
            mob => true, // mob.target != null,
            true,
            mob => { },
            mob => { },
            true,
            mob => {
                try {
                    sittingFixAdvancedAIGoal(mob)
                } catch (error) {
                    console.log(error)
                }
            }
        )
    })
})*/


/**
 * @param {Internal.PathfinderMob} mob
 */
function sittingFixAdvancedAIGoal(mob) {
    const config = SittingFixGoalConfig.advancedAI;

    if (mob.level.time % config.alertUpdateInterval === 0) {
      
        const hasTarget = mob.target != null && mob.target.isAlive();
        const isPanicking = (typeof mob.getVillagerBrain === 'function') && mob.getVillagerBrain().isPanicking();
        const isAlerted = mob.lastHurtByMob != null && mob.lastHurtByMob.isAlive();

        /*
        if (config.debugMode && (mob.type === "mca:female_villager" || mob.type === "mca:male_villager")) {
            console.log(hasTarget);
            console.log(isPanicking)
            console.log(isAlerted);
        }
        */

        if (hasTarget || isPanicking || isAlerted) {
            
            ejectMobFromSeat(mob);
            mob.persistentData.lastExitTick = mob.level.time; 
            delete mob.persistentData.leaveSeatTick; 
            return;
        }
    }
    
    if (mob.level.time % config.updateInterval === 0) {

        const vehicle = mob.getVehicle()

        if (vehicle && vehicle.type.toString() === "valhelsia_furniture:seat") {

            if (!mob.persistentData.leaveSeatTick) {
                const minTicks = config.minTimeInChairSec * 20;
                const maxTicks = config.maxTimeInChairSec * 20;
                let duration = Math.floor(Math.random() * (maxTicks - minTicks + 1)) + minTicks;

                if (mob.persistentData.lastExitTick) {
                    const ticksSinceLastExit = mob.level.time - mob.persistentData.lastExitTick;
                    const thresholdTicks = config.sitMemoryDurationSec * 20;
                    
                    if (ticksSinceLastExit < thresholdTicks) {
                        duration = Math.floor(duration * config.chairTimeMemoryFactor);
                        duration = Math.max(duration, 80)
                    }
                }
                
                mob.persistentData.leaveSeatTick = mob.level.time + duration;
            }

            if (config.debugMode) {
                // console.log(mob.level.time)
                // console.log(mob.persistentData.leaveSeatTick)
                const remainingTicks = mob.persistentData.leaveSeatTick - mob.level.time
                const remainingSeconds = Math.max(0, remainingTicks / 20);
                console.log(`time remaining: ${remainingSeconds.toFixed(1)}s`)
            }

            if (mob.level.time >= mob.persistentData.leaveSeatTick) {
                ejectMobFromSeat(mob);
                mob.persistentData.lastExitTick = mob.level.time;
                delete mob.persistentData.leaveSeatTick;
            }
        } else {  
            if (mob.persistentData.leaveSeatTick) {
                mob.persistentData.lastExitTick = mob.level.time;
                delete mob.persistentData.leaveSeatTick;
            }
        }
    }
}

/**
 * @param {Internal.PathfinderMob} mob
 */
function ejectMobFromSeat(mob) {
    const vehicle = mob.getVehicle()

    /*
    if (vehicle) {
        console.log(vehicle.type.toString())    
    }
    */

    if (vehicle && vehicle.type.toString() === "valhelsia_furniture:seat") {
        mob.unRide();
    }
}