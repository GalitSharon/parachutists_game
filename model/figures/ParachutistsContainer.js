import Parachutist from "./Parachutist.js";
import {PARACHUT_HEIGHT, PARACHUT_WIDTH, PARACHUTS_NUM, SPACE, VIEW_WIDTH, PARACHUTIST_IMG} from "../../consts.js";

/** Holds all parachutists data and responsible for updating & creating parachutists **/
class ParachutistsContainer {
    constructor() {
        this.parachsArray = [];
        this.img = new Image();
        this.img.src = PARACHUTIST_IMG;

        this.createParachs();
    }

    //Creates random number of parachutists, each loop of the plane.
    //Each parachutist get random x location
    createParachs() {
        let numOfParachs = Math.floor(Math.random() * PARACHUTS_NUM) + 1;
        for (let i = 0; i < numOfParachs; ++i) {
            let xLocation = Math.floor((Math.random() * VIEW_WIDTH));
            this.parachsArray
                .push(new Parachutist(xLocation, SPACE, PARACHUT_WIDTH, PARACHUT_HEIGHT, false, this.img))
        }
    }

    updateLocation() {
        this.parachsArray.forEach((parach, i) => {
            if (parach.isDisplay === true) {
                parach.updateLocation();
            }
        });
    }

    loopOverArray(method) {
        this.parachsArray.forEach(parach => method(parach))
    }
}

export default ParachutistsContainer;
