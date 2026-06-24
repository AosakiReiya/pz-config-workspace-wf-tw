/**
 * @param {Internal.PlayerEvent$PlayerChangedDimensionEvent} e 
 */
function applySlowFallingInNether(e) {
    const toDim = e.to.location().toString();

    if (toDim === "minecraft:the_nether") {
        /** @type {Player} */
        const player = e.entity;

        const block = player.level.getBlock(player.x, player.y, player.z);

       if (block.id === "minecraft:nether_portal") return

        player.potionEffects.add("minecraft:slow_falling", 200, 0, true, false);
    }
}