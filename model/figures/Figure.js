/** Superclass for all figures **/
class Figure {
    constructor(x, y, width, height, isDisplay, img) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.isDisplay = isDisplay;
        this.img = img;
    }

    updateLocation(dx, dy) {
        this.x += dx;
        this.y += dy;
    }
}

export default Figure;