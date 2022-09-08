var SPEED = 3.5

var zero_img = new Image(); zero_img.src = 'img/zero.png';
var one_img = new Image(); one_img.src = 'img/one.png';
var two_img = new Image(); two_img.src = 'img/two.png';
var three_img = new Image(); three_img.src = 'img/three.png';
var four_img = new Image(); four_img.src = 'img/four.png';
var five_img = new Image(); five_img.src = 'img/five.png';
var six_img = new Image(); six_img.src = 'img/six.png';
var seven_img = new Image(); seven_img.src = 'img/seven.png';
var eight_img = new Image(); eight_img.src = 'img/eight.png';
var nine_img = new Image(); nine_img.src = 'img/nine.png';
var clear_img = new Image(); clear_img.src = 'img/clear.png';

class Score {
    constructor(sc_1, sc_2) {
        var canvas_0 = document.getElementById("zero"); var ctx_0 = canvas_0.getContext("2d"); ctx_0.drawImage(zero_img, 0, 0); this.zero_data = ctx_0.getImageData(0, 0, 70, 70);
        var canvas_1 = document.getElementById("one"); var ctx_1 = canvas_1.getContext("2d"); ctx_1.drawImage(one_img, 0, 0); this.one_data = ctx_1.getImageData(0, 0, 70, 70);
        var canvas_2 = document.getElementById("two"); var ctx_2 = canvas_2.getContext("2d"); ctx_2.drawImage(two_img, 0, 0); this.two_data = ctx_2.getImageData(0, 0, 70, 70);
        var canvas_3 = document.getElementById("three"); var ctx_3 = canvas_3.getContext("2d"); ctx_3.drawImage(three_img, 0, 0); this.three_data = ctx_3.getImageData(0, 0, 70, 70);
        var canvas_4 = document.getElementById("four"); var ctx_4 = canvas_4.getContext("2d"); ctx_4.drawImage(four_img, 0, 0); this.four_data = ctx_4.getImageData(0, 0, 70, 70);
        var canvas_5 = document.getElementById("five"); var ctx_5 = canvas_5.getContext("2d"); ctx_5.drawImage(five_img, 0, 0); this.five_data = ctx_5.getImageData(0, 0, 70, 70);
        var canvas_6 = document.getElementById("six"); var ctx_6 = canvas_6.getContext("2d"); ctx_6.drawImage(six_img, 0, 0); this.six_data = ctx_6.getImageData(0, 0, 70, 70);
        var canvas_7 = document.getElementById("seven"); var ctx_7 = canvas_7.getContext("2d"); ctx_7.drawImage(seven_img, 0, 0); this.seven_data = ctx_7.getImageData(0, 0, 70, 70);
        var canvas_8 = document.getElementById("eight"); var ctx_8 = canvas_8.getContext("2d"); ctx_8.drawImage(eight_img, 0, 0); this.eight_data = ctx_8.getImageData(0, 0, 70, 70);
        var canvas_9 = document.getElementById("nine"); var ctx_9 = canvas_9.getContext("2d"); ctx_9.drawImage(nine_img, 0, 0); this.nine_data = ctx_9.getImageData(0, 0, 70, 70);
        var canvas_cl = document.getElementById("clear"); var ctx_cl = canvas_cl.getContext("2d"); ctx_cl.drawImage(clear_img, 0, 0); this.clear_data = ctx_cl.getImageData(0, 0, 70, 70);
        
        this.score_1 = sc_1;
        this.score_2 = sc_2;
    }


    update(sc_1, sc_2) {
        this.score_1 = sc_1;
        this.score_2 = sc_2;
    }

    render(ctx) {
        if (this.score_1 === 0) {
            ctx.putImageData(this.zero_data, 160, 0);
        } else if (this.score_1 === 1) {
            ctx.putImageData(this.one_data, 160, 0);
        } else if (this.score_1 === 2) {
            ctx.putImageData(this.two_data, 160, 0);
        } else if (this.score_1 === 3) {
            ctx.putImageData(this.three_data, 160, 0);
        } else if (this.score_1 === 4) {
            ctx.putImageData(this.four_data, 160, 0);
        } else if (this.score_1 === 5) {
            ctx.putImageData(this.five_data, 160, 0);
        } else if (this.score_1 === 6) {
            ctx.putImageData(this.six_data, 160, 0);
        } else if (this.score_1 === 7) {
            ctx.putImageData(this.seven_data, 160, 0);
        } else if (this.score_1 === 8) {
            ctx.putImageData(this.eight_data, 160, 0);
        } else if (this.score_1 === 9) {
            ctx.putImageData(this.nine_data, 160, 0);
        } else {
            ctx.putImageData(this.clear_data, 160, 0);
        }

        if (this.score_2 === 0) {
            ctx.putImageData(this.zero_data, 480, 0);
        } else if (this.score_2 === 1) {
            ctx.putImageData(this.one_data, 480, 0);
        } else if (this.score_2 === 2) {
            ctx.putImageData(this.two_data, 480, 0);
        } else if (this.score_2 === 3) {
            ctx.putImageData(this.three_data, 480, 0);
        } else if (this.score_2 === 4) {
            ctx.putImageData(this.four_data, 480, 0);
        } else if (this.score_2 === 5) {
            ctx.putImageData(this.five_data, 480, 0);
        } else if (this.score_2 === 6) {
            ctx.putImageData(this.six_data, 480, 0);
        } else if (this.score_2 === 7) {
            ctx.putImageData(this.seven_data, 480, 0);
        } else if (this.score_2 === 8) {
            ctx.putImageData(this.eight_data, 480, 0);
        } else if (this.score_2 === 9) {
            ctx.putImageData(this.nine_data, 480, 0);
        } else {
            ctx.putImageData(this.clear_data, 480, 0);
        }
    }
}

export { Score };