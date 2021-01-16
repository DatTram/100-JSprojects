class Card {
    constructor(number, url) {
        this.number = number;
        this.url = url;
    }
}

class Pack {
    constructor() {
        this.pack = [];
    }

    pushCard(card) {
        this.pack.push(card);    
    }

    pushCardCheck(card) {
        // check if there is already a same reference, if false then add card 
        if (!this.pack.includes(card)) {
            this.pack.push(card);
        }
    }

    resetPack() {
        this.pack = [];
    }

    pickCard() {
        const randomInt = () => {
            return Math.floor(Math.random() * (this.pack.length));
        }

        return this.pack[randomInt()];
    }

    get getPack() {
        return this.pack;
    }
}
let cardPack = new Pack();
let randomizedPack = new Pack();
const menu = document.querySelector(".pairs");
const defaultURL = "url(https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Flag_of_the_United_Nations.svg/1280px-Flag_of_the_United_Nations.svg.png)";
let twotimes = 0;
let compare = [];
let finish = [];

const clean = () => {
    document.querySelector(".container").textContent = "";
}

// Setting up cards
// fetchAlphaCode --> setCards --> randomizeCards --> duplicateCards --> displayCards --> hideCards;

const fetchAlphaCode = async () => {
    randomizedPack.resetPack();
    cardPack.resetPack();
    const response = await fetch(
    "https://restcountries.eu/rest/v2/all");

    const json = await response.json();

    setCards(json);
}

const setCards = (response) => {
    for (let i = 0; i < response.length; i++) {
        card = new Card(i+1, "url(https://www.countryflags.io/" + response[i].alpha2Code.toLowerCase() + "/flat/64.png)");

        cardPack.pushCard(card);
    }   
    randomizeCards();
}

const randomizeCards = () => {
    while (randomizedPack.getPack.length < menu.value) {
        randomizedPack.pushCardCheck(cardPack.pickCard());
    }
    duplicateCards();
}

const duplicateCards = () => {
    clean();

    const pack = randomizedPack.getPack;
    
    console.log(pack);
    let cards = [];
    for (let i = 0; i < pack.length; i++) {
        const card = document.createElement("div");
        const card2 = document.createElement("div");

        card.setAttribute("class", "card");
        card2.setAttribute("class", "card");

        // weird behaviour, need to use automated testing tools in future
        try {
            card.style.backgroundImage = pack[i].url;
            card2.style.backgroundImage = pack[i].url;
        }
        catch (e) {
            console.log(e);
            console.log(pack[i].number);
        }

        try {
            // ps: just found out that div doesn't have "value" attribute
            card.setAttribute("value", pack[i].number + " " + pack[i].url);
            card2.setAttribute("value", pack[i].number + " " + pack[i].url);
        }
        catch (e) {
            console.log(e);
            console.log(pack[i].number);
        }

        card.setAttribute("onclick", "chooseCards(this)")
        card2.setAttribute("onclick", "chooseCards(this)");

        cards.push(card);
        cards.push(card2);
    }

    displayCards(cards);
}

const displayCards = (response) => {
    const container = document.querySelector(".container");

    response = shuffle(response);
    
    for (let i = 0; i < response.length; i++) {
        container.appendChild(response[i]);
    }
    // show cards for five seconds, then hide
    setTimeout(hideCards, 5000);
}

const hideCards = () => {
    cards = document.querySelectorAll(".card");
    for (let i = 0; i < cards.length; i++) {
        cards[i].style.backgroundImage = defaultURL;
    }
    compare = [];
    finish = [];
}
//                                                       when compare arr has two item
// show cards and compares by their values | chooseCards ------------------------------> compareCards

const chooseCards = async (card) => {
    if (compare.length === 2 || finish.includes(card)) {
        return ; 
    }

    const url = card.getAttribute("value").split(" ")[1];
    card.style.backgroundImage = url;
    compare.push(card);

    if (compare.length >= 2) {
        setTimeout(compareCards, 500);
    }
}

const compareCards = () => {
    const number = compare[0].getAttribute("value").split(" ")[0];
    const number2 = compare[1].getAttribute("value").split(" ")[0];
    if (number === number2) {
        finish.push(compare[0]);
        finish.push(compare[1]);
        compare = [];
        if ((finish.length / 2) === Number(menu.value)) {
            console.log("yes");
        }
        return ;
    } else {
        compare[0].style.backgroundImage = defaultURL;
        compare[1].style.backgroundImage = defaultURL;
        compare = [];
    }
}

const generateOptions = () => {
    for (let i = 10; i <= 25; i++) {
        const option = document.createElement("option");
        option.textContent = i; 
        option.setAttribute("value", String(i));

        menu.appendChild(option);
    }
}

// fisher and yates shuffle algorithm 
const shuffle = (arr) => {
    for (let i = arr.length-1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

generateOptions();
