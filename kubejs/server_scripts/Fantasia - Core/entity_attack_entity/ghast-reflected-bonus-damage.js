/**
 * @param {Internal.LivingEntity} entity
 * @param {Internal.DamageSource} source
 */
function applyGhastFireballBonusDamage(entity, source) {
    if (entity.type === "minecraft:ghast" && source.directEntity && 
        source.directEntity.type === "irons_spellbooks:fireball") {
       
        if (source.directEntity.persistentData.reflectedFromGhast) {
            if (source.causingEntity) {
               let player = source.causingEntity
               let dmg = EnhancedGhastConfig.fireballParry.ghastBonusDamage
               let damageSource = player.damageSources().playerAttack(player)
               entity.attack(damageSource, dmg)
            }
            entity.persistentData.angryGhast = true
       }
   }
}