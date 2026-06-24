ServerEvents.loaded(event => {
  const server = event.server;
  const level = server.overworld(); // Get the Overworld

  // Make sure level is valid
  if (!level) {
      console.log("[KubeJS] Overworld not loaded yet.");
      return;
  }

  const data = level.persistentData;
  const key = 'hall_spawned-11.8';

  if (data.getBoolean(key)) {
      console.log('[KubeJS] The HALL has already spawned.');
      return;
  }

  // Run the structure placement command

  server.runCommandSilent(`function questhelper:hallplacer`);

  // Set persistent flag
  data.putBoolean(key, true);
});