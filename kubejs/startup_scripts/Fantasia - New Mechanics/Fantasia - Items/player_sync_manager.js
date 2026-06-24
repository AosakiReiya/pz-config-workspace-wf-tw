const FantasiaPlayerSync = {
    playerPersistentData(player) {
        
        this.cooldowns(player)
        this.itemState(player)
    },

    cooldowns(player) {

        player.sendData("fantasia:sync_cooldowns", {
            cooldowns: player.persistentData.playerCooldowns || {}
        })
    },

    itemState(player) {
        player.sendData("fantasia:sync_item_state", {
            katana: player.persistentData.bloodKatanaStacks || 0
        })
    },

    /*
    configs(player) {
        player.sendData("sync_configs", {
            ermira: global.ErmirasFavourConfig,
            blood_katana: global.BloodKatanaConfig // example
        })
    }
    */
}


global.FantasiaPlayerSync = FantasiaPlayerSync


ForgeEvents.onEvent('net.minecraftforge.event.entity.player.PlayerEvent$PlayerChangedDimensionEvent', e => {
    FantasiaPlayerSync.playerPersistentData(e.entity)
})