BlockEvents.rightClicked(event => {
  let { player, block, item } = event;

  if (!player.hasEffect("moderninhibited:inhibited")) return;

  let blockId = block.id;
  let itemId = item.id;

  let blockedItemsAndBlocks = [
    "minecraft:chiseled_bookshelf",
    "supplementaries:book_pile",
    "supplementaries:book_pile_horizontal",
    "minecraft:spruce_trapdoor",
    "minecraft:dark_oak_trapdoor",
    "minecraft:tnt"
  ];

  if (blockedItemsAndBlocks.includes(blockId) || blockedItemsAndBlocks.includes(itemId)) {
    event.cancel();
  }
});

ItemEvents.rightClicked(event => {
  let { player, item } = event;

  if (!player.hasEffect("moderninhibited:inhibited")) return;
  let itemId = item.id;

  let blockedItems = [
    "minecraft:flint_and_steel",
    "spelunkery:mineomite",
    "galosphere:silver_bomb",
    "spelunkery:flint_hammer_and_chisel",
    "spelunkery:obsidian_hammer_and_chisel",
    "spelunkery:glowstick",
    "spelunkery:white_glowstick",
    "spelunkery:light_gray_glowstick",
    "spelunkery:gray_glowstick",
    "spelunkery:black_glowstick",
    "spelunkery:brown_glowstick",
    "spelunkery:red_glowstick",
    "spelunkery:orange_glowstick",
    "spelunkery:yellow_glowstick",
    "spelunkery:lime_glowstick",
    "spelunkery:green_glowstick",
    "spelunkery:cyan_glowstick",
    "spelunkery:light_blue_glowstick",
    "spelunkery:blue_glowstick",
    "spelunkery:purple_glowstick",
    "spelunkery:magenta_glowstick",
    "spelunkery:pink_glowstick"
  ];

  if (blockedItems.includes(itemId)) {
    event.cancel();
  }
});