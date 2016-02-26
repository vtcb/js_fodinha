function main() {
    var IF = document.getElementById("interface");

    setInterval(function() {
        var info = "";
        info += players.join('|');
        IF.innerHTML = info;
    }, 100);


    // Test Variables
    cards = [
        new Card(3, 0),
        new Card(0, 2),
        new Card(5, 3),
        new Card(0, 1)
    ];

    deck = new Deck();

    players = [
        new Player(),
        new Player(),
        new Player()
    ];

    player = players[0];



    deck.generate();
    deck.shuffle();

    deck.distribute(players, 3);
}
