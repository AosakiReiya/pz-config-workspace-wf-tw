ServerEvents.loaded(event => {
  if (event.server.persistentData.gameRules) return

  event.server.gameRules.set("reducedDebugInfo", true)
  event.server.gameRules.set("announceAdvancements", false)
  event.server.gameRules.set("doInsomnia", false)
  event.server.gameRules.set("showDeathMessages", false)
  event.server.gameRules.set("artifacts.cloudInABottle.sprintJumpVerticalVelocity", 25)

  event.server.persistentData.gameRules = true

});

EntityEvents.spawned(event => {
  let entity = event.entity;
  if (!entity.isPlayer()) return;

  let maxMana = entity.getAttribute("irons_spellbooks:max_mana");
  let manaRegen = entity.getAttribute("irons_spellbooks:mana_regen")
  let rollDist = entity.getAttribute("combatroll:distance");
  let rollCount = entity.getAttribute("combatroll:count");

  if (maxMana && maxMana.baseValue > 0) {
    maxMana.baseValue = 0;
  }

  if (manaRegen && manaRegen > 1) {
    maxMana.baseValue = 0.5;
  }

  if (rollDist && rollDist.baseValue <= 3) {
    rollDist.baseValue = 2.5;
  }

  if (rollCount && rollCount.baseValue <= 1) {
    rollCount.baseValue = 3;
  }

});

EntityEvents.spawned('minecraft:item', event => {
  const item = event.entity.item
  if (item && item.id == 'kubejs:zombie_claw') {
    event.entity.kill()
  }
})