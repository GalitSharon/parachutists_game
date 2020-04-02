import FiguresContainer from "./figures/FiguresContainer.js";
import Background from "./background/Background.js";
import Score from "./gamePoints/Score.js";
import Lives from "./gamePoints/Lives.js";
import {INITIAL_LIVES, INITIAL_SCORE, BOAT_SPEED, SEA_LEVEL} from "../consts.js";

/** Holds all game data and responsible for its updating & calculations **/
class Model {
    constructor() {
        this.figures = new FiguresContainer();
        this.background = new Background();
        this.score = new Score(INITIAL_SCORE);
        this.lives = new Lives(INITIAL_LIVES);
    }

    checkPlaneLaunch(parach) {
        if (parach.x === this.figures.data.plane.x) {
            parach.isDisplay = true;
        }
    }

    checkBoatCollision(parach, index, onBoatCatch) {
        if (parach.x <= (this.figures.data.boat.x + (this.figures.data.boat.width / 2) + parach.width * 2) &&
            parach.x > (this.figures.data.boat.x - ((this.figures.data.boat.width / 2))) &&
            parach.y + (parach.height / 2) === this.figures.data.boat.y) {
            onBoatCatch();
            this.figures.data.parachutists.parachsArray.splice(index, 1);
        }
    }

    checkSeaCollision(parach, index, onSeaFall) {
        if (parach.y + (parach.height) === SEA_LEVEL) {
            onSeaFall();
            this.figures.data.parachutists.parachsArray.splice(index, 1);
        }
    }

    checkCollisions(onBoatCatch, onSeaFall) {
        this.figures.data.parachutists.parachsArray.forEach((parach, index) => {
            this.checkPlaneLaunch(parach);

            if (parach.isDisplay === true) {
                this.checkBoatCollision(parach, index, onBoatCatch);
                this.checkSeaCollision(parach, index, onSeaFall);
            }
        })
    }

    updateFigures(onSuccess, onFail) {
        Object.keys(this.figures.data).forEach(figure => {
            this.figures.data[figure].updateLocation();
        });
        this.checkCollisions(onSuccess, onFail);
    }

    drawFigures(draw) {
        Object.keys(this.figures.data).forEach(figure => {
            draw(this.figures.data[figure]);
        });
    }

    drawBackground(draw) {
        Object.keys(this.background.data).forEach(img => {
            draw(this.background.data[img]);
        });
    }

    movePlayer(side) {
        side === "ArrowRight" ? this.figures.data.boat.updateLocation(BOAT_SPEED, 0) :
                            this.figures.data.boat.updateLocation(-BOAT_SPEED, 0);
    }

    resetFigures() {
        this.figures = new FiguresContainer();
    }
}

export default Model;