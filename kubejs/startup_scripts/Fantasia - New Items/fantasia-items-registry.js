const $IProperties = Java.loadClass('net.minecraft.world.item.Item$Properties');
const $HammerItem = Java.loadClass('net.teamsolar.simplest_hammers.item.custom.HammerItem');
const $ExcavatorItem = Java.loadClass('net.teamsolar.simplest_excavators.item.custom.ExcavatorItem');
const $KnifeItem = Java.loadClass('vectorwing.farmersdelight.common.item.KnifeItem');
const $OverGearedTiers = Java.loadClass('net.stirdrem.overgeared.item.ModToolTiers');
const $Tiers = Java.loadClass("net.minecraft.world.item.Tiers");

StartupEvents.registry('item', event => {

  event.create('primitive_tongs', 'sword')
    .maxStackSize(1)
    .displayName("原始拉絲鉗")
    .maxDamage(16)
    .attackDamageBaseline(1)
    .attackDamageBonus(-2)
    .texture('fantasia:item/primitive_tongs');

  event.create('heated_iron_plate')
    .displayName('熱鋼板')
    .maxStackSize(64)
    .texture('fantasia:item/heated_iron_plate');

  event.create('heated_steel_plate')
    .displayName('熱鋼片')
    .maxStackSize(64)
    .texture('fantasia:item/heated_steel_plate');

  event.create('smithing_glove', 'sword')
    .maxStackSize(1)
    .displayName("冶煉手套")
    .maxDamage(16)
    .attackDamageBaseline(1)
    .attackDamageBonus(-2)
    .texture('fantasia:item/smithing_glove');

  event.create('stone_smithing_hammer', 'sword')
    .displayName("石制工匠錘")
    .maxDamage(131)
    .texture('fantasia:item/tools/stone/stone_smithing_hammer')
    .tier('stone')
    .attackDamageBaseline(1)
    .attackDamageBonus(-1)
    .speedBaseline(-2.8)
    .unstackable();

  event.createCustom('steel_knife',
    () => new $KnifeItem($OverGearedTiers.STEEL, 0.5, -2.0, new $IProperties()))
    .displayName("鋼刀");

  event.createCustom('steel_cleaver',
    () => new $KnifeItem($OverGearedTiers.STEEL, 0.5, -2.0, new $IProperties()))
    .displayName("鋼劈刀");

  event.createCustom('steel_hammer',
    () => new $HammerItem($OverGearedTiers.STEEL, 5, -3.2, new $IProperties().durability(750)))
    .displayName("鋼製挖掘錘");

  event.createCustom('steel_excavator',
    () => new $ExcavatorItem($OverGearedTiers.STEEL, 2.5, -3.2, new $IProperties().durability(750)))
    .displayName("鋼開掘鏟");

  event.create('stone_tip')
    .maxStackSize(64)
    .displayName("石制銳化尖端")
    .texture('fantasia:item/tools/stone/stone_tip');

  event.create('stone_hammer_head')
    .maxStackSize(64)
    .displayName("石制挖掘錘頭")
    .texture('fantasia:item/tools/stone/stone_hammer_head');

  event.create('iron_hammer_head')
    .maxStackSize(64)
    .displayName("鐵製挖掘錘頭")
    .texture('fantasia:item/tools/iron/iron_hammer_head');

  event.create('steel_hammer_head')
    .maxStackSize(64)
    .displayName("鋼製挖掘錘頭")
    .texture('fantasia:item/tools/steel/steel_hammer_head');

  event.create('diamond_hammer_head')
    .maxStackSize(64)
    .displayName("鑽石挖掘錘頭")
    .texture('fantasia:item/tools/diamond/diamond_hammer_head');

  event.create('iron_excavator_head')
    .maxStackSize(64)
    .displayName("鐵開掘鏟頭")
    .texture('fantasia:item/tools/iron/iron_excavator_head');

  event.create('steel_excavator_head')
    .maxStackSize(64)
    .displayName("鋼開掘鏟頭")
    .texture('fantasia:item/tools/steel/steel_excavator_head');

  event.create('diamond_excavator_head')
    .maxStackSize(64)
    .displayName("鑽石開掘鏟頭")
    .texture('fantasia:item/tools/diamond/diamond_excavator_head');

  event.create('iron_cleaver_blade')
    .maxStackSize(64)
    .displayName("鐵屠刀刀刃")
    .texture('fantasia:item/tools/iron/iron_cleaver_blade');

  event.create('steel_cleaver_blade')
    .maxStackSize(64)
    .displayName("鋼屠刀刀刃")
    .texture('fantasia:item/tools/steel/steel_cleaver_blade');

  event.create('diamond_cleaver_blade')
    .maxStackSize(64)
    .displayName("鑽石屠刀刀刃")
    .texture('fantasia:item/tools/diamond/diamond_cleaver_blade');

  // IRON SPEARHEAD

  event.create('iron_spearhead')
    .maxStackSize(64)
    .displayName("鐵質矛尖")
    .texture('fantasia:item/tools/iron/iron_spearhead');

  // IRON CURVED BLADE

  event.create('iron_curved_blade')
    .maxStackSize(64)
    .displayName("鐵鐮形劍刃")
    .texture('fantasia:item/tools/iron/iron_curved_blade');

  // LONGSWORD BLADE

  event.create('iron_longsword_blade')
    .maxStackSize(64)
    .displayName("鐵長劍刀刃")
    .texture('fantasia:item/tools/iron/iron_longsword_blade');

  // IRON BLADE

  event.create('iron_blade')
    .maxStackSize(64)
    .displayName("鐵刀片")
    .texture('fantasia:item/tools/iron/iron_blade');

  // GREATSWORD BLADE

  event.create('iron_greatsword_blade')
    .maxStackSize(64)
    .displayName("鐵大劍刀刃")
    .texture('fantasia:item/tools/iron/iron_greatsword_blade');

  // MISC IRON HEADS

  event.create('iron_battle_hammer_head')
    .maxStackSize(64)
    .displayName("鐵戰錘頭")
    .texture('fantasia:item/tools/iron/iron_battle_hammer_head');

  event.create('iron_battleaxe_head')
    .maxStackSize(64)
    .displayName("鐵戰斧頭")
    .texture('fantasia:item/tools/iron/iron_battleaxe_head');

  event.create('iron_flanged_mace_head')
    .maxStackSize(64)
    .displayName("鐵凸緣釘頭錘頭")
    .texture('fantasia:item/tools/iron/iron_flanged_mace_head');

  event.create('iron_halberd_head')
    .maxStackSize(64)
    .displayName("鐵戰戟頭")
    .texture('fantasia:item/tools/iron/iron_halberd_head');

  event.create('iron_warhammer_head')
    .maxStackSize(64)
    .displayName("鐵戰錘頭")
    .texture('fantasia:item/tools/iron/iron_warhammer_head');

  // steel SPEARHEAD

  event.create('steel_spearhead')
    .maxStackSize(64)
    .displayName("鋼矛尖")
    .texture('fantasia:item/tools/steel/steel_spearhead');

  // steel CURVED BLADE

  event.create('steel_curved_blade')
    .maxStackSize(64)
    .displayName("鋼鐮形劍刃")
    .texture('fantasia:item/tools/steel/steel_curved_blade');

  // LONGSWORD BLADE

  event.create('steel_longsword_blade')
    .maxStackSize(64)
    .displayName("鋼長劍刀刃")
    .texture('fantasia:item/tools/steel/steel_longsword_blade');

  // GREATSWORD BLADE

  event.create('steel_greatsword_blade')
    .maxStackSize(64)
    .displayName("鋼大劍刀刃")
    .texture('fantasia:item/tools/steel/steel_greatsword_blade');

  // MISC steel HEADS

  event.create('steel_battle_hammer_head')
    .maxStackSize(64)
    .displayName("鋼戰錘頭")
    .texture('fantasia:item/tools/steel/steel_battle_hammer_head');

  event.create('steel_battleaxe_head')
    .maxStackSize(64)
    .displayName("鋼戰斧頭")
    .texture('fantasia:item/tools/steel/steel_battleaxe_head');

  event.create('steel_flanged_mace_head')
    .maxStackSize(64)
    .displayName("鋼凸緣釘頭錘頭")
    .texture('fantasia:item/tools/steel/steel_flanged_mace_head');

  event.create('steel_halberd_head')
    .maxStackSize(64)
    .displayName("鋼戟頭")
    .texture('fantasia:item/tools/steel/steel_halberd_head');

  event.create('steel_warhammer_head')
    .maxStackSize(64)
    .displayName("鋼戰錘頭")
    .texture('fantasia:item/tools/steel/steel_warhammer_head');

  event.create('steel_blade')
    .maxStackSize(64)
    .displayName("鋼刀條")
    .texture('fantasia:item/tools/steel/steel_blade');

  // Diamond SPEARHEAD

  event.create('diamond_spearhead')
    .maxStackSize(64)
    .displayName("鑽石矛尖")
    .texture('fantasia:item/tools/diamond/diamond_spearhead');

  // Diamond CURVED BLADE

  event.create('diamond_curved_blade')
    .maxStackSize(64)
    .displayName("鑽石鐮形劍刃")
    .texture('fantasia:item/tools/diamond/diamond_curved_blade');

  // LONGSWORD BLADE

  event.create('diamond_longsword_blade')
    .maxStackSize(64)
    .displayName("鑽石長劍刀刃")
    .texture('fantasia:item/tools/diamond/diamond_longsword_blade');

  // GREATSWORD BLADE

  event.create('diamond_greatsword_blade')
    .maxStackSize(64)
    .displayName("鑽石大劍刀刃")
    .texture('fantasia:item/tools/diamond/diamond_greatsword_blade');

  // MISC Diamond HEADS

  event.create('diamond_battle_hammer_head')
    .maxStackSize(64)
    .displayName("鑽石戰錘頭")
    .texture('fantasia:item/tools/diamond/diamond_battle_hammer_head');

  event.create('diamond_battleaxe_head')
    .maxStackSize(64)
    .displayName("鑽石戰斧頭")
    .texture('fantasia:item/tools/diamond/diamond_battleaxe_head');

  event.create('diamond_flanged_mace_head')
    .maxStackSize(64)
    .displayName("鑽石凸緣釘頭錘頭")
    .texture('fantasia:item/tools/diamond/diamond_flanged_mace_head');

  event.create('diamond_halberd_head')
    .maxStackSize(64)
    .displayName("鑽石戰戟頭")
    .texture('fantasia:item/tools/diamond/diamond_halberd_head');

  event.create('diamond_warhammer_head')
    .maxStackSize(64)
    .displayName("鑽石戰錘頭")
    .texture('fantasia:item/tools/diamond/diamond_warhammer_head');

  event.create('diamond_blade')
    .maxStackSize(64)
    .displayName("鑽石鋸片")
    .texture('fantasia:item/tools/diamond/diamond_blade');

  event.create('armor_upgrade_template')
    .maxStackSize(64)
    .displayName("盔甲匠模板")
    .texture('fantasia:item/armor_upgrade_template');

  event.create('grease_ball')
    .displayName('油脂球')

  event.create('wooden_salt_bucket')
    .displayName('木鹽桶')
    .texture('fantasia:item/wooden_salt_bucket');

  event.create('solitarius_shard')
    .displayName('孤寂碎片')
    .texture('fantasia:item/solitarius_shard');

  event.create('mineomite_base')
    .displayName('採礦炸藥基質')
    .texture('fantasia:item/mineomite_base')

  event.create('unstable_mineomite')
    .displayName('不穩定的採礦炸藥')
    .texture('spelunkery:item/mineomite')
    .color(0, '#8A9B8E');
})