StartupEvents.registry("item", event => {

  event.create("soul_of_maledictus")
  .texture("cataclysm:item/cursed_eye")
  .displayName("咒翼靈骸之魂")
  .maxStackSize(1)
  .food(food => {
    food
      .alwaysEdible()
  });

  event.create("soul_of_scylla")
  .texture("cataclysm:item/storm_eye")
  .displayName("錫拉之魂")
  .maxStackSize(1)
  .food(food => {
    food
      .alwaysEdible()
  });

  event.create("soul_of_ignis")
  .texture("cataclysm:item/flame_eye")
  .displayName("Ignis之魂")
  .maxStackSize(1)
  .food(food => {
    food
      .alwaysEdible()
  });
})