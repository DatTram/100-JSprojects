const hexcode = ["0","1","2","3","4",
                 "5","6","7","8","9",
                 "a","b","c", "d", "e","f"];

function changeColor() {
    let newCode = "#";
    for (let i = 0; i <= 5; i++) {
        newCode += hexcode[Math.floor(Math.random()*hexcode.length)];
    }

    document.querySelector("body").style.backgroundColor = newCode;
    document.querySelector("h1").textContent = `HEX COLOR: ${newCode}`
}

changeColor();
