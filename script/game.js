/** Game
 *
 * A game of Fodinha.
 * A game is consisted of sets.
 * Each set is consisted of rounds.
 * The i-th set contains 1 + i rounds, 1 of which is the special Bet Stage.
 * The i-th set has two parts: Bet Stage [-1], Draw Stages [0,i)//, Idle Stage [i].
 */
function Game(player_ids) {
    this.players = [];
    for(var id of player_ids) {
        this.players.push(new Player(id));
    }

    this.deck = new Deck();

    this.set   = 0;
    this.round = -1;

    this.set_starter = 0;
    this.round_starter = 0;

    this.round_finished = false;
}

Game.prototype.toString = function() {
    var str = 'Fodinha Game\n';
    str +=    'Players:\n'

    for(var player of this.players) {
        str += '    ' + player + '\n';
    }

    str += 'Set:   ' + this.set   + '\n';

    str += 'Round: ' + this.round;
    if(this.round == -1) {
        str += '(Bet Stage)';
    }
    str += '\n';

    str += 'Round finished: ' + this.round_finished + '\n';

    return str;
};

Game.prototype.endBetStage = function() {
    var all_bet = true;
    for(var player of this.players) {
        all_bet = all_bet && player.bet;
    }

    if(all_bet) {
        all_bet = true;
        this.round_finished = true;
    }

    return all_bet;
};

Game.prototype.endDrawStage = function() {
    var all_chose = true;
    for(var player of this.players) {
        all_chose = all_chose && player.chosen;
    }

    if(all_chose) {
        all_chose = true;
        this.round_finished = true;
    }

    return all_chose;
};

Game.prototype.advance = function() {
    if(!this.round_finished) {
        return false;
    }

    this.round_finished = false;
    this.round++;

    if(this.round == this.set) {
        this.round = -1;
        this.set++;
    }

    return true;
};

Game.prototype.endStage = function() {
           if(this.round == -1) {
        return this.endBetStage();
    } else if(this.stage < this.set) {
        return this.endDrawStage();
    } else {
        return false;
    }
};

Game.prototype.update = function() {
};