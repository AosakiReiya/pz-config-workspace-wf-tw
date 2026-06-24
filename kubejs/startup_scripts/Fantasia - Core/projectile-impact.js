ForgeEvents.onEvent('net.minecraftforge.event.entity.ProjectileImpactEvent', e => {
    const {projectile, rayTraceResult} = e 

    if (projectile.level.isClientSide()) return

    if (global.FantasiaProjectileImpactEvent) {
        global.FantasiaProjectileImpactEvent(e)
    }
})
