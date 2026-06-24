// https://github.com/Fuzss/swordblockingmechanics/blob/main/1.20.1/Common/src/main/java/fuzs/swordblockingmechanics/handler/SwordBlockingHandler.java#L71
let $SwordBlockingHandler = Java.loadClass('fuzs.swordblockingmechanics.handler.SwordBlockingHandler')
let $EventResult = Java.loadClass("fuzs.puzzleslib.api.event.v1.core.EventResult"); 

/**
 * @param {Internal.LivingAttackEvent} e
 */
function fantasiaParryEvent(e) {
    const {entity: player, source, amount} = e

    if (!player.isPlayer()) return

    const result = $SwordBlockingHandler.onLivingAttack(player, source, amount)

    if (!result.equals($EventResult.INTERRUPT)) return

    // Visual
    if (fantasiaParryParticles) {
        fantasiaParryParticles(player, source, amount)
    }
    if (sendParryAnimationPacket) {
        sendParryAnimationPacket(player)
    }
   
   
    if (parryGhastFireball) {
        parryGhastFireball(e)
    }
}