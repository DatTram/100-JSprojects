class Image {
    constructor(url) {
        this.url = url;
    }

    get image() {
        return this.url;   
    }
}

let imgArray = [];
let times = 0;

const frame = document.querySelector(".window");
const right = document.querySelector(".arrow-right");
const left = document.querySelector(".arrow-left");
const addBtn = document.querySelector("button");

right.addEventListener("click", function() {
    /* checks if next img is available */
    if (times+1 > imgArray.length-1) {
        right.style.backgroundColor = "red";
    } else {
        right.style.backgroundColor = "lightblue";
        left.style.backgroundColor = "lightblue";
        times += 1;
        frame.style.backgroundImage = "url("+ imgArray[times].image +")";
    }
})

left.addEventListener("click", function() {
    /* checks if previous img is available */
    if (times-1 < 0) {
        left.style.backgroundColor = "red";
    } else {
        left.style.backgroundColor = "lightblue";
        right.style.backgroundColor = "lightblue";
        times -= 1;
        frame.style.backgroundImage = "url("+ imgArray[times].image +")";
    }
})

function addImg() {
    const link = document.querySelector("#add").value;
    if (link === "") {
        return ;
    }

    let newImg = new Image(link);

    imgArray.unshift(newImg);
    frame.style.backgroundImage = "url("+ imgArray[0].image +")";
}