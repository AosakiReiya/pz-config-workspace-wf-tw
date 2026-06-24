ServerEvents.recipes(event => {

  // wither
    //bottling
  event.custom({
    "type": "hexerei:cauldron_emptying",
    "input": {
      "item": "minecraft:glass_bottle"
    },
    "fluid": {
      "fluid": "kubejs:decay_antidote",
      "amount": 500
    },
    "output": {
      "item": "netherexp:antidote",
      "nbt": "{Antidote: \"decay\", AntidoteEffect: \"netherexp:wither_immunity\", Duration: 60}",
      "count": 1
    }
  });

    //brewing
  event.custom({
    "type": "hexerei:fluid_mixing",
    "input": {
      "fluid": "kubejs:wither_oil"
    },
    "ingredients": [
      { "item": "netherexp:warped_wart" }
    ],
    "output": {
      "fluid": "kubejs:decay_antidote"
    },
    "heatRequirement": "heated"
  });

  // poison
    //bottling
  event.custom({
    "type": "hexerei:cauldron_emptying",
    "input": {
      "item": "minecraft:glass_bottle"
    },
    "fluid": {
      "fluid": "kubejs:poison_antidote",
      "amount": 500
    },
    "output": {
      "item": "netherexp:antidote",
      "nbt": "{Antidote: \"poison\", AntidoteEffect: \"netherexp:poison_immunity\", Duration: 120}",
      "count": 1
    }
  });

    //brewing
  event.custom({
    "type": "hexerei:fluid_mixing",
    "input": {
      "fluid": "hexerei:potion",
        "nbt": {
          "Bottle": "REGULAR",
          "Potion": "minecraft:poison"
        }
    },
    "ingredients": [
      { "item": "netherexp:warped_wart" }
    ],
    "output": {
      "fluid": "kubejs:poison_antidote"
    },
    "heatRequirement": "heated"
  });

});