import Clouds from "./Clouds.js";
import Sea from "./Sea.js";
import {CLOUDS_IMG, SEA_IMG, SEA_LEVEL, VIEW_HEIGHT, VIEW_WIDTH} from "../../consts.js";

/** Holds background data **/
class Background {
    constructor() {
        this.data = {
            clouds: new Clouds(0, 0, VIEW_WIDTH, VIEW_HEIGHT, true, this.createImg(CLOUDS_IMG)),
            sea: new Sea(0, SEA_LEVEL, VIEW_WIDTH, VIEW_HEIGHT - SEA_LEVEL, true, this.createImg(SEA_IMG))
        };
    }

    createImg(src) {
        let img = new Image();
        img.src = src;
        return img;
    }
}

export default Background;