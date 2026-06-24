ForgeEvents.onEvent("net.minecraftforge.event.entity.player.PlayerInteractEvent$RightClickEmpty", e => {
    const player = e.entity
    
    if (player.isPlayer()) {
        player.sendData("right_click_empty", {
            hand: e.hand.toString()
        })
    }
})