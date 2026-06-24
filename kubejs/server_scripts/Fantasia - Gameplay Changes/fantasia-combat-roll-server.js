
/* ========================================================================
=== Server Script ===

Important Notes:
config\combatroll\server.json5: "invulnerable_ticks_upon_roll" must be
set to 0 for the script to work perfectly
======================================================================== */

// /effect give @s minecraft:resistance infinite 255

EntityEvents.hurt("minecraft:player", e => {

    let {player, level, source} = e

   // console.log(source.type().msgId())

    let ticksRoll = player.persistentData.invulnerableTicksUponRoll
    // console.log(`invulnerableTicks: ${ticksRoll}`)
    // console.log(`LEVEL TIME ${level.time}`);

    if (ticksRoll < level.time) return

    // let {source} = e

    if (!global.combatRollConfig.unavoidableDamageTypes.includes(source.type().msgId())) {
        // console.log("AVOIDED DAMAGE!")
        e.cancel()
    } else {
        // console.log("Unavoidable Damage!");
     
    }
})


EntityEvents.spawned("minecraft:player", e => {
    let player = e.player

    player.persistentData.invulnerableTicksUponRoll = player.level.time
})