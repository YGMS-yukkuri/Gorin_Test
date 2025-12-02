const square =document.getElementById("square")
document.addEventListener("mousemove",(e)=>{
    const x = e.clientX;
    const y = e.clientY;
    square.style.left=`${x-25}px`
    square.style.top=`${y-25}px`
})