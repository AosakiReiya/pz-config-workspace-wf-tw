/**
 * @param {Internal.LivingEntity} entity
 */
function ejectFromSeatOnDamage(entity) {
    if (entity.isPlayer()) return
    
    let vehicle = entity.vehicle

    if (vehicle) {
        if (vehicle.type.toString() === "valhelsia_furniture:seat") {
            entity.unRide()
        }
    }
}