ItemEvents.entityInteracted(event => {
  let { player, item } = event;
 
  if (event.target.uuid == 'bbd1a9b1-fccc-4ac5-a902-9bf84203c889') {
    player.server.runCommandSilent(`execute at bbd1a9b1-fccc-4ac5-a902-9bf84203c889 as @p[distance=..2,limit=1] run blabber dialogue start fantasia:aaren_dialogue`);

  }

  if (event.target.uuid == '0c5d7e8e-c487-48f3-81bc-fd90ece1e856') {
    player.server.runCommandSilent(`execute at 0c5d7e8e-c487-48f3-81bc-fd90ece1e856 as @p[distance=..3,limit=1] run blabber dialogue start fantasia:yuhiri_dialogue`);

  }

  if (event.target.uuid == '46f46b79-4aa1-4eaa-92ab-45bf026f53b8') {
    player.server.runCommandSilent(`execute at 46f46b79-4aa1-4eaa-92ab-45bf026f53b8 as @p[distance=..3,limit=1] run blabber dialogue start fantasia:neifon_dialogue`);

  }
})