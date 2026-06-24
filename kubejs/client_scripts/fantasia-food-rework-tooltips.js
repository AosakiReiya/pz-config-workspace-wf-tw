ItemEvents.tooltip(event => {
	
  // Add effect tooltips to new wines
	event.addAdvanced('kubejs:rose_wine', (item, advanced, text) => {
		text.add(1, Text.blue('生命恢復 II（00:30）'))
		text.add(2, Text.blue('生命提升（04:00）'))
		text.add(3, Text.red('醉酒（03:00）'))
		text.add(4, Text.red('微醺 III（04:00）'))
		text.add(5, Text.white(' '))
		text.add(6, Text.darkPurple('應用時：'))
		text.add(7, Text.blue('+4 最大生命值'))
	});
	
		event.addAdvanced('kubejs:rice_wine', (item, advanced, text) => {
		text.add(1, Text.blue('毒素抗性（02:00）'))
		text.add(2, Text.blue('飢餓抗性（04:00）'))
		text.add(3, Text.red('醉酒（03:00）'))
		text.add(4, Text.red('微醺 III（04:00）'))
	});
		
		event.addAdvanced('kubejs:apple_wine', (item, advanced, text) => {
		text.add(1, Text.blue('神聖守護 X（03:00）'))
		text.add(2, Text.blue('活力迸發 II (03:00)'))
		text.add(3, Text.red('醉酒（03:00）'))
		text.add(4, Text.red('微醺 III（04:00）'))
		text.add(5, Text.white(' '))
		text.add(6, Text.darkPurple('應用時：'))
		text.add(7, Text.blue('+0.4 治療效果提升'))
	});
		event.addAdvanced('kubejs:unaged_rose_wine', (item, advanced, text) => {
		text.add(1, Text.blue('再生 (00:30)'))
		text.add(2, Text.blue('生命提升（01:00）'))
		text.add(3, Text.red('醉酒（00:45）'))
		text.add(4, Text.red('微醺 II（01:00）'))
		text.add(5, Text.white(' '))
		text.add(6, Text.darkPurple('應用時：'))
		text.add(7, Text.blue('+4 最大生命值'))
	});
	
		event.addAdvanced('kubejs:unaged_rice_wine', (item, advanced, text) => {
		text.add(1, Text.blue('毒素抗性（00:30）'))
		text.add(2, Text.blue('飢餓抗性（01:00）'))
		text.add(3, Text.red('醉酒（00:45）'))
		text.add(4, Text.red('微醺 II（01:00）'))
	});
		
		event.addAdvanced('kubejs:unaged_apple_wine', (item, advanced, text) => {
		text.add(1, Text.blue('神聖守護 V（00:45）'))
		text.add(2, Text.blue('活力迸發 (00:45)'))
		text.add(3, Text.red('醉酒（00:45）'))
		text.add(4, Text.red('微醺 II（01:00）'))
		text.add(5, Text.white(' '))
		text.add(6, Text.darkPurple('應用時：'))
		text.add(7, Text.blue('+0.2 治療效果提升'))
	});
		event.addAdvanced('kubejs:unaged_red_wine', (item, advanced, text) => {
		text.add(1, Text.blue('威能（00:45）'))
		text.add(2, Text.blue('迅捷（00:45）'))
		text.add(3, Text.red('醉酒（00:45）'))
		text.add(4, Text.red('微醺 II（01:00）'))
		text.add(5, Text.white(' '))
		text.add(6, Text.darkPurple('應用時：'))
		text.add(7, Text.blue('+10% 攻擊傷害'))
		text.add(8, Text.blue('+10% 攻擊速度'))
	});
	
		event.addAdvanced('kubejs:unaged_white_wine', (item, advanced, text) => {
		text.add(1, Text.blue('抗性提升（00:30）'))
		text.add(2, Text.blue('擊退抗性（01:00）'))
		text.add(3, Text.red('醉酒（00:45）'))
		text.add(4, Text.red('微醺 II（01:00）'))
		text.add(5, Text.white(' '))
		text.add(6, Text.darkPurple('應用時：'))
		text.add(7, Text.blue('+0.5 擊退抗性'))
		
	});
	
		event.addAdvanced('kubejs:unaged_cherry_wine', (item, advanced, text) => {
		text.add(1, Text.blue('踏水（01:00）'))
		text.add(2, Text.blue('運動（00:30）'))
		text.add(3, Text.red('醉酒（00:45）'))
		text.add(4, Text.red('微醺 II（01:00）'))
		text.add(5, Text.white(' '))
		text.add(6, Text.darkPurple('應用時：'))
		text.add(7, Text.blue('+0.6 階梯高度'))
		text.add(8, Text.blue('+10% 滾動充能'))
	});
	
		event.addAdvanced('kubejs:unaged_blueberry_wine', (item, advanced, text) => {
		text.add(1, Text.blue('幸運（01:00）'))
		text.add(2, Text.blue('跨步（00:30）'))
		text.add(3, Text.red('醉酒（00:45）'))
		text.add(4, Text.red('微醺 II（01:00）'))
		text.add(5, Text.white(' '))
		text.add(6, Text.darkPurple('應用時：'))
		text.add(7, Text.blue('+1 幸運'))
		text.add(8, Text.blue('+20% 游泳速度'))
	});

		event.addAdvanced('kubejs:unaged_raspberry_wine', (item, advanced, text) => {
		text.add(1, Text.blue('急迫（00:45）'))
		text.add(2, Text.blue('敏捷（00:45）'))
		text.add(3, Text.red('醉酒（00:45）'))
		text.add(4, Text.red('微醺 II（01:00）'))
		text.add(5, Text.white(' '))
		text.add(6, Text.darkPurple('應用時：'))
		text.add(7, Text.blue('+10% 攻擊速度'))
		text.add(8, Text.blue('+20% 拉弓速度'))
	});
	
		event.addAdvanced('kubejs:unaged_sweet_berry_wine', (item, advanced, text) => {
		text.add(1, Text.blue('速度（00:45）'))
		text.add(2, Text.blue('跳躍提升（00:45）'))
		text.add(3, Text.red('醉酒（00:45）'))
		text.add(4, Text.red('微醺 II（01:00）'))
		text.add(5, Text.white(' '))
		text.add(6, Text.darkPurple('應用時：'))
		text.add(7, Text.blue('+20% 速度'))
	});
	
		event.addAdvanced('kubejs:unaged_mead', (item, advanced, text) => {
		text.add(1, Text.blue('滋養（00:45）'))
		text.add(2, Text.blue('甜蜜之心（00:45）'))
		text.add(3, Text.red('醉酒（00:45）'))
		text.add(4, Text.red('微醺 II（01:00）'))
	});
	
		event.addAdvanced('hearthandharvest:red_grape_wine', (item, advanced, text) => {
		text.add(4, Text.red('微醺 III（04:00）'))
	});
	
		event.addAdvanced('hearthandharvest:green_grape_wine', (item, advanced, text) => {
		text.add(4, Text.red('微醺 III（04:00）'))
	});

		event.addAdvanced('hearthandharvest:cherry_wine', (item, advanced, text) => {
		text.add(4, Text.red('微醺 III（04:00）'))
	});
	
		event.addAdvanced('hearthandharvest:blueberry_wine', (item, advanced, text) => {
		text.add(4, Text.red('微醺 III（04:00）'))
	});
	
		event.addAdvanced('hearthandharvest:raspberry_wine', (item, advanced, text) => {
		text.add(4, Text.red('微醺 III（04:00）'))
	});
	
		event.addAdvanced('hearthandharvest:sweet_berry_wine', (item, advanced, text) => {
		text.add(4, Text.red('微醺 III（04:00）'))
	});
	
		event.addAdvanced('hearthandharvest:mead', (item, advanced, text) => {
		text.add(4, Text.red('微醺 III（04:00）'))
	});
	
	//
	// Fanta
		event.addAdvanced('brewinandchewin:rice_wine', (item, advanced, text) => {
		text.add(2, Text.gold('太棒了！'))
	});
	//Unaged Beers
		event.addAdvanced('kubejs:unaged_beer', (item, advanced, text) => {
		text.add(1, Text.red('微醺（01:00）'))
		text.add(2, Text.red('醉酒（00:30）'))
	});
		event.addAdvanced('kubejs:unaged_vodka', (item, advanced, text) => {
		text.add(1, Text.red('微醺（01:00）'))
		text.add(2, Text.red('醉酒（00:30）'))
	});
		event.addAdvanced('kubejs:unaged_gin', (item, advanced, text) => {
		text.add(1, Text.red('微醺（01:00）'))
		text.add(2, Text.red('醉酒（00:30）'))
	});
		event.addAdvanced('kubejs:unaged_rum', (item, advanced, text) => {
		text.add(1, Text.red('微醺（01:00）'))
		text.add(2, Text.red('醉酒（00:30）'))
	});
	// fish
		event.add('kubejs:fish_pack', '§8用於向村民出售')
})