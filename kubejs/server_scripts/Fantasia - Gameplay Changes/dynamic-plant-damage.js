const FantasiaDangerPlantConfig = {
    damageIds: [
        "cactus",
        "sweetBerryBush",
        "holly_leaves"
    ],
    blockIds: [
        "minecraft:cactus",
        "minecraft:sweet_berry_bush",
        "windswept:holly_leaves"
    ],

    headArmorBlacklist: [
        "minecraft:air"
    ],

    chestArmorBlacklist: [
        "minecraft:air"
    ],

    legsArmorBlacklist: [
        "minecraft:air"
    ],

    feetArmorBlacklist: [
        "minecraft:air"
    ],
}


EntityEvents.hurt(e => {
    const { entity, source } = e
    
    const config = FantasiaDangerPlantConfig

    if (!config.damageIds.includes(source.type().msgId())) return
    
    let isHeadProtected = !config.headArmorBlacklist.includes(entity.headArmorItem.id)
    let isChestProtected = !config.chestArmorBlacklist.includes(entity.chestArmorItem.id)
    let isLegsProtected = !config.legsArmorBlacklist.includes(entity.legsArmorItem.id)
    let isFeetProtected = !config.feetArmorBlacklist.includes(entity.feetArmorItem.id)

    let box = entity.boundingBox
    let touchCount = 0
    let unprotectedTouch = false

    for (let x = Math.floor(box.minX - 0.1); x <= Math.floor(box.maxX + 0.1); x++) {
        for (let y = Math.floor(box.minY - 0.1); y <= Math.floor(box.maxY + 0.1); y++) {
            for (let z = Math.floor(box.minZ - 0.1); z <= Math.floor(box.maxZ + 0.1); z++) {
                
                if (box.maxX <= x || box.minX >= x + 1) continue
                if (box.maxZ <= z || box.minZ >= z + 1) continue
                if (box.maxY <= y || box.minY >= y + 1) continue

                let block = entity.level.getBlock(x, y, z)

                if (!config.blockIds.includes(block.id)) continue
                
                touchCount++ 

                let relativeHeight = y - box.minY
                let protectedAtThisPoint = false

                if (relativeHeight >= 1.1) {
                    if (isHeadProtected) protectedAtThisPoint = true
                } 
                else if (relativeHeight >= 0.7) {
                    if (isChestProtected && isHeadProtected) protectedAtThisPoint = true
                }  
                else if (relativeHeight >= 0.5) {
                    if (isChestProtected) protectedAtThisPoint = true
                } 
                else if (relativeHeight >= -0.1) {
                    if (isFeetProtected && isLegsProtected) protectedAtThisPoint = true
                } else {
                    if (isFeetProtected) protectedAtThisPoint = true
                }

                if (!protectedAtThisPoint) {
                    unprotectedTouch = true
                }
            }
        }
    }

    if (touchCount > 0 && !unprotectedTouch) {    
        e.cancel()
    }
})