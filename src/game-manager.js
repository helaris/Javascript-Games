class Player {
    constructor(name) {
        this.score = 0;
        this.name = name;
    }

    addScore(val) {
        this.score += val;
    }
}

class Computer extends Player {
    constructor(score) {
        super(score, "Computer");
    }

    addScore(val) {
        super.addScore(val);
    }

    pickRandom(options) {
        let outcome = Math.floor(Math.random() * options.length);
        return(options[outcome]);
    }
}

class Game {
    constructor() {
        this.scoreLimit = 1;
        this.players = [];
    }
}