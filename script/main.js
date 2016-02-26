function main() {
    var IF = document.getElementById("interface");

    setInterval(function() {
        var info = "";
        info += deck;
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

    deck.generate();

    player = new Player();
}
