/**
 * @param {Internal.LivingAttackEvent} e
 */
function parryGhastFireball(e) {
    const {entity: player, source, amount} = e

    if (source.directEntity && source.directEntity.type === "irons_spellbooks:fireball" &&
        source.causingEntity && source.causingEntity.type === "minecraft:ghast") {

        let vel = EnhancedGhastConfig.fireballParry.reflectedVelocity
        let level = player.level
        
        let projectile = level.createEntity("irons_spellbooks:fireball")
        projectile.setPosition(source.directEntity.x, source.directEntity.y, source.directEntity.z);
        
        let lookAngle = player.lookAngle
        projectile.setMotion(lookAngle.x() * vel, lookAngle.y() * vel, lookAngle.z() * vel)
        
        projectile.setOwner(player);
        projectile.setNoGravity(true);
        projectile.mergeNbt({ Damage: 12, ExplosionRadius: 5 })
        projectile.persistentData.reflectedFromGhast = true
        projectile.persistentData.isConfigured = true
        level.addFreshEntity(projectile)

        source.directEntity.discard()
        e.setCanceled(true)
    }
}