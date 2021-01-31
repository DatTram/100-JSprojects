class Card {
    constructor(title) {
        this.title = title;
        this.content = "";
        this.value = 0; // Marks the card with an uniquer number
    }

    set setContent(content) {
        this.content = content;
    }

    get getContent() {
        return this.content;
    }
}
const modal_add = document.querySelector(".modal-add");
const modal_title_add = document.querySelector(".modal-input-title-add");
const modal_text_add = document.querySelector(".modal-text-add");
const modal_create_add = document.querySelector(".modal-button-add");

const add_flashcard = document.querySelector(".add");
const warning = document.querySelector(".warning");

let count = 0;
let cardCollection = [];
let cards_in_use = [];

const activateAdd = () => {
    const modal_inner_add = document.querySelector(".modal-inner-add");
    modal_inner_add.classList.replace("inactive", "active");
}

add_flashcard.addEventListener("click", () => {
    modal_add.style.visibility = "visible";

    setTimeout(activateAdd, 100);
});

modal_create_add.addEventListener("click", () => {
    const modal_inner_add = document.querySelector(".modal-inner-add");
    let title = modal_title_add.value;
    let content = modal_text_add.value;
    if (checkInput(title) || checkInput(content)) {
        if (checkInput(title) && checkInput(content)) {
            warning.textContent = "Fill title and textfield"
            danger();
        } else if (checkInput(title)) {
            warning.textContent = "Fill title"
            danger();
        } else {
            warning.textContent = "Fill textfield";
            danger();
        }
    } else {
        createCard(title, content);

        modal_title_add.value = "";
        modal_text_add.value = "";
        warning.style.visibility = "hidden";
        modal_add.style.visibility = "hidden"
        modal_create_add.classList.remove("danger");
        modal_inner_add.classList.replace("active", "inactive");
    }
});

const createCard = (title, content) => {
    let newCard = new Card(title);
    newCard.setContent = content;
    newCard.value = count;  // enumerates
    count += 1;
    cardCollection.push(newCard);

    check_card_in_use();
    generateCard();
};

const danger = () => {
    modal_create_add.classList.add("danger");
    warning.style.visibility = "visible";
}

// checks for no spacing 
const checkInput = (input) => {
    if (input === "") {
        return true;
    }
    const regexp = /\S+/;
    return !regexp.test(input);
}

add_delete_flashcard();