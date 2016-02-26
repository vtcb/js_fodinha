function Player() {
    this.lives = Player.prototype.LIVES;

    this.hand = [];
    this.chosen = undefined;
}

Player.prototype.LIVES = 3;

Player.prototype.pega = function(card) {
    this.hand.push(card);
};

Player.prototype.bota = function() {
    var tail = x.splice(this.chosen);
    var card = tail.shift();

    this.hand.concat(tail);

    return card;
};

Player.prototype.choose = function(choice) {
    this.chosen = choice;
};