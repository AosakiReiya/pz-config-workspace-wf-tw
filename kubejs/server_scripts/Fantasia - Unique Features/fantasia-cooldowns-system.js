/* ==========================================================================================
=== Server Script ===
========================================================================================== */


PlayerEvents.tick(e => {
    const { player, level } = e

    if (level.time % 20 !== 0) return

    const data = player.persistentData

    if (!data.playerCooldowns) {
        data.playerCooldowns = {};
    }

    const cooldowns = data.playerCooldowns

    if (Object.keys(cooldowns).length === 0) return;
    

    for (let id in cooldowns) {
        cooldowns[id] -= 1;

        if (cooldowns[id] <= 0) {
            delete cooldowns[id]
        }
    }

    global.FantasiaPlayerSync.cooldowns(player)
})


// Login Sync
PlayerEvents.loggedIn(e => {
    const player = e.player;

    global.FantasiaPlayerSync.playerPersistentData(e.player)
});


// respawn Sync
PlayerEvents.respawned(e => {

    global.FantasiaPlayerSync.playerPersistentData(e.player)
});

