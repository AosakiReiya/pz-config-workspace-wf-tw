LootJS.modifiers((event) => {

  let illagers =
    [
      "minecraft:pillager",
      "minecraft:vindicator",
      "minecraft:evoker",
      "takesapillage:archer",
      "takesapillage:legioner",
      "savage_and_ravage:executioner",
      "savage_and_ravage:iceologer",
      "savage_and_ravage:trickster"
    ]

  illagers.forEach(illager => {
    event.addEntityLootModifier(illager)
      .addLoot("kubejs:lesser_heart_rhodonite").randomChance(0.4);
  })

});