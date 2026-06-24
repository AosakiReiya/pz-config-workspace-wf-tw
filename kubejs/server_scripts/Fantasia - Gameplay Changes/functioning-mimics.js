// Determines what chests you want to be affected.
const chests = [        
    'minecraft:chest',
]
// Determines what structures you want this to be able to occur in
const structures = [
    "minecraft:ancient_city",
]

let ServerLevel = Java.loadClass("net.minecraft.server.level.ServerLevel")
let ChunkStatus = Java.loadClass("net.minecraft.world.level.chunk.ChunkStatus")
let Registries = Java.loadClass("net.minecraft.core.registries.Registries")
/**
 * 
 * @param {Internal.Entity} entity
 * @param {String} structure 
 * @returns 
 */
// Checks to see if player is one of the structures listed
function isInStructure(entity) {
    let pos = entity.block.pos
    let dimension = entity.getLevel().dimension;
    let sw = entity.server.getLevel(dimension)
    if (sw instanceof ServerLevel) {
        let chunk = sw.getChunk(pos.x >> 4, pos.z >> 4, ChunkStatus.STRUCTURE_REFERENCES, false);
        if (chunk == null) {
            return false;
        }
        let references = chunk.getAllReferences();
        for (references of references.entrySet()) {
            let e = references
            let longs = e.getValue();
            if (!longs.isEmpty()) {
                let struct = e.getKey();
                let key = sw.registryAccess().registryOrThrow(Registries.STRUCTURE).getKey(struct);
                
                if (structures.includes(key.toString())) {
                    return true;
                } else {
                    return false;
                }
            }
        }
    }
    return false;
}

BlockEvents.rightClicked(chests, (event) => {
    let value = (isInStructure(event.entity))
    const { block, player} = event
    // Sees if the chest hasn't been opened before and hasn't been placed by a player
        if ('LootTable' in event.block.entityData) {
            // Sees if it's a single chest or a double chest
            if (event.block.properties.type == 'single') {
                if (value) {
                    if (player.crouching) {
                        if (player.mainHandItem.id != 'minecraft:air' || player.offHandItem.id != 'minecraft:air') return
                    }
                    // Determines how commonly this occurs. Lower number = higher chance
                    if (Math.random() > 0.95) {
                        let xRot = 0.0
                        if (event.block.properties.facing == 'north') {
                            xRot = 180.0
                        } else if (event.block.properties.facing == 'east') {
                            xRot = -90.0
                        } else if (event.block.properties.facing == 'south') {
                            xRot = 0.0
                        } else {
                            xRot = 90.0
                        }
                        const {x, y, z} = event.block;
                        let mimic = event.block.createEntity('artifacts:mimic')
                        mimic.yRot = xRot
                        mimic.xRot = 0.0
                        mimic.setPosition(x+0.5, y, z+0.5)
                        // Clears the loot table off of the chest so when the block is set to air it doesn't drop all the loot on the ground
                        block.setEntityData({z: z, LootTableSeed: 0, x: x, LootTable: '', ForgeCaps: {}, id: block.id, y: y, Items: []})
                        event.block.set('minecraft:air')
                        mimic.spawn()
                        event.cancel()
                    }
                }
            }
    }
})