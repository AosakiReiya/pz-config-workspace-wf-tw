ServerEvents.recipes(event => {

  //Vanilla wood changes
  const planks = ['oak', 'spruce', 'birch', 'acacia', 'jungle', 'cherry', 'mangrove', 'dark_oak', 'crimson', 'warped'];

  //Vanilla wool changes
  const wool = ['white', 'orange', 'magenta', 'light_blue', 'yellow', 'lime', 'pink', 'gray', 'light_gray', 'cyan', 'purple', 'blue', 'brown', 'green', 'red', 'black'];

  //  loop through our list of vanilla plank prefixes and do stuff to each
  planks.forEach((planks) => {

    //  remove furniture
    event.remove({ output: `valhelsia_furniture:${planks}_chair` });
    event.remove({ output: `valhelsia_furniture:${planks}_table` });
    event.remove({ output: `valhelsia_furniture:${planks}_stool` });
    event.remove({ output: `valhelsia_furniture:${planks}_desk` });
    event.remove({ output: `valhelsia_furniture:${planks}_desk_drawer` });
    event.remove({ output: `valhelsia_furniture:hay_${planks}_chair` });

    //chair
    event.shaped(`2x valhelsia_furniture:${planks}_chair`, [
      'B  ',
      'AAA',
      'B B'
    ], {
      A: `minecraft:${planks}_planks`,
      B: `minecraft:stick`
    });

    //table
    event.shaped(`valhelsia_furniture:${planks}_table`, [
      'AAA',
      'B B',
      'B B'
    ], {
      A: `minecraft:${planks}_planks`,
      B: `minecraft:stick`
    });

    //stool
    event.shaped(`2x valhelsia_furniture:${planks}_stool`, [
      '   ',
      'AAA',
      'B B'
    ], {
      A: `minecraft:${planks}_slab`,
      B: `minecraft:stick`
    });

    //desk
    event.shaped(`valhelsia_furniture:${planks}_desk`, [
      'AAA',
      'A A',
      'B B'
    ], {
      A: `minecraft:${planks}_planks`,
      B: `minecraft:stick`
    });

    //drawer
    event.shaped(`valhelsia_furniture:${planks}_desk_drawer`, [
      'AAA',
      'ABA',
      'C C'
    ], {
      A: `minecraft:${planks}_planks`,
      B: `minecraft:${planks}_slab`,
      C: `minecraft:stick`
    });

    //hay chair
    event.shapeless(`valhelsia_furniture:hay_${planks}_chair`, [

      `valhelsia_furniture:${planks}_chair`,
      `minecraft:hay_block`

    ])

  });

  //wool furniture recipes
  wool.forEach((wool) => {

    //wool chair
    function woolchair(output, chair_input) {

      event.remove({output: output });

      event.shapeless(output, [

        chair_input,
        `minecraft:${wool}_wool`

      ])

    }
    //
    woolchair(`valhelsia_furniture:${wool}_oak_chair`, `valhelsia_furniture:oak_chair`)
    woolchair(`valhelsia_furniture:${wool}_spruce_chair`, `valhelsia_furniture:spruce_chair`)
    woolchair(`valhelsia_furniture:${wool}_birch_chair`, `valhelsia_furniture:birch_chair`)
    woolchair(`valhelsia_furniture:${wool}_acacia_chair`, `valhelsia_furniture:acacia_chair`)
    woolchair(`valhelsia_furniture:${wool}_jungle_chair`, `valhelsia_furniture:jungle_chair`)
    woolchair(`valhelsia_furniture:${wool}_cherry_chair`, `valhelsia_furniture:cherry_chair`)
    woolchair(`valhelsia_furniture:${wool}_mangrove_chair`, `valhelsia_furniture:mangrove_chair`)
    woolchair(`valhelsia_furniture:${wool}_dark_oak_chair`, `valhelsia_furniture:dark_oak_chair`)
    woolchair(`valhelsia_furniture:${wool}_crimson_chair`, `valhelsia_furniture:crimson_chair`)
    woolchair(`valhelsia_furniture:${wool}_warped_chair`, `valhelsia_furniture:warped_chair`)

    //upholstered chair
    function upholstered(output, chair_input) {

      event.remove({output: output });

      event.shapeless(output, [

        chair_input,
        `minecraft:${wool}_wool`,
        `minecraft:${wool}_wool`

      ])

    }
    //
    upholstered(`valhelsia_furniture:${wool}_upholstered_oak_chair`, `valhelsia_furniture:oak_chair`)
    upholstered(`valhelsia_furniture:${wool}_upholstered_spruce_chair`, `valhelsia_furniture:spruce_chair`)
    upholstered(`valhelsia_furniture:${wool}_upholstered_birch_chair`, `valhelsia_furniture:birch_chair`)
    upholstered(`valhelsia_furniture:${wool}_upholstered_acacia_chair`, `valhelsia_furniture:acacia_chair`)
    upholstered(`valhelsia_furniture:${wool}_upholstered_jungle_chair`, `valhelsia_furniture:jungle_chair`)
    upholstered(`valhelsia_furniture:${wool}_upholstered_cherry_chair`, `valhelsia_furniture:cherry_chair`)
    upholstered(`valhelsia_furniture:${wool}_upholstered_mangrove_chair`, `valhelsia_furniture:mangrove_chair`)
    upholstered(`valhelsia_furniture:${wool}_upholstered_dark_oak_chair`, `valhelsia_furniture:dark_oak_chair`)
    upholstered(`valhelsia_furniture:${wool}_upholstered_crimson_chair`, `valhelsia_furniture:crimson_chair`)
    upholstered(`valhelsia_furniture:${wool}_upholstered_warped_chair`, `valhelsia_furniture:warped_chair`)

    //wool stool
    function woolstool(output, chair_input) {

      event.remove({output: output });

      event.shapeless(output, [

        chair_input,
        `minecraft:${wool}_wool`

      ])

    }
    //
    woolstool(`valhelsia_furniture:${wool}_upholstered_oak_stool`, `valhelsia_furniture:oak_stool`)
    woolstool(`valhelsia_furniture:${wool}_upholstered_spruce_stool`, `valhelsia_furniture:spruce_stool`)
    woolstool(`valhelsia_furniture:${wool}_upholstered_birch_stool`, `valhelsia_furniture:birch_stool`)
    woolstool(`valhelsia_furniture:${wool}_upholstered_acacia_stool`, `valhelsia_furniture:acacia_stool`)
    woolstool(`valhelsia_furniture:${wool}_upholstered_jungle_stool`, `valhelsia_furniture:jungle_stool`)
    woolstool(`valhelsia_furniture:${wool}_upholstered_cherry_stool`, `valhelsia_furniture:cherry_stool`)
    woolstool(`valhelsia_furniture:${wool}_upholstered_mangrove_stool`, `valhelsia_furniture:mangrove_stool`)
    woolstool(`valhelsia_furniture:${wool}_upholstered_dark_oak_stool`, `valhelsia_furniture:dark_oak_stool`)
    woolstool(`valhelsia_furniture:${wool}_upholstered_crimson_stool`, `valhelsia_furniture:crimson_stool`)
    woolstool(`valhelsia_furniture:${wool}_upholstered_warped_stool`, `valhelsia_furniture:warped_stool`)

    //desk lamp
    event.remove({ output: `valhelsia_furniture:${wool}_fabric_desk_lamp` });
    event.shaped(`valhelsia_furniture:${wool}_fabric_desk_lamp`, [
      ' A ',
      ' B ',
      ' C '
    ], {
      A: `minecraft:${wool}_wool`,
      B: `minecraft:glowstone_dust`,
      C: `minecraft:stick`
    });

    //curtain
    event.remove({ output: `valhelsia_furniture:${wool}_curtain` });
    event.shaped(`2x valhelsia_furniture:${wool}_curtain`, [
      'BB ',
      'AA ',
      'AA '
    ], {
      A: `minecraft:${wool}_wool`,
      B: `minecraft:stick`
    })


  });

})
