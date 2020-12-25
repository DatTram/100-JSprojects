function changeColor() {
    const first = (Math.floor(Math.random() * 255)+1);
    const second = (Math.floor(Math.random() * 255)+1);
    const third  = (Math.floor(Math.random() * 255)+1);
    const color = `rgb(${first}, ${second}, ${third})`;

    document.querySelector("body").style.backgroundColor = color;
}   


