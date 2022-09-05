import { isKeyPressed } from "./input.js";

var SPEED = 7.5

var paddle = new Image();
paddle.src = 'img/paddle.png';

class Paddle {
    constructor(x, y, key_up, key_down) {
        var canvas = document.getElementById("paddle");
        var ctx = canvas.getContext("2d");
        ctx.drawImage(paddle, 0, 0);
        this.x = x;
        this.y = y;
        this.width = 10;
        this.height = 100;
        this.up = key_up;
        this.down = key_down;
        this.score = 0;
        this.img_data = ctx.getImageData(0, 0, canvas.width, canvas.height);;
    }

    get_x() {
        return this.x;
    }
    get_y() {
        return this.y;
    }
    get_width() {
        return this.width;
    }
    get_height() {
        return this.height;
    }
    get_score() {
        return this.score;
    }

    update() {;
        if (isKeyPressed(this.up) && this.get_y() > 0.0)
            this.y -= SPEED;
        if (isKeyPressed(this.down) && this.get_y() < 380.0)
            this.y += SPEED;
    }

    render(ctx) {
        ctx.putImageData(this.img_data, this.x, this.y);
    }
}

export { Paddle };