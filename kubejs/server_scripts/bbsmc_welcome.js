// Fantasia 漢化組歡迎訊息

PlayerEvents.loggedIn(event => {
    const player = event.player;

    player.server.scheduleInTicks(60, () => {
        player.tell(Text.empty());
        player.tell(Text.of('§6§l[漢化提示] §r§f本漢化包由 §b§lFantasia漢化組 §r§f提供並長期維護'));
        player.tell(Text.of('§7更多熱門整合包、光影、漢化包訪問: ').append(
            Text.of('§b§nhttps://fantasia.net').clickOpenUrl('https://fantasia.net').hover('§a點選開啟網站')
        ));
        player.tell(Text.empty());
    });
});