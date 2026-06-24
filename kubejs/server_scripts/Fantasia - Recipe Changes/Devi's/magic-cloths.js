ServerEvents.recipes(event => {
    //Arcane treated cloth
    event.custom({
        "type": "hexerei:mixingcauldron",
        "liquid": {
            "fluid": "kubejs:solution_arcane_fluid"
        },
        "ingredients": [
            {
                "item": "magistuarmory:woolen_fabric"
            },
            {
                "item": "magistuarmory:woolen_fabric"
            },
            {
                "item": "magistuarmory:woolen_fabric"
            },
            {
                "item": "magistuarmory:woolen_fabric"
            },
            {
                "item": "magistuarmory:woolen_fabric"
            },
            {
                "item": "magistuarmory:woolen_fabric"
            },
            {
                "item": "magistuarmory:woolen_fabric"
            },
            {
                "item": "magistuarmory:woolen_fabric"
            }
        ],
        "output": {
            "item": "kubejs:arcane_treated_cloth",
            "count": 8
        },
        "liquidOutput": {
            "fluid": "kubejs:solution_arcane_fluid"
        },
        "fluidLevelsConsumed": 2000
    });
})