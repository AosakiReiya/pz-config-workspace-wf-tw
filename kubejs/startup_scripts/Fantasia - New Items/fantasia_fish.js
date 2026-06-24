StartupEvents.registry('block', event => {

  event.create('fish_bag')
    .displayName('袋裝魚')
    .soundType('wool')
    .hardness(0.8)
    .resistance(0.8)
	.tagBlock('forge:storage_blocks')
    .requiresTool(false)
})

StartupEvents.registry('item', event => {

  event.create('fish_pack')
    .displayName('魚包')

  event.create('sailfish')
    .displayName('旗魚')
    .food(food => {
      food
        .hunger(6)
        .saturation(0.3) 
      })
    .tag('tide:cookable/large_cooked_fish')
    .tag('forge:raw_fishes')
    .tag('forge:fish/foods/raw')
    .tag('c:foods/raw_fish')
    .tag('minecraft:fishes')
    .texture('tide:item/sailfish');

})