/**
 * 
 * @param {Internal.LivingEntityUseItemEvent$Start} e 
 */
function fantasiaHandleWeaponStanceSwap(e) {
    const { entity, item } = e

    if (!entity.isPlayer()) return

    /** @type {Player} */
    const player = entity

    if (!player.isCrouching()) return

    const offHandItem = player.offHandItem
    const mainHandItem = player.mainHandItem

    if (item == offHandItem && item != mainHandItem) return

    const id = item.id

    const isOne = item.hasTag("fantasia:stance_one_handed")
    const isTwo = item.hasTag("fantasia:stance_two_handed")

    if (!isOne && !isTwo) return

    let targetId = null

    let idParts = id.split(':')
    let path = idParts[1]

    if (isOne) {
        targetId = `kubejs:${path}_two_handed`
        
    } else if (isTwo) {
        let baseName = path.replace("_two_handed", "")
        let namespace = "spartanweaponry"

        if (item.hasTag("fantasia:cataclysm_weapons")) {
            namespace = "cataclysm"
        } else if (item.hasTag("fantasia:minecraft_weapons")) {
            namespace = "minecraft"
        } else if (item.hasTag("fantasia:overgeared_weapons")) {
            namespace = "overgeared"
        }

        targetId = `${namespace}:${baseName}`
    }

    if (targetId) {

        // console.log(targetId);
        
        swapWeaponStance(player, targetId)
        e.setCanceled(true)
    }
}

/**
 * @param {Player} player
 * @param {Internal.InteractionHand} hand
 * @param {String} targetItemId
 */
const swapWeaponStance = (player, targetItemId) => {

    let currentItem = player.mainHandItem
    let newItemStack = Item.of(targetItemId).withNBT(currentItem.nbt)

    if (newItemStack == null) return

    player.addItemCooldown(currentItem.id, 10)
    player.addItemCooldown(targetItemId, 10)

    player.setItemInHand("main_hand", newItemStack)
}

