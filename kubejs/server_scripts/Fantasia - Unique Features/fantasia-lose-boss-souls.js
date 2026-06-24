EntityEvents.death(event => {
  let entity = event.entity;

  if (!entity.isPlayer()) return;

  entity.persistentData.IgnisPower = false;
  entity.persistentData.MaledictusPower = false;
  entity.persistentData.ScyllaPower = false;
});

/*

Putting a mark for this later:

ItemEvents.foodEaten(event => {
    if (event.item.id === 'kubejs:fruit_of_eternal_life') {
        if (event.player) {
            event.player.maxHealth += 2;
        }
    }
});

*/