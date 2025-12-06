const text = document.getElementById("text");
let light = true;
function swich() {
    if (light) {
        light = false;
        text.textContent = "ダークモードテスト";
        document.body.style.backgroundColor = "#000";
        text.style.color = "#FFF"
    }
    else {
        light = true;
        text.textContent = "ライトモードテスト";
        document.body.style.backgroundColor = "#FFF";
        text.style.color = "#000"
    }
}