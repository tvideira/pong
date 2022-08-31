var SPEED = 3.5

var ball = new Image();
ball.src = 'img/ball.png';

var random = function (min, max) {
    return (min + (Math.random() * (max - min)));
}

var randomChoice = function () {
    return arguments[Math.floor(random(0, arguments.length))];
}

class Ball {
    constructor() {
        var canvas = document.getElementById("ball");
        var ctx = canvas.getContext("2d");
        ctx.drawImage(ball, 0, 0);
        this.size = 13
        this.x = random(150, 390);
        this.y = random(100, 380);
        this.dx = (this.x < 320) ? SPEED : -SPEED;
        this.dy = random(-SPEED, SPEED);
        this.img_data = ctx.getImageData(0, 0, canvas.width, canvas.height);;
    }

    get_size() {
        return this.size;
    }
    get_x() {
        return this.x;
    }
    get_y() {
        return this.y;
    }
    get_dx() {
        return this.dx;
    }
    get_dy() {
        return this.dy;
    }

    invert_dy() {
        this.dy *= -1;
    }

    invert_dx() {
        this.dx *= -1;
    }

    new_trajectory(py, left) {
        var interY = py + 50 - this.y;
        var normalInterY = (interY / (100 / 2));
        var bounceAngle = normalInterY * 1.309; // 1.309rad  = 75deg
        //this.dx = SPEED * Math.cos(bounceAngle);
        this.dy = SPEED * -Math.sin(bounceAngle);

        this.invert_dx();
    }

    update() {
        this.x += this.dx;
        this.y += this.dy;
    }

    render(ctx) {
        ctx.putImageData(this.img_data, this.x, this.y);
    }
}

export { Ball };