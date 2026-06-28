ItemEvents.modification(event => {

  event.modify("mynethersdelight:bread_loaf", item => {
    item.maxStackSize = 1
  })


  event.modify('supplementaries:bomb', item => {
    item.maxStackSize = 16
    item.rarity = 'UNCOMMON'
  })

  event.modify('supplementaries:bomb_blue', item => {
    item.maxStackSize = 16
    item.rarity = 'RARE'
  })

  event.modify('spelunkery:mineomite', item => {
    item.maxStackSize = 16
  })

  let raremats = [
    'irons_spellbooks:lightning_bottle',
    'irons_spellbooks:cinder_essence',
    'minecraft:diamond',
    /minecraft:diamond_.*/,
    /spartanweaponry:diamond_.*/,
    /kubejs:diamond_.*/,
    /kubejs:heated_diamond_.*/,
    /kubejs:diamond_.*_two_handed/
  ]

  raremats.forEach(r => event.modify(r, item => {
    item.rarity = 'RARE'
  }))

  let epicmats = [
    'irons_spellbooks:dragonskin',
    /minecraft:netherite_.*/,
    /spartanweaponry:netherite_.*/,
    'kubejs:netherite_alloy',
    'kubejs:unfinished_netherite_ingot',
    /icarus:.*/,
    'irons_spellbooks:pyrium_staff',
    'irons_spellbooks:legionnaire_flamberge',
    'irons_spellbooks:hellrazor',
    'irons_spellbooks:pyrium_ingot',
    'irons_spellbooks:betrayer_signet',
    'irons_spellbooks:music_disc_flame_still_burns',
    'irons_spellbooks:disc_fragment_flame_still_burns',
    'irons_spellbooks:cinderous_soulcaller',
    'irons_spellbooks:cinderous_soul_rune',
    /kubejs:netherite_.*_two_handed/
  ]

  epicmats.forEach(e => event.modify(e, item => {
    item.rarity = 'EPIC'
  }))

  event.modify('medieval_healing:bandage', item => {
    item.maxStackSize = 16
  })

  event.modify('medieval_healing:healing_wrap', item => {
    item.maxStackSize = 4
  })

  event.modify('medieval_healing:leather_binding', item => {
    item.maxStackSize = 4
  })

  event.modify('medieval_healing:herbal_tonic', item => {
    item.maxStackSize = 4
  })

  event.modify('medieval_healing:herbal_medicine', item => {
    item.foodProperties = food => {
      food.fastToEat()
    }
  })

  event.modify('netherexp:wraithing_flesh', item => {
    item.foodProperties = food => {
      food.alwaysEdible(true)
    }
  })

});

const REMOVED_TABS = [
    'customnpcs',
]

REMOVED_TABS.forEach(tab => {
    StartupEvents.modifyCreativeTab(tab, event => {
        event.remove(Ingredient.all)
        event.removeDisplay(Ingredient.all)
    })
})