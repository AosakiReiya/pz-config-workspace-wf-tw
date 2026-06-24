    StartupEvents.registry('fluid', event => {
	
	//Arcane
    event.create('solution_arcane_fluid')
    .thinTexture(0x4c9ac3)
    .bucketColor(0x4c9ac3)
    .displayName('奧術溶液')
    .noBucket() 
    .noBlock();

    //Blood
    event.create('solution_blood_fluid')
    .thinTexture(0x420000)
    .bucketColor(0x4420000)
    .displayName('溶血溶液')
    .noBucket() 
    .noBlock();

    //Recovery
    event.create('solution_cooldown_fluid')
    .thinTexture(0xe8a3bb)
    .bucketColor(0xe8a3bb)
    .displayName('回收溶液')
    .noBucket() 
    .noBlock();

    //Ender
    event.create('solution_ender_fluid')
    .thinTexture(0x9641af)
    .bucketColor(0x9641af)
    .displayName('末影溶液')
    .noBucket() 
    .noBlock();

    //Evocation
    event.create('solution_evocation_fluid')
    .thinTexture(0x60be5e)
    .bucketColor(0x60be5e)
    .displayName('喚靈溶液')
    .noBucket() 
    .noBlock();

    //Fire
    event.create('solution_fire_fluid')
    .thinTexture(0xd07d07)
    .bucketColor(0xd07d07)
    .displayName('熾鐵溶液')
    .noBucket() 
    .noBlock();

    //Holy
    event.create('solution_holy_fluid')
    .thinTexture(0xf4eea4)
    .bucketColor(0xf4eea4)
    .displayName('神聖溶液')
    .noBucket() 
    .noBlock();
    
    //Ice
    event.create('solution_ice_fluid')
    .thinTexture(0xa7cbd9)
    .bucketColor(0xa7cbd9)
    .displayName('凍結溶液')
    .noBucket() 
    .noBlock();

    //Lightning
    event.create('solution_lightning_fluid')
    .thinTexture(0x55e0f4)
    .bucketColor(0x55e0f4)
    .displayName('閃電溶液')
    .noBucket() 
    .noBlock();

    //Nature
    event.create('solution_nature_fluid')
    .thinTexture(0x9bc76a)
    .bucketColor(0x9bc76a)
    .displayName('自然溶液')
    .noBucket() 
    .noBlock();

    //Protection
    event.create('solution_protection_fluid')
    .thinTexture(0xf4f3da)
    .bucketColor(0xf4f3da)
    .displayName('保護溶液')
    .noBucket() 
    .noBlock();
})