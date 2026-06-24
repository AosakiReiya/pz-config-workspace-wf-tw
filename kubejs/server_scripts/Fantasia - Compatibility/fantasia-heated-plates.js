ServerEvents.recipes(event => {

  event.custom({
    "type": "overgeared:cooling",
    "input": {
      "item": "kubejs:heated_iron_plate"
    },
    "output": {
      "item": "overgeared:iron_plate"
    }
  })

  event.custom({
    "type": "overgeared:cooling",
    "input": {
      "item": "kubejs:heated_steel_plate"
    },
    "output": {
      "item": "overgeared:steel_plate"
    }
  })

  event.custom({
    "type": "overgeared:cooling",
    "input": {
      "item": "kubejs:heated_diamond_plate"
    },
    "output": {
      "item": "kubejs:diamond_plate"
    }
  })

  event.blasting('kubejs:heated_iron_plate', 'overgeared:iron_plate').xp(0.7).cookingTime(150);

  event.blasting('kubejs:heated_steel_plate', 'overgeared:steel_plate').xp(0.7).cookingTime(250);

  event.blasting('kubejs:heated_diamond_plate', 'kubejs:diamond_plate').xp(0.7).cookingTime(250);

});
