ServerEvents.recipes(event => {

//charcoal recipe change
  event.remove({id:'quark:tweaks/crafting/utility/misc/charcoal_to_black_dye'})

  event.shapeless(
    Item.of('minecraft:black_dye', 1), [
      '4x spelunkery:charcoal_lump'
    ])


//lapis blue dye adjustment
  event.remove({id:'minecraft:blue_dye'})

  event.shapeless(
    Item.of('minecraft:blue_dye', 1), [
      '3x spelunkery:lapis_lazuli_shard'
    ])


//woolen fabric
   event.remove({id:'magistuarmory:woolen_fabric_from_wool'})

  event.shaped(
    Item.of('magistuarmory:woolen_fabric', 3), [
      '   ',
      'AAA',
      '   '
    ], {
      A: 'minecraft:white_carpet'
    })


//tall yellow bioshroom adjustment
  event.remove({id:'regions_unexplored:yellow_dye_from_tall_yellow_bioshroom'})

  event.shapeless(
    Item.of('minecraft:yellow_dye', 1), [
      'regions_unexplored:yellow_bioshroom'
    ])





})