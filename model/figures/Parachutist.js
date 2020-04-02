import Figure from "./Figure.js";
import {PARACHUTS_SPEED} from "../../consts.js";

/** Holds figure data **/
class Parachutist extends Figure {
    updateLocation(dx, dy) {
        this.y += PARACHUTS_SPEED;
    }
}

export default Parachutist;