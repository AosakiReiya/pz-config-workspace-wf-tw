ForgeEvents.onEvent('net.minecraftforge.event.entity.living.LivingEntityUseItemEvent$Start', e => {

    if (fantasiaHandleWeaponStanceSwap) {
        fantasiaHandleWeaponStanceSwap(e)
    }
})