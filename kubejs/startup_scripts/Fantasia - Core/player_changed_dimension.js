ForgeEvents.onEvent('net.minecraftforge.event.entity.player.PlayerEvent$PlayerChangedDimensionEvent', e => {
   
    if (e.entity.level.isClientSide()) return

    if (global.FantasiaPlayerChangedDimension) {
        global.FantasiaPlayerChangedDimension(e)
    }
});
