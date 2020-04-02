/** Contains Canvas(displayer) **/
class View {
    constructor() {
        this.displayer = document.getElementById('canvas');
        this.displayer.width = window.innerWidth;
        this.displayer.height = window.innerHeight;
        this.context = this.displayer.getContext('2d');
    }
}

export default View;