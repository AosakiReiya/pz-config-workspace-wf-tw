/* ----------------------
----- Server Script -----
---------------------- */


ServerEvents.loaded(e => {
    e.server.scheduleInTicks(0, () => {
        console.log("first scheduleInTicks fix");
    })
})