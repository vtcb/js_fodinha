function main() {
    this.game = new Game(['id1', 'id2', 'id3']);

    var IF = new Interface("interface", this.game);

    game.advance();
    game.startSet();
    game.bet('id1', 3);

    // Testing variables
    deck = new Deck();

    deck.generate();
    deck.shuffle();
/*

    players = [
        new Player(),
        new Player(),
        new Player()
    ];

    player = players[0];



    deck.distribute(players, 3);
*/
}
