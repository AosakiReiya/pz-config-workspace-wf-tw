NetworkEvents.dataReceived("right_click_empty", e => {
    const {player, data} = e

    /**@type {String} */
    const hand = data.hand

    if (typeof hand !== "string") return
   
    if (!player || !player.isPlayer()) return

    if (toggleShipSails) toggleShipSails(player, hand)
})