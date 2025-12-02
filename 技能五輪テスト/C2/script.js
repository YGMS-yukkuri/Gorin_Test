let text
let time = 7
text = setInterval(()=>{
    if(time>0){
        document.body.textContent=time
        time--
    }
    else{
        clearInterval(text)
        document.body.textContent = "Finished!"
    }
},1000);