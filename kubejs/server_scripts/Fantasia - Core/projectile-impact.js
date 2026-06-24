/**
 * @param {Internal.ProjectileImpactEvent} e
 */
global.FantasiaProjectileImpactEvent = (e) => {
    const {projectile, rayTraceResult} = e
    
    if (rayTraceResult.type === "entity") {

    }

    if (rayTraceResult.type === "block") {
        if (fantasiaLightInteractions)
        fantasiaLightInteractions(projectile, rayTraceResult)
    }
}
