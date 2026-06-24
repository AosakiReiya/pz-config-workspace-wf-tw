StartupEvents.registry('block', event => {
  event.create('steel_pallet', 'cardinal')
    .displayName('鋼托盤')
    .soundType('metal')
    .hardness(5)
    .resistance(30)
    .requiresTool(true)
    .tagBlock('minecraft:mineable/pickaxe')
    .tagBlock('minecraft:needs_iron_tool');

  event.create('silver_pallet', 'cardinal')
    .displayName('銀托盤')
    .soundType('metal')
    .hardness(3)
    .resistance(6)
    .requiresTool(true)
    .tagBlock('minecraft:mineable/pickaxe')
    .tagBlock('minecraft:needs_iron_tool');

})