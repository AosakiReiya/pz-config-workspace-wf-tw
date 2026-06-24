StartupEvents.registry('item', event => {

    event.create('diamond_alloy_blend')
        .displayName('鑽石合金混合物')
        .maxStackSize(64)
        .texture('fantasia:item/diamond_alloy_blend');

    event.create('diamond_alloy')
        .displayName('粗製鑽石合金')
        .maxStackSize(64)
        .texture('fantasia:item/diamond_alloy');

    event.create('heated_diamond_alloy')
        .displayName('加熱的鑽石合金')
        .maxStackSize(64)
        .texture('fantasia:item/heated_diamond_alloy');

    event.create('diamond_ingot')
        .displayName('鑽石錠')
        .maxStackSize(64)
        .texture('fantasia:item/diamond_ingot');

    event.create('heated_diamond_ingot')
        .displayName('加熱鑽石錠')
        .maxStackSize(64)
        .texture('fantasia:item/heated_diamond_ingot');

    event.create('diamond_plate')
        .displayName('鑽石板')
        .maxStackSize(64)
        .texture('fantasia:item/diamond_plate');

    event.create('heated_diamond_plate')
        .displayName('加熱鑽石板')
        .maxStackSize(64)
        .texture('fantasia:item/heated_diamond_plate');

    event.create('diamond_sword_blade')
        .maxStackSize(64)
        .displayName("鑽石劍刃")
        .texture('fantasia:item/tools/diamond/diamond_sword_blade');

    event.create('diamond_pickaxe_head')
        .maxStackSize(64)
        .displayName("鑽石鎬頭")
        .texture('fantasia:item/tools/diamond/diamond_pickaxe_head');

    event.create('diamond_axe_head')
        .maxStackSize(64)
        .displayName("鑽石斧頭")
        .texture('fantasia:item/tools/diamond/diamond_axe_head');

    event.create('diamond_shovel_head')
        .maxStackSize(64)
        .displayName("鑽石鍬頭")
        .texture('fantasia:item/tools/diamond/diamond_shovel_head');
    
    event.create('diamond_hoe_head')
        .maxStackSize(64)
        .displayName("鑽石鋤頭")
        .texture('fantasia:item/tools/diamond/diamond_hoe_head');
});