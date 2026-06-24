

StartupEvents.modifyCreativeTab("kubejs:tab", e => {

    // return
    global.FantasiaStanceWeapons.forEach(name => {
        // e.remove(`kubejs:${name}_one_handed`);
        e.remove(`kubejs:${name}_two_handed`);
    })

})

/*
StartupEvents.modifyCreativeTab("spartanweaponry:basic", e => {

    return
    global.FantasiaStanceWeapons.forEach(name => {
        e.add(`kubejs:${name}_one_handed`)
    })
    
})
*/