ItemEvents.rightClicked(event => {
  let { item, player } = event

  let throwable = [
    'farmersdelight:rotten_tomato',
    'minecraft:fire_charge',
    'amendments:dragon_charge'
  ];

  let bomb = [
    'spelunkery:mineomite'
  ];

  let firearms = [
    "musketmod:musket",
    "musketmod:blunderbuss"
  ];

  throwable.forEach(projectile => {

    if (item.id !== projectile) return
    player.addItemCooldown(item, 15);

  })

  bomb.forEach(projectile => {

    if (item.id !== projectile) return
    player.addItemCooldown(item, 40);

  })

  firearms.forEach(gun => {

    if (item.id === gun && item.nbt?.loaded === 1) {
      player.addItemCooldown(item, 60);
    }

  })
});