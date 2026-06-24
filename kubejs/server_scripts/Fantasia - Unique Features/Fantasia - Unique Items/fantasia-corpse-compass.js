EntityEvents.spawned("corpse:corpse", e => {
    const { level, entity, server } = e

    const currentDim = level.dimension.toString()
    const corpseUuid = entity.stringUuid

    if (entity.persistentData.lastCorpseDim === currentDim) return
    entity.persistentData.lastCorpseDim = currentDim

    let nbt = entity.nbt
    let deathTag = nbt.getCompound("Death")
    let playerName = deathTag.getString("PlayerName")
    let isMainEmpty = deathTag.getList("MainInventory", 10).isEmpty()
    let isArmorEmpty = deathTag.getList("ArmorInventory", 10).isEmpty()
    let isOffHandEmpty = deathTag.getList("OffHandInventory", 10).isEmpty()
    let isNowEmpty = isMainEmpty && isArmorEmpty && isOffHandEmpty

    let corpseCore = level.createEntity("kubejs:corpse_core")
    corpseCore.persistentData.corpseUuid = corpseUuid
    corpseCore.persistentData.isCurrentlyEmpty = isNowEmpty
    corpseCore.setPosition(entity.x, entity.y, entity.z)
    corpseCore.spawn()

    let entry = {
        uuid: corpseUuid,
        name: playerName,
        x: entity.x,
        y: entity.y,
        z: entity.z,
        dim: currentDim
    }

    let activeList = server.persistentData.corpseList || []
    let emptyList = server.persistentData.emptyCorpseList || []

    if (isNowEmpty) {
        let filteredEmpty = emptyList.filter(c => c.uuid !== corpseUuid)
        filteredEmpty.push(entry)
        server.persistentData.emptyCorpseList = filteredEmpty

        server.persistentData.corpseList = activeList.filter(c => c.uuid !== corpseUuid)
        
        // console.log(`Corpse ${corpseUuid} registered as EMPTY in dimension ${currentDim}.`)
    } else {
        let filteredActive = activeList.filter(c => c.uuid !== corpseUuid)
        filteredActive.push(entry)
        server.persistentData.corpseList = filteredActive

        server.persistentData.emptyCorpseList = emptyList.filter(c => c.uuid !== corpseUuid)
        
        // console.log(`Corpse ${corpseUuid} registered with ITEMS in dimension ${currentDim}`)
    }
})
