AnimationJS.playerModel(event => {
    const { player, playerModel } = event;

    global.fantasiaParryPose(player, playerModel)
    global.fantasiaParryAnimation(player, playerModel)
})


NetworkEvents.dataReceived("fantasia_parry_animation", e => {   
    const {player, data} = e

    const {isRightArm, animation} = data

    player.persistentData.playParryAnimation = true
    player.persistentData.isRightArm = isRightArm
    player.persistentData.parryAnimationType = animation
})

PlayerEvents.tick(e => {
    const { player } = e
    let data = player.persistentData
    if (data.playParryAnimation) {
        data.parryAnimationTime++
    }
})


/**
 * @param {Internal.Player} player
 * @param {Internal.PlayerModel<any>} playerModel
 */
global.fantasiaParryPose = (player, playerModel) => {
    
    const useItem = player.useItem

    const data = player.persistentData

    if (data.parryAnimationTime > ApplyFantasiaParryAnims.MAX_ANIM_TIME) {
        data.playParryAnimation = false;
        data.parryAnimationTime = 0;
    }
   
    if (!useItem.hasTag("swordblockingmechanics:can_perform_sword_blocking") || data.playParryAnimation) return

    
    const isRightHanded = (player.mainArm === "RIGHT")
    const usedHand = player.usedItemHand
    let isRightArm = (usedHand === "MAIN_HAND") ? isRightHanded : !isRightHanded

    const anims = ApplyFantasiaParryAnims   
    if (useItem.hasTag("fantasia:parry_warhammer_anim")) {
        anims.warhammerPose(playerModel, isRightArm)
    }
    else if (useItem.hasTag("fantasia:parry_polearm_anim")) {
        anims.polearmPose(playerModel, isRightArm)
    }
    else if (useItem.hasTag("fantasia:parry_longsword_anim")) {
        anims.longswordPose(playerModel, isRightArm)
    }
    else if (useItem.hasTag("fantasia:parry_two_hand_anim")) {
        anims.twoHandedPose(playerModel, isRightArm)
    } 
    else if (player.mainHandItem.hasTag("fantasia:parry_dual_wield_anim") && player.offHandItem.hasTag("fantasia:parry_dual_wield_anim")) {
        anims.dualWieldPose(playerModel, isRightArm)
    } 
    else {
        anims.simplePose(playerModel, isRightArm)
    }
}


/**
 * @param {Internal.Player} player
 * @param {Internal.PlayerModel<any>} playerModel
 */
global.fantasiaParryAnimation = (player, playerModel) => {
    
    let data = player.persistentData
   
    if (!data.playParryAnimation) return

    if (!data.parryAnimationTime) data.parryAnimationTime = 0
    // data.parryAnimationTime++
    
    const anims = ApplyFantasiaParryAnims

    const MAX_ANIM_TIME = anims.MAX_ANIM_TIME

    const isRightArm = data.isRightArm 

    if (data.parryAnimationType === "warhammer") {
        anims.warhammerAnimation(playerModel, isRightArm, data.parryAnimationTime, MAX_ANIM_TIME)
    }
    else if (data.parryAnimationType === "polearm") {
        anims.polearmAnimation(playerModel, isRightArm, data.parryAnimationTime, MAX_ANIM_TIME)
    }
    else if (data.parryAnimationType === "longsword") {
        anims.longswordAnimation(playerModel, isRightArm, data.parryAnimationTime, MAX_ANIM_TIME)
        // applyLongSwordParryAnimation(playerModel, isRightArm, data.parryAnimationTime, MAX_ANIM_TIME)
    }
    else if (data.parryAnimationType === "two_handed") {
        anims.twoHandedAnimation(playerModel, isRightArm, data.parryAnimationTime, MAX_ANIM_TIME)
        // applyTwoHandedParryAnimation(playerModel, isRightArm, data.parryAnimationTime, MAX_ANIM_TIME)
    } 
    else if (data.parryAnimationType === "dual_wield") {
        anims.dualWieldAnimation(playerModel, isRightArm, data.parryAnimationTime, MAX_ANIM_TIME)
        // applyDualWieldParryAnimation(playerModel, isRightArm, data.parryAnimationTime, MAX_ANIM_TIME)
    } 
    else {
        anims.simpleAnimation(playerModel, isRightArm, data.parryAnimationTime, MAX_ANIM_TIME)
       // applySimpleParryAnimation(playerModel, isRightArm, data.parryAnimationTime, MAX_ANIM_TIME)
    }    
}


const ApplyFantasiaParryAnims = {
    warhammerPose(playerModel, isRightArm) {
        if (isRightArm) {
            playerModel.rightArm.setRotation(-1.4, -0.2, 1.4)
            playerModel.rightSleeve.copyFrom(playerModel.rightArm)

            playerModel.leftArm.setRotation(-1.5, 0.8, 0.1)
            playerModel.leftSleeve.copyFrom(playerModel.leftArm)
        } else {
            playerModel.rightArm.setRotation(-1.5, -0.8, -0.1)
            playerModel.rightSleeve.copyFrom(playerModel.rightArm)

            playerModel.leftArm.setRotation(-1.4, 0.2, -1.4)
            playerModel.leftSleeve.copyFrom(playerModel.leftArm)
        }
    },

    polearmPose(playerModel, isRightArm) {
        if (isRightArm) {
            playerModel.rightArm.setRotation(-1.2, 0.0, -1.3)
            playerModel.rightSleeve.copyFrom(playerModel.rightArm)

            playerModel.leftArm.setRotation(0.2, 0.0, -0.7)
            playerModel.leftSleeve.copyFrom(playerModel.leftArm)
        } else {
            playerModel.leftArm.setRotation(-1.2, 0.0, 1.3)
            playerModel.leftSleeve.copyFrom(playerModel.leftArm)

            playerModel.rightArm.setRotation(0.2, 0.0, 0.7)
            playerModel.rightSleeve.copyFrom(playerModel.rightArm)
        }
    },

    longswordPose(playerModel, isRightArm) {
        if (isRightArm) {
            playerModel.rightArm.setRotation(-1.0, 0.2, 2.2)
            playerModel.rightSleeve.copyFrom(playerModel.rightArm)

            playerModel.leftArm.setRotation(-1.7, 1.0, 0.0)
            playerModel.leftSleeve.copyFrom(playerModel.leftArm)
        } else {
            playerModel.leftArm.setRotation(-1.0, -0.2, -2.2)
            playerModel.leftSleeve.copyFrom(playerModel.leftArm)

            playerModel.rightArm.setRotation(-1.7, -1.0, 0.0)
            playerModel.rightSleeve.copyFrom(playerModel.rightArm)
        }
    },

    twoHandedPose(playerModel, isRightArm) {
        if (isRightArm) {
            playerModel.rightArm.setRotation(-1.4, -0.2, 1.45)
            playerModel.rightSleeve.copyFrom(playerModel.rightArm)

            playerModel.leftArm.setRotation(-1.3, -0.3, -0.2)
            playerModel.leftSleeve.copyFrom(playerModel.leftArm)
        } else {
        playerModel.rightArm.setRotation(-1.3, 0.3, 0.2)
        playerModel.rightSleeve.copyFrom(playerModel.rightArm)

        playerModel.leftArm.setRotation(-1.4, 0.2, -1.45)
        playerModel.leftSleeve.copyFrom(playerModel.leftArm)

        }
    },
    dualWieldPose(playerModel, isRightArm) {
        if (isRightArm) {
            playerModel.rightArm.setRotation(-1.0, -0.2, 1.4)
            playerModel.rightSleeve.copyFrom(playerModel.rightArm);

            playerModel.leftArm.setRotation(-1.2, 0.2, -0.6)
            playerModel.leftSleeve.copyFrom(playerModel.leftArm)
        } else {

            playerModel.rightArm.setRotation(-1.2, -0.2, 0.6)
            playerModel.rightSleeve.copyFrom(playerModel.rightArm);

        
            playerModel.leftArm.setRotation(-1.0, 0.2, -1.4)
            playerModel.leftSleeve.copyFrom(playerModel.leftArm)
        }
    },
    simplePose(playerModel, isRightArm) {
        if (isRightArm) {
            playerModel.rightArm.setRotation(-1.2, -0.1, 1.45)
            playerModel.rightSleeve.copyFrom(playerModel.rightArm);
        } else {
            playerModel.leftArm.setRotation(-1.2, 0.1, -1.45);
            playerModel.leftSleeve.copyFrom(playerModel.leftArm);
        }
    },

    MAX_ANIM_TIME: 8,

    getParryImpactIntensity(currentTime, maxTime) {
   
        return Math.sin((currentTime / maxTime) * JavaMath.PI)
    },

    warhammerAnimation(playerModel, isRightArm, parryAnimationTime, maxTime) {
        let intensity = this.getParryImpactIntensity(parryAnimationTime, maxTime)

        if (isRightArm) {
            playerModel.rightArm.setRotation(
                -1.4 + intensity * 0.8, 
                -0.2 + intensity * 0.4, 
                1.4
            )
            playerModel.rightSleeve.copyFrom(playerModel.rightArm)

            playerModel.leftArm.setRotation(
                -1.5,
                0.8 + intensity * 0.4, 
                0.1 + intensity * 0.2
            )
            playerModel.leftSleeve.copyFrom(playerModel.leftArm)
        } else {
            playerModel.leftArm.setRotation(
                -1.4 + intensity * 0.8, 
                0.2 - intensity * 0.4, 
                -1.4
            )
            playerModel.leftSleeve.copyFrom(playerModel.leftArm)

            playerModel.rightArm.setRotation(
                -1.5,
                -0.8 - intensity * 0.4, 
                -0.1 - intensity * 0.2
            )
            playerModel.rightSleeve.copyFrom(playerModel.rightArm)
        }
    },

    polearmAnimation(playerModel, isRightArm, parryAnimationTime, maxTime) {
        let intensity = this.getParryImpactIntensity(parryAnimationTime, maxTime)
        
        if (isRightArm) {
            playerModel.rightArm.setRotation(
                -1.2 + intensity * 0.7, 
                0.0, 
                -1.3
            )
            playerModel.rightSleeve.copyFrom(playerModel.rightArm)

            playerModel.leftArm.setRotation(
                0.2 + intensity * 0.9, 
                0.0, 
                -0.7 
            )
            playerModel.leftSleeve.copyFrom(playerModel.leftArm)

        } else {
            playerModel.leftArm.setRotation(
                -1.2 + intensity * 0.7, 
                0.0, 
                1.3
            )
            playerModel.leftSleeve.copyFrom(playerModel.leftArm)

            playerModel.rightArm.setRotation(
                0.2 + intensity * 0.9, 
                0.0, 
                0.7 
            )
            playerModel.rightSleeve.copyFrom(playerModel.rightArm)
        }
    },
    longswordAnimation(playerModel, isRightArm, parryAnimationTime, maxTime) {
        let intensity = this.getParryImpactIntensity(parryAnimationTime, maxTime)
        
        if (isRightArm) {

        playerModel.rightArm.setRotation(
            -1.0 + intensity * 0.7, 
            0.2, 
            2.2
        )
        playerModel.rightSleeve.copyFrom(playerModel.rightArm)

        playerModel.leftArm.setRotation(
            -1.7 - intensity * 0.3, 
            1.0, 
            0.0 
        )
        playerModel.leftSleeve.copyFrom(playerModel.leftArm)

        } else {
        playerModel.leftArm.setRotation(
            -1.0 + intensity * 0.7, 
            -0.2, 
            -2.2
        )
        playerModel.leftSleeve.copyFrom(playerModel.leftArm)

        playerModel.rightArm.setRotation(
            -1.7 - intensity * 0.3, 
            -1.0, 
            0.0
        )
        playerModel.rightSleeve.copyFrom(playerModel.rightArm)
        }
    },
    twoHandedAnimation(playerModel, isRightArm, parryAnimationTime, maxTime) {
        let intensity = this.getParryImpactIntensity(parryAnimationTime, maxTime)

        if (isRightArm) {

            playerModel.rightArm.setRotation(
                -1.4 + intensity * 0.5, 
                -0.2 + intensity * 0.5, 
                1.45
            )
            playerModel.rightSleeve.copyFrom(playerModel.rightArm)

            playerModel.leftArm.setRotation(
                -1.3 - intensity * 0.5, 
                -0.3, 
                -0.2
            )
            playerModel.leftSleeve.copyFrom(playerModel.leftArm)

        } else {
            playerModel.rightArm.setRotation(
                -1.3 - intensity * 0.5, 
                0.3, 
                0.2
            )
            playerModel.rightSleeve.copyFrom(playerModel.rightArm)

            playerModel.leftArm.setRotation(
                -1.4 + intensity * 0.5, 
                0.2 - intensity * 0.5, 
                -1.45
            )
            playerModel.leftSleeve.copyFrom(playerModel.leftArm)
        }
    },

    dualWieldAnimation(playerModel, isRightArm, parryAnimationTime, maxTime) {
        let intensity = this.getParryImpactIntensity(parryAnimationTime, maxTime)
        
        if (isRightArm) {
            playerModel.rightArm.setRotation(
                -1.0 + intensity * 0.8, 
                -0.2, 
                1.4
            )
            playerModel.rightSleeve.copyFrom(playerModel.rightArm);

            playerModel.leftArm.setRotation(
                -1.2 - intensity * 0.8, 
                0.2 + intensity * 0.4, 
                -0.6 
            )
            playerModel.leftSleeve.copyFrom(playerModel.leftArm)
        } else {
            
            playerModel.rightArm.setRotation(
                -1.2 - intensity * 0.8, 
                -0.2 + intensity * 0.4, 
                0.6 
            )
            playerModel.rightSleeve.copyFrom(playerModel.rightArm);
        
            playerModel.leftArm.setRotation(
                -1.0 + intensity * 0.8, 
                0.2, 
                -1.4
            )
            playerModel.leftSleeve.copyFrom(playerModel.leftArm)
        }
    },

    simpleAnimation(playerModel, isRightArm, parryAnimationTime, maxTime) {
        let intensity = this.getParryImpactIntensity(parryAnimationTime, maxTime)

        if (isRightArm) {
            playerModel.rightArm.setRotation(
                -1.2 + intensity * 1.0, 
                -0.1 + intensity * 0.5, 
                1.45
            )
            playerModel.rightSleeve.copyFrom(playerModel.rightArm);
        } else {
            playerModel.leftArm.setRotation(
                -1.2 + intensity * 1.0, 
                0.1 - intensity * 0.5, 
                -1.45
            );
            playerModel.leftSleeve.copyFrom(playerModel.leftArm)
        }
    }
}
