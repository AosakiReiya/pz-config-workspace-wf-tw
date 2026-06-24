StartupEvents.registry('item', event => {

  event.create('arcane_mix')
    .displayName("奧術混合物")
    .textureJson({
      layer0: 'fantasia:item/alchemy_mix',
      layer1: 'fantasia:item/alchemy_mix_overlay'
    })
    .color(0, '#7368C3')
    .color(1, '#A89FEA');

  event.create('nature_mix')
    .displayName("自然混合物")
    .textureJson({
      layer0: 'fantasia:item/alchemy_mix',
      layer1: 'fantasia:item/alchemy_mix_overlay'
    })
    .color(0, '#97BD6A')
    .color(1, '#9BC76A');

  event.create('fire_mix')
    .displayName("熾鐵混合物")
    .textureJson({
      layer0: 'fantasia:item/alchemy_mix',
      layer1: 'fantasia:item/alchemy_mix_overlay'
    })
    .color(0, '#B74A00')
    .color(1, '#E5B028');

  event.create('ice_mix')
    .displayName("凍結混合物")
    .textureJson({
      layer0: 'fantasia:item/alchemy_mix',
      layer1: 'fantasia:item/alchemy_mix_overlay'
    })
    .color(0, '#7FADC2')
    .color(1, '#C9DCE4');

  event.create('lightning_mix')
    .displayName("激電混合物")
    .textureJson({
      layer0: 'fantasia:item/alchemy_mix',
      layer1: 'fantasia:item/alchemy_mix_overlay'
    })
    .color(0, '#36C6E5')
    .color(1, '#BCE6F4');
  
  event.create('ender_mix')
    .displayName("末影混合物")
    .textureJson({
      layer0: 'fantasia:item/alchemy_mix',
      layer1: 'fantasia:item/alchemy_mix_overlay'
    })
    .color(0, '#673376')
    .color(1, '#A661BA');
  
  event.create('holy_mix')
    .displayName("神聖混合物")
    .textureJson({
      layer0: 'fantasia:item/alchemy_mix',
      layer1: 'fantasia:item/alchemy_mix_overlay'
    })
    .color(0, '#E1DA79')
    .color(1, '#FBF7BF');

  event.create('protection_mix')
    .displayName("保護混合物")
    .textureJson({
      layer0: 'fantasia:item/alchemy_mix',
      layer1: 'fantasia:item/alchemy_mix_overlay'
    })
    .color(0, '#CECDA0')
    .color(1, '#F4F3DA');

  event.create('recovery_mix')
    .displayName("解毒混合物")
    .textureJson({
      layer0: 'fantasia:item/alchemy_mix',
      layer1: 'fantasia:item/alchemy_mix_overlay'
    })
    .color(0, '#DD8EA9')
    .color(1, '#FFC6DA');

  event.create('evocation_mix')
    .displayName("喚靈混合物")
    .textureJson({
      layer0: 'fantasia:item/alchemy_mix',
      layer1: 'fantasia:item/alchemy_mix_overlay'
    })
    .color(0, '#4FA74D')
    .color(1, '#76DD73');

  event.create('blood_mix')
    .displayName("血腥混合物")
    .textureJson({
      layer0: 'fantasia:item/alchemy_mix',
      layer1: 'fantasia:item/alchemy_mix_overlay'
    })
    .color(0, '#420000')
    .color(1, '#8C2538');
})