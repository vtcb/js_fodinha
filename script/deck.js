function Deck() {
    this.cards = [];
}

Deck.prototype.generate = function() {
    this.cards = [];
    for(var rank = 0; rank < 10; rank++) {
        for (var suit = 0; suit < 4; suit++) {
            this.cards.push( new Card(rank, suit) );
        };
    }
};

Deck.prototype.shuffle = function() {
    if(this.empty()) this.generate();

    for(var times = 0; times < 200; times++) {
        var i = Math.floor( Math.random() * this.cards.length );
        var j = Math.floor( Math.random() * this.cards.length );

        var tmp = this.cards[i];
        this.cards[i] = this.cards[j];
        this.cards[j] = tmp;
    }
};

Deck.prototype.sort = function() {
    this.cards.sort(Card.prototype.sortComparator);
};

Deck.prototype.draw = function() {
    return this.cards.shift();
};

Deck.prototype.push = function(card) {
    this.cards.push(card);
};

Deck.prototype.size = function() {
    return this.cards.length;
};

Deck.prototype.empty = function() {
    return this.cards.length == 0;
};

Deck.prototype.toString = function() {
    return this.cards.toString();
};

