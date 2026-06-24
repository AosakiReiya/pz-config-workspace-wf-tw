StartupEvents.registry('item', event => {

  event.create('netherite_alloy')
    .maxStackSize(64)
    .displayName("下界合金")
    .texture('fantasia:item/netherite_alloy')

  event.create('unfinished_netherite_ingot')
    .maxStackSize(64)
    .displayName("未完成下界合金錠")
    .texture('fantasia:item/unfinished_netherite_ingot')
})