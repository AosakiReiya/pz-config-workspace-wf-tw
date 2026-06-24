/* ==========================================================================================
=== Client Script ===
========================================================================================== */


NetworkEvents.dataReceived("fantasia:sync_cooldowns", e => {
    let { data, player } = e;

    player.persistentData.playerCooldowns = data.cooldowns
})