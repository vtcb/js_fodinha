/** Player
 *
 * A player of Fodinha.
 */
function Player(id) {
    this.id = id;

    this.lives = Player.prototype.LIVES;

    this.hand = new Deck();
    this.chosen = false;
    this.bet = false;
}

Player.prototype.LIVES = 3;

Player.prototype.pega = function(card) {
    this.hand.push(card);
};

Player.prototype.play = function() {
    var card = this.hand.remove(this.chosen);
    this.chosen = false;

    return card;
};

Player.prototype.choose = function(choice) {
    this.chosen = choice;
};

Player.prototype.setBet = function(bet) {
    this.bet = bet;
};

Player.prototype.clearBet = function() {
    this.bet = false;
};

Player.prototype.die = function(made) {
    this.lives -= Math.abs(made - this.bet);
};

Player.prototype.toString = function() {
    return JSON.stringify(this);
};