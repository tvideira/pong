var background = new Image();
background.src = 'img/background.png';

class Background {
    constructor() {
        var canvas = document.getElementById("background");
        var ctx = canvas.getContext("2d");
        ctx.drawImage(background, 0, 0);
        this.img_data = ctx.getImageData(0, 0, canvas.width, canvas.height);
    }
    render(ctx) {
        ctx.putImageData(this.img_data, 0, 0);
    }
}

export { Background }