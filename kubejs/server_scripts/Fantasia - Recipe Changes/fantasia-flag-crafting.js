ServerEvents.recipes((event) => {

    let colors = [
        "white",
        "light_gray",
        "gray",
        "black",
        "brown",
        "red",
        "orange",
        "yellow",
        "lime",
        "green",
        "cyan",
        "light_blue",
        "blue",
        "purple",
        "magenta",
        "pink"
    ]

    colors.forEach(color => {

        event.custom({
            "type": "sewingkit:sewing",
            "materials": [
                {
                    "count": 6,
                    "ingredient": {
                        "item": `minecraft:${color}_wool`
                    }
                },
                {
                    "count": 8,
                    "ingredient": {
                        "item": "minecraft:string"
                    }
                },
                {
                    "count": 2,
                    "ingredient": {
                        "item": "minecraft:stick"
                    }
                }
            ],
            "result": {
                "item": `minecells:${color}_ribbon_flag`
            },
            "tool": [{
                "tag": "fantasia:needles"
            }],
            "pattern": [{
                "item": "minecraft:shears"
            }]
        });

        event.custom({
            "type": "sewingkit:sewing",
            "materials": [
                {
                    "count": 12,
                    "ingredient": {
                        "item": `minecraft:${color}_wool`
                    }
                },
                {
                    "count": 16,
                    "ingredient": {
                        "item": "minecraft:string"
                    }
                },
                {
                    "count": 4,
                    "ingredient": {
                        "item": "minecraft:stick"
                    }
                }
            ],
            "result": {
                "item": `minecells:large_${color}_ribbon_flag`
            },
            "tool": [{
                "tag": "fantasia:needles"
            }],
            "pattern": [{
                "item": "minecraft:shears"
            }]
        });
    });

})