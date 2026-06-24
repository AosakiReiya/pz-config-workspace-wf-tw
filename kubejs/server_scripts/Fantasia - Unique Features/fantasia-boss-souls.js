ItemEvents.foodEaten(event => {
  let { server, player } = event

  if (event.item.id === 'kubejs:soul_of_ignis') {

    player.persistentData.IgnisPower = true;

    player.modifyAttribute("minecraft:generic.max_health", "fantasia_boss_ignishealth", 20, "addition")
    player.potionEffects.add("minecraft:regeneration", 200, 255, true, false)
    player.runCommandSilent(`particle cataclysm:flare_explode ~ ~1 ~`)
    player.runCommandSilent(`playsound minecraft:item.totem.use ambient @p`)
    Client.gameRenderer.displayItemActivation('kubejs:soul_of_ignis');
  }

  if (event.item.id === 'kubejs:soul_of_maledictus') {

    player.persistentData.MaledictusPower = true;

    player.modifyAttribute("minecraft:generic.max_health", "fantasia_boss_malehealth", 20, "addition")
    player.potionEffects.add("minecraft:regeneration", 200, 255, true, false)
    player.runCommandSilent(`particle minecraft:explosion_emitter ~ ~1 ~`)
    player.runCommandSilent(`playsound minecraft:item.totem.use ambient @p`)
    Client.gameRenderer.displayItemActivation('kubejs:soul_of_maledictus');
  }

  if (event.item.id === 'kubejs:soul_of_scylla') {

    player.persistentData.ScyllaPower = true;

    player.modifyAttribute("minecraft:generic.max_health", "fantasia_boss_scyllahealth", 20, "addition")
    player.potionEffects.add("minecraft:regeneration", 200, 255, true, false)
    player.runCommandSilent(`particle cataclysm:lightning_explode ~ ~1 ~`)
    player.runCommandSilent(`playsound minecraft:item.totem.use ambient @p`)
    Client.gameRenderer.displayItemActivation('kubejs:soul_of_scylla');
  }
});