const $PoiType = Java.loadClass('net.minecraft.world.entity.ai.village.poi.PoiType')

StartupEvents.registry('minecraft:point_of_interest_type', event => {
    event.createCustom('sewingkit:tailor', () => new $PoiType([Block.getBlock('minecraft:command_block').defaultBlockState()], 1, 1))
    event.createCustom('minecraft:cleric', () => new $PoiType([Block.getBlock('hexerei:mixing_cauldron').defaultBlockState()], 1, 1))
	
})