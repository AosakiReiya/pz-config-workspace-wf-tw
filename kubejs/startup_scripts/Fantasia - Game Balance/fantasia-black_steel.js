ItemEvents.toolTierRegistry(event => {
  event.add('black_steel', tier => {
    tier.uses = 750
    tier.speed = 8
    tier.attackDamageBonus = 3
    tier.level = 3
    tier.enchantmentValue = 10
    tier.repairIngredient = '#fantasia:ingots/black_steel'
  })
})

ItemEvents.modification(event => {
    event.modify('cataclysm:black_steel_pickaxe', item => {item.tier = 'black_steel'})
    event.modify('cataclysm:black_steel_axe', item => {item.tier = 'black_steel'})
    event.modify('cataclysm:black_steel_shovel', item => {item.tier = 'black_steel'})
    event.modify('cataclysm:black_steel_hoe', item => {item.tier = 'black_steel'})
})