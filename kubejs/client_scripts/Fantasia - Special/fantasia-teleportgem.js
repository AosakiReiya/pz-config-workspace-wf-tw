/* ========================================================================
=== Client Script ===

Credits:
-----------------
Thank you very much, @squoshi, for your very big help in identifying bugs and 
inconsistencies in my code
GitHub: https://github.com/squoshi
CurseForge: https://www.curseforge.com/members/squoshi/projects

======================================================================== */


ItemEvents.tooltip(event => {
    event.addAdvanced("kubejs:teleport_gem", (stack, advanced, text) => {

        const player = Client.player
        if (!player) return

        text.add(Text.translatable("item.kubejs.teleport_gem.desc").gray())

        if (!player.persistentData.playerCooldowns) {
            player.persistentData.playerCooldowns = {}
        }

        const remainingCD = player.persistentData.playerCooldowns.teleportGem || 0;
        const secondsLeft = remainingCD.toFixed(0);;

        let cooldowntext;

        if (secondsLeft > 0) {
            cooldowntext = Text.translatable("tooltip.kubejs.teleport_gem.cooldown", secondsLeft).red()
        } else {
            cooldowntext = Text.translatable("tooltip.kubejs.teleport_gem.ready").green()
        }

        text.add(cooldowntext);
    })
})



// Teleport Gem Use Animation
AnimationJS.playerModel(event => {
    const { playerModel, player } = event

    let UseItem = player.getUseItem()

    if (UseItem.id === "kubejs:teleport_gem") {
     player.persistentData.teleportGemAnimation = true
    } else { 
        player.persistentData.teleportGemAnimation = false
    }

    if (!player.persistentData.teleportGemAnimation) return

    let UsedItemHand = player.getUsedItemHand()
    let mainArm = player.mainArm;
    let animateRightArm = false

    let isRightHanded = (mainArm === "RIGHT")

    if (UsedItemHand === "MAIN_HAND") {
       
        animateRightArm = isRightHanded
    } else {
        animateRightArm = !isRightHanded
    }

    if (animateRightArm) {
        playerModel.rightArm.setRotation(
            -2.55,   
            0.0,
            0.0      
        );
        playerModel.rightSleeve.copyFrom(playerModel.rightArm)
    } else {
        playerModel.leftArm.setRotation(
            -2.55,   
            0.0,     
            0.0    
        );
        playerModel.leftSleeve.copyFrom(playerModel.leftArm)
    }
});

/* */