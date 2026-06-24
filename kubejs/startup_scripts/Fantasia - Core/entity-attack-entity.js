ForgeEvents.onEvent("net.minecraftforge.event.entity.living.LivingAttackEvent", e => {
    
    if (e.entity.level.isClientSide()) return

    if (global.FantasiaLivingAttackEvent) {
        global.FantasiaLivingAttackEvent(e)
    }
})
