/* ========================================================================
=== Startup Script ===
======================================================================== */

EntityJSEvents.attributes(event => {
    event.modify("irons_spellbooks:fire_boss", attribute => {
        attribute.add("minecraft:generic.max_health", 500)
    })

    event.modify("species:cliff_hanger", attribute => {
        attribute.add("minecraft:generic.max_health", 15)
    })

    event.modify("species:leaf_hanger", attribute => {
        attribute.add("minecraft:generic.max_health", 10)
    })

    event.modify("spawn:ant", attribute => {
        attribute.add("minecraft:generic.max_health", 10)
    })

    event.modify("alexsmobs:centipede_head", attribute => {
        attribute.add("minecraft:generic.max_health", 20)
        attribute.add("minecraft:generic.armor", 0)
    })

    event.modify("alexsmobs:centipede_body", attribute => {
        attribute.add("minecraft:generic.max_health", 15)
        attribute.add("minecraft:generic.armor", 0)
    })

    event.modify("alexsmobs:centipede_tail", attribute => {
        attribute.add("minecraft:generic.max_health", 15)
        attribute.add("minecraft:generic.armor", 0)
    })

    event.modify("irons_spellbooks:citadel_keeper", attribute => {
        attribute.add("minecraft:generic.movement_speed", 0.285)
    })

    event.allTypes.forEach(type => {
        event.modify(type, attribute => {
            attribute.add("attributeslib:crit_chance", 0)
            attribute.add("attributeslib:crit_damage", 0)
        })
    })
})
