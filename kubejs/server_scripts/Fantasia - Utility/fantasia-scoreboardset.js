ServerEvents.loaded(event => {

  if (event.server.persistentData.scoreBoards) return

  event.server.runCommandSilent(`team add Guards`)
  event.server.runCommandSilent(`team add Undead`)
  event.server.runCommandSilent(`team modify Guards friendlyFire false`)
  event.server.runCommandSilent(`team modify Undead friendlyFire false`)

  event.server.persistentData.scoreBoards = true

});