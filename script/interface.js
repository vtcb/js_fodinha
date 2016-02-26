/** Interface
 *
 * Prints stuff in the screen.
 */
function Interface(id, game) {
    var IF = document.getElementById(id);
    var game = game;

    IF.align = 'center';

    this.update = function() {
        var info = '' + game;

        IF.innerText = info;
    }

    setInterval(this.update, 100);
}
