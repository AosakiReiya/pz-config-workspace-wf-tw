/* ========================================================================
=== Startup Script ===

Important Notes:
config\combatroll\server.json5: "invulnerable_ticks_upon_roll" must be
set to 0 for the script to work perfectly
======================================================================== */

// CONFIG
global.combatRollConfig = {
    invulnerableTicks: 8,

    unavoidableDamageTypes: [
        "fall",
        "hotFloor",
        "indirectMagic",
        "inFire", 
        "magic",
        "lava", 
        "lightningBolt", 
        "onFire",
        "starve"
    ]
}

StartupEvents.init(event => {
  let $RollEvents = Java.loadClass("net.combatroll.api.event.ServerSideRollEvents");
  let $PlayerRollEvent = Java.loadClass("net.combatroll.api.event.ServerSideRollEvents$PlayerStartRolling");

  $RollEvents.PLAYER_START_ROLLING.register(new JavaAdapter($PlayerRollEvent, {
    onPlayerStartedRolling: function (player, velocity) {
      global.onPlayerStartedRolling(player, velocity)
    }
  }))
})

global.onPlayerStartedRolling = (player, velocity) => {
  let time = player.level.time

  let invulnerableTicksUponRoll = global.combatRollConfig.invulnerableTicks
 
  player.persistentData.invulnerableTicksUponRoll = invulnerableTicksUponRoll + time
};