import Controller from "./controller/Controller.js";
import Model from "./model/Model.js"
import View from "./view/View.js"

/** Main class - initiates all MVC components **/
class Game {
    constructor() {
        this.model = new Model();
        this.controller = new Controller();
        this.view = new View();
    }

    initGame() {
        this.controller.setModel(this.model);
        this.controller.setDisplay(this.view);
    }

    startGame() {
        this.controller.onGameStart();
    }
}

let game = new Game();

document.getElementById("start-button").addEventListener("click", () => {
    game.initGame();
    game.startGame();
});

