EntityEvents.spawned(event => {
  const entity = event.entity
  if (!entity.level.server) return

  if (entity.type == 'irons_spellbooks:citadel_keeper') {
    if (entity.level.getEntities(
      entity,
      entity.boundingBox.inflate(16),
      e => e.type == 'irons_spellbooks:fire_boss'
    ).length > 0) {
      event.cancel()
    }
  }
})
