for (let i = 1; i <= 100; i++) {
    let div = document.createElement("div");
    let text
    if (i % 15 == 0) {
        console.log("FizzBuzz");
        text = "FizzBuzz";
    }
    else if (i % 3 == 0) {
        console.log("Fizz");
        text = "Fizz";
    }
    else if (i % 5 == 0) {
        console.log("Buzz");
        text = "Buzz";
    }
    else {
        console.log(i);
        text = i;
    }
    div.textContent = text;
    document.body.appendChild(div);
};