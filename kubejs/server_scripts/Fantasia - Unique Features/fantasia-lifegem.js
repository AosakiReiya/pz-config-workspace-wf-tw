ItemEvents.foodEaten(event => {
  let { server, player } = event

  if (event.item.id === 'miningmaster:heart_rhodonite') {
    player.potionEffects.add("minecraft:regeneration", 40, 4, true, false)
  }

  if (event.item.id === 'kubejs:lesser_heart_rhodonite') {
    player.potionEffects.add("minecraft:regeneration", 40, 2, true, false)
  }

});