StartupEvents.registry('fluid', event => {    
  
  event.create('sulfuric_liquid')
    .thinTexture("#ECDA8F")
    .displayName('液態硫酸');

  event.create('weapon_oil_base')
    .thinTexture("#DCBF64")
    .displayName('武器油基質')
    .noBucket();

  event.create('hallowed_oil')
    .thinTexture("#F8E000")
    .displayName('神聖油脂')
    .noBucket();

  event.create('arthro_oil')
    .thinTexture("#7C3E00")
    .displayName('節肢動物油脂')
    .noBucket();

  event.create('cryotic_oil')
    .thinTexture("#7C9CF8")
    .displayName('冷凍油脂')
    .noBucket();

  event.create('necrotic_oil')
    .thinTexture("#1F7C3E")
    .displayName('噬生油脂')
    .noBucket();

  event.create('creeper_oil')
    .thinTexture("#7C3E7C")
    .displayName('苦力怕油脂')
    .noBucket();

  event.create('aquatic_oil')
    .thinTexture("#3E7CBB")
    .displayName('水產油脂')
    .noBucket();

  event.create('ender_oil')
    .thinTexture("#196464")
    .displayName('末影油脂')
    .noBucket();

  event.create('wither_oil')
    .thinTexture("#291515")
    .displayName('凋零油')
    .noBucket();
  
  event.create('harming_oil')
    .thinTexture("#A46267")
    .displayName('傷害油脂')
    .noBucket();

  event.create('poison_oil')
    .thinTexture("#839F60")
    .displayName('毒液油脂')
    .noBucket();

  event.create('slowness_oil')
    .thinTexture("#87AADA")
    .displayName('遲緩油脂')
    .noBucket();

  event.create('weakness_oil')
    .thinTexture("#464B46")
    .displayName('虛弱油脂')
    .noBucket();

  event.create('bloodlust_oil')
    .thinTexture("#440000")
    .displayName('嗜血晶體油脂')
    .noBucket();

  event.create('poison_antidote')
    .thinTexture("#677C4C")
    .displayName('抗性藥水')
    .noBucket();

  event.create('decay_antidote')
    .thinTexture("#3A312B")
    .displayName('腐骴抗劑')
    .noBucket();
});