const canvas = document.querySelector("canvas");
const ctx = canvas.getContext(`2d`);
let x = 0;
let y = 160;
let cw = canvas.width;
let ch = canvas.height;
function draw(){
    ctx.clearRect(0, 0, cw, ch)
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, 2 * Math.PI);
    ctx.fillStyle = "blue"
    ctx.fill()
    if(x < cw) {
        x += 1;
    }
    else {
        x = 0;
    }
    requestAnimationFrame(draw);
}
draw();