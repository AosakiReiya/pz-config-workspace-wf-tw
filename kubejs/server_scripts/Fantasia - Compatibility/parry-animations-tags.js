const FantasiaSwordItems = [
    "minecraft:golden_sword",
    "minecraft:diamond_sword",
    "minecraft:iron_sword",
    "minecraft:netherite_sword",
    "minecraft:stone_sword",
    "minecraft:wooden_sword",
    "overgeared:steel_sword"
]


const ParryDualWieldPoseItems = [
    "#spartanweaponry:parrying_daggers",
    "#fantasia:swords",
]


const ParryLongswordPoseItems = [
    /.*_sword_two_handed/,
    /.*_rapier_two_handed/,
    /.*_saber_two_handed/,
    /.*_longsword_two_handed/,
    /.*_katana_two_handed/,
    "irons_spellbooks:spellbreaker",
    "irons_spellbooks:boreal_blade",
    "irons_spellbooks:keeper_flamberge",
    "irons_spellbooks:legionnaire_flamberge",
    "kubejs:khopesh_two_handed"
]


const ParryPolearmPoseItems = [
    "#spartanweaponry:glaives",
    "#spartanweaponry:halberds",
    "#spartanweaponry:scythes",
    "irons_spellbooks:decrepit_scythe",
    "irons_spellbooks:hellrazor"

]


const ParryPikePoseItems = [
    
]


const ParryTwoHandedPoseItems = [
    "spartanweaponry:netherite_katana",
    "#spartanweaponry:greatswords",
]


const ParryWarhammerPoseItems = [
    /.*_battle_hammer_two_handed/,
    /.*_battleaxe_two_handed/,
    /.*_warhammer_two_handed/,
]


ServerEvents.tags("item", e =>{
    e.add("fantasia:swords", FantasiaSwordItems)

    e.add("fantasia:parry_dual_wield_anim", ParryDualWieldPoseItems)
    e.add("fantasia:parry_longsword_anim", ParryLongswordPoseItems)
    e.add("fantasia:parry_polearm_anim", ParryPolearmPoseItems)
    e.add("fantasia:parry_two_hand_anim", ParryTwoHandedPoseItems)
    e.add("fantasia:parry_warhammer_anim", ParryWarhammerPoseItems)

    e.add("spartanweaponry:wooden_weapons", "minecraft:wooden_sword")

    // e.add("fantasia:parry_pike_anim", ParryPikePoseItems)
})
