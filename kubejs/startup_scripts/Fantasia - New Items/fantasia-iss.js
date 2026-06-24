StartupEvents.registry('item', event => {

    event.create('arcane_treated_cloth')
        .displayName('奧術處理布')
        .texture('fantasia:item/arcane_treated_cloth');

    event.create('solution_arcane')
        .displayName('奧術溶液')
        .maxStackSize(6)
        .glow(true)
        .texture('fantasia:item/solution_arcane');

    event.create('solution_nature')
        .displayName('自然源質溶液')
        .maxStackSize(6)
        .glow(true)
        .texture('fantasia:item/solution_nature');

    event.create('solution_fire')
        .displayName('熾鐵溶液')
        .maxStackSize(6)
        .glow(true)
        .texture('fantasia:item/solution_fire');

    event.create('solution_ice')
        .displayName('冰霜溶液')
        .maxStackSize(6)
        .glow(true)
        .texture('fantasia:item/solution_ice');

    event.create('solution_lightning')
        .displayName('閃電溶液')
        .maxStackSize(6)
        .glow(true)
        .texture('fantasia:item/solution_lightning');

    event.create('solution_ender')
        .displayName('末影溶液')
        .maxStackSize(6)
        .glow(true)
        .texture('fantasia:item/solution_ender');

    event.create('solution_holy')
        .displayName('神聖溶液')
        .maxStackSize(6)
        .glow(true)
        .texture('fantasia:item/solution_holy');

    event.create('solution_protection')
        .displayName('保護溶液')
        .maxStackSize(6)
        .glow(true)
        .texture('fantasia:item/solution_protection');

    event.create('solution_cooldown')
        .displayName('回收溶液')
        .maxStackSize(6)
        .glow(true)
        .texture('fantasia:item/solution_cooldown');

    event.create('solution_evocation')
        .displayName('喚魔溶液')
        .maxStackSize(6)
        .glow(true)
        .texture('fantasia:item/solution_evocation');

    event.create('solution_blood')
        .displayName('溶血溶液')
        .maxStackSize(6)
        .glow(true)
        .texture('fantasia:item/solution_blood');

    event.create('arcane_thread')
        .displayName('奧術線')
        .maxStackSize(16)
        .texture('fantasia:item/arcane_thread');

    event.create('silver_needle')
        .displayName('銀針')
        .maxStackSize(1)
        .maxDamage(5)
        .texture('fantasia:item/tools/needles/silver_needle');

    event.create('steel_needle')
        .displayName('鋼針')
        .maxStackSize(1)
        .maxDamage(20)
        .texture('fantasia:item/tools/needles/steel_needle');

    event.create('bone_needle')
        .displayName('骨針')
        .maxStackSize(1)
        .maxDamage(2)
        .texture('fantasia:item/tools/needles/bone_needle');

    event.create('file_head')
        .displayName('粗糲銼刀頭')
        .maxStackSize(64)
        .texture('fantasia:item/tools/needles/file_head');

    event.create('netherite_mage_smithing_template')
        .displayName('鍛造模板')
        .maxStackSize(64)
        .texture('fantasia:item/netherite_mage_smithing_template');

    event.create('netherite_plates')
        .displayName('下界合金板')
        .maxStackSize(64)
        .texture('fantasia:item/netherite_plates');
})