ItemEvents.modification(event => {

    let eye = [
        'endrem:rogue_eye',
        'endrem:nether_eye',
        'endrem:cold_eye',
        'endrem:magical_eye',
        'kubejs:soul_of_maledictus',
        'kubejs:soul_of_scylla',
        'kubejs:soul_of_ignis'
    ]
    eye.forEach(o => event.modify(o, item => {
        item.maxDamage = 0
    }
    ))

    eye.forEach(o => event.modify(o, item => {
        item.maxStackSize = 1
        item.rarity = 'EPIC'
    }))
});