/* ========================================================================
=== Startup Script ===
======================================================================== */

const stopUseOnDimensionChangeItems = [
    "kubejs:teleport_gem",
    "kubejs:ermiras_favor"
]


ForgeEvents.onEvent('net.minecraftforge.event.entity.player.PlayerEvent$PlayerChangedDimensionEvent', e => {
  
    let player = e.entity
   
    global.stopUseOnDimensionChange(player);
})


/**
 * @param {Internal.ServerPlayer} player
 */
global.stopUseOnDimensionChange = (player) => {
    if (!player) return

    let usingItem = player.usingItem
    if (!usingItem) return

    let useItem = player.useItem
    if (!useItem) return

    let usedId = player.useItem.id
    if (!usedId) return

    if (stopUseOnDimensionChangeItems.includes(usedId)) {
        player.releaseUsingItem()
    }
}
