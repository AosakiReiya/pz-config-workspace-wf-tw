ServerEvents.tags('item', event => {
    event.add('fantasia:needles', ['kubejs:silver_needle', 'kubejs:steel_needle', 'kubejs:bone_needle']);
    event.add('fantasia:puff_and_slash_chestplates', ['magistuarmoryaddon:white_puff_and_slash_chestplate', 'magistuarmoryaddon:orange_puff_and_slash_chestplate', 'magistuarmoryaddon:magenta_puff_and_slash_chestplate', 'magistuarmoryaddon:light_blue_puff_and_slash_chestplate', 'magistuarmoryaddon:yellow_puff_and_slash_chestplate', 'magistuarmoryaddon:red_puff_and_slash_chestplate', 'magistuarmoryaddon:lime_puff_and_slash_chestplate', 'magistuarmoryaddon:pink_puff_and_slash_chestplate', 'magistuarmoryaddon:gray_puff_and_slash_chestplate', 'magistuarmoryaddon:light_gray_puff_and_slash_chestplate', 'magistuarmoryaddon:cyan_puff_and_slash_chestplate', 'magistuarmoryaddon:purple_puff_and_slash_chestplate', 'magistuarmoryaddon:blue_puff_and_slash_chestplate', 'magistuarmoryaddon:brown_puff_and_slash_chestplate', 'magistuarmoryaddon:green_puff_and_slash_chestplate', 'magistuarmoryaddon:black_puff_and_slash_chestplate', 'magistuarmoryaddon:red_puff_and_slash_chestplate']);
    event.add('fantasia:puff_and_slash_leggings', ['magistuarmoryaddon:white_puff_and_slash_leggings', 'magistuarmoryaddon:orange_puff_and_slash_leggings', 'magistuarmoryaddon:magenta_puff_and_slash_leggings', 'magistuarmoryaddon:light_blue_puff_and_slash_leggings', 'magistuarmoryaddon:yellow_puff_and_slash_leggings', 'magistuarmoryaddon:red_puff_and_slash_leggings', 'magistuarmoryaddon:lime_puff_and_slash_leggings', 'magistuarmoryaddon:pink_puff_and_slash_leggings', 'magistuarmoryaddon:gray_puff_and_slash_leggings', 'magistuarmoryaddon:light_gray_puff_and_slash_leggings', 'magistuarmoryaddon:cyan_puff_and_slash_leggings', 'magistuarmoryaddon:purple_puff_and_slash_leggings', 'magistuarmoryaddon:blue_puff_and_slash_leggings', 'magistuarmoryaddon:brown_puff_and_slash_leggings', 'magistuarmoryaddon:green_puff_and_slash_leggings', 'magistuarmoryaddon:black_puff_and_slash_leggings', 'magistuarmoryaddon:red_puff_and_slash_leggings']);
    event.add('fantasia:puff_and_slash_sleeves_decoration', ['magistuarmoryaddon:white_puff_and_slash_sleeves_decoration', 'magistuarmoryaddon:orange_puff_and_slash_sleeves_decoration', 'magistuarmoryaddon:magenta_puff_and_slash_sleeves_decoration', 'magistuarmoryaddon:light_blue_puff_and_slash_sleeves_decoration', 'magistuarmoryaddon:yellow_puff_and_slash_sleeves_decoration', 'magistuarmoryaddon:red_puff_and_slash_sleeves_decoration', 'magistuarmoryaddon:lime_puff_and_slash_sleeves_decoration', 'magistuarmoryaddon:pink_puff_and_slash_sleeves_decoration', 'magistuarmoryaddon:gray_puff_and_slash_sleeves_decoration', 'magistuarmoryaddon:light_gray_puff_and_slash_sleeves_decoration', 'magistuarmoryaddon:cyan_puff_and_slash_sleeves_decoration', 'magistuarmoryaddon:purple_puff_and_slash_sleeves_decoration', 'magistuarmoryaddon:blue_puff_and_slash_sleeves_decoration', 'magistuarmoryaddon:brown_puff_and_slash_sleeves_decoration', 'magistuarmoryaddon:green_puff_and_slash_sleeves_decoration', 'magistuarmoryaddon:black_puff_and_slash_sleeves_decoration', 'magistuarmoryaddon:red_puff_and_slash_sleeves_decoration']);
    event.add('fantasia:landsknecht_hat_decoration', ['magistuarmoryaddon:landsknecht_white_hat_decoration', 'magistuarmoryaddon:landsknecht_orange_hat_decoration', 'magistuarmoryaddon:landsknecht_magenta_hat_decoration', 'magistuarmoryaddon:landsknecht_light_blue_hat_decoration', 'magistuarmoryaddon:landsknecht_yellow_hat_decoration', 'magistuarmoryaddon:landsknecht_red_hat_decoration', 'magistuarmoryaddon:landsknecht_lime_hat_decoration', 'magistuarmoryaddon:landsknecht_pink_hat_decoration', 'magistuarmoryaddon:landsknecht_gray_hat_decoration', 'magistuarmoryaddon:landsknecht_light_gray_hat_decoration', 'magistuarmoryaddon:landsknecht_cyan_hat_decoration', 'magistuarmoryaddon:landsknecht_purple_hat_decoration', 'magistuarmoryaddon:landsknecht_blue_hat_decoration', 'magistuarmoryaddon:landsknecht_brown_hat_decoration', 'magistuarmoryaddon:landsknecht_green_hat_decoration', 'magistuarmoryaddon:landsknecht_black_hat_decoration', 'magistuarmoryaddon:landsknecht_red_hat_decoration']);
    event.add('fantasia:tongs_tongs', ['overgeared:steel_tongs', 'overgeared:iron_tongs']);
});

ServerEvents.recipes((event) => {
    //File
    event.custom({
        "type": "overgeared:crafting_shapeless",
        "category": "tool",
        "ingredients": [
            {
                "item": "kubejs:file_head"
            },
            {
                "item": "spartanweaponry:handle"
            }
        ],
        "result": {
            "item": "sewingkit:file"
        }
    });

    //Needles
    event.shapeless('kubejs:steel_needle', ['sewingkit:file', 'overgeared:steel_ingot']);
    event.shapeless('kubejs:bone_needle', ['sewingkit:file', 'minecraft:bone']);
    event.shapeless('kubejs:silver_needle', ['sewingkit:file', 'galosphere:silver_ingot']);
    event.shapeless(
        Item.of('kubejs:bone_needle', 1),
        [
            'minecraft:bone',
            '#farmersdelight:tools/knives'
        ]
    ).damageIngredient("#farmersdelight:tools/knives", 1);

    //Leather
    event.custom({
        "type": "sewingkit:sewing",
        "materials": [
            {
                "count": 5,
                "ingredient": {
                    "item": "minecraft:leather"
                }
            },
            {
                "count": 3,
                "ingredient": {
                    "item": "minecraft:string"
                }
            }
        ],
        "result": {
            "item": "minecraft:leather_helmet"
        },
        "tool": [{
            "tag": "fantasia:needles"
        }],
        "pattern": [{
            "item": "minecraft:shears"
        }]
    }),
        event.custom({
            "type": "sewingkit:sewing",
            "materials": [
                {
                    "count": 8,
                    "ingredient": {
                        "item": "minecraft:leather"
                    }
                },
                {
                    "count": 4,
                    "ingredient": {
                        "item": "minecraft:string"
                    }
                }
            ],
            "result": {
                "item": "minecraft:leather_chestplate"
            },
            "tool": [{
                "tag": "fantasia:needles"
            }],
            "pattern": [{
                "item": "minecraft:shears"
            }]
        }),
        event.custom({
            "type": "sewingkit:sewing",
            "materials": [
                {
                    "count": 7,
                    "ingredient": {
                        "item": "minecraft:leather"
                    }
                },
                {
                    "count": 4,
                    "ingredient": {
                        "item": "minecraft:string"
                    }
                }
            ],
            "result": {
                "item": "minecraft:leather_leggings"
            },
            "tool": [{
                "tag": "fantasia:needles"
            }],
            "pattern": [{
                "item": "minecraft:shears"
            }]
        }),
        event.custom({
            "type": "sewingkit:sewing",
            "materials": [
                {
                    "count": 4,
                    "ingredient": {
                        "item": "minecraft:leather"
                    }
                },
                {
                    "count": 3,
                    "ingredient": {
                        "item": "minecraft:string"
                    }
                }
            ],
            "result": {
                "item": "minecraft:leather_boots"
            },
            "tool": [{
                "tag": "fantasia:needles"
            }],
            "pattern": [{
                "item": "minecraft:shears"
            }]
        }),

        //Kaftan
        event.custom({
            "type": "sewingkit:sewing",
            "materials": [
                {
                    "count": 5,
                    "ingredient": {
                        "item": "magistuarmory:woolen_fabric"
                    }
                },
                {
                    "count": 3,
                    "ingredient": {
                        "item": "string"
                    }
                }
            ],
            "result": {
                "item": "slavicarmory:kaftan"
            },
            "tool": [
                {
                    "tag": "fantasia:needles"
                }
            ],
            "pattern": [
                {
                    "item": "minecraft:shears"
                }
            ]
        });
    event.custom({
        "type": "sewingkit:sewing",
        "materials": [
            {
                "count": 2,
                "ingredient": {
                    "item": "magistuarmory:woolen_fabric"
                }
            },
            {
                "count": 2,
                "ingredient": {
                    "item": "minecraft:leather"
                }
            },
            {
                "count": 2,
                "ingredient": {
                    "item": "string"
                }
            },
            {
                "count": 2,
                "ingredient": {
                    "item": "magistuarmory:leather_strip"
                }
            }
        ],
        "result": {
            "item": "slavicarmory:kaftan_boots"
        },
        "tool": [
            {
                "tag": "fantasia:needles"
            }
        ],
        "pattern": [
            {
                "item": "minecraft:shears"
            }
        ]
    });

    //Shapka
    event.custom({
        "type": "sewingkit:sewing",
        "materials": [
            {
                "count": 3,
                "ingredient": {
                    "item": "magistuarmory:woolen_fabric"
                }
            },
            {
                "count": 3,
                "ingredient": {
                    "item": "string"
                }
            },
            {
                "count": 3,
                "ingredient": {
                    "tag": "minecraft:wool"
                }
            }
        ],
        "result": {
            "item": "slavicarmory:shapka"
        },
        "tool": [
            {
                "tag": "fantasia:needles"
            }
        ],
        "pattern": [
            {
                "item": "minecraft:shears"
            }
        ]
    });

    //Gambeson
    event.custom({
        "type": "sewingkit:sewing",
        "materials": [
            {
                "count": 8,
                "ingredient": {
                    "item": "magistuarmory:woolen_fabric"
                }
            },
            {
                "count": 4,
                "ingredient": {
                    "item": "minecraft:string"
                }
            },
            {
                "count": 2,
                "ingredient": {
                    "item": "magistuarmory:leather_strip"
                }
            }
        ],
        "result": {
            "item": "magistuarmory:gambeson_chestplate"
        },
        "tool": [
            {
                "tag": "fantasia:needles"
            }
        ],
        "pattern": [
            {
                "item": "minecraft:shears"
            }
        ]
    });
    event.custom({
        "type": "sewingkit:sewing",
        "materials": [
            {
                "count": 2,
                "ingredient": {
                    "item": "magistuarmory:woolen_fabric"
                }
            },
            {
                "count": 2,
                "ingredient": {
                    "item": "minecraft:leather"
                }
            },
            {
                "count": 2,
                "ingredient": {
                    "item": "string"
                }
            },
            {
                "count": 2,
                "ingredient": {
                    "item": "magistuarmory:leather_strip"
                }
            }
        ],
        "result": {
            "item": "magistuarmory:gambeson_boots"
        },
        "tool": [
            {
                "tag": "fantasia:needles"
            }
        ],
        "pattern": [
            {
                "item": "minecraft:shears"
            }
        ]
    });

    //Rus Gambeson
    event.custom({
        "type": "sewingkit:sewing",
        "materials": [
            {
                "count": 8,
                "ingredient": {
                    "item": "magistuarmory:woolen_fabric"
                }
            },
            {
                "count": 4,
                "ingredient": {
                    "item": "minecraft:string"
                }
            },
            {
                "count": 4,
                "ingredient": {
                    "item": "magistuarmory:leather_strip"
                }
            }
        ],
        "result": {
            "item": "slavicarmory:rus_gambeson"
        },
        "tool": [
            {
                "tag": "fantasia:needles"
            }
        ],
        "pattern": [
            {
                "item": "minecraft:shears"
            }
        ]
    });
    event.custom({
        "type": "sewingkit:sewing",
        "materials": [
            {
                "count": 2,
                "ingredient": {
                    "item": "magistuarmory:woolen_fabric"
                }
            },
            {
                "count": 2,
                "ingredient": {
                    "item": "minecraft:leather"
                }
            },
            {
                "count": 2,
                "ingredient": {
                    "item": "string"
                }
            },
            {
                "count": 2,
                "ingredient": {
                    "item": "magistuarmory:leather_strip"
                }
            }
        ],
        "result": {
            "item": "slavicarmory:rus_gambeson_boots"
        },
        "tool": [
            {
                "tag": "fantasia:needles"
            }
        ],
        "pattern": [
            {
                "item": "minecraft:shears"
            }
        ]
    });

    //Chained Gambeson
    event.custom({
        "type": "sewingkit:sewing",
        "materials": [
            {
                "count": 1,
                "ingredient": {
                    "item": "magistuarmory:gambeson_chestplate"
                }
            },
            {
                "count": 4,
                "ingredient": {
                    "item": "magistuarmory:small_steel_plate"
                }
            },
            {
                "count": 8,
                "ingredient": {
                    "item": "magistuarmory:steel_ring"
                }
            }
        ],
        "result": {
            "item": "magistuarmoryaddon:chained_gambeson"
        },
        "tool": [
            {
                "tag": "overgeared:smithing_hammers"
            }
        ],
        "pattern": [
            {
                "tag": "fantasia:tongs_tongs"
            }
        ]
    });
    event.custom({
        "type": "sewingkit:sewing",
        "materials": [
            {
                "count": 1,
                "ingredient": {
                    "item": "magistuarmory:gambeson_boots"
                }
            },
            {
                "count": 2,
                "ingredient": {
                    "item": "magistuarmory:small_steel_plate"
                }
            },
            {
                "count": 4,
                "ingredient": {
                    "item": "magistuarmory:steel_ring"
                }
            }
        ],
        "result": {
            "item": "magistuarmoryaddon:chained_gambeson_boots"
        },
        "tool": [
            {
                "tag": "overgeared:smithing_hammers"
            }
        ],
        "pattern": [
            {
                "tag": "fantasia:tongs_tongs"
            }
        ]
    });

    //Coif
    event.custom({
        "type": "sewingkit:sewing",
        "materials": [
            {
                "count": 5,
                "ingredient": {
                    "item": "magistuarmory:woolen_fabric"
                }
            },
            {
                "count": 2,
                "ingredient": {
                    "item": "string"
                }
            }
        ],
        "result": {
            "item": "magistuarmory:coif"
        },
        "tool": [
            {
                "tag": "fantasia:needles"
            }
        ],
        "pattern": [
            {
                "item": "minecraft:shears"
            }
        ]
    });
    event.custom({
        "type": "sewingkit:sewing",
        "materials": [
            {
                "count": 3,
                "ingredient": {
                    "item": "magistuarmory:woolen_fabric"
                }
            },
            {
                "count": 2,
                "ingredient": {
                    "item": "minecraft:string"
                }
            }
        ],
        "result": {
            "item": "magistuarmoryaddon:linen_coif"
        },
        "tool": [
            {
                "tag": "fantasia:needles"
            }
        ],
        "pattern": [
            {
                "item": "minecraft:shears"
            }
        ]
    });

    //Pantyhose
    event.custom({
        "type": "sewingkit:sewing",
        "materials": [
            {
                "count": 7,
                "ingredient": {
                    "item": "magistuarmory:woolen_fabric"
                }
            },
            {
                "count": 3,
                "ingredient": {
                    "item": "string"
                }
            }
        ],
        "result": {
            "item": "magistuarmory:pantyhose"
        },
        "tool": [
            {
                "tag": "fantasia:needles"
            }
        ],
        "pattern": [
            {
                "item": "minecraft:shears"
            }
        ]
    });
    event.custom({
        "type": "sewingkit:sewing",
        "materials": [
            {
                "count": 7,
                "ingredient": {
                    "item": "magistuarmory:woolen_fabric"
                }
            },
            {
                "count": 3,
                "ingredient": {
                    "item": "string"
                }
            }
        ],
        "result": {
            "item": "magistuarmory:cuirassier_leggings"
        },
        "tool": [
            {
                "tag": "fantasia:needles"
            }
        ],
        "pattern": [
            {
                "item": "minecraft:shears"
            }
        ]
    });

    //Tunic
    event.custom({
        "type": "sewingkit:sewing",
        "materials": [
            {
                "count": 7,
                "ingredient": {
                    "item": "magistuarmory:woolen_fabric"
                }
            },
            {
                "count": 1,
                "ingredient": {
                    "item": "magistuarmory:leather_strip"
                }
            },
            {
                "count": 4,
                "ingredient": {
                    "item": "string"
                }
            }
        ],
        "result": {
            "item": "magistuarmoryaddon:tunic"
        },
        "tool": [
            {
                "tag": "fantasia:needles"
            }
        ],
        "pattern": [
            {
                "item": "minecraft:shears"
            }
        ]
    });
    event.custom({
        "type": "sewingkit:sewing",
        "materials": [
            {
                "count": 2,
                "ingredient": {
                    "item": "magistuarmory:woolen_fabric"
                }
            },
            {
                "count": 2,
                "ingredient": {
                    "item": "minecraft:leather"
                }
            },
            {
                "count": 2,
                "ingredient": {
                    "item": "string"
                }
            },
            {
                "count": 2,
                "ingredient": {
                    "item": "magistuarmory:leather_strip"
                }
            }
        ],
        "result": {
            "item": "magistuarmoryaddon:tunic_boots"
        },
        "tool": [
            {
                "tag": "fantasia:needles"
            }
        ],
        "pattern": [
            {
                "item": "minecraft:shears"
            }
        ]
    });

    //Puff and slash chestplate
    event.custom({
        "type": "sewingkit:sewing",
        "materials": [
            {
                "count": 8,
                "ingredient": {
                    "item": "magistuarmory:woolen_fabric"
                }
            },
            {
                "count": 4,
                "ingredient": {
                    "item": "string"
                }
            }
        ],
        "result": {
            "item": "magistuarmoryaddon:white_puff_and_slash_chestplate"
        },
        "tool": [
            {
                "tag": "fantasia:needles"
            }
        ],
        "pattern": [
            {
                "item": "minecraft:shears"
            }
        ]
    });
    event.custom({
        "type": "sewingkit:sewing",
        "materials": [
            {
                "count": 1,
                "ingredient": {
                    "tag": "fantasia:puff_and_slash_chestplates"
                }
            },
            {
                "count": 1,
                "ingredient": {
                    "item": "minecraft:orange_dye"
                }
            }
        ],
        "result": {
            "item": "magistuarmoryaddon:orange_puff_and_slash_chestplate"
        },
        "tool": [
            {
                "item": "minecraft:brush"
            }
        ]
    });
    event.custom({
        "type": "sewingkit:sewing",
        "materials": [
            {
                "count": 1,
                "ingredient": {
                    "tag": "fantasia:puff_and_slash_chestplates"
                }
            },
            {
                "count": 1,
                "ingredient": {
                    "item": "minecraft:magenta_dye"
                }
            }
        ],
        "result": {
            "item": "magistuarmoryaddon:magenta_puff_and_slash_chestplate"
        },
        "tool": [
            {
                "item": "minecraft:brush"
            }
        ]
    });
    event.custom({
        "type": "sewingkit:sewing",
        "materials": [
            {
                "count": 1,
                "ingredient": {
                    "tag": "fantasia:puff_and_slash_chestplates"
                }
            },
            {
                "count": 1,
                "ingredient": {
                    "item": "minecraft:light_blue_dye"
                }
            }
        ],
        "result": {
            "item": "magistuarmoryaddon:light_blue_puff_and_slash_chestplate"
        },
        "tool": [
            {
                "item": "minecraft:brush"
            }
        ]
    });
    event.custom({
        "type": "sewingkit:sewing",
        "materials": [
            {
                "count": 1,
                "ingredient": {
                    "tag": "fantasia:puff_and_slash_chestplates"
                }
            },
            {
                "count": 1,
                "ingredient": {
                    "item": "minecraft:yellow_dye"
                }
            }
        ],
        "result": {
            "item": "magistuarmoryaddon:yellow_puff_and_slash_chestplate"
        },
        "tool": [
            {
                "item": "minecraft:brush"
            }
        ]
    });
    event.custom({
        "type": "sewingkit:sewing",
        "materials": [
            {
                "count": 1,
                "ingredient": {
                    "tag": "fantasia:puff_and_slash_chestplates"
                }
            },
            {
                "count": 1,
                "ingredient": {
                    "item": "minecraft:red_dye"
                }
            }
        ],
        "result": {
            "item": "magistuarmoryaddon:red_puff_and_slash_chestplate"
        },
        "tool": [
            {
                "item": "minecraft:brush"
            }
        ]
    });
    event.custom({
        "type": "sewingkit:sewing",
        "materials": [
            { "count": 1, "ingredient": { "tag": "fantasia:puff_and_slash_chestplates" } },
            { "count": 1, "ingredient": { "item": "minecraft:lime_dye" } }
        ],
        "result": { "item": "magistuarmoryaddon:lime_puff_and_slash_chestplate" },
        "tool": [{ "item": "minecraft:brush" }]
    });
    event.custom({
        "type": "sewingkit:sewing",
        "materials": [
            { "count": 1, "ingredient": { "tag": "fantasia:puff_and_slash_chestplates" } },
            { "count": 1, "ingredient": { "item": "minecraft:pink_dye" } }
        ],
        "result": { "item": "magistuarmoryaddon:pink_puff_and_slash_chestplate" },
        "tool": [{ "item": "minecraft:brush" }]
    });
    event.custom({
        "type": "sewingkit:sewing",
        "materials": [
            { "count": 1, "ingredient": { "tag": "fantasia:puff_and_slash_chestplates" } },
            { "count": 1, "ingredient": { "item": "minecraft:gray_dye" } }
        ],
        "result": { "item": "magistuarmoryaddon:gray_puff_and_slash_chestplate" },
        "tool": [{ "item": "minecraft:brush" }]
    });
    event.custom({
        "type": "sewingkit:sewing",
        "materials": [
            { "count": 1, "ingredient": { "tag": "fantasia:puff_and_slash_chestplates" } },
            { "count": 1, "ingredient": { "item": "minecraft:light_gray_dye" } }
        ],
        "result": { "item": "magistuarmoryaddon:light_gray_puff_and_slash_chestplate" },
        "tool": [{ "item": "minecraft:brush" }]
    });
    event.custom({
        "type": "sewingkit:sewing",
        "materials": [
            { "count": 1, "ingredient": { "tag": "fantasia:puff_and_slash_chestplates" } },
            { "count": 1, "ingredient": { "item": "minecraft:cyan_dye" } }
        ],
        "result": { "item": "magistuarmoryaddon:cyan_puff_and_slash_chestplate" },
        "tool": [{ "item": "minecraft:brush" }]
    });
    event.custom({
        "type": "sewingkit:sewing",
        "materials": [
            { "count": 1, "ingredient": { "tag": "fantasia:puff_and_slash_chestplates" } },
            { "count": 1, "ingredient": { "item": "minecraft:purple_dye" } }
        ],
        "result": { "item": "magistuarmoryaddon:purple_puff_and_slash_chestplate" },
        "tool": [{ "item": "minecraft:brush" }]
    });
    event.custom({
        "type": "sewingkit:sewing",
        "materials": [
            { "count": 1, "ingredient": { "tag": "fantasia:puff_and_slash_chestplates" } },
            { "count": 1, "ingredient": { "item": "minecraft:blue_dye" } }
        ],
        "result": { "item": "magistuarmoryaddon:blue_puff_and_slash_chestplate" },
        "tool": [{ "item": "minecraft:brush" }]
    });
    event.custom({
        "type": "sewingkit:sewing",
        "materials": [
            { "count": 1, "ingredient": { "tag": "fantasia:puff_and_slash_chestplates" } },
            { "count": 1, "ingredient": { "item": "minecraft:brown_dye" } }
        ],
        "result": { "item": "magistuarmoryaddon:brown_puff_and_slash_chestplate" },
        "tool": [{ "item": "minecraft:brush" }]
    });
    event.custom({
        "type": "sewingkit:sewing",
        "materials": [
            { "count": 1, "ingredient": { "tag": "fantasia:puff_and_slash_chestplates" } },
            { "count": 1, "ingredient": { "item": "minecraft:green_dye" } }
        ],
        "result": { "item": "magistuarmoryaddon:green_puff_and_slash_chestplate" },
        "tool": [{ "item": "minecraft:brush" }]
    });
    event.custom({
        "type": "sewingkit:sewing",
        "materials": [
            { "count": 1, "ingredient": { "tag": "fantasia:puff_and_slash_chestplates" } },
            { "count": 1, "ingredient": { "item": "minecraft:black_dye" } }
        ],
        "result": { "item": "magistuarmoryaddon:black_puff_and_slash_chestplate" },
        "tool": [{ "item": "minecraft:brush" }]
    });

    //Puff and slash leggings & boots
    event.custom({
        "type": "sewingkit:sewing",
        "materials": [
            {
                "count": 7,
                "ingredient": {
                    "item": "magistuarmory:woolen_fabric"
                }
            },
            {
                "count": 3,
                "ingredient": {
                    "item": "string"
                }
            }
        ],
        "result": {
            "item": "magistuarmoryaddon:white_puff_and_slash_leggings"
        },
        "tool": [
            {
                "tag": "fantasia:needles"
            }
        ],
        "pattern": [
            {
                "item": "minecraft:shears"
            }
        ]
    });
    event.custom({
        "type": "sewingkit:sewing",
        "materials": [
            {
                "count": 2,
                "ingredient": {
                    "item": "magistuarmory:woolen_fabric"
                }
            },
            {
                "count": 2,
                "ingredient": {
                    "item": "minecraft:leather"
                }
            },
            {
                "count": 2,
                "ingredient": {
                    "item": "string"
                }
            },
            {
                "count": 2,
                "ingredient": {
                    "item": "magistuarmory:leather_strip"
                }
            }
        ],
        "result": {
            "item": "magistuarmoryaddon:puff_and_slash_boots"
        },
        "tool": [
            {
                "tag": "fantasia:needles"
            }
        ],
        "pattern": [
            {
                "item": "minecraft:shears"
            }
        ]
    });
    event.custom({
        "type": "sewingkit:sewing",
        "materials": [
            { "count": 1, "ingredient": { "tag": "fantasia:puff_and_slash_leggings" } },
            { "count": 1, "ingredient": { "item": "minecraft:orange_dye" } }
        ],
        "result": { "item": "magistuarmoryaddon:orange_puff_and_slash_leggings" },
        "tool": [{ "item": "minecraft:brush" }]
    });
    event.custom({
        "type": "sewingkit:sewing",
        "materials": [
            { "count": 1, "ingredient": { "tag": "fantasia:puff_and_slash_leggings" } },
            { "count": 1, "ingredient": { "item": "minecraft:magenta_dye" } }
        ],
        "result": { "item": "magistuarmoryaddon:magenta_puff_and_slash_leggings" },
        "tool": [{ "item": "minecraft:brush" }]
    });
    event.custom({
        "type": "sewingkit:sewing",
        "materials": [
            { "count": 1, "ingredient": { "tag": "fantasia:puff_and_slash_leggings" } },
            { "count": 1, "ingredient": { "item": "minecraft:light_blue_dye" } }
        ],
        "result": { "item": "magistuarmoryaddon:light_blue_puff_and_slash_leggings" },
        "tool": [{ "item": "minecraft:brush" }]
    });
    event.custom({
        "type": "sewingkit:sewing",
        "materials": [
            { "count": 1, "ingredient": { "tag": "fantasia:puff_and_slash_leggings" } },
            { "count": 1, "ingredient": { "item": "minecraft:yellow_dye" } }
        ],
        "result": { "item": "magistuarmoryaddon:yellow_puff_and_slash_leggings" },
        "tool": [{ "item": "minecraft:brush" }]
    });
    event.custom({
        "type": "sewingkit:sewing",
        "materials": [
            { "count": 1, "ingredient": { "tag": "fantasia:puff_and_slash_leggings" } },
            { "count": 1, "ingredient": { "item": "minecraft:red_dye" } }
        ],
        "result": { "item": "magistuarmoryaddon:red_puff_and_slash_leggings" },
        "tool": [{ "item": "minecraft:brush" }]
    });
    event.custom({
        "type": "sewingkit:sewing",
        "materials": [
            { "count": 1, "ingredient": { "tag": "fantasia:puff_and_slash_leggings" } },
            { "count": 1, "ingredient": { "item": "minecraft:lime_dye" } }
        ],
        "result": { "item": "magistuarmoryaddon:lime_puff_and_slash_leggings" },
        "tool": [{ "item": "minecraft:brush" }]
    });
    event.custom({
        "type": "sewingkit:sewing",
        "materials": [
            { "count": 1, "ingredient": { "tag": "fantasia:puff_and_slash_leggings" } },
            { "count": 1, "ingredient": { "item": "minecraft:pink_dye" } }
        ],
        "result": { "item": "magistuarmoryaddon:pink_puff_and_slash_leggings" },
        "tool": [{ "item": "minecraft:brush" }]
    });
    event.custom({
        "type": "sewingkit:sewing",
        "materials": [
            { "count": 1, "ingredient": { "tag": "fantasia:puff_and_slash_leggings" } },
            { "count": 1, "ingredient": { "item": "minecraft:gray_dye" } }
        ],
        "result": { "item": "magistuarmoryaddon:gray_puff_and_slash_leggings" },
        "tool": [{ "item": "minecraft:brush" }]
    });
    event.custom({
        "type": "sewingkit:sewing",
        "materials": [
            { "count": 1, "ingredient": { "tag": "fantasia:puff_and_slash_leggings" } },
            { "count": 1, "ingredient": { "item": "minecraft:light_gray_dye" } }
        ],
        "result": { "item": "magistuarmoryaddon:light_gray_puff_and_slash_leggings" },
        "tool": [{ "item": "minecraft:brush" }]
    });
    event.custom({
        "type": "sewingkit:sewing",
        "materials": [
            { "count": 1, "ingredient": { "tag": "fantasia:puff_and_slash_leggings" } },
            { "count": 1, "ingredient": { "item": "minecraft:cyan_dye" } }
        ],
        "result": { "item": "magistuarmoryaddon:cyan_puff_and_slash_leggings" },
        "tool": [{ "item": "minecraft:brush" }]
    });
    event.custom({
        "type": "sewingkit:sewing",
        "materials": [
            { "count": 1, "ingredient": { "tag": "fantasia:puff_and_slash_leggings" } },
            { "count": 1, "ingredient": { "item": "minecraft:purple_dye" } }
        ],
        "result": { "item": "magistuarmoryaddon:purple_puff_and_slash_leggings" },
        "tool": [{ "item": "minecraft:brush" }]
    });
    event.custom({
        "type": "sewingkit:sewing",
        "materials": [
            { "count": 1, "ingredient": { "tag": "fantasia:puff_and_slash_leggings" } },
            { "count": 1, "ingredient": { "item": "minecraft:blue_dye" } }
        ],
        "result": { "item": "magistuarmoryaddon:blue_puff_and_slash_leggings" },
        "tool": [{ "item": "minecraft:brush" }]
    });
    event.custom({
        "type": "sewingkit:sewing",
        "materials": [
            { "count": 1, "ingredient": { "tag": "fantasia:puff_and_slash_leggings" } },
            { "count": 1, "ingredient": { "item": "minecraft:brown_dye" } }
        ],
        "result": { "item": "magistuarmoryaddon:brown_puff_and_slash_leggings" },
        "tool": [{ "item": "minecraft:brush" }]
    });
    event.custom({
        "type": "sewingkit:sewing",
        "materials": [
            { "count": 1, "ingredient": { "tag": "fantasia:puff_and_slash_leggings" } },
            { "count": 1, "ingredient": { "item": "minecraft:green_dye" } }
        ],
        "result": { "item": "magistuarmoryaddon:green_puff_and_slash_leggings" },
        "tool": [{ "item": "minecraft:brush" }]
    });
    event.custom({
        "type": "sewingkit:sewing",
        "materials": [
            { "count": 1, "ingredient": { "tag": "fantasia:puff_and_slash_leggings" } },
            { "count": 1, "ingredient": { "item": "minecraft:black_dye" } }
        ],
        "result": { "item": "magistuarmoryaddon:black_puff_and_slash_leggings" },
        "tool": [{ "item": "minecraft:brush" }]
    });

    //Doublet
    event.custom({
        "type": "sewingkit:sewing",
        "materials": [
            {
                "count": 4,
                "ingredient": {
                    "item": "magistuarmory:woolen_fabric"
                }
            },
            {
                "count": 4,
                "ingredient": {
                    "item": "minecraft:white_wool"
                }
            },
            {
                "count": 4,
                "ingredient": {
                    "item": "string"
                }
            }
        ],
        "result": {
            "item": "magistuarmoryaddon:doublet"
        },
        "tool": [
            {
                "tag": "fantasia:needles"
            }
        ],
        "pattern": [
            {
                "item": "minecraft:shears"
            }
        ]
    });

    //Decoration
    event.custom({
        "type": "sewingkit:sewing",
        "materials": [
            {
                "count": 4,
                "ingredient": {
                    "item": "magistuarmory:woolen_fabric"
                }
            },
            {
                "count": 2,
                "ingredient": {
                    "item": "string"
                }
            }
        ],
        "result": {
            "item": "magistuarmoryaddon:white_puff_and_slash_sleeves_decoration"
        },
        "tool": [
            {
                "tag": "fantasia:needles"
            }
        ],
        "pattern": [
            {
                "item": "minecraft:shears"
            }
        ]
    });
    event.custom({
        "type": "sewingkit:sewing",
        "materials": [
            {
                "count": 5,
                "ingredient": {
                    "item": "magistuarmory:woolen_fabric"
                }
            },
            {
                "count": 2,
                "ingredient": {
                    "item": "string"
                }
            }
        ],
        "result": {
            "item": "magistuarmoryaddon:landsknecht_white_hat_decoration"
        },
        "tool": [
            {
                "tag": "fantasia:needles"
            }
        ],
        "pattern": [
            {
                "item": "minecraft:shears"
            }
        ]
    });
    event.custom({
        "type": "sewingkit:sewing",
        "materials": [
            {
                "count": 8,
                "ingredient": {
                    "item": "magistuarmory:woolen_fabric"
                }
            },
            {
                "count": 4,
                "ingredient": {
                    "item": "string"
                }
            },
            {
                "count": 1,
                "ingredient": {
                    "item": "minecraft:red_dye"
                }
            }
        ],
        "result": {
            "item": "slavicarmory:belt_decoration"
        },
        "tool": [
            {
                "tag": "fantasia:needles"
            }
        ],
        "pattern": [
            {
                "item": "minecraft:shears"
            }
        ]
    });
    event.custom({
        "type": "sewingkit:sewing",
        "materials": [
            {
                "count": 4,
                "ingredient": {
                    "item": "magistuarmory:woolen_fabric"
                }
            },
            {
                "count": 2,
                "ingredient": {
                    "item": "string"
                }
            }
        ],
        "result": {
            "item": "magistuarmory:torse_decoration"
        },
        "tool": [
            {
                "tag": "fantasia:needles"
            }
        ],
        "pattern": [
            {
                "item": "minecraft:shears"
            }
        ]
    });
    event.custom({
        "type": "sewingkit:sewing",
        "materials": [
            {
                "count": 1,
                "ingredient": {
                    "item": "magistuarmory:torse_decoration"
                }
            },
            {
                "count": 4,
                "ingredient": {
                    "item": "magistuarmory:woolen_fabric"
                }
            },
            {
                "count": 2,
                "ingredient": {
                    "item": "string"
                }
            }
        ],
        "result": {
            "item": "magistuarmory:torse_and_mantle_decoration"
        },
        "tool": [
            {
                "tag": "fantasia:needles"
            }
        ],
        "pattern": [
            {
                "item": "minecraft:shears"
            }
        ]
    });
    event.custom({
        "type": "sewingkit:sewing",
        "materials": [
            {
                "count": 5,
                "ingredient": {
                    "item": "magistuarmory:woolen_fabric"
                }
            },
            {
                "count": 2,
                "ingredient": {
                    "item": "string"
                }
            }
        ],
        "result": {
            "item": "magistuarmory:hood_decoration"
        },
        "tool": [
            {
                "tag": "fantasia:needles"
            }
        ],
        "pattern": [
            {
                "item": "minecraft:shears"
            }
        ]
    });
    event.custom({
        "type": "sewingkit:sewing",
        "materials": [
            {
                "count": 4,
                "ingredient": {
                    "item": "magistuarmory:woolen_fabric"
                }
            },
            {
                "count": 2,
                "ingredient": {
                    "item": "string"
                }
            },
            {
                "count": 1,
                "ingredient": {
                    "item": "minecraft:red_dye"
                }
            }
        ],
        "result": {
            "item": "magistuarmoryaddon:hanging_cloth_decoration"
        },
        "tool": [
            {
                "tag": "fantasia:needles"
            }
        ],
        "pattern": [
            {
                "item": "minecraft:shears"
            }
        ]
    });
    event.custom({
        "type": "sewingkit:sewing",
        "materials": [
            {
                "count": 6,
                "ingredient": {
                    "item": "magistuarmory:woolen_fabric"
                }
            },
            {
                "count": 3,
                "ingredient": {
                    "item": "string"
                }
            },
            {
                "count": 1,
                "ingredient": {
                    "item": "minecraft:red_dye"
                }
            }
        ],
        "result": {
            "item": "magistuarmoryaddon:underarmor_tunic_decoration"
        },
        "tool": [
            {
                "tag": "fantasia:needles"
            }
        ],
        "pattern": [
            {
                "item": "minecraft:shears"
            }
        ]
    });
    event.custom({
        "type": "sewingkit:sewing",
        "materials": [
            {
                "count": 6,
                "ingredient": {
                    "item": "magistuarmory:woolen_fabric"
                }
            },
            {
                "count": 2,
                "ingredient": {
                    "item": "string"
                }
            },
            {
                "count": 1,
                "ingredient": {
                    "item": "minecraft:red_dye"
                }
            },
            {
                "count": 3,
                "ingredient": {
                    "item": "minecraft:gold_nugget"
                }
            }
        ],
        "result": {
            "item": "magistuarmoryaddon:giornea_decoration"
        },
        "tool": [
            {
                "tag": "fantasia:needles"
            }
        ],
        "pattern": [
            {
                "item": "minecraft:shears"
            }
        ]
    });
    event.custom({
        "type": "sewingkit:sewing",
        "materials": [
            {
                "count": 7,
                "ingredient": {
                    "item": "magistuarmory:woolen_fabric"
                }
            },
            {
                "count": 3,
                "ingredient": {
                    "item": "string"
                }
            }
        ],
        "result": {
            "item": "magistuarmoryaddon:medieval_cloak_decoration"
        },
        "tool": [
            {
                "tag": "fantasia:needles"
            }
        ],
        "pattern": [
            {
                "item": "minecraft:shears"
            }
        ]
    });
    event.custom({
        "type": "sewingkit:sewing",
        "materials": [
            {
                "count": 8,
                "ingredient": {
                    "item": "magistuarmory:woolen_fabric"
                }
            },
            {
                "count": 4,
                "ingredient": {
                    "item": "string"
                }
            },
            {
                "count": 2,
                "ingredient": {
                    "item": "minecraft:red_dye"
                }
            },
            {
                "count": 1,
                "ingredient": {
                    "item": "minecraft:black_dye"
                }
            }
        ],
        "result": {
            "item": "magistuarmoryaddon:puff_and_slash_robe_decoration"
        },
        "tool": [
            {
                "tag": "fantasia:needles"
            }
        ],
        "pattern": [
            {
                "item": "minecraft:shears"
            }
        ]
    });
    event.custom({
        "type": "sewingkit:sewing",
        "materials": [
            {
                "count": 3,
                "ingredient": {
                    "item": "magistuarmory:leather_strip"
                }
            },
            {
                "count": 2,
                "ingredient": {
                    "item": "string"
                }
            },
            {
                "count": 1,
                "ingredient": {
                    "item": "minecraft:red_dye"
                }
            },
            {
                "count": 2,
                "ingredient": {
                    "item": "minecraft:gold_nugget"
                }
            }
        ],
        "result": {
            "item": "slavicarmory:varangian_bra_decoration"
        },
        "tool": [
            {
                "tag": "fantasia:needles"
            }
        ],
        "pattern": [
            {
                "item": "minecraft:shears"
            }
        ]
    });
    event.custom({
        "type": "sewingkit:sewing",
        "materials": [
            {
                "count": 7,
                "ingredient": {
                    "item": "magistuarmory:woolen_fabric"
                }
            },
            {
                "count": 3,
                "ingredient": {
                    "item": "string"
                }
            },
            {
                "count": 2,
                "ingredient": {
                    "item": "minecraft:black_dye"
                }
            }
        ],
        "result": {
            "item": "magistuarmoryaddon:white_cross_medieval_cloak_decoration"
        },
        "tool": [
            {
                "tag": "fantasia:needles"
            }
        ],
        "pattern": [
            {
                "item": "minecraft:shears"
            }
        ]
    });
    event.custom({
        "type": "sewingkit:sewing",
        "materials": [
            { "count": 1, "ingredient": { "tag": "fantasia:puff_and_slash_sleeves_decoration" } },
            { "count": 1, "ingredient": { "item": "minecraft:orange_dye" } }
        ],
        "result": { "item": "magistuarmoryaddon:orange_puff_and_slash_sleeves_decoration" },
        "tool": [{ "item": "minecraft:brush" }]
    });
    event.custom({
        "type": "sewingkit:sewing",
        "materials": [
            { "count": 1, "ingredient": { "tag": "fantasia:puff_and_slash_sleeves_decoration" } },
            { "count": 1, "ingredient": { "item": "minecraft:magenta_dye" } }
        ],
        "result": { "item": "magistuarmoryaddon:magenta_puff_and_slash_sleeves_decoration" },
        "tool": [{ "item": "minecraft:brush" }]
    });
    event.custom({
        "type": "sewingkit:sewing",
        "materials": [
            { "count": 1, "ingredient": { "tag": "fantasia:puff_and_slash_sleeves_decoration" } },
            { "count": 1, "ingredient": { "item": "minecraft:light_blue_dye" } }
        ],
        "result": { "item": "magistuarmoryaddon:light_blue_puff_and_slash_sleeves_decoration" },
        "tool": [{ "item": "minecraft:brush" }]
    });
    event.custom({
        "type": "sewingkit:sewing",
        "materials": [
            { "count": 1, "ingredient": { "tag": "fantasia:puff_and_slash_sleeves_decoration" } },
            { "count": 1, "ingredient": { "item": "minecraft:yellow_dye" } }
        ],
        "result": { "item": "magistuarmoryaddon:yellow_puff_and_slash_sleeves_decoration" },
        "tool": [{ "item": "minecraft:brush" }]
    });
    event.custom({
        "type": "sewingkit:sewing",
        "materials": [
            { "count": 1, "ingredient": { "tag": "fantasia:puff_and_slash_sleeves_decoration" } },
            { "count": 1, "ingredient": { "item": "minecraft:red_dye" } }
        ],
        "result": { "item": "magistuarmoryaddon:red_puff_and_slash_sleeves_decoration" },
        "tool": [{ "item": "minecraft:brush" }]
    });
    event.custom({
        "type": "sewingkit:sewing",
        "materials": [
            { "count": 1, "ingredient": { "tag": "fantasia:puff_and_slash_sleeves_decoration" } },
            { "count": 1, "ingredient": { "item": "minecraft:lime_dye" } }
        ],
        "result": { "item": "magistuarmoryaddon:lime_puff_and_slash_sleeves_decoration" },
        "tool": [{ "item": "minecraft:brush" }]
    });
    event.custom({
        "type": "sewingkit:sewing",
        "materials": [
            { "count": 1, "ingredient": { "tag": "fantasia:puff_and_slash_sleeves_decoration" } },
            { "count": 1, "ingredient": { "item": "minecraft:pink_dye" } }
        ],
        "result": { "item": "magistuarmoryaddon:pink_puff_and_slash_sleeves_decoration" },
        "tool": [{ "item": "minecraft:brush" }]
    });
    event.custom({
        "type": "sewingkit:sewing",
        "materials": [
            { "count": 1, "ingredient": { "tag": "fantasia:puff_and_slash_sleeves_decoration" } },
            { "count": 1, "ingredient": { "item": "minecraft:gray_dye" } }
        ],
        "result": { "item": "magistuarmoryaddon:gray_puff_and_slash_sleeves_decoration" },
        "tool": [{ "item": "minecraft:brush" }]
    });
    event.custom({
        "type": "sewingkit:sewing",
        "materials": [
            { "count": 1, "ingredient": { "tag": "fantasia:puff_and_slash_sleeves_decoration" } },
            { "count": 1, "ingredient": { "item": "minecraft:light_gray_dye" } }
        ],
        "result": { "item": "magistuarmoryaddon:light_gray_puff_and_slash_sleeves_decoration" },
        "tool": [{ "item": "minecraft:brush" }]
    });
    event.custom({
        "type": "sewingkit:sewing",
        "materials": [
            { "count": 1, "ingredient": { "tag": "fantasia:puff_and_slash_sleeves_decoration" } },
            { "count": 1, "ingredient": { "item": "minecraft:cyan_dye" } }
        ],
        "result": { "item": "magistuarmoryaddon:cyan_puff_and_slash_sleeves_decoration" },
        "tool": [{ "item": "minecraft:brush" }]
    });
    event.custom({
        "type": "sewingkit:sewing",
        "materials": [
            { "count": 1, "ingredient": { "tag": "fantasia:puff_and_slash_sleeves_decoration" } },
            { "count": 1, "ingredient": { "item": "minecraft:purple_dye" } }
        ],
        "result": { "item": "magistuarmoryaddon:purple_puff_and_slash_sleeves_decoration" },
        "tool": [{ "item": "minecraft:brush" }]
    });
    event.custom({
        "type": "sewingkit:sewing",
        "materials": [
            { "count": 1, "ingredient": { "tag": "fantasia:puff_and_slash_sleeves_decoration" } },
            { "count": 1, "ingredient": { "item": "minecraft:blue_dye" } }
        ],
        "result": { "item": "magistuarmoryaddon:blue_puff_and_slash_sleeves_decoration" },
        "tool": [{ "item": "minecraft:brush" }]
    });
    event.custom({
        "type": "sewingkit:sewing",
        "materials": [
            { "count": 1, "ingredient": { "tag": "fantasia:puff_and_slash_sleeves_decoration" } },
            { "count": 1, "ingredient": { "item": "minecraft:brown_dye" } }
        ],
        "result": { "item": "magistuarmoryaddon:brown_puff_and_slash_sleeves_decoration" },
        "tool": [{ "item": "minecraft:brush" }]
    });
    event.custom({
        "type": "sewingkit:sewing",
        "materials": [
            { "count": 1, "ingredient": { "tag": "fantasia:puff_and_slash_sleeves_decoration" } },
            { "count": 1, "ingredient": { "item": "minecraft:green_dye" } }
        ],
        "result": { "item": "magistuarmoryaddon:green_puff_and_slash_sleeves_decoration" },
        "tool": [{ "item": "minecraft:brush" }]
    });
    event.custom({
        "type": "sewingkit:sewing",
        "materials": [
            { "count": 1, "ingredient": { "tag": "fantasia:puff_and_slash_sleeves_decoration" } },
            { "count": 1, "ingredient": { "item": "minecraft:black_dye" } }
        ],
        "result": { "item": "magistuarmoryaddon:black_puff_and_slash_sleeves_decoration" },
        "tool": [{ "item": "minecraft:brush" }]
    });
    event.custom({
        "type": "sewingkit:sewing",
        "materials": [
            { "count": 1, "ingredient": { "tag": "fantasia:landsknecht_hat_decoration" } },
            { "count": 1, "ingredient": { "item": "minecraft:orange_dye" } }
        ],
        "result": { "item": "magistuarmoryaddon:landsknecht_orange_hat_decoration" },
        "tool": [{ "item": "minecraft:brush" }]
    });
    event.custom({
        "type": "sewingkit:sewing",
        "materials": [
            { "count": 1, "ingredient": { "tag": "fantasia:landsknecht_hat_decoration" } },
            { "count": 1, "ingredient": { "item": "minecraft:magenta_dye" } }
        ],
        "result": { "item": "magistuarmoryaddon:landsknecht_magenta_hat_decoration" },
        "tool": [{ "item": "minecraft:brush" }]
    });
    event.custom({
        "type": "sewingkit:sewing",
        "materials": [
            { "count": 1, "ingredient": { "tag": "fantasia:landsknecht_hat_decoration" } },
            { "count": 1, "ingredient": { "item": "minecraft:light_blue_dye" } }
        ],
        "result": { "item": "magistuarmoryaddon:landsknecht_light_blue_hat_decoration" },
        "tool": [{ "item": "minecraft:brush" }]
    });
    event.custom({
        "type": "sewingkit:sewing",
        "materials": [
            { "count": 1, "ingredient": { "tag": "fantasia:landsknecht_hat_decoration" } },
            { "count": 1, "ingredient": { "item": "minecraft:yellow_dye" } }
        ],
        "result": { "item": "magistuarmoryaddon:landsknecht_yellow_hat_decoration" },
        "tool": [{ "item": "minecraft:brush" }]
    });
    event.custom({
        "type": "sewingkit:sewing",
        "materials": [
            { "count": 1, "ingredient": { "tag": "fantasia:landsknecht_hat_decoration" } },
            { "count": 1, "ingredient": { "item": "minecraft:red_dye" } }
        ],
        "result": { "item": "magistuarmoryaddon:landsknecht_red_hat_decoration" },
        "tool": [{ "item": "minecraft:brush" }]
    });
    event.custom({
        "type": "sewingkit:sewing",
        "materials": [
            { "count": 1, "ingredient": { "tag": "fantasia:landsknecht_hat_decoration" } },
            { "count": 1, "ingredient": { "item": "minecraft:lime_dye" } }
        ],
        "result": { "item": "magistuarmoryaddon:landsknecht_lime_hat_decoration" },
        "tool": [{ "item": "minecraft:brush" }]
    });
    event.custom({
        "type": "sewingkit:sewing",
        "materials": [
            { "count": 1, "ingredient": { "tag": "fantasia:landsknecht_hat_decoration" } },
            { "count": 1, "ingredient": { "item": "minecraft:pink_dye" } }
        ],
        "result": { "item": "magistuarmoryaddon:landknecht_pink_hat_decoration" },
        "tool": [{ "item": "minecraft:brush" }]
    });
    event.custom({
        "type": "sewingkit:sewing",
        "materials": [
            { "count": 1, "ingredient": { "tag": "fantasia:landsknecht_hat_decoration" } },
            { "count": 1, "ingredient": { "item": "minecraft:gray_dye" } }
        ],
        "result": { "item": "magistuarmoryaddon:landsknecht_gray_hat_decoration" },
        "tool": [{ "item": "minecraft:brush" }]
    });
    event.custom({
        "type": "sewingkit:sewing",
        "materials": [
            { "count": 1, "ingredient": { "tag": "fantasia:landsknecht_hat_decoration" } },
            { "count": 1, "ingredient": { "item": "minecraft:light_gray_dye" } }
        ],
        "result": { "item": "magistuarmoryaddon:landsknecht_light_gray_hat_decoration" },
        "tool": [{ "item": "minecraft:brush" }]
    });
    event.custom({
        "type": "sewingkit:sewing",
        "materials": [
            { "count": 1, "ingredient": { "tag": "fantasia:landsknecht_hat_decoration" } },
            { "count": 1, "ingredient": { "item": "minecraft:cyan_dye" } }
        ],
        "result": { "item": "magistuarmoryaddon:landsknecht_cyan_hat_decoration" },
        "tool": [{ "item": "minecraft:brush" }]
    });
    event.custom({
        "type": "sewingkit:sewing",
        "materials": [
            { "count": 1, "ingredient": { "tag": "fantasia:landsknecht_hat_decoration" } },
            { "count": 1, "ingredient": { "item": "minecraft:purple_dye" } }
        ],
        "result": { "item": "magistuarmoryaddon:landsknecht_purple_hat_decoration" },
        "tool": [{ "item": "minecraft:brush" }]
    });
    event.custom({
        "type": "sewingkit:sewing",
        "materials": [
            { "count": 1, "ingredient": { "tag": "fantasia:landsknecht_hat_decoration" } },
            { "count": 1, "ingredient": { "item": "minecraft:blue_dye" } }
        ],
        "result": { "item": "magistuarmoryaddon:landsknecht_blue_hat_decoration" },
        "tool": [{ "item": "minecraft:brush" }]
    });
    event.custom({
        "type": "sewingkit:sewing",
        "materials": [
            { "count": 1, "ingredient": { "tag": "fantasia:landsknecht_hat_decoration" } },
            { "count": 1, "ingredient": { "item": "minecraft:brown_dye" } }
        ],
        "result": { "item": "magistuarmoryaddon:landsknecht_brown_hat_decoration" },
        "tool": [{ "item": "minecraft:brush" }]
    });
    event.custom({
        "type": "sewingkit:sewing",
        "materials": [
            { "count": 1, "ingredient": { "tag": "fantasia:landsknecht_hat_decoration" } },
            { "count": 1, "ingredient": { "item": "minecraft:green_dye" } }
        ],
        "result": { "item": "magistuarmoryaddon:landsknecht_green_hat_decoration" },
        "tool": [{ "item": "minecraft:brush" }]
    });
    event.custom({
        "type": "sewingkit:sewing",
        "materials": [
            { "count": 1, "ingredient": { "tag": "fantasia:landsknecht_hat_decoration" } },
            { "count": 1, "ingredient": { "item": "minecraft:black_dye" } }
        ],
        "result": { "item": "magistuarmoryaddon:landsknecht_black_hat_decoration" },
        "tool": [{ "item": "minecraft:brush" }]
    });
    event.custom({
        "type": "sewingkit:sewing",
        "materials": [
            { "count": 7, "ingredient": { "item": "magistuarmoryaddon:medieval_cloak_decoration" } },
            { "count": 1, "ingredient": { "item": "minecraft:black_dye" } }
        ],
        "result": { "item": "magistuarmoryaddon:black_cross_medieval_cloak_decoration" },
        "tool": [{ "item": "minecraft:brush" }]
    });
    event.custom({
        "type": "sewingkit:sewing",
        "materials": [
            { "count": 1, "ingredient": { "item": "magistuarmoryaddon:medieval_cloak_decoration" } },
            { "count": 1, "ingredient": { "item": "minecraft:black_dye" } }
        ],
        "result": { "item": "magistuarmoryaddon:red_cross_medieval_cloak_decoration" },
        "tool": [{ "item": "minecraft:brush" }]
    });

    //Hat
    event.custom({
        "type": "sewingkit:sewing",
        "materials": [
            { "count": 1, "ingredient": { "item": "minecraft:red_wool" } },
            { "count": 3, "ingredient": { "item": "minecraft:leather" } },
            { "count": 2, "ingredient": { "item": "minecraft:string" } },
            { "count": 2, "ingredient": { "item": "magistuarmory:woolen_fabric" } }
        ],
        "result": { "item": "magistuarmoryaddon:fancy_hat" },
        "tool": [{ "tag": "fantasia:needles" }],
        "pattern": [{ "item": "minecraft:shears" }]
    });
    event.custom({
        "type": "sewingkit:sewing",
        "materials": [
            { "count": 6, "ingredient": { "item": "magistuarmory:woolen_fabric" } },
            { "count": 3, "ingredient": { "item": "minecraft:string" } },
            { "count": 2, "ingredient": { "item": "minecraft:red_dye" } }
        ],
        "result": { "item": "magistuarmoryaddon:condottiero_cap" },
        "tool": [{ "tag": "fantasia:needles" }],
        "pattern": [{ "item": "minecraft:shears" }]
    });
    event.custom({
        "type": "sewingkit:sewing",
        "materials": [
            { "count": 5, "ingredient": { "item": "magistuarmory:woolen_fabric" } },
            { "count": 2, "ingredient": { "item": "minecraft:string" } },
            { "count": 1, "ingredient": { "item": "minecraft:red_dye" } },
            { "count": 1, "ingredient": { "item": "magistuarmoryaddon:landsknecht_black_hat_decoration" } }
        ],
        "result": { "item": "magistuarmoryaddon:tilted_puff_and_slash_hat" },
        "tool": [{ "tag": "fantasia:needles" }],
        "pattern": [{ "item": "minecraft:shears" }]
    });
})