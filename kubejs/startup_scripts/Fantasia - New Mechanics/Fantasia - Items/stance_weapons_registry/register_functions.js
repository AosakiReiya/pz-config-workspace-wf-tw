// priority: 100


global.FantasiaStanceWeapons = []


// https://github.com/ObliviousSpartan/SpartanWeaponry/blob/1.20.1/src/main/java/com/oblivioussp/spartanweaponry/item/SwordBaseItem.java
let $SwordBaseItem = Java.loadClass("com.oblivioussp.spartanweaponry.item.SwordBaseItem")
// https://github.com/ObliviousSpartan/SpartanWeaponry/blob/1.20.1/src/main/java/com/oblivioussp/spartanweaponry/api/WeaponMaterial.java
let $WeaponMaterial = Java.loadClass("com.oblivioussp.spartanweaponry.api.WeaponMaterial")
// https://github.com/ObliviousSpartan/SpartanWeaponry/blob/1.20.1/src/main/java/com/oblivioussp/spartanweaponry/util/WeaponArchetype.java
let $WeaponArchetype = Java.loadClass("com.oblivioussp.spartanweaponry.util.WeaponArchetype")

let $ItemProperties = Java.loadClass("net.minecraft.world.item.Item$Properties")
let $InteractionResultHolder = Java.loadClass("net.minecraft.world.InteractionResultHolder")


const MATERIAL_MAP = {
    "wooden": $WeaponMaterial.WOOD,
    "stone": $WeaponMaterial.STONE,
    "copper": $WeaponMaterial.COPPER,
    "iron": $WeaponMaterial.IRON,
    "golden": $WeaponMaterial.GOLD,
    "diamond": $WeaponMaterial.DIAMOND,
    "netherite": $WeaponMaterial.NETHERITE,
    "steel": $WeaponMaterial.STEEL
}


const ARCHETYPE_MAP = {
    "greatsword": $WeaponArchetype.GREATSWORD,
    "longsword": $WeaponArchetype.LONGSWORD,
    "katana": $WeaponArchetype.KATANA,
    "saber": $WeaponArchetype.SABER,
    "rapier": $WeaponArchetype.RAPIER,
    "battleaxe": $WeaponArchetype.BATTLEAXE,
    "battle_hammer": $WeaponArchetype.BATTLE_HAMMER,
    "flanged_mace": $WeaponArchetype.FLANGED_MACE,
    "warhammer": $WeaponArchetype.WARHAMMER,
}


/**
 * @param {Registry.Item} event
 * @param {string} name 
 * @param {string} type
 * @param {object} config
 */
function registerVanillaStanceWeapon(event, name, type, config) {

    /*
    event.create(`${name}_one_handed`, type)
        .use((level, player, hand) => {
            return player.isCrouching() && hand === "MAIN_HAND"
        })
        .maxDamage(config.durability)
        .tier(config.tier)
        .attackDamageBonus(config.one_handed_damage)
        .speedBaseline(config.one_handed_speed)
        .tag("fantasia:stance_one_handed")
        .tag("forge:weapons")
        .tag("swordblockingmechanics:can_perform_sword_blocking")
    */

    event.create(`${name}_two_handed`, type)
        .use((level, player, hand) => {
            return player.isCrouching() && hand === "MAIN_HAND"
        })
        .maxDamage(config.durability)
        .tier(config.tier)
        .attackDamageBonus(config.two_handed_damage)
        .speedBaseline(config.two_handed_speed)
        .tag("fantasia:stance_two_handed")
        .tag("forge:weapons")
        .tag("swordblockingmechanics:can_perform_sword_blocking")
}

/**
 * @param {Registry.Item} event
 * @param {string} name 
 * @param {string} archetype
 * @param {string} material
 */
function registerSpartanStanceWeapon(event, name, archetype, material) {

    let weaponMaterial = MATERIAL_MAP[material]
    let weaponArchetype = ARCHETYPE_MAP[archetype]

    if (!weaponMaterial || !weaponArchetype) {
        console.warn(`[Fantasia] Skipping ${name}: Material or Archetype not found!`);
        return;
    }

    // https://github.com/ObliviousSpartan/SpartanWeaponry/blob/1.20.1/src/main/java/com/oblivioussp/spartanweaponry/item/SwordBaseItem.java#L75
    /*
    event.createCustom(`${name}_one_handed`, () => {
        let adapter = new JavaAdapter($SwordBaseItem, {
            m_7203_: function(level, player, hand) {
                
                if (player.isCrouching() && hand === "MAIN_HAND") {
                    player.startUsingItem(hand)
                    return $InteractionResultHolder.consume(player.getItemInHand(hand));
                }
                return $InteractionResultHolder.pass(player.getItemInHand(hand));
            },

            m_7724_: function(stack) {
                return 72000
            }
            
        }, new $ItemProperties(), weaponMaterial, weaponArchetype, 1.0, 1.0, 1.0);
        
        return adapter;
    })
    .tag("fantasia:stance_one_handed")
    .tag("forge:weapons")
    .tag("swordblockingmechanics:can_perform_sword_blocking")
    */

    event.createCustom(`${name}_two_handed`, () => {
        let adapter = new JavaAdapter($SwordBaseItem, {
            /**
             * @param {Internal.Level} level 
             * @param {Player} player 
             * @param {Internal.InteractionHand_} hand 
             * @returns 
             */
            m_7203_: function(level, player, hand) {
                
                if (player.isCrouching() && hand === "MAIN_HAND") {
                    player.startUsingItem(hand)
                    return $InteractionResultHolder.consume(player.getItemInHand(hand));
                }
                return $InteractionResultHolder.pass(player.getItemInHand(hand));
            },

            /*
            m_7724_: function(stack) {
                return 72000
            }
            */
        }, new $ItemProperties(), weaponMaterial, weaponArchetype, 1.0, 1.0, 1.0);
        
        return adapter;
    })
    .tag("fantasia:stance_two_handed")
    .tag("forge:weapons")
    .tag("swordblockingmechanics:can_perform_sword_blocking")
}