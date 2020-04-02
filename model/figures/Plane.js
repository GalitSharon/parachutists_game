import Figure from "./Figure.js";
import {PLANE_SPEED, VIEW_WIDTH} from "../../consts.js";

/** Holds figure data **/
class Plane extends Figure {
    updateLocation() {
        this.x -= PLANE_SPEED;

        //Checks whether the plane touches the edge of the screen
        if (this.x === -(this.width)) {
            this.x = VIEW_WIDTH;
            this.onLoopEnd();
        }
    }

    setOnLoopEnd(onLoopEnd) {
        this.onLoopEnd = onLoopEnd;
    }
}

export default Plane;