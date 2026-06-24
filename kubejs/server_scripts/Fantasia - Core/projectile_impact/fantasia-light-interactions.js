const LightableBlocks = [
    
    "minecraft:campfire",
    "minecraft:soul_campfire",

    "minecraft:candle",
    "minecraft:white_candle",
    "minecraft:orange_candle",
    "minecraft:magenta_candle",
    "minecraft:light_blue_candle",
    "minecraft:yellow_candle",
    "minecraft:lime_candle",
    "minecraft:pink_candle",
    "minecraft:gray_candle",
    "minecraft:light_gray_candle",
    "minecraft:cyan_candle",
    "minecraft:purple_candle",
    "minecraft:blue_candle",
    "minecraft:brown_candle",
    "minecraft:green_candle",
    "minecraft:red_candle",
    "minecraft:black_candle",

    "supplementaries:candle_holder",
    "supplementaries:candle_holder_white",
    "supplementaries:candle_holder_orange",
    "supplementaries:candle_holder_magenta",
    "supplementaries:candle_holder_light_blue",
    "supplementaries:candle_holder_yellow",
    "supplementaries:candle_holder_lime",
    "supplementaries:candle_holder_pink",
    "supplementaries:candle_holder_gray",
    "supplementaries:candle_holder_light_gray",
    "supplementaries:candle_holder_cyan",
    "supplementaries:candle_holder_purple",
    "supplementaries:candle_holder_blue",
    "supplementaries:candle_holder_brown",
    "supplementaries:candle_holder_green",
    "supplementaries:candle_holder_red",
    "supplementaries:candle_holder_black",

    "supplementaries:fire_pit",

    "valhelsia_structures:brazier",
    "valhelsia_structures:soul_brazier",
]

let $Boolean = Java.loadClass('java.lang.Boolean')
let $BlockStateProperties = Java.loadClass('net.minecraft.world.level.block.state.properties.BlockStateProperties')


/**
 * @param {Internal.Projectile} projectile
 * @param {Internal.HitResult} rayTraceResult
 */
function fantasiaLightInteractions(projectile, rayTraceResult) {
    if (projectile.type === "irons_spellbooks:firebolt") {

        let hitPos = rayTraceResult.blockPos;
        let level = projectile.level;
        let blockState = level.getBlockState(hitPos)
        let blockId = blockState.block.id

        let utils = FantasiaLightInteractionsUtils

        utils.igniteLightableBlock(blockId, level, hitPos)
        
        utils.igniteLantern(blockId, level, hitPos)
        
        let positionsToCheck = [
            hitPos,
            hitPos.above(),
            hitPos.north(),
            hitPos.south(),
            hitPos.east(),
            hitPos.west()
        ]

        positionsToCheck.forEach(pos => {

            let blockState = level.getBlockState(pos);
            let blockId = blockState.block.id;

            utils.igniteTorch(blockId, level, pos)
        })
    }

    if (projectile.type === "irons_spellbooks:small_fireball") {

        let hitPos = rayTraceResult.blockPos;   
        let level = projectile.level;

        let positionsToCheck = [
            hitPos,
            hitPos.above(),
            hitPos.north(),
            hitPos.south(),
            hitPos.east(),
            hitPos.west()
        ]

        positionsToCheck.forEach(pos => {
            let utils = FantasiaLightInteractionsUtils
            let blockState = level.getBlockState(pos);
            let blockId = blockState.block.id;

            utils.igniteLightableBlock(blockId, level, pos)
            utils.igniteTorchesAndLanterns(blockId, level, pos)
        })
    }

    if (projectile.type === "irons_spellbooks:fire_arrow") {

        let hitPos = rayTraceResult.blockPos;
        let level = projectile.level;
        let utils = FantasiaLightInteractionsUtils

        let radius = 1

        if (projectile.nbt.ExplosionRadius) {
            // console.log(projectile.nbt.ExplosionRadius)
            radius = projectile.nbt.ExplosionRadius
        }       
       
        if (radius > 3) {
            radius = 3
        }
        
        utils.igniteArea(hitPos, level, radius)
    }

    if (projectile.type === "irons_spellbooks:fireball") {

        let hitPos = rayTraceResult.blockPos;
        let level = projectile.level;
        let utils = FantasiaLightInteractionsUtils
        
        let radius = 1

        if (projectile.nbt.ExplosionRadius) {
            // console.log(projectile.nbt.ExplosionRadius)
            radius = projectile.nbt.ExplosionRadius
        }       
       
        if (radius > 4) {
            radius = 4
        }
        
        utils.igniteArea(hitPos, level, radius)
    }
}


const FantasiaLightInteractionsUtils = {
    igniteLantern(blockId, level, pos) {
        if (blockId == "valhelsia_structures:unlit_lantern") {
            level.setBlock(pos, Block.getBlock("minecraft:lantern").defaultBlockState(), 3)
        }
        else if (blockId == "valhelsia_structures:unlit_soul_lantern") {  
            level.setBlock(pos, Block.getBlock("minecraft:soul_lantern").defaultBlockState(), 3)
        }
    },

    igniteTorch(blockId, level, pos) {
        let blockState = level.getBlockState(pos)

        if (blockId == "valhelsia_structures:doused_torch") {
                level.setBlock(pos, Block.getBlock("minecraft:torch").defaultBlockState(), 3);
            } 
        else if (blockId == "valhelsia_structures:doused_wall_torch") {
            let facing = blockState.getValue($BlockStateProperties.HORIZONTAL_FACING);
            let litWallTorch = Block.getBlock("minecraft:wall_torch").defaultBlockState().setValue($BlockStateProperties.HORIZONTAL_FACING, facing);
            level.setBlock(pos, litWallTorch, 3);
        }
        else if (blockId == "valhelsia_structures:doused_soul_torch") {
        level.setBlock(pos, Block.getBlock("minecraft:soul_torch").defaultBlockState(), 3);
        }
        else if (blockId == "valhelsia_structures:doused_soul_wall_torch") {
            let facing = blockState.getValue($BlockStateProperties.HORIZONTAL_FACING);
            let litWallTorch = Block.getBlock("minecraft:soul_wall_torch").defaultBlockState().setValue($BlockStateProperties.HORIZONTAL_FACING, facing);
            level.setBlock(pos, litWallTorch, 3);
        }
    },

    igniteTorchesAndLanterns(blockId, level, pos) {
        this.igniteLantern(blockId, level, pos)
        this.igniteTorch(blockId, level, pos)
    },

    igniteLightableBlock(blockId, level, pos) {
        if (LightableBlocks.includes(blockId)) {
            let blockState = level.getBlockState(pos);

            let isLit = blockState.getValue($BlockStateProperties.LIT) 
            
            if (!isLit) {
                let newState = blockState.setValue($BlockStateProperties.LIT, $Boolean.TRUE);
                level.setBlock(pos, newState, 3)
            }
        }
    },

    igniteArea(hitPos, level, radius) {
        for (let x = -radius; x <= radius; x++) {
            for (let y = -radius; y <= radius; y++) {
                for (let z = -radius; z <= radius; z++) {
                    let pos = hitPos.offset(x, y, z)
                    let blockState = level.getBlockState(pos);
                    let blockId = blockState.block.id;

                    this.igniteLightableBlock(blockId, level, pos)

                    this.igniteTorchesAndLanterns(blockId, level, pos)
                }
            }
        }
    }

}
