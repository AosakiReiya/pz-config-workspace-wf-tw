const IgnoreMCABreastFixItems = [
    "minecraft:air"
]


ServerEvents.tags("item", e => {
    e.add("fantasia:ignore_mca_breast_fix", IgnoreMCABreastFixItems)
})


let $PlayerSaveData = Java.loadClass("forge.net.mca.server.world.data.PlayerSaveData")
let $VillagerLike = Java.loadClass("forge.net.mca.entity.VillagerLike")
let $NetworkHandler = Java.loadClass("forge.net.mca.cobalt.network.NetworkHandler")
let $PlayerDataMessage = Java.loadClass("forge.net.mca.network.s2c.PlayerDataMessage")


/**
 * 
 * @param {Internal.LivingEquipmentChangeEvent} e 
 */
global.FantasiaBreastFix = (e) => {
    const { entity } = e
  
    if (!entity.isPlayer() && entity.type !== "mca:female_villager" && entity.type !== "mca:female_zombie_villager") return
    if (e.getSlot().name() !== "CHEST") return

    const data = entity.persistentData
    const item = e.getTo()

    if (!item.hasTag("fantasia:ignore_mca_breast_fix")) {
        if (data.breastFixActive === 2) return

        applyMCAChestFix(entity, true)
    } else {
        if (data.breastFixActive === 1) return

        applyMCAChestFix(entity, false)
    }    
}


function applyMCAChestFix(entity, activate) {
    let playerAsVillager = $VillagerLike.toVillager(entity)
    if (playerAsVillager === null) return

    const server = entity.server
    const data = entity.persistentData
    let mcaData = null
    let nbt

    if (entity.isPlayer()) {
        mcaData = $PlayerSaveData.get(entity)
        nbt = mcaData.getEntityData()
    } else {
        nbt = entity.nbt
    }

    if (nbt.getInt("gender") !== 2) return

    if (activate) {
        data.breastSize = nbt.getFloat("gene_breast")
        data.breastFixActive = 2

        nbt.putFloat("gene_breast", 0.0)
    } else {
        data.breastFixActive = 1
        let breastSize = data.breastSize || 0.0
        
        nbt.putFloat("gene_breast", parseFloat(breastSize))
    }

    if (entity.isPlayer()) {
        mcaData.setEntityData(nbt)
        mcaData.setEntityDataSet(true)
        
        let dataMsg = new $PlayerDataMessage(entity.uuid, nbt)
        server.players.forEach(p => {
            $NetworkHandler.sendToPlayer(dataMsg, p)
        })
    } else {
        entity.mergeNbt(nbt)
        entity.refreshDimensions()
    }   
}

