import Figure from "./Figure.js";
import {VIEW_WIDTH} from '../../consts.js'

/** Holds figure data **/
class Boat extends Figure {
    updateLocation(dx) {
        let delta = this.x + dx + (this.width / 2);

        if (dx && delta < VIEW_WIDTH && delta > 0) {
            this.x += dx;
        }
    }
}

export default Boat;