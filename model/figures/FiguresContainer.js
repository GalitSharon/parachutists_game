import Plane from "./Plane.js";
import Boat from "./Boat.js";
import ParachutistsContainer from "./ParachutistsContainer.js";
import {
    BOAT_HEIGHT,
    BOAT_IMG,
    BOAT_WIDTH,
    PLANE_HEIGHT,
    PLANE_IMG,
    PLANE_WIDTH,
    SPACE,
    VIEW_WIDTH,
    SEA_LEVEL
} from "../../consts.js";

/** Holds all figures data **/
class FiguresContainer {
    constructor() {
        this.data = {
            plane: new Plane(VIEW_WIDTH, SPACE, PLANE_WIDTH, PLANE_HEIGHT, true, this.createImg(PLANE_IMG)),
            boat: new Boat(VIEW_WIDTH / 2, SEA_LEVEL - BOAT_HEIGHT + SPACE,
                BOAT_WIDTH, BOAT_HEIGHT, true, this.createImg(BOAT_IMG)),
            parachutists: new ParachutistsContainer()
        };

        this.data.plane.setOnLoopEnd(() => this.data.parachutists.createParachs());
    }

    createImg(src) {
        let img = new Image();
        img.src = src;
        return img;
    }
}

export default FiguresContainer;