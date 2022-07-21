import { Background } from "./background.js";
import { Paddle } from "./paddle.js";
import { Ball } from "./ball.js";

class Pong {
    constructor() {
        this.canvas = document.getElementById("pong");
        this.ctx = this.canvas.getContext("2d");
        this.background = new Background();
        this.ball = new Ball();
        this.player1 = new Paddle(10.0, 320.0, "z", "s");
        this.player2 = new Paddle(620.0, 75.0, "ArrowUp", "ArrowDown");
        this.requestID = undefined;
    }
    
    collision_update() {
        var player1_edge = this.player1.get_x() + this.player1.get_width(); //right edge
        var player1_top = this.player1.get_y();
        var player1_bottom = player1_top + this.player1.get_height();
        var player2_edge = this.player2.get_x(); //left edge
        var player2_top = this.player2.get_y();
        var player2_bottom = player2_top + this.player2.get_height();
        
        if (this.ball.get_x() < player1_edge || this.ball.get_x() > player2_edge) { // ENDING THE POINT
            if (this.ball.get_x() < player1_edge) {
                console.log("Player 2 gets the point");
            } else {
                console.log("Player 1 gets the point");
            }
            var oldball = this.ball;
            this.ball = new Ball();
            oldball = null;
        }

        var next_ball_x = this.ball.get_x() + this.ball.get_dx()
        var next_ball_y = this.ball.get_y() + this.ball.get_dy()
        if (next_ball_y < 0 || next_ball_y + this.ball.get_size() > 480) // WALLS COLLISION
            this.ball.invert_dy();
        if (next_ball_x <= player1_edge && (next_ball_y >= player1_top && next_ball_y <= player1_bottom))
            this.ball.invert_dx();
        if (next_ball_x + this.ball.get_size() >= player2_edge && (next_ball_y >= player2_top && next_ball_y <= player2_bottom))
            this.ball.invert_dx();        
    }

    update() {
        this.player1.update();
        this.player2.update();
        this.collision_update();
        this.ball.update()
    }

    render() {
        this.background.render(this.ctx);
        this.ball.render(this.ctx);
        this.player1.render(this.ctx);
        this.player2.render(this.ctx);
    }

    execFrame() {
        this.update();
        this.render();
    }

    start() {
        this.execFrame();
        this.requestID = requestAnimationFrame(this.start.bind(this));
    }

}

export { Pong };