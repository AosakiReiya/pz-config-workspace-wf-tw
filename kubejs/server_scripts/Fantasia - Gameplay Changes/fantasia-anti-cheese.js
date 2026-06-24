let targetMobs = [
  'mowziesmobs:ferrous_wroughtnaut'
]

let radius = 80

PlayerEvents.tick(event => {
  let player = event.player
  let level = player.level

  if (level.time % 20 != 0) return;

  if (player.isCreative() || player.isSpectator()) return

  let px = player.x
  let py = player.y
  let pz = player.z

  let found = false

  level.getEntities().forEach(entity => {
    if (!entity.isPlayer() && entity.isAlive()) {
      let id = String(entity.type)
      if (targetMobs.includes(id)) {
        let dx = entity.x - px
        let dy = entity.y - py
        let dz = entity.z - pz
        let distSq = dx * dx + dy * dy + dz * dz

        if (distSq <= radius * radius) {
          found = true
        }
      }
    }
  })

  let wasNear = player.persistentData.nearHostileMob || 0

  if (found && wasNear === 0) {
    player.persistentData.nearHostileMob = 1
    player.potionEffects.add("moderninhibited:inhibited", -1, 0, true, false);
  }

  if (!found && wasNear === 1) {
    player.persistentData.nearHostileMob = 0
    player.server.runCommandSilent(`effect clear ${player.username} moderninhibited:inhibited`);
    player.potionEffects.add("moderninhibited:inhibited", 2, 0, true, false);
  }
});