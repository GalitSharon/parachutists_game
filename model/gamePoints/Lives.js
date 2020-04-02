import GamePoints from "./GamePoints.js";

/** Manages game lives **/
class Lives extends GamePoints {
    update(value) {
        if (value) {
            this.value = 3;
        } else if (this.value > 0) {
            this.value -= 1;
        }
    }
}

export default Lives;