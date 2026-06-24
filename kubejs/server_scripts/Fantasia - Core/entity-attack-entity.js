/**
 * 
 * @param {Internal.LivingAttackEvent} e 
 */
global.FantasiaLivingAttackEvent = (e) => {
    const { entity, source, amount} = e

    if (ejectFromSeatOnDamage) {
        ejectFromSeatOnDamage(entity)
    }
    
    if (fantasiaParryEvent) {
       fantasiaParryEvent(e)
    }

    if (applyGhastFireballBonusDamage) {
        applyGhastFireballBonusDamage(entity, source)    
    }
}
