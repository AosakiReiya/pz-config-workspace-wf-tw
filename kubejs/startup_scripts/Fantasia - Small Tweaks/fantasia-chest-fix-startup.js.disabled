ForgeEvents.onEvent("net.minecraftforge.event.entity.living.LivingEquipmentChangeEvent", e => {

    if (e.entity.level.isClientSide()) return

    if (global.FantasiaBreastFix) {
        global.FantasiaBreastFix(e)
    }
})