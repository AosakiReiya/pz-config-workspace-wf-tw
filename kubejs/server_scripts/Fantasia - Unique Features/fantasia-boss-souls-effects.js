const bossEffects = {
    ignis: [
        {
            type: "effect",
            id: "minecraft:fire_resistance",
            amp: 0
        },
        {
            type: "effect",
            id: "minecraft:resistance",
            amp: 1
        }
    ],
    maledictus: [
        {
            type: "effect",
            id: "minecraft:jump_boost",
            amp: 1
        },
        {
            type: "effect",
            id: "minecraft:speed",
            amp: 1
        },
        {
            type: "attribute",
            attribute: "irons_spellbooks:max_mana",
            id: "fantasia_boss_maxmana",
            operation: "addition",
            value: 200
        },
        {
            type: "attribute",
            attribute: "irons_spellbooks:mana_regen",
            id: "fantasia_boss_manaregen",
            operation: "addition",
            value: 5
        }
    ],
    scylla: [
        {
            type: "effect",
            id: "minecraft:dolphins_grace",
            amp: 1
        },
        {
            type: "effect",
            id: "minecraft:conduit_power",
            amp: 1
        },
        {
            type: "effect",
            id: "irons_spellbooks:charged",
            amp: 0
        }
    ]
}

function addEffectsOrAttributes(player, effects) {
    effects.forEach(effect => {
        if (effect.type === "effect") {
            player.potionEffects.add(
                effect.id,
                40,
                effect.amp,
                true,
                false
            );
        } else if (effect.type === "attribute") {
            player.modifyAttribute(
                effect.attribute,
                effect.id,
                effect.value,
                effect.operation
            );
        }
    });
}

PlayerEvents.tick((event) => {
    const { player, level } = event;
    const { persistentData: data } = player;
    if (level.time % 20 != 0) return;

    if (data.IgnisPower) {
        data.hasIgnisEffects = true;
        addEffectsOrAttributes(player, bossEffects.ignis);
    }
    if (data.MaledictusPower) {
        data.hasMaledictusEffects = true;
        addEffectsOrAttributes(player, bossEffects.maledictus);
    }
    if (data.ScyllaPower) {
        data.hasScyllaEffects = true;
        addEffectsOrAttributes(player, bossEffects.scylla);
    }
});

EntityEvents.death(event => {
  let entity = event.entity;

  if (!entity.isPlayer()) return;

  entity.persistentData.IgnisPower = false;
  entity.persistentData.MaledictusPower = false;
  entity.persistentData.ScyllaPower = false;
});

/*

Putting a mark for this later:

ItemEvents.foodEaten(event => {
    if (event.item.id === 'kubejs:fruit_of_eternal_life') {
        if (event.player) {
            event.player.maxHealth += 2;
        }
    }
});

*/