/**
 * @param {Internal.PlayerEvent$PlayerChangedDimensionEvent} e 
 */
global.FantasiaPlayerChangedDimension = (e) => {

    if (applySlowFallingInNether) {
        applySlowFallingInNether(e)
    }
}