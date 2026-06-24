StartupEvents.registry('item', event => {

  event.create('wrought_axe', 'axe')
    .maxDamage(-1)
    .displayName("鍛鐵斧頭")
    .attackDamageBaseline(14)
    .speedBaseline(-3.1)
    .tier('diamond');

  event.create('zombie_claw', 'sword')
    .displayName("殭屍利爪")
    .maxDamage(1)
    .attackDamageBaseline(-2)
    .speedBaseline(-2.6)
    .texture('fantasia:item/zombie_claw');
})