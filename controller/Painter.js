/** Holds a canvas context and responsible for drawing on it **/
class Painter {
    constructor(context) {
        this.context = context;
    }

    draw(figure) {
        if (figure.isDisplay) {
            this.context.drawImage(figure.img, figure.x, figure.y, figure.width, figure.height);
        }

        if (figure.loopOverArray) {
            figure.loopOverArray((figure) => this.draw(figure));
        }
    }
}

export default Painter;