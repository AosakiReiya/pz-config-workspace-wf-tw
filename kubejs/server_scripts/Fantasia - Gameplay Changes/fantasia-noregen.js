EntityEvents.hurt(event => {
  let entity = event.entity;

  if (!entity.isPlayer()) return;

  entity.removeEffect("minecraft:regeneration");
});
