ServerEvents.recipes(event => {

  let colors = [
    "white",
    "light_gray",
    "gray",
    "black",
    "brown",
    "red",
    "orange",
    "yellow",
    "lime",
    "green",
    "cyan",
    "light_blue",
    "blue",
    "purple",
    "magenta",
    "pink"
  ];

  event.stonecutting(
    Item.of(`minecraft:glass_pane`, 3),
    `minecraft:glass`
  )

  colors.forEach(type => {
    event.stonecutting(
      Item.of(`minecraft:${type}_stained_glass_pane`, 3),
      `minecraft:${type}_stained_glass`
    )
  });
})