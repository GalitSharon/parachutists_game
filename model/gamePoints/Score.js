import GamePoints from "./GamePoints.js";
import {POINTS_PER_PARACH} from "../../consts.js";

/** Manages game score **/
class Score extends GamePoints {
    update(value) {
        this.value = value === 0 ? 0 : this.value += POINTS_PER_PARACH;
    }
}

export default Score;