/* ==========================================================================================
=== Startup Script ===

Credits:
-----------------
Thank you very much, @squoshi, for your very big help in identifying bugs and 
inconsistencies in my code
GitHub: https://github.com/squoshi
CurseForge: https://www.curseforge.com/members/squoshi/projects

Important Notes:
-----------------
Changing the cooldown duration **does not affect cooldowns that are already active**.
For example, if a player currently has 180 seconds remaining on a cooldown,
and you change the cooldown to 40 seconds, the player will still have to wait 
the full 180 seconds.

========================================================================================== */


let $ForgeRegistries = Java.loadClass("net.minecraftforge.registries.ForgeRegistries");
let	$MobEffectInstance = Java.loadClass("net.minecraft.world.effect.MobEffectInstance")
let	$ResourceLocation = Java.loadClass("net.minecraft.resources.ResourceLocation")


StartupEvents.registry("minecraft:item", e => {

    const config = specialItemsConfig.teleportGem
    
    if (!config.enabled) return

    e.create("teleport_gem", "basic")
        /*
        .barWidth(stack => {
            if (!Platform.isClientEnvironment()) return 14;
            const player = Client.player;
            if (!player) return 14;

            const remainingCD = player.persistentData[global.TG_COOLDOWN_KEY] || 0;
            const maxDuration = player.persistentData[global.TG_MAX_KEY] || global.BaseCDTicks;

            if (remainingCD <= 0) return 14; 

            return Math.round(14 - (remainingCD * 14/ maxDuration));
        })
        .barColor(_itemstack => Color.rgba(247, 24, 255, 1))
        */
        .displayName('孤寂結晶')
        .unstackable()
        .useAnimation("spear") // I need to change it to "none"
        .useDuration((item, livingEntity) => 7200)
        .use((level, player, hand) => {
            // Reset cooldown for creative players
            if (player.isCreative()) {
                if (!player.persistentData.playerCooldowns)
                    player.persistentData.playerCooldowns = {};

                player.persistentData.playerCooldowns.teleportGem = 0;
                
                player.sendData("playerCooldowns", {
                    cooldowns: player.persistentData.playerCooldowns,
                })
            }

            if (player.hurtTime > 0) {
                return false;
            }

            if (!teleportGemFunction.canUseTeleportGem(player)) {
                return false;
            }

            if (!config.allowedDimensions.includes(level.dimension.toString()) &&
                level.dimension.toString() !== config.hallofDecimus.dimension) {
                player.setStatusMessage(
                    Text.translate("message.kubejs.teleport_gem.dimension_fail").red()
                );
                return false;
            }

            return true;
        })
        .finishUsing((item, level, livingEntity) => {
            return item
        });
});

const teleportGemFunction = {
    canUseTeleportGem(player) {
        const data = player.persistentData;
        
        if (!data.playerCooldowns) return true;

        const remainingCD = data.playerCooldowns.teleportGem;

        if (remainingCD > 0) {
            return false;
        } 
        
        return true;
    },

    setTeleportGemCooldown(player, type) {
        let cooldownTime = (type === "back") 
            ? specialItemsConfig.teleportGem.cooldownToBack 
            : specialItemsConfig.teleportGem.cooldownToHall

       
        if (!player.persistentData.playerCooldowns) {
            player.persistentData.playerCooldowns = {};
        }

        player.persistentData.playerCooldowns.teleportGem = cooldownTime;

        player.sendData("playerCooldowns", {
            cooldowns: player.persistentData.playerCooldowns,
        })
    }
}


/**
 * @param {Internal.ServerPlayer} player
 * @param {Internal.ItemStack} item
 * @param {number} duration
 */
global.onTeleportGemUseTick = (player, item, duration) => {
   
    if (player.hurtTime > 0) return player.releaseUsingItem()

    // let dimension = player.level.dimension

    /*if (!specialItemsConfig.teleportGem.allowedDimensions.includes(dimension.toString()) &&
        dimension.toString() !== specialItemsConfig.teleportGem.hallofDecimus.dimension) {
        return
    }*/

    const useTicks = item.useDuration - duration;

    if (useTicks >= specialItemsConfig.teleportGem.useDurationToBack) {
        let lastPos =  player.persistentData.teleportGemLastPos;
        if (lastPos) {
            player.unRide()
            let {x: currentX, y: currentY, z: currentZ, eyeHeight: eyeH, level: currentLevel, server} = player

            let {dimension: targetDimension, x: targetX, y: targetY, z: targetZ} = lastPos

            if (!targetDimension || !targetX || !targetY || !targetZ) {
                console.log("lastPos error");
                delete player.persistentData.teleportGemLastPos;
                player.releaseUsingItem()
                return
            }

            let targetLevel = server.getLevel(targetDimension)

            currentLevel.playSound(null, currentX, currentY, currentZ, "entity.enderman.teleport", "players", 2, 1 );
            currentLevel.spawnParticles('minecraft:cloud', true, currentX, currentY + eyeH * 0.6, currentZ, 0.1, 0.1, 0.1, 30, 0.1);
            currentLevel.spawnParticles('minecraft:end_rod', true, currentX, currentY + eyeH * 0.6, currentZ, 0.0, 0.0, 0.0, 30, 0.1);
            

            for (const h of [1.05, 0.6, 0.15]) {
                currentLevel.spawnParticles(`irons_spellbooks:爆波 1 1 1 1.2`,
                    true, currentX, currentY + eyeH * h, currentZ, 0, 0, 0, 5, 0
                );
            }

            // Teleport back
            player.teleportTo(targetDimension, targetX, targetY, targetZ, player.yaw, player.pitch)
            player.releaseUsingItem(); 

            // Remove teleportGemLastPos
            delete player.persistentData.teleportGemLastPos;

            if (!player.isCreative()) {
                teleportGemFunction.setTeleportGemCooldown(player, "back")
            }
            
            server.scheduleInTicks(3, () => {
                
                targetLevel.playSound(null, targetX, targetY, targetZ, "entity.enderman.teleport", "players", 2, 1 );

                targetLevel.spawnParticles('minecraft:cloud', true, targetX, targetY + eyeH * 0.6, targetZ, 0.1, 0.1, 0.1, 30, 0.1);
                targetLevel.spawnParticles('minecraft:end_rod', true, targetX, targetY + eyeH * 0.6, targetZ, 0.0, 0.0, 0.0, 30, 0.1);

                for (const h of [1.05, 0.6, 0.15]) {
                    targetLevel.spawnParticles(`irons_spellbooks:blastwave 1 1 1 1.2`,
                        true, targetX, targetY + eyeH * h, targetZ, 0, 0, 0, 5, 0
                    );
                }    
            });

            return; 
        }  
    }

    // Teleport to Hall
    // 50%
    if (useTicks === specialItemsConfig.teleportGem.useDurationToHall * 0.5) {
        if (!player.persistentData.teleportGemLastPos) {
            let {x: currentX, y: currentY, z: currentZ, eyeHeight: eyeH, level: currentLevel, server} = player

            let {dimension: targetDimension, x: targetX, y: targetY, z: targetZ} = specialItemsConfig.teleportGem.hallofDecimus

            let targetLevel = server.getLevel(targetDimension)

            currentLevel.spawnParticles('minecraft:cloud', true, currentX, currentY + eyeH * 0.6, currentZ, 0.1, 0.1, 0.1, 30, 0.1);
            currentLevel.spawnParticles('minecraft:end_rod', true, currentX, currentY + eyeH * 0.6, currentZ, 0.0, 0.0, 0.0, 30, 0.1);

            targetLevel.spawnParticles('minecraft:cloud', true, targetX, targetY + eyeH * 0.6, targetZ, 0.1, 0.1, 0.1, 30, 0.1);
            targetLevel.spawnParticles('minecraft:end_rod', true, targetX, targetY + eyeH * 0.6, targetZ, 0.0, 0.0, 0.0, 30, 0.1);
            
            for (const h of [1.05, 0.6, 0.15]) {
                currentLevel.spawnParticles(`irons_spellbooks:爆波 1 1 1 1.2`,
                    true, currentX, currentY + eyeH * h, currentZ, 0, 0, 0, 5, 0
                );
                targetLevel.spawnParticles(`irons_spellbooks:爆波 1 1 1 1.2`,
                    true, targetX, targetY + eyeH * h, targetZ, 0, 0, 0, 5, 0
                );
            }

            currentLevel.playSound(null, currentX, currentY, currentZ, "minecraft:block.beacon.activate", "players", 3.5, 1);
            targetLevel.playSound(null, targetX, targetY, targetZ, "minecraft:block.beacon.activate", "players", 3.5, 1);
        }
        
    }
    
    // 100%
    if (useTicks >= specialItemsConfig.teleportGem.useDurationToHall) {
        if (!player.persistentData.teleportGemLastPos) {
             player.unRide()

            let {x: currentX, y: currentY, z: currentZ, eyeHeight: eyeH, level: currentLevel, server} = player

            let {dimension: targetDimension, x: targetX, y: targetY, z: targetZ} = specialItemsConfig.teleportGem.hallofDecimus

            let targetLevel = server.getLevel(targetDimension)

            currentLevel.playSound(null, currentX, currentY, currentZ, "entity.enderman.teleport", "players", 2, 1 );
            currentLevel.spawnParticles('minecraft:cloud', true, currentX, currentY + eyeH * 0.6, currentZ, 0.1, 0.1, 0.1, 30, 0.1);
            currentLevel.spawnParticles('minecraft:end_rod', true, currentX, currentY + eyeH * 0.6, currentZ, 0.0, 0.0, 0.0, 30, 0.1);

            for (const h of [1.05, 0.6, 0.15]) {
                currentLevel.spawnParticles(`irons_spellbooks:爆波 1 1 1 1.2`,
                    true, currentX, currentY + eyeH * h, currentZ, 0, 0, 0, 5, 0
                );
            }

            // Save teleportGemLastPos
            player.persistentData.teleportGemLastPos = {
                dimension: currentLevel.dimension.toString(),
                x: currentX,
                y: currentY,
                z: currentZ
            }

            player.teleportTo(targetDimension, targetX, targetY, targetZ, player.yaw, player.pitch)
            player.releaseUsingItem()

            let effect = $ForgeRegistries.MOB_EFFECTS.getValue($ResourceLocation("minecraft:slow_falling"))
            let effectInstance = new $MobEffectInstance(effect, 70, 0, false, false, true)
            player.addEffect(effectInstance)
            
            if (!player.isCreative()) {
                teleportGemFunction.setTeleportGemCooldown(player, "hall");
            }

            server.scheduleInTicks(3, () => {
                
                targetLevel.playSound(null, targetX, targetY, targetZ, "entity.enderman.teleport", "players", 2, 1 );
                targetLevel.spawnParticles('minecraft:cloud', true, targetX, targetY + eyeH * 0.6, targetZ, 0.1, 0.1, 0.1, 30, 0.1);
                targetLevel.spawnParticles('minecraft:end_rod', true, targetX, targetY + eyeH * 0.6, targetZ, 0.0, 0.0, 0.0, 30, 0.1);

                for (const h of [1.05, 0.6, 0.15]) {
                    targetLevel.spawnParticles(`irons_spellbooks:blastwave 1 1 1 1.2`,
                        true, targetX, targetY + eyeH * h, targetZ, 0, 0, 0, 5, 0
                    );
                }
            });
        }
    }    
}


// Remove teleportGemLastPos when the player changes dimension
ForgeEvents.onEvent("net.minecraftforge.event.entity.player.PlayerEvent$PlayerChangedDimensionEvent", e => {
        const player = e.entity;

       
        const fromDim = e.from.location().toString();

     
        if (fromDim === specialItemsConfig.teleportGem.hallofDecimus.dimension) {

            
            if (player.persistentData.teleportGemLastPos) {
                delete player.persistentData.teleportGemLastPos;
            }
        }
    }
)




/*

if (duration % 10 === 0) {
    let {x: currentX, y: currentY, z: currentZ, eyeHeight: eyeH, level: currentLevel, server} = player

    let {dimension: targetDimension, x: targetX, y: targetY, z: targetZ} = specialItemsConfig.teleportGem.hallofDecimus

    let targetLevel = server.getLevel(targetDimension)

    for (const h of [1.05, 0.6, 0.15]) {
        currentLevel.spawnParticles(`irons_spellbooks:blastwave 1 1 1 1.2`,
            true, currentX, currentY + eyeH * h, currentZ, 0, 0, 0, 5, 0
        );
        targetLevel.spawnParticles(`irons_spellbooks:blastwave 1 1 1 1.2`,
            true, targetX, targetY + eyeH * h, targetZ, 0, 0, 0, 5, 0
        );
    }
}*/

/*if (lastPos && duration % 10 === 0) {
    let {x: currentX, y: currentY, z: currentZ, eyeHeight: eyeH, level: currentLevel, server} = player

    let {dimension: targetDimension, x: targetX, y: targetY, z: targetZ} = lastPos

    let targetLevel = server.getLevel(targetDimension)


    for (const h of [1.05, 0.6, 0.15]) {
        currentLevel.spawnParticles(`irons_spellbooks:blastwave 1 1 1 1.2`,
            true, currentX, currentY + eyeH * h, currentZ, 0, 0, 0, 5, 0
        );
        targetLevel.spawnParticles(`irons_spellbooks:blastwave 1 1 1 1.2`,
            true, targetX, targetY + eyeH * h, targetZ, 0, 0, 0, 5, 0
        );
    }
}
    
*/

/* */