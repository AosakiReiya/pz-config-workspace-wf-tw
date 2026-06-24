//This all goes in startup_scripts

let $Attributes = Java.loadClass('net.minecraft.world.entity.ai.attributes.Attributes')
let $AttributeModifier = Java.loadClass('net.minecraft.world.entity.ai.attributes.AttributeModifier')
let $ISSAttributeRegistry = Java.loadClass('io.redspace.ironsspellbooks.api.registry.AttributeRegistry')

ForgeEvents.onEvent('net.minecraftforge.event.ItemAttributeModifierEvent', event => {
    if (event.itemStack.id == 'cataclysm:the_incinerator' && event.slotType == 'mainhand') {
        //Inputting a ResourceLocation or a string of an attribute ID also works, but I just use the direct attribute
        event.addModifier($Attributes.ATTACK_SPEED, new $AttributeModifier(UUID.fromString('8de60aa9-1d4b-459f-b075-48e1c37523ce'), '武器附魔', -0.3, 'addition'))
        event.addModifier($Attributes.ATTACK_DAMAGE, new $AttributeModifier(UUID.fromString('e5f42dff-43e7-43a8-a289-8ec1e0b94fbf'), '武器附魔', 2, 'addition'))
    }
});