ItemEvents.tooltip(event => {

  event.add(global.heavyHelms, '§8沉重負載')
  event.add(global.heavyChest, '§8沉重負載')
  event.add(global.heavyLegs, '§8沉重負載')
  event.add(global.heavyBoots, '§8沉重負載')

  event.add(global.medHelms, '§8適中負載')
  event.add(global.medChest, '§8適中負載')
  event.add(global.medLegs, '§8適中負載')
  event.add(global.medBoots, '§8適中負載')

  event.add('fleshz:hide', '§8§o可加鹽烹製。')

  event.add('fleshz:prepared_hide', '§8§o可在§r §7儲木架§r §o§8上晾乾，變為皮革。')

  event.add('lilis_lucky_lures:fishing_net', '§8§o可從此水域中釣起殘骸。')

  event.add('quark:soul_bead', '§8§o一股奇異的能量從中汲取而出。')

  event.add(['kubejs:primitive_tongs', 'kubejs:smithing_glove'], '§8§o手持時可防止玩家在處理熾熱金屬時被灼傷。')

  event.addAdvanced('coinsje:gold_coin', (item, advanced, text) => {
    if (!event.shift) {
      text.add(1, Text.gray('按住§f§lSHIFT§r以檢視更多資訊'))
    } else {
      text.add(1, Text.gray('§8§o可作為貨幣使用，體積小巧，能裝入種子袋中。'))
    }
  })

  event.addAdvanced('#curios:spellbook', (item, advanced, text) => {
    if (!event.shift) {
      text.add(1, Text.gray('按住§f§lSHIFT§r以檢視更多資訊'))
    } else {
      text.add(1, Text.yellow('用於儲存多個法術的卷軸，以便連續施法。'))
    }
  })

  event.addAdvanced('kubejs:lesser_heart_rhodonite', (item, advanced, text) => {
    if (!event.shift) {
      text.add(1, Text.gray('按住§f§lSHIFT§r以檢視更多資訊'))
    } else {
      text.add(1, Text.yellow('飲用後可治療自身。'))
    }
  })

  event.addAdvanced(['kubejs:soul_of_maledictus', 'kubejs:soul_of_scylla', 'kubejs:soul_of_ignis'], (item, advanced, text) => {
    if (!event.shift) {
      text.add(1, Text.gray('按住§f§lSHIFT§r以檢視更多資訊'))
    } else {
      text.add(1, Text.yellow('飲用後可從靈魂汲取巨大力量，或攜武器向大師鐵匠兌換以鍛造強力武器。'))
    }
  })

  event.addAdvanced(['kubejs:alluring_sunstone', 'kubejs:nimble_spinel', 'kubejs:rectifying_moonstone', 'kubejs:scornful_bloodstone', 'kubejs:tranquil_pearl', 'kubejs:vengeful_onyx'], (item, advanced, text) => {
    if (!event.shift) {
      text.add(1, Text.gray('§8按住Shift檢視說明'))
    } else {
      text.add(1, Text.white('§d在鍛造臺中與物品組合以附魔！'))
    }
  })
})

JEIEvents.information((e) => {

	e.addItem("minecraft:ghast_tear", [
		"這些惡魂之淚由下界的怨靈與咒靈掉落。",
	]);

});