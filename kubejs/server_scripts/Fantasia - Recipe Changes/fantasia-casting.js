ServerEvents.recipes(event => {

  event.custom({
    "type": "overgeared:item_to_tooltype",
    "item": [
      {
        "item": "minecraft:copper_ingot"
      },
      {
        "item": "minecraft:iron_ingot"
      },
      {
        "item": "overgeared:steel_ingot"
      }
    ],
    "tooltype": "ingot"
  })

  event.custom({
    "type": "overgeared:item_to_tooltype",
    "item": [
      {
        "item": "kubejs:stone_hammer_head"
      },
      {
        "item": "kubejs:iron_hammer_head"
      },
      {
        "item": "kubejs:steel_hammer_head"
      },
      {
        "item": "kubejs:diamond_hammer_head"
      }
    ],
    "tooltype": "excav_hammer"
  })

  event.custom({
    "type": "overgeared:item_to_tooltype",
    "item": [
      {
        "item": "kubejs:iron_excavator_head"
      },
      {
        "item": "kubejs:steel_excavator_head"
      },
      {
        "item": "kubejs:diamond_excavator_head"
      }
    ],
    "tooltype": "excavator"
  })

  event.custom({
    "type": "overgeared:item_to_tooltype",
    "item": [
      {
        "item": "kubejs:stone_tip"
      },
      {
        "item": "kubejs:iron_spearhead"
      },
      {
        "item": "kubejs:steel_spearhead"
      },
      {
        "item": "kubejs:diamond_spearhead"
      }
    ],
    "tooltype": "spearhead"
  })

  event.custom({
    "type": "overgeared:item_to_tooltype",
    "item": [
      {
        "item": "kubejs:iron_blade"
      },
      {
        "item": "kubejs:steel_blade"
      },
      {
        "item": "kubejs:diamond_blade"
      }
    ],
    "tooltype": "blade"
  })

  event.custom({
    "type": "overgeared:item_to_tooltype",
    "item": [
      {
        "item": "kubejs:iron_cleaver_blade"
      },
      {
        "item": "kubejs:diamond_cleaver_blade"
      }
    ],
    "tooltype": "cleaver"
  })

})

ServerEvents.recipes(event => {

  event.remove({ type: 'overgeared:cast_smelting' })
  event.remove({ type: 'overgeared:nbt_smelting' })

  let castTypes = ["overgeared:cast_blasting", "overgeared:casting"]

  castTypes.forEach(ct => {

    event.custom({
      "type": `${ct}`,
      "category": "misc",
      "cookingtime": 75,
      "experience": 0.7,
      "input": {
        "copper": 9
      },
      "need_polishing": true,
      "result": {
        "item": "minecraft:copper_ingot"
      },
      "tool_type": "ingot"
    })

    event.custom({
      "type": `${ct}`,
      "category": "misc",
      "cookingtime": 150,
      "experience": 0.7,
      "input": {
        "iron": 9
      },
      "need_polishing": false,
      "result": {
        "item": "minecraft:iron_ingot"
      },
      "tool_type": "ingot"
    })

    event.custom({
      "type": `${ct}`,
      "category": "misc",
      "cookingtime": 150,
      "experience": 0.7,
      "input": {
        "iron": 63
      },
      "need_polishing": true,
      "result": {
        "item": "kubejs:iron_hammer_head"
      },
      "tool_type": "excav_hammer"
    })

    event.custom({
      "type": `${ct}`,
      "category": "misc",
      "cookingtime": 150,
      "experience": 0.7,
      "input": {
        "iron": 63
      },
      "need_polishing": true,
      "result": {
        "item": "kubejs:iron_excavator_head"
      },
      "tool_type": "excavator"
    })

    event.custom({
      "type": `${ct}`,
      "category": "misc",
      "cookingtime": 150,
      "experience": 0.7,
      "input": {
        "iron": 9
      },
      "need_polishing": true,
      "result": {
        "item": "kubejs:iron_spearhead"
      },
      "tool_type": "spearhead"
    })

    event.custom({
      "type": `${ct}`,
      "category": "misc",
      "cookingtime": 150,
      "experience": 0.7,
      "input": {
        "iron": 9
      },
      "need_polishing": true,
      "result": {
        "item": "kubejs:iron_blade"
      },
      "tool_type": "blade"
    })

    event.custom({
      "type": `${ct}`,
      "category": "misc",
      "cookingtime": 150,
      "experience": 0.7,
      "input": {
        "iron": 9
      },
      "need_polishing": true,
      "result": {
        "item": "kubejs:iron_cleaver_blade"
      },
      "tool_type": "cleaver"
    })

    event.custom({
      "type": `${ct}`,
      "category": "misc",
      "cookingtime": 300,
      "experience": 0.7,
      "input": {
        "steel": 9
      },
      "need_polishing": false,
      "result": {
        "item": "overgeared:steel_ingot"
      },
      "tool_type": "ingot"
    })

    event.custom({
      "type": `${ct}`,
      "category": "misc",
      "cookingtime": 300,
      "experience": 0.7,
      "input": {
        "steel": 63
      },
      "need_polishing": true,
      "result": {
        "item": "kubejs:steel_hammer_head"
      },
      "tool_type": "excav_hammer"
    })

    event.custom({
      "type": `${ct}`,
      "category": "misc",
      "cookingtime": 300,
      "experience": 0.7,
      "input": {
        "steel": 63
      },
      "need_polishing": true,
      "result": {
        "item": "kubejs:steel_excavator_head"
      },
      "tool_type": "excavator"
    })

    event.custom({
      "type": `${ct}`,
      "category": "misc",
      "cookingtime": 300,
      "experience": 0.7,
      "input": {
        "steel": 9
      },
      "need_polishing": true,
      "result": {
        "item": "kubejs:steel_spearhead"
      },
      "tool_type": "spearhead"
    })

    event.custom({
      "type": `${ct}`,
      "category": "misc",
      "cookingtime": 300,
      "experience": 0.7,
      "input": {
        "steel": 9
      },
      "need_polishing": true,
      "result": {
        "item": "kubejs:steel_blade"
      },
      "tool_type": "blade"
    })

    event.custom({
      "type": `${ct}`,
      "category": "misc",
      "cookingtime": 300,
      "experience": 0.7,
      "input": {
        "steel": 9
      },
      "need_polishing": true,
      "result": {
        "item": "kubejs:steel_cleaver_blade"
      },
      "tool_type": "cleaver"
    })

  });

})