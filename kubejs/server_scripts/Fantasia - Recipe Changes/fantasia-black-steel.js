ServerEvents.recipes(event => {

  
  event.remove({ output: "cataclysm:black_steel_ingot", type: 'minecraft:blasting' });

  event.blasting("9x cataclysm:black_steel_nugget", "cataclysm:black_steel_shovel").xp(0.7).cookingTime(300)

  event.blasting("13x cataclysm:black_steel_nugget", "cataclysm:black_steel_targe").xp(0.7).cookingTime(300)
  
  event.blasting("18x cataclysm:black_steel_nugget", ["cataclysm:black_steel_sword", "cataclysm:black_steel_hoe"]).xp(0.7).cookingTime(300)
  
  event.blasting("27x cataclysm:black_steel_nugget", ["cataclysm:black_steel_axe", "cataclysm:black_steel_pickaxe"]).xp(0.7).cookingTime(300)

})