var SPEED = 3.5

var score_img = new Image();

class Score {
    constructor(sc_1, sc_2) {
        this.canvas = document.getElementById("score");
        this.ctx_sc = this.canvas.getContext("2d");
        this.score_1 = sc_1;
        this.score_2 = sc_2;
        this.src_1 = '';
        this.src_2 = '';
        this.update(sc_1, sc_2);
    }


    update(sc_1, sc_2) {
        this.score_1 = sc_1;
        this.score_2 = sc_2;
        
        if (this.score_1 === 0) {
            this.src_1 = 'img/zero.png';
        } else if (this.score_1 === 1) {
            this.src_1 = 'img/one.png';
        } else if (this.score_1 === 2) {
            this.src_1 = 'img/two.png';
        } else if (this.score_1 === 3) {
            this.src_1 = 'img/three.png';
        } else if (this.score_1 === 4) {
            this.src_1 = 'img/four.png';
        } else if (this.score_1 === 5) {
            this.src_1 = 'img/five.png';
        } else if (this.score_1 === 6) {
            this.src_1 = 'img/six.png';
        } else if (this.score_1 === 7) {
            this.src_1 = 'img/seven.png';
        } else if (this.score_1 === 8) {
            this.src_1 = 'img/eight.png';
        } else if (this.score_1 === 9) {
            this.src_1 = 'img/nine.png';
        } else {
            this.src_1 = 'img/clear.png';
        }

        if (this.score_2 === 0) {
            this.src_2 = 'img/zero.png';
        } else if (this.score_2 === 1) {
            this.src_2 = 'img/one.png';
        } else if (this.score_2 === 2) {
            this.src_2 = 'img/two.png';
        } else if (this.score_2 === 3) {
            this.src_2 = 'img/three.png';
        } else if (this.score_2 === 4) {
            this.src_2 = 'img/four.png';
        } else if (this.score_2 === 5) {
            this.src_2 = 'img/five.png';
        } else if (this.score_2 === 6) {
            this.src_2 = 'img/six.png';
        } else if (this.score_2 === 7) {
            this.src_2 = 'img/seven.png';
        } else if (this.score_2 === 8) {
            this.src_2 = 'img/eight.png';
        } else if (this.score_2 === 9) {
            this.src_2 = 'img/nine.png';
        } else {
            this.src_2 = 'img/clear.png';
        }
    }

    render(ctx) {
        score_img.src = 'img/clear.png';
        this.ctx_sc.drawImage(score_img, 0, 0);
        score_img.src = this.src_1;
        this.ctx_sc.drawImage(score_img, 0, 0);
        var img_data = this.ctx_sc.getImageData(0, 0, this.canvas.width, this.canvas.height);
        ctx.putImageData(img_data, 160, 0);
        score_img.src = 'img/clear.png';
        this.ctx_sc.drawImage(score_img, 0, 0);
        score_img.src = this.src_2;
        this.ctx_sc.drawImage(score_img, 0, 0);
        img_data = this.ctx_sc.getImageData(0, 0, this.canvas.width, this.canvas.height);
        ctx.putImageData(img_data, 480, 0);
    }
}

export { Score };