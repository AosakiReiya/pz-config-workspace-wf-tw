/* ========================================================================
=== Client Script ===
======================================================================== */


/*
let ermirasFavorConfig = {
    itemUseCharges: 3, // global.specialItemsConfig.ermirasFavor.itemUseCharges,
    remainingRevives: 1, // global.specialItemsConfig.ermirasFavor.remainingRevives,
    maxDistance: 100, // global.specialItemsConfig.ermirasFavor.maxDistance,
    ermirasFavorDuration: 6000 // global.specialItemsConfig.ermirasFavor.ermirasFavorDuration
}
*/


let ermirasFavorConfig = global.specialItemsConfig.ermirasFavor

ItemEvents.tooltip(event => {

    event.addAdvanced("kubejs:ermiras_favor", (item, advanced, text) => {
        const tag = item.getOrCreateTag()
        
        let currentCharges = 3

        if (!tag.contains("charges")) {
            currentCharges = ermirasFavorConfig.itemUseCharges
        } else {
            currentCharges = tag.getInt("charges")
        }

        let charges = Text.translate("tooltip.kubejs.ermiras_favor.charges", `${currentCharges}/${ermirasFavorConfig.itemUseCharges}`)
        
        text.add(charges.green())

        let desc1Key
        
        if (ermirasFavorConfig.revivesPerUse === 1) {
            desc1Key = "tooltip.kubejs.ermiras_favor.desc1_singular"
            text.add(Text.translate(desc1Key).green())
        } else {
            desc1Key = "tooltip.kubejs.ermiras_favor.desc1_plural"
            text.add(Text.translate(desc1Key, ermirasFavorConfig.revivesPerUse.toFixed(0)).green())
        }

        if (!event.shift) {
            text.add(Text.gray('按住§f§lSHIFT§r以檢視更多資訊'))
        } else {

            const dist = ermirasFavorConfig.maxDistance.toFixed(0)

            const days = (ermirasFavorConfig.ermirasFavorDuration / 24000).toFixed(0)

            const text2 = Text.translate("tooltip.kubejs.ermiras_favor.desc2").green()
            const text3 = Text.translate("tooltip.kubejs.ermiras_favor.desc3", dist).green()
            const text4 = Text.translate("tooltip.kubejs.ermiras_favor.desc4", days).green()

            text.add(text2)
            text.add(text3)
            text.add(text4)
        }
    })
})

NetworkEvents.dataReceived("ErmirasFavorActivation", e => {
    Client.gameRenderer.displayItemActivation("kubejs:ermiras_favor");
})