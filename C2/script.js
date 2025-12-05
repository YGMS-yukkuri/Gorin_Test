timer = 7;
setInterval(() => {
    if(timer > 0) {
        document.body.textContent = timer
        timer--
    }
    else {
        document.body.textContent = "Finished!";
    }
}, 1000);