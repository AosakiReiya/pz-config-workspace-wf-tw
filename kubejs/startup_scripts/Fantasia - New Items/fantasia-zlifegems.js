StartupEvents.registry('item', event => {

  event.create('lesser_heart_rhodonite')
  .maxStackSize(32)
  .displayName("次級生命薔薇輝石")
  .texture('fantasia:item/lesser_heart_rhodonite');

});

ItemEvents.modification(event => {

  event.modify('miningmaster:heart_rhodonite', item => {
    item.foodProperties = food => {
        food.alwaysEdible(true)
    }
  });

  event.modify('kubejs:lesser_heart_rhodonite', item => {
    item.foodProperties = food => {
        food.alwaysEdible(true)
    }
  });

});