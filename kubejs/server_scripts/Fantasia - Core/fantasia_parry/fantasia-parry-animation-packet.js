/**
 * @param {Internal.ServerPlayer} player
 */
function sendParryAnimationPacket(player) {
    const useItem = player.useItem
   
    if (!useItem.hasTag("swordblockingmechanics:can_perform_sword_blocking")) return

    const isRightHanded = (player.mainArm === "RIGHT");
    const usedHand = player.usedItemHand
    let isRightArmActive = (usedHand === "MAIN_HAND") ? isRightHanded : !isRightHanded

    let animation = "simple"

    if (useItem.hasTag("fantasia:parry_warhammer_anim")) {
        animation = "warhammer"
    }
    else if (useItem.hasTag("fantasia:parry_polearm_anim")) {
        animation = "polearm"
    }
    else if (useItem.hasTag("fantasia:parry_longsword_anim")) {
        animation = "longsword"
    }
    else if (useItem.hasTag("fantasia:parry_two_hand_anim")) {
        animation = "two_handed"
    } 
    else if (player.mainHandItem.hasTag("fantasia:parry_dual_wield_anim") && player.offHandItem.hasTag("fantasia:parry_dual_wield_anim")) {
        animation = "dual_wield"
    } 
    else {
        animation = "simple"
    }

    player.sendData("fantasia_parry_animation", {
        isRightArm: isRightArmActive,
        animation: animation
    })
}
