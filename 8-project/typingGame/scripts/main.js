const typeText = document.querySelector(".text");
const doneText = document.querySelector(".done");
const errorText = document.querySelector(".error");
const newBtn = document.querySelector(".new");
const wpmText = document.querySelector(".wpm");
let startTime = "";
let stopTime = "";
let characters = 1;
let current = "";
let error = 0;
let count = 0;

const fetchQuote = async () => {
    const response = await fetch(
        "https://api.quotable.io/random?maxLength=175"
    );

    const json = await response.json();

    clear();
    displayText(json);
    startTime = Date.now();
}

window.onload = () => {
    window.onkeypress = (key) => checkKey(key);
}

document.addEventListener("keydown", (key) => {
    if (key.key === "Escape") {
        resetText(current);
    }
});

const checkKey = (key) => {
    let letter = String.fromCharCode(key.keyCode);

    if (key.keyCode === 32) {
        letter = "␣";
    }

    if (typeText.textContent.startsWith(letter)) {
        
        test = document.createTextNode(letter);
        test2 = document.createElement("span");

        typeText.textContent = typeText.textContent.substring(1);
        if (typeText.textContent === "") {
            stopTime = Date.now();
            doneText.textContent = "";
            fetchQuote();
            displayStat();
            return ;
        }

        if (count >= 1) {
            test2.style.color = "red";

            count = 0;
            error += 1;
            characters += 1;

            addSpan();
        } else {
            test2.style.color = "green";
            characters += 1;

            addSpan();
        }

        test2.appendChild(test);
        doneText.appendChild(test2);
    } else {
        count += 1;
    }
}

const displayText = (json) => {
    const span = document.createElement("span");
    let string = json.content.split(" ").join("␣");
    let author = json.author.split(" ").join("␣");
    string += "␣" + author;

    current = string;

    span.textContent = string[0];
    span.setAttribute("class", "first");
    let rest = string.substring(1);
    let text = document.createTextNode(rest);
    typeText.appendChild(span);
    typeText.appendChild(text);


}

// Pressing escape resets the text with its statistics

const resetText = (string) => {
    clear();

    const span = document.createElement("span");

    span.textContent = string[0];
    span.setAttribute("class", "first");
    let rest = string.substring(1);
    let text = document.createTextNode(rest);
    typeText.appendChild(span);
    typeText.appendChild(text);

    startTime = Date.now();
}

const addSpan = () => {
    const span = document.createElement("span");
    span.textContent = typeText.textContent[0];

    span.setAttribute("class", "first");
    typeText.textContent = typeText.textContent.substring(1);

    typeText.prepend(span);
}

// Makes the flickering first letter

const blackSpan = () => {
    const span = document.querySelector(".first");
    span.style.backgroundColor = "black";
    span.style.color = "white";
    setTimeout(whiteSpan, 250);
}

const whiteSpan = () => {
    const span = document.querySelector(".first");
    span.style.backgroundColor = "white";
    span.style.color = "black"
    setTimeout(blackSpan, 250);
}

const displayStat = () => {
    errorText.textContent = "Error: " + error;
    wpmText.textContent = "WPM: " + calculateWPM();

    error = 0;
}

// calculates word per minute

const calculateWPM = () => {
    console.log(stopTime-startTime);

    const WPM = Math.floor((characters / 5) / (((stopTime-startTime) / 1000 ) / 60));

    console.log(WPM);

    return WPM;
}

newBtn.addEventListener("click", () => {
    clear();
    fetchQuote();
});

const clear = () => {
    typeText.textContent = "";
    doneText.textContent = "";
    error = 0;
    count = 0;
    characters = 0;
    startTime = "";
}


fetchQuote();
setTimeout(whiteSpan, 250);
