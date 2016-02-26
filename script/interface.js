function Interface(id) {
    
    var IF = document.getElementById(id);

    this.update = function() {
        var info = "";
        info += players.join('|');
        IF.innerHTML = info;
    }

    setInterval(this.update, 100);
}