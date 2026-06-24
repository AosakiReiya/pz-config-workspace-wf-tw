ForgeEvents.onEvent('net.minecraftforge.event.entity.living.LivingEntityUseItemEvent$Tick', e => {
    let item = e.item;
    if (!item) return;

    if (item.id === "kubejs:teleport_gem") {
        let player = e.entity
        if (player && player.level && !player.level.isClientSide()) {
            global.onTeleportGemUseTick(player, item, e.duration)
        }
        return
    }

    /*if (item.id === "kubejs:repeating_crossbow") {
        let player = e.entity
        if (player) {
           global.repeatingCrossbowUseTick(player, item)
        }
    }*/
})