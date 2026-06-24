/* ========================================================================
=== Server Script ===

Credits:
-----------------
Thank you very much, @squoshi, for your very big help in identifying bugs and 
inconsistencies in my code
GitHub: https://github.com/squoshi
CurseForge: https://www.curseforge.com/members/squoshi/projects

======================================================================== */


/*
let portal_fluid =  Fluid.of("spelunkery:portal_fluid").fluid.fluidType
let flowing_portal_fluid = Fluid.of("spelunkery:flowing_portal_fluid").fluid.fluidType

const removeTeleportGemLastPosIfInPortalFluid = (player) => {
    if (!player) return;

    if (player.isInFluidType(portal_fluid) || player.isInFluidType(flowing_portal_fluid)) {
        if (player.persistentData.teleportGemLastPos) {
            // Removing teleportGemLastPos when touching the portal fluid
            delete player.persistentData.teleportGemLastPos
        }
    }
}
*/


// Remove teleportGemLastPos when the player dies
EntityEvents.death("minecraft:player", e => {
    let {player} = e
    if (player.persistentData.teleportGemLastPos) {
        let {x, y, z, eyeHeight, level} = player

        // level.playSound(null, x, y, z, "minecraft:item.chorus_fruit.teleport", "players", 2, 1 )
        level.spawnParticles('minecraft:reverse_portal ', true, x, y + eyeHeight * 0.6, z, 0, 0, 0, 40, 0.1)
        level.spawnParticles('minecraft:witch', true, x, y + eyeHeight * 0.6, z, 0.0, 0.0, 0.0, 20, 0.01)

        delete player.persistentData.teleportGemLastPos
    } 
})

/* */