ItemEvents.tooltip(event => {

    event.addAdvanced("kubejs:corpse_compass", (item, advanced, text) => {
        const tag = item.getOrCreateTag()
    
        if (tag.contains("targetDim") && tag.getString("targetDim") !== Client.player.level.getDimension().toString()) {
     
           
        } else if (!tag.contains("targetX")) {
            // let noTargetText = Text.translate("tooltip.kubejs.corpse_compass.no_target").red()

            // text.add(noTargetText)
            
        } else if (tag.contains("targetName")) {
            let corpsename = tag.contains("targetName") ? tag.getString("targetName") : "未知玩家"
            let corpsenameText = Text.translate("tooltip.kubejs.corpse_compass.corpse_name", corpsename).green()

            let targetX = tag.getInt("targetX").toFixed(0) || 0
            let targetY = tag.getInt("targetY").toFixed(0) || 0
            let targetZ = tag.getInt("targetZ").toFixed(0) || 0

            text.add(corpsenameText)
            
            let coordsText = Text.translatable( 
                "tooltip.kubejs.corpse_compass.corpse_location",
                targetX,
                targetY,
                targetZ
            )
            text.add(coordsText)
        }
    })
})

/*
NetworkEvents.dataReceived("corpse_compass_use", e => {
    let {data, player} = e
    let {hand, nbt} = data
    
    if (hand === "MAIN_HAND") {
        player.mainHandItem.setNbt(nbt) 
    } else {
        player.offHandItem.setNbt(nbt) 
    }
})
*/