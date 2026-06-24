ServerEvents.tags("item", event => {

  event.add(
    "forge:sites/villager_job",
    [
      "hexerei:mixing_cauldron",
      "easel_does_it:easel",
      "sawmill:sawmill"
    ])

  event.add("c:villager_job_sites", "hexerei:mixing_cauldron")

  event.remove("forge:sites/villager_job", "minecraft:brewing_stand")
  event.remove("c:villager_job_sites", "minecraft:brewing_stand")

})