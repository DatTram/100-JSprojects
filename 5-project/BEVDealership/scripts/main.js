/* objects */

class Car {
    constructor(brand, model, type, year, price, size, star, url) {
        this.brand = brand;
        this.model = model;
        this.type = type;
        this.year = year;
        this.url = url;
        this.price = price;
        this.star = star;
        this.size = size;

        this.content = "";
        this.logoURL = "";
    }

    setContent(content) {
        this.content = content;
    }

    setLogoURL(logoURL) {
        this.logoURL = logoURL;
    };

    getCar() {
        return {brand: this.brand, model: this.model, type: this.type,
                year: this.year, url: this.url, price: this.price, 
                star: this.star, size: this.size, content: this.content,
                logo: this.logoURL
            }
    }
}

/* cars */
let carArr = [];
let Model3 = new Car("Tesla", "Model 3", "sedan", 2017, "40,000$", 5, 4, "https://cdn.pixabay.com/photo/2020/01/20/20/39/car-4781370_960_720.jpg");
let ModelS = new Car ("Tesla", "Model S", "sedan", 2012, "69,420$", 5, 5, "https://cdn.pixabay.com/photo/2020/07/01/19/16/tesla-5360686_960_720.jpg");
let Id3 = new Car("Volkswagen", "Id.3", "hatchback", 2020, "33,180$", 5, 3, "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/2020_Volkswagen_ID.3_1st_Front.jpg/1920px-2020_Volkswagen_ID.3_1st_Front.jpg");
let Taycan = new Car("Porsche", "Taycan Turbo S", "sedan", 2019, "185,000$", 5, 5, "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Porsche_Taycan_4S_IMG_3526.jpg/1920px-Porsche_Taycan_4S_IMG_3526.jpg");
let Id4 = new Car("Volkswagen", "Id.4", "SUV", 2020, "40,000$", 7, 4, "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/VW_ID.4_1st_%E2%80%93_f_26122020.jpg/1920px-VW_ID.4_1st_%E2%80%93_f_26122020.jpg");
let GTEtron = new Car("Audi", "E-tron GT", "sedan", 2021, "100,000$", 5, 5, "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Audi_e-tron_GT_concept%2C_GIMS_2019%2C_Le_Grand-Saconnex_%28GIMS0763%29.jpg/1280px-Audi_e-tron_GT_concept%2C_GIMS_2019%2C_Le_Grand-Saconnex_%28GIMS0763%29.jpg");
let ModelY = new Car("Tesla", "Model Y", "SUV", 2019, "40,000$", 7, 4, "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/2020_Tesla_Model_Y%2C_front_8.1.20.jpg/1920px-2020_Tesla_Model_Y%2C_front_8.1.20.jpg");
let CyberTruck = new Car("Tesla", "Cybertruck", "truck", 2021, "39,990$", 5, 4, "https://upload.wikimedia.org/wikipedia/commons/0/0c/Tesla_Cybertruck_outside_unveil_modified_by_Smnt.jpg");
let i3 = new Car("BMW", "i3", "hatchback", 2013, "45,445", 5, 2, "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/2018_BMW_i3_facelift_%281%29.jpg/1920px-2018_BMW_i3_facelift_%281%29.jpg");
let Leaf = new Car("Nissan", "Leaf", "hatchback", 2010, "31,620$", 5, 4, "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Nissan_Leaf_2018_%2831874639158%29_%28cropped%29.jpg/1920px-Nissan_Leaf_2018_%2831874639158%29_%28cropped%29.jpg");
let Bolt = new Car("Chevrolet", "Bolt", "hatchback", 2016, "37,495$", 5, 3, "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/2017_Chevrolet_Bolt_EV_Premier_front_6.20.18.jpg/1280px-2017_Chevrolet_Bolt_EV_Premier_front_6.20.18.jpg");
let ModelX = new Car("Tesla", "Model X", "SUV", 2015, "79,990$", 7, 5, "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/2017_Tesla_Model_X_100D_Front.jpg/1920px-2017_Tesla_Model_X_100D_Front.jpg");
/* car types */
const fixedCarTypes = ["hatchback", "sedan", "SUV", "MPV", "truck"]

carArr.push(Model3);
carArr.push(ModelS);
carArr.push(Id3);
carArr.push(Taycan);
carArr.push(Id4);
carArr.push(GTEtron);
carArr.push(ModelY);
carArr.push(CyberTruck);
carArr.push(i3);
carArr.push(Leaf);
carArr.push(Bolt);
carArr.push(ModelX);

const checkObj = (obj) => {
    for (const key in obj) {
        if (obj[key] === 1) {
            return true;
        } 
    }
    return false;
}; 

function logoAdd(item){
    const logos = 
    {"Volkswagen": "data:image/png;base64,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",
    "Tesla": "data:image/png;base64,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",
    "Porsche": "https://upload.wikimedia.org/wikipedia/en/thumb/8/8c/Porsche_logo.svg/1200px-Porsche_logo.svg.png",
    "Unknown": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F9%2F9a%2FText-questionmark.svg%2F1200px-Text-questionmark.svg.png&f=1&nofb=1"}
    
    if (logos.hasOwnProperty(item.brand)) {
        item.setLogoURL(logos[item.brand]);
    } else {
        item.setLogoURL(logos["Unknown"]);
    }
}

/* header */
const home = document.querySelector(".home");
/* navigation */
const search_outer = document.querySelector(".search-outer");
const search_inner = document.querySelector(".search-inner");
const car = document.querySelector(".car");
const selectMenu = document.querySelector(".brands");
const menu = document.querySelector(".menu");
const feature = document.querySelector(".features");
const rating = document.querySelector(".rating");
const cleanRating = document.querySelector(".empty"); 
/* main */
const cards = document.querySelector(".cards");
let cardCount = 0;
/*slider */
const image = document.querySelector(".image");
const imageDescImg = document.querySelector(".test");
const imageDescText = document.querySelector(".test2");
let imagePage = 0;
let imgArr = [];
let automaticSlide = setInterval(right, 8000);
/* active (on or off)*/

/* if a type is on (1), then show types cards */ 
let activeTest = {"hatchback": 0, "sedan": 0, "SUV": 0, "MPV": 0, "truck": 0};
/* if a amount of star is on, then show cars that have more or equal than amount of star */
let activeStars = {"5": 0, "4": 0, "3": 0, "2": 0, "1": 0};

/* home */

home.addEventListener("click", function() {
    window.location.reload();
});

/* search bar */

search_outer.addEventListener("click", function() {
    search_outer.style.display = "none";
    search_inner.style.display = "block";
    search_inner.focus();
})

search_inner.addEventListener("focusout", function() {
    search_inner.style.display = "none";
    search_outer.style.display = "flex";
    search_inner.value = "";
});

/* creating cards */

function createCards(item){
    const carInfo = item.getCar();

    let testCard = document.createElement("div");
    let testOverlay = document.createElement("div");
    let testText = document.createElement("div");
    let testDesc = document.createElement("div");
    let testH3 = document.createElement("h3");
    let testPrice = document.createElement("p");
    let stars = document.createElement("p");
    let hiddenType = document.createElement("p");

    /* outer layer */

    testText.classList.add("text");
    testText.textContent = carInfo.brand;

    testOverlay.classList.add("overlay");
    testOverlay.style.backgroundImage = "url("+carInfo.url+")"

    testCard.classList.add("card");


    testOverlay.appendChild(testText);
    testCard.appendChild(testOverlay);

    /* then content */

    testH3.classList.add("name");
    testH3.textContent = carInfo.model;

    testPrice.classList.add("price");
    testPrice.textContent = "Price: " + carInfo.price;

    stars.textContent = "Rating: "
    for (let i = 0; i < item.star; i++) {
        let star = document.createElement("i");
        star.classList.add("fas");
        star.classList.add("fa-star");

        stars.appendChild(star);
    }

    /* then hidden type */

    hiddenType.textContent = " "+carInfo.type+" ";
    hiddenType.style.display = "none";

    testDesc.appendChild(hiddenType);
    testDesc.appendChild(testH3);
    testDesc.appendChild(testPrice);
    testDesc.appendChild(stars);
    testCard.appendChild(testDesc);
    cards.appendChild(testCard);
    cardCount += 1;
}

/* image slider */

function randomizeFeature() {
    while (imgArr.length != 5) {
        let index = Math.floor((Math.random() * carArr.length));
        if (imgArr.indexOf(carArr[index]) === -1) {
            imgArr.push(carArr[index]);
        } else {
            continue;
        };
    };
};

function right() {
    if (imagePage+1 > imgArr.length-1) {
        /* resets the countdown */
        clearInterval(automaticSlide);
        automaticSlide = setInterval(right, 8000);
        imagePage = 0;
        switchImage();
    } else {
        clearInterval(automaticSlide);
        automaticSlide = setInterval(right, 8000);
        imagePage += 1;
        switchImage();
    }
}

function left() {
    if (imagePage-1 < 0) {
        clearInterval(automaticSlide);
        automaticSlide = setInterval(right, 8000);
        imagePage = imgArr.length-1;
        switchImage();
    } else {
        clearInterval(automaticSlide);
        automaticSlide = setInterval(right, 8000);
        imagePage -= 1;
        switchImage();
    }
}

function switchImage() {
    image.style.backgroundImage = "url("+ imgArr[imagePage].getCar().url +")"
    switchBall();
    switchImageDesc();
}

function switchImageDesc() {
    const car = imgArr[imagePage].getCar();

    let descTitle = document.querySelector(".desc-title");
    let descModel = document.querySelector(".desc-model");
    let descPrice = document.querySelector(".desc-price");
    let descRating = document.querySelector(".desc-rating");
    let descYear = document.querySelector(".desc-year");

    /* adds stars*/
    descRating.textContent = "Rating: " // this declaretion resets the rating
    for (let i = 0; i < car.star; i++) {
        let star = document.createElement("i");
        star.classList.add("fas");
        star.classList.add("fa-star");

        descRating.appendChild(star);
    }

    descYear.textContent = "Year: " + car.year;
    descPrice.textContent = "Price: " + car.price;
    descModel.textContent = "Model: " + car.model;
    descTitle.textContent = car.brand;
    imageDescImg.style.backgroundImage = "url("+ car.logo +")"
}


/* colors ball to black when selected order */
function switchBall() {
    const order = {0: ".one", 1: ".two", 2: ".three", 3: ".four", 4: ".five"};
    const ball = document.querySelector(order[imagePage]);

    /* colors all of the balls to white */
    for (let i = 0; i < 5; i++) {
        const empty = document.querySelector(order[i]);
        empty.style.backgroundColor = "white";
    }
    /* then colors the selected ball to black */
    ball.style.backgroundColor = "black";
}

/* Sorting options */

function typeSort(typeElem) {
    let limit = 0;
    clean();

    for (const key in activeStars) {
        if (activeStars[key] === 1) {
            limit = Number(key);
        }
    }
    /* if its a particular brand then show its types */
    if (menu.value !== "Everything" && typeElem.checked) {
        activeTest[typeElem.value] = 1;
        for (let i = 0; i < carArr.length; i++) {
            if (activeTest[carArr[i].getCar().type] === 1 &&
                carArr[i].getCar().brand === menu.value &&
                limit <= carArr[i].getCar().star) {
                    createCards(carArr[i]);
                }
        }
    } else if (menu.value !== "Everything" && !typeElem.checked) { 
        activeTest[typeElem.value] = 0;
        for (let i = 0; i < carArr.length; i++) {
            if (activeTest[carArr[i].getCar().type] === 1 &&   
                carArr[i].getCar().brand === menu.value &&
                limit <= carArr[i].getCar().star) {
                createCards(carArr[i]);
            } 
        }
        typeSortParticular();
    } 
    /* show it all */
    if (menu.value === "Everything" && typeElem.checked) {
        activeTest[typeElem.value] = 1;
        for (let i = 0; i < carArr.length; i++) {
            if (activeTest[carArr[i].getCar().type] === 1 &&
            limit <= carArr[i].getCar().star) {
                createCards(carArr[i]);
            }
        }
    } else if (menu.value === "Everything" && !typeElem.checked) {
        activeTest[typeElem.value] = 0;
        for (let i = 0; i < carArr.length; i++) {
            if (activeTest[carArr[i].getCar().type] === 1 &&
            limit <= carArr[i].getCar().star) {
                createCards(carArr[i]);
            } 
        }
        typeSortAll();
    }
}

/* if everything is off then show all */
function typeSortAll() {
    const allZero = (currentValue) => {return currentValue === 0};
    let activeArr = [];
    let limit = 0;

    for (const key in activeStars) {
        if (activeStars[key] === 1) {
            limit = Number(key);
        }
    }

    for (const key in activeTest) {
        if (activeTest[key] === 0) {
            activeArr.push(0);
        } else {
            activeArr.push(1);  
        }
    }

    /* if everything is zero then show every card */
    if (activeArr.every(allZero)) {
        for (let i = 0; i < carArr.length; i++) {
            if (limit <= carArr[i].getCar().star) {
                createCards(carArr[i]);
            }
        }
    } else {
        return ;
    }
}

function typeSortParticular() {
    const allZero = (currentValue) => {return currentValue === 0};
    let brandArr = [];
    let activeArr = [];
    let limit = 0;

    for (const key in activeStars) {
        if (activeStars[key] === 1) {
            limit = Number(key);
        }
    }

    for (let i = 0; i < carArr.length; i++) {
        if (menu.value === carArr[i].getCar().brand) {
            brandArr.push(carArr[i]);
        }
    }

    for (const key in activeTest) {
        if (activeTest[key] === 0) {
            activeArr.push(0);
        } else {
            activeArr.push(1);
        }
    } 

    if (activeArr.every(allZero)) {
        for (let i = 0; i < brandArr.length; i++) {
            if (limit <= brandArr[i].getCar().star) {
                createCards(brandArr[i]);
            }
        }
    } else {
        return ;
    }
}


function ratingSort(starElem) {
    cleanRating.style.visibility = "visible";
    clean();

    activeStars["1"] = 0;
    activeStars["2"] = 0;
    activeStars["3"] = 0;
    activeStars["4"] = 0;
    activeStars["5"] = 0;
    if (menu.value === "Everything" && starElem.checked && !checkObj(activeTest)) {
        activeStars[starElem.value] = 1;
        for (let i = 0; i < carArr.length; i++) {
            if (Number(starElem.value) <= carArr[i].getCar().star) {
                createCards(carArr[i]);
            }
        }
    }
    if (menu.value !== "Everything" && starElem.checked && !checkObj(activeTest)) {
        activeStars[starElem.value] = 1;
        for (let i = 0; i < carArr.length; i++) {
            if (Number(starElem.value) <= carArr[i].getCar().star &&
                menu.value === carArr[i].getCar().brand) {
                createCards(carArr[i]);
            }
        }
    }
    if (menu.value === "Everything" && starElem.checked && checkObj(activeTest)) {
        activeStars[starElem.value] = 1;
        for (let i = 0; i < carArr.length; i++) {
            if (Number(starElem.value) <= carArr[i].getCar().star &&
                activeTest[carArr[i].getCar().type] === 1 ) {
                createCards(carArr[i]);
            }
        }
    }
    if (menu.value !== "Everything" && starElem.checked && checkObj(activeTest)) {
        activeStars[starElem.value] = 1;
        for (let i = 0; i < carArr.length; i++) {
            if (Number(starElem.value) <= carArr[i].getCar().star &&
                activeTest[carArr[i].getCar().type] === 1 &&
                menu.value === carArr[i].getCar().brand) {
                createCards(carArr[i]);
            }
        }
    }
}

/* clear radio buttons and shows approved cars */
cleanRating.addEventListener("click", function() {
    const firstBtn = document.querySelector("#five");
    const secondBtn = document.querySelector("#four");
    const thirdBtn = document.querySelector("#three");
    const fourthBtn = document.querySelector("#two");
    const fifthBtn = document.querySelector("#one");

    clean()

    activeStars["1"] = 0;
    activeStars["2"] = 0;
    activeStars["3"] = 0;
    activeStars["4"] = 0;
    activeStars["5"] = 0;
    firstBtn.checked = false;
    secondBtn.checked = false;
    thirdBtn.checked = false;
    fourthBtn.checked = false;
    fifthBtn.checked = false;

    cleanRating.style.visibility = "hidden";

    if (menu.value === "Everything" && !checkObj(activeTest)) {
        carArr.forEach(createCards);
    } 
    if (menu.value !== "Everything" && !checkObj(activeTest)){
        for (let i = 0; i < carArr.length; i++) {
            if (menu.value === carArr[i].getCar().brand) {
                createCards(carArr[i]);
            }
        }
    } 
    if (menu.value === "Everything" && checkObj(activeTest)) {
        for (let i = 0; i < carArr.length; i++) {
            if (activeTest[carArr[i].getCar().type] === 1) {
                createCards(carArr[i]);
            }
        }
    } 
    if (menu.value !== "Everything" && checkObj(activeTest)) {
        for (let i = 0; i < carArr.length; i++) {
            if (activeTest[carArr[i].getCar().type] === 1 && 
                menu.value === carArr[i].getCar().brand) {
                    createCards(carArr[i]);
                }
        }
    }
})

function select() {
    let limit = 0;
    clean();

    /* checks if there is checked rating radio button */
    for (const key in activeStars) {
        if (activeStars[key] === 1) {
            limit = Number(key);
        }
    }
    if (menu.value === "Everything" && checkObj(activeTest)) {
        for (let i = 0; i < carArr.length; i++) {
            if (limit <= carArr[i].getCar().star &&
                activeTest[carArr[i].getCar().type] === 1) {
                createCards(carArr[i]);
            };
        }
    } 

    if (menu.value === "Everything" && !checkObj(activeTest)) {
        for (let i = 0; i < carArr.length; i++) {
            if (limit <= carArr[i].getCar().star) {
                createCards(carArr[i]);
            };
        }
    } 
    if (menu.value !== "Everything" && checkObj(activeTest)) {
        for (let i = 0; i < carArr.length; i++) {
            if (menu.value === carArr[i].getCar().brand &&
                limit <= carArr[i].getCar().star &&
            activeTest[carArr[i].getCar().type] === 1) {
                createCards(carArr[i]);
            };
        }
    } 
    if (menu.value !== "Everything" && !checkObj(activeTest)) {
        for (let i = 0; i < carArr.length; i++) {
            if (menu.value === carArr[i].getCar().brand &&
                limit <= carArr[i].getCar().star) {
                createCards(carArr[i]);
            };
        }
    }
}

function searchCards() {
    let limit = 0;
    clean();

    for (const key in activeStars) {
        if (activeStars[key] === 1) {
            limit = Number(key);
        }
    }

    if (menu.value === "Everything" && checkObj(activeTest)) {
        for (let i = 0; i < carArr.length; i++) {
            let carModel = carArr[i].getCar().model.toLowerCase();
            if (carModel.startsWith(search_inner.value.toLowerCase()) &&
                limit <= carArr[i].getCar().star &&
                activeTest[carArr[i].getCar().type] === 1) {
                createCards(carArr[i]);
            }
        }
    }
    if (menu.value === "Everything" && !checkObj(activeTest)) {
        for (let i = 0; i < carArr.length; i++) {
            let carModel = carArr[i].getCar().model.toLowerCase();
            if (carModel.startsWith(search_inner.value.toLowerCase()) &&
                limit <= carArr[i].getCar().star) {
                createCards(carArr[i]);
            }
        }
    }
    if (menu.value !== "Everything" && checkObj(activeTest)) {
        for (let i = 0; i < carArr.length; i++) {
            let carModel = carArr[i].getCar().model.toLowerCase();
            if (carModel.startsWith(search_inner.value.toLowerCase()) &&
                limit <= carArr[i].getCar().star &&
                menu.value === carArr[i].getCar().brand &&
                activeTest[carArr[i].getCar().type] === 1) {
                createCards(carArr[i]);
            }
        }
    }
    if (menu.value !== "Everything" && !checkObj(activeTest)) {
        for (let i = 0; i < carArr.length; i++) {
            let carModel = carArr[i].getCar().model.toLowerCase();
            if (carModel.startsWith(search_inner.value.toLowerCase()) &&
                limit <= carArr[i].getCar().star &&
                menu.value === carArr[i].getCar().brand) {
                createCards(carArr[i]);
            }
        }
    }
}

function clean() {cards.textContent = "";}

carArr.forEach(logoAdd);
carArr.forEach(createCards);
randomizeFeature();
automaticSlide;
switchImage();
