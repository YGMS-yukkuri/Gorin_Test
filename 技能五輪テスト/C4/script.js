const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")
let x=0;
const draw = ()=>{
    ctx.fillStyle="red"
    ctx.fillRect(0,0,400,320)
    ctx.beginPath()
    ctx.fillStyle="white";
    ctx.arc(x,160,5,0,360)
    ctx.fill()
    ctx.closePath()
    x+=2
    requestAnimationFrame(draw)
}
draw()