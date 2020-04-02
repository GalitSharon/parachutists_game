import Painter from "./Painter.js";
import {VIEW_WIDTH, VIEW_HEIGHT} from "../consts.js";

/** Responsible for communication between model and view **/
class Controller {
    setModel(model) {
        this.model = model;
    }

    setDisplay(display) {
        this.display = display;
        this.display.displayer
            .addEventListener("keydown", event => this.onKeyPress(event));

        this.painter = new Painter(this.display.context);
    }

    resetView() {
        Array.from(document.querySelectorAll(".toggle-group")).forEach((element) => {
            element.classList.toggle("hidden-class");
        });

        document.getElementById("canvas").focus();
    }

    onGameStart() {
        this.updateScore(0);
        this.updateLives(3);
        this.model.resetFigures();

        this.resetView();
        this.animate();
    }

    onGameEnd() {
        Array.from(document.querySelectorAll(".toggle-group")).forEach((element) => {
            element.classList.toggle("hidden-class");
        });

        document.getElementById('screen-div-text').innerText = "Game Over";
        document.getElementById('final-score').innerText = "your score is " + this.model.score.value;
        document.getElementById('start-button').innerText = 'New Game';
    }

    isGameRunning() {
        return this.model.lives.value > 0;
    }

    onKeyPress(event) {
        if (event.key && (event.key === "ArrowRight" || event.key === "ArrowLeft"))
            this.model.movePlayer(event.key);
    }

    // When parachutist falls into the boat
    onSuccess() {
        this.updateScore();
    }

    // When parachutist falls into the sea
    onFail() {
        this.updateLives();

    }

    updateScore(score) {
        this.model.score.update(score);
        document.getElementById("score").innerText = "score: " + this.model.score.value;
    }

    updateLives(lives) {
        this.model.lives.update(lives);
        document.getElementById("lives").innerText = "lives: " + this.model.lives.value;
    }

    animate() {
        if (!this.isGameRunning()) {
            this.onGameEnd();
            return;
        }
        requestAnimationFrame(() => this.animate());

        this.display.context.clearRect(0, 0, VIEW_WIDTH, VIEW_HEIGHT);

        this.model.updateFigures(() => this.onSuccess(), () => this.onFail());
        this.model.drawBackground(img => this.painter.draw(img));
        this.model.drawFigures(figure => this.painter.draw(figure));
    }
}

export default Controller;