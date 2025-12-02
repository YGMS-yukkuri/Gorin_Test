const btn = document.getElementById("btn")
const text = document.getElementById("text")
btn.addEventListener("click",()=>{
    if(text.textContent=="ライトモードテスト"){
        document.body.style.background="#000"
        document.body.style.color="#FFF"
        text.textContent="ナイトモードテスト"
    }
    else if(text.textContent=="ナイトモードテスト"){
        document.body.style.background="#FFF"
        document.body.style.color="#000"
        text.textContent="ライトモードテスト"
    }
})