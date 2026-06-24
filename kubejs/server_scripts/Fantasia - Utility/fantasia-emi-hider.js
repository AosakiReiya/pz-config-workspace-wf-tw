let itemsToHide = [
    /customnpcs/,
    /spawn_egg/,
    "structure_gel:building_tool",
    /structure_gel.*gel/,
    "structure_gel:data_handler",
    "structure_gel:dynamic_spawner",
    "citadel:debug",
    "citadel:citadel_book",
    "citadel:effect_item",
    "citadel:fancy_item",
    "citadel:icon_item",
    "moonlight:placeable_item",
    /epicknights_open_helms/,
    /backpacked/,
    "magistuarmoryaddon:opened_sallet",
    "kubejs:zombie_claw",
    "minecraft:brewing_stand",
    "minecraft:tipped_arrow",
    "overgeared:lingering_arrow"
]

ServerEvents.tags('item', event => {
    event.add('c:hidden_from_recipe_viewers', itemsToHide)
    event.remove('c:hidden_from_recipe_viewers', 'minecraft:copper_golem_spawn_egg');
})