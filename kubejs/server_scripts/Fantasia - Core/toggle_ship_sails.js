/**
 * 
 * @param {Internal.ServerPlayer} player 
 * @param {String} hand
 */
function toggleShipSails(player, hand) {
    
    if (hand !== "MAIN_HAND" || !player.mainHandItem.is("air")) return
   
    if (player.isUsingItem()) return

    let seat = player.vehicle 

    if (seat && seat.type === "alekiships:compartment_empty") {
        let part = seat.vehicle
        if (!part) return
        
        let ship = part.vehicle
        if (!ship || !ship.type.contains("alekiships:sloop")) return

        let passengers = ship.passengers

        let shipPassengers = ship.passengers
        let seatIndexInShip = shipPassengers.indexOf(part)

        // only the pilot can control the sails
        if (seatIndexInShip !== 0) return
        
        let mainPart = passengers[17]
        let jibPart = passengers[24]

        if (mainPart && mainPart.passengers.length > 0) {
            let mainSwitch = mainPart.passengers[0]
            
            if (mainSwitch.type === "alekiships:vehicle_switch_sail") {
                let currentState = mainSwitch.nbt.getBoolean("switched")
                let newState = !currentState 

                mainSwitch.mergeNbt({ switched: newState })

                if (jibPart && jibPart.passengers.length > 0) {
                    let jibSwitch = jibPart.passengers[0]
                    if (jibSwitch.type === "alekiships:vehicle_switch_sail") {
                        jibSwitch.mergeNbt({ switched: newState })
                    }
                }

                // let msg = newState ? "Sails Opened" : "Sails Closed"
                // player.displayClientMessage(msg, true)
            }
        }
    }
}