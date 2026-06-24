ItemEvents.entityInteracted(e => {

  if (e.target.type == "mowziesmobs:umvuthi") {
    e.cancel()
  }

  if (e.item.id == 'spelunkery:salt_bucket') {
    e.cancel()
  }

  if (e.target.type == "goblintraders:goblin_trader" && e.item.id == 'supplementaries:cage') {
    e.cancel()
  }

  if (e.target.type == "goblintraders:vein_goblin_trader" && e.item.id == 'supplementaries:cage') {
    e.cancel()
  }
})

BlockEvents.rightClicked(e => {

  let { block } = e;

  let blocked = [
    "minecraft:brewing_stand",
    "bountiful:bountyboard"
  ]

  if (blocked.includes(block.id)) {
    e.cancel()
  }

})

BlockEvents.rightClicked(e => {

  let { block } = e;

  let beds = [
    'minecraft:white_bed',
    'minecraft:light_gray_bed',
    'minecraft:gray_bed',
    'minecraft:black_bed',
    'minecraft:brown_bed',
    'minecraft:red_bed',
    'minecraft:orange_bed',
    'minecraft:yellow_bed',
    'minecraft:lime_bed',
    'minecraft:green_bed',
    'minecraft:cyan_bed',
    'minecraft:light_blue_bed',
    'minecraft:blue_bed',
    'minecraft:purple_bed',
    'minecraft:magenta_bed',
    'minecraft:pink_bed',
    "valhelsia_structures:white_sleeping_bag",
    "valhelsia_structures:orange_sleeping_bag",
    "valhelsia_structures:magenta_sleeping_bag",
    "valhelsia_structures:light_blue_sleeping_bag",
    "valhelsia_structures:yellow_sleeping_bag",
    "valhelsia_structures:lime_sleeping_bag",
    "valhelsia_structures:pink_sleeping_bag",
    "valhelsia_structures:gray_sleeping_bag",
    "valhelsia_structures:light_gray_sleeping_bag",
    "valhelsia_structures:cyan_sleeping_bag",
    "valhelsia_structures:purple_sleeping_bag",
    "valhelsia_structures:blue_sleeping_bag",
    "valhelsia_structures:brown_sleeping_bag",
    "valhelsia_structures:green_sleeping_bag",
    "valhelsia_structures:red_sleeping_bag",
    "valhelsia_structures:black_sleeping_bag"
  ]

  if (e.level.dimension != "minecraft:the_nether" && "minecraft:the_end") return

  if (beds.includes(block.id)) {
    e.player.displayClientMessage("躺著太不舒服了……", true);
    e.cancel()
  }

})